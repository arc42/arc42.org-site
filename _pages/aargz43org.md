---
title: "Testing Registration!"
layout: single
permalink: /aargz42org
header:
  overlay_image: /images/splash/unsplash-contact-pavan-trikutam.jpg
  caption: "Photo: [**Pavan Trikutam**](https://unsplash.com/collections/389099/contact?photo=71CjSSB83Wo)"

---

Please note: In case you fill out and send the registration form below:

* we'll use your personal data (name, email)
only for the purpose of answering your request. It will not be stored, kept
or processed in sense of European General Data Protection Regulation [GDBPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
* you explicitely give your consent that your data will be used for the
aforementioned objective.
* you explicitely acknowledge and consent that some of the contact options
make use of unencrypted communication channels - therefore your personal data
might be visible during transit.


<form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name"></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email"></label>
  </p>
  <p>
    <label>Bemerkung: <textarea name="message"></textarea></label>
  </p>
  <div><p> <select>
  <option value="mar-2019">21.-25. März 2019, München</option>
  <option value="jun-2019">10.-13. Juni 2019, Frankfurt</option>
  <option value="sep-2019">18.-22. Sept 2019, Frankfurt</option>
  <option value="dez-2019">6.-9. Dez 2019 München</option>
</select></p></div>
<p>Teilnahme an CPSA-Foundation Prüfung (unverbindlich):</p>
  <div>
    <input type="radio" name="ja" value="ja">
    <label>Ja</label>

    <input type="radio" id="nein"
     name="nein" value="nein">
    <label for="nein">Nein</label>

    <input type="radio" id="vielleicht"
     name="vielleicht" value="vielleicht">
    <label for="vielleicht">Vielleicht</label>
  </div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
