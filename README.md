# arc42.org Website

> currently available on [arc42.org](https://www.arc42.org)

Site is currently beeing built and served by [Netlify](https://netlify.com)


### How does it work?

* home.md is the homepage, it's mapped (via permalink) to "/".
* With the arc42.org hosting provider we configured a custom DNS CNAME entry to point to Netlify.


### How does the search page work?
The search uses the [Simple-Jekyll-Search Javascript Function](https://github.com/christian-fei/Simple-Jekyll-Search),
Copyright 2015-2020, Christian Fei, licensed under the MIT License.  
This function is available in the [search-script.js file](search-script.js).  
In the [search.json file](search.json), all content we want to include within the search is converted into 
key-value pairs which can then be easily read by the search script.  
In [search.html](_pages/search.html), we create the page that shows the search box and results, using the 
script and the json, and with that, the search is ready. 

## Credits

##### Michael Rose, creator of the Minimal-Mistakes Jekyll Theme

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>

#### Icons + Images:

* Free images can be found at [Unsplash](https://unsplash.com/)
* I bought several icons from [IconFinder](https://www.iconfinder.com?ref=gernotstarke), a great source for professional-grade icons. Recommended!
* I generated the various favicon files with [RealFavIconGenerator](https://realfavicongenerator.net/).


---

## Licenses


### arc42 Template
The arc42 template is licensed under a [CreativeCommons Sharealike International 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:

* **Share** — copy and redistribute the template in any medium or format
* **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.



### [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)


##### The MIT License (MIT)

Copyright (c) 2016ff Michael Rose

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
