/*
 * arc42 site search.
 *
 * Replaces Simple-Jekyll-Search, whose matcher was a raw `field.indexOf(term)`
 * substring test with no word boundaries. That made "c4" match every page
 * mentioning arc42 ("ar-C4-2"), and it shipped no ranking at all -- its default
 * sort returns 0, so results came back in index order.
 *
 * Two rules here:
 *   1. A term matches only at the start of a word, so "c4" no longer hits
 *      "arc42" while "archi" still hits "architecture" (prefix typing works).
 *   2. Results are scored -- title hits outrank URL hits outrank body hits --
 *      so the closest page comes first instead of whichever Jekyll emitted first.
 *
 * Reads the same /search.json the old bundle used; no dependencies.
 */
(function () {
  'use strict';

  var INDEX_URL = '/search.json';
  var LIMIT = 10;

  var input = document.getElementById('search-input');
  var results = document.getElementById('results-container');
  if (!input || !results) return;

  var docs = [];

  /*
   * Word-start matcher. Deliberately not a (?<!...) lookbehind: Safari only
   * gained those in 16.4, and this has to work in older mobile browsers.
   */
  function termRegExp(term) {
    var escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[^a-z0-9])' + escaped, 'g');
  }

  function count(haystack, term) {
    var matches = haystack.match(termRegExp(term));
    return matches ? matches.length : 0;
  }

  /* Every term must appear somewhere in the document (AND), else score 0. */
  function score(doc, terms) {
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var inTitle = count(doc._title, terms[i]);
      var inUrl = count(doc._url, terms[i]);
      var inBody = count(doc._content, terms[i]);
      if (!inTitle && !inUrl && !inBody) return 0;
      /* Body hits are capped: a long page should not outrank a direct title hit. */
      total += inTitle * 10 + inUrl * 4 + Math.min(inBody, 5);
    }
    return total;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function search(query) {
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var scored = [];
    for (var i = 0; i < docs.length; i++) {
      var value = score(docs[i], terms);
      if (value > 0) scored.push({ doc: docs[i], score: value });
    }
    scored.sort(function (a, b) {
      /* Ties broken by title so the order is stable between builds. */
      return b.score - a.score || a.doc.title.localeCompare(b.doc.title);
    });
    return scored.slice(0, LIMIT);
  }

  function render(query) {
    if (!query.trim()) {
      results.innerHTML = '';
      return;
    }
    var hits = search(query);
    if (!hits.length) {
      results.innerHTML = '<li>No results found</li>';
      return;
    }
    results.innerHTML = hits.map(function (hit) {
      return '<li><a href="' + escapeHtml(hit.doc.url) + '">' +
        escapeHtml(hit.doc.title) + '</a></li>';
    }).join('');
  }

  input.addEventListener('input', function () {
    if (docs.length) render(input.value);
  });

  fetch(INDEX_URL)
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    })
    .then(function (data) {
      docs = data.map(function (doc) {
        /* Lower-cased once at load; the matcher runs per keystroke. */
        return {
          title: doc.title,
          url: doc.url,
          _title: (doc.title || '').toLowerCase(),
          _url: (doc.url || '').toLowerCase(),
          _content: (doc.content || '').toLowerCase()
        };
      });
      /* Anything typed while the index was loading still gets searched. */
      if (input.value) render(input.value);
    })
    .catch(function (error) {
      results.innerHTML = '<li>Search is unavailable right now.</li>';
      if (window.console) window.console.error('[arc42-search] index failed to load:', error);
    });
})();
