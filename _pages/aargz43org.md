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


<form name="foundation-anmeldung" method="POST" netlify>
   <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
  </p>
  <p>    
    <label>Ihr Name: <input type="text" name="name"></label>   
    <label>Name Teilnehmer (falls Sie eine andere Person anmelden): <input type="text" name="tname"></label>   
  </p>
  <p>
    <label>Ihre Email: <input type="email" name="email"></label>
  </p>
  <p>
    <label>Rechnungsadresse: <textarea name="rechadr"></textarea>
    </label>
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

<div>
<p>Wir melden Sie unverbindlich zur (optionalen) CPSA-Foundation Prüfung
am letzten Veranstaltungstag an. Sie können vor-Ort entscheiden,
ob Sie teilnehmen wollen (Prüfungsgebühr nicht im Kurspreis enthalten).</p>
</div>    

<div data-netlify-recaptcha></div>

<p>
    <button type="submit">Anmeldung absenden</button>
  </p>
</form>
