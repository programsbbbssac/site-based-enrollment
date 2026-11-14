/* =====================================================================
   app.js builds the checklist from steps.js.
   Staff normally don't need to edit this file. To change any words or
   links, edit steps.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var LANGUAGE_KEY = "bbbs-site-checklist-language";
  var PROGRESS_KEY = "bbbs-site-checklist-progress";
  var COMING_SOON = "COMING SOON";
  var LANGUAGES = ["en", "es"];

  var content = window.SITE_CONTENT;
  var storageWorks = true;
  var language = "en";
  var done = {};          // { stepId: true } for every checked step
  var shownStepIds = [];  // steps actually on the page, in order

  /* ---------- Browser storage (always wrapped: it can be blocked) ---------- */

  function storageGet(key) {
    try { return window.localStorage.getItem(key); }
    catch (error) { storageWorks = false; return null; }
  }

  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); return true; }
    catch (error) { storageWorks = false; return false; }
  }

  function storageRemove(key) {
    try { window.localStorage.removeItem(key); return true; }
    catch (error) { storageWorks = false; return false; }
  }

  function checkStorage() {
    var testKey = "bbbs-site-checklist-test";
    if (storageSet(testKey, "1")) storageRemove(testKey);
  }

  /* ---------- Small helpers ---------- */

  function fill(text, values) {
    return String(text || "").replace(/\{(\w+)\}/g, function (match, name) {
      return Object.prototype.hasOwnProperty.call(values || {}, name) ? values[name] : match;
    });
  }

  // Page words for the current language, falling back to English.
  function ui(key, values) {
    var words = content.ui[language] || {};
    var text = words[key];
    if (text === undefined || text === "") text = (content.ui.en || {})[key];
    return fill(text, values);
  }

  // A field from a step or stage in the current language, falling back to English.
  function translated(item, field) {
    var inLanguage = item[language] && item[language][field];
    if (inLanguage) return inLanguage;
    return (item.en && item.en[field]) || "";
  }

  // Email-security wrappers (Outlook/Proofpoint) can carry the recipient's
  // personal data, so links through them are never shown.
  var WRAPPER_HOSTS = ["urldefense.com", "urldefense.proofpoint.com", "safelinks.protection.outlook.com"];

  function isWrapped(hostname) {
    return WRAPPER_HOSTS.some(function (host) {
      return hostname === host || hostname.slice(-(host.length + 1)) === "." + host;
    });
  }

  // Only allow real web links, so a typo can never become a harmful link.
  function safeWebLink(address) {
    if (!address || address === COMING_SOON) return null;
    try {
      var url = new URL(address);
      if (isWrapped(url.hostname)) {
        if (window.console) console.warn("steps.js: this link is an email-security wrapper and was hidden. Use the real address inside it:", address);
        return null;
      }
      if (url.protocol === "https:" || url.protocol === "http:") return url.href;
    } catch (error) { /* not a valid address */ }
    if (window.console) console.warn("steps.js: this link is not a full web address and was hidden:", address);
    return null;
  }

  function make(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function externalIcon() {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("class", "icon-external");
    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M9 2h5v5M14 2 7.5 8.5M12 9.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.6");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    return svg;
  }

  /* ---------- Language ---------- */

  function startingLanguage() {
    var saved = storageGet(LANGUAGE_KEY);
    if (LANGUAGES.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "").toLowerCase();
    return browser.indexOf("es") === 0 ? "es" : "en";
  }

  function setLanguage(newLanguage) {
    if (LANGUAGES.indexOf(newLanguage) === -1) return;
    language = newLanguage;
    storageSet(LANGUAGE_KEY, newLanguage);
    render();
  }

  /* ---------- Progress ---------- */

  function loadProgress() {
    var saved = storageGet(PROGRESS_KEY);
    var result = {};
    if (!saved) return result;
    try {
      var list = JSON.parse(saved);
      if (Array.isArray(list)) {
        list.forEach(function (id) { result[id] = true; });
      }
    } catch (error) { /* ignore damaged saved data */ }
    return result;
  }

  function saveProgress() {
    var list = Object.keys(done).filter(function (id) { return done[id]; });
    storageSet(PROGRESS_KEY, JSON.stringify(list));
    updateStorageWarning();
  }

  function updateProgress() {
    var total = shownStepIds.length;
    var count = shownStepIds.filter(function (id) { return done[id]; }).length;
    var message = ui("progress", { done: count, total: total });
    if (total > 0 && count === total) message += " " + ui("allDone");

    document.getElementById("progress-text").textContent = message;
    document.getElementById("progress-fill").style.width = (total ? (count / total) * 100 : 0) + "%";

    // Mark stages where every step is done (fills in that part of the road).
    var stages = document.querySelectorAll(".stage");
    Array.prototype.forEach.call(stages, function (section) {
      var boxes = section.querySelectorAll(".step-checkbox");
      var allChecked = boxes.length > 0 && Array.prototype.every.call(boxes, function (box) { return box.checked; });
      section.classList.toggle("is-complete", allChecked);
      section.querySelector(".stage-done").hidden = !allChecked;
    });
  }

  function updateStorageWarning() {
    document.getElementById("storage-warning").hidden = storageWorks;
  }

  /* ---------- Building the page ---------- */

  function buildStep(step, number) {
    var inputId = "step-" + step.id;
    var detailsId = inputId + "-details";

    var item = make("li", "step");
    item.setAttribute("data-step-id", step.id);
    if (done[step.id]) item.classList.add("is-done");

    var checkbox = make("input", "step-checkbox");
    checkbox.type = "checkbox";
    checkbox.id = inputId;
    checkbox.checked = !!done[step.id];
    checkbox.setAttribute("aria-describedby", detailsId);
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) done[step.id] = true;
      else delete done[step.id];
      item.classList.toggle("is-done", checkbox.checked);
      saveProgress();
      updateProgress();
    });

    var body = make("div", "step-body");

    var heading = make("h3", "step-title");
    var label = make("label");
    label.htmlFor = inputId;
    label.appendChild(make("span", "step-number", ui("stepLabel", { number: number })));
    label.appendChild(document.createTextNode(" "));
    label.appendChild(make("span", "step-name", translated(step, "title")));
    heading.appendChild(label);
    body.appendChild(heading);

    var details = make("div", "step-details");
    details.id = detailsId;

    var when = translated(step, "when");
    if (when) {
      var whenLine = make("p", "step-when");
      whenLine.appendChild(make("strong", null, ui("whenLabel")));
      whenLine.appendChild(document.createTextNode(" " + when));
      details.appendChild(whenLine);
    }

    var description = translated(step, "description");
    if (description) details.appendChild(make("p", "step-description", description));

    // Pick the link: the Spanish form if there is one, otherwise the main link.
    var spanishLink = language === "es" ? safeWebLink(step.linkEs) : null;
    var link = spanishLink || safeWebLink(step.link);
    // Any link that isn't ready or usable shows "Link coming soon".
    var comingSoon = !link && !!(step.link || step.linkEs);

    if (language === "es" && step.englishOnly && !spanishLink && (link || comingSoon)) {
      details.appendChild(make("p", "step-note", ui("englishOnly")));
    }
    body.appendChild(details);

    if (link) {
      var anchor = make("a", "button-primary");
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.appendChild(make("span", null, translated(step, "linkText") || link));
      anchor.appendChild(make("span", "visually-hidden", " " + ui("newTab")));
      anchor.appendChild(externalIcon());
      var action = make("p", "step-action");
      action.appendChild(anchor);
      body.appendChild(action);
    } else if (comingSoon) {
      body.appendChild(make("p", "step-soon", ui("comingSoon")));
    }

    item.appendChild(checkbox);
    item.appendChild(body);
    return item;
  }

  function buildChecklist() {
    var checklist = document.getElementById("checklist");
    checklist.textContent = "";
    shownStepIds = [];
    var number = 0;
    var knownStages = {};

    content.stages.forEach(function (stage, index) {
      knownStages[stage.id] = true;
      var steps = content.steps.filter(function (step) { return step.stage === stage.id; });
      if (!steps.length) return;

      var headingId = "stage-" + stage.id + "-heading";
      var section = make("section", "stage");
      section.setAttribute("aria-labelledby", headingId);

      var marker = make("div", "stage-marker");
      marker.setAttribute("aria-hidden", "true");
      marker.appendChild(make("span", "stage-marker-number", String(index + 1)));
      section.appendChild(marker);

      var heading = make("h2", "stage-heading");
      heading.id = headingId;
      heading.appendChild(make("span", "stage-label", ui("stageLabel", { number: index + 1 })));
      heading.appendChild(document.createTextNode(" "));
      heading.appendChild(make("span", "stage-title", translated(stage, "title")));
      section.appendChild(heading);

      var intro = translated(stage, "intro");
      if (intro) section.appendChild(make("p", "stage-intro", intro));

      var doneNote = make("p", "stage-done", ui("stageDone"));
      doneNote.hidden = true;
      section.appendChild(doneNote);

      var list = make("ol", "steps");
      list.setAttribute("role", "list");
      list.start = number + 1;
      steps.forEach(function (step) {
        number += 1;
        shownStepIds.push(step.id);
        list.appendChild(buildStep(step, number));
      });
      section.appendChild(list);
      checklist.appendChild(section);
    });

    content.steps.forEach(function (step) {
      if (!knownStages[step.stage] && window.console) {
        console.warn("steps.js: step \"" + step.id + "\" is hidden because its stage \"" + step.stage + "\" doesn't match any stage id.");
      }
    });
  }

  function buildFaq() {
    var section = document.getElementById("faq");
    var holder = document.getElementById("faq-list");
    var questions = Array.isArray(content.faq) ? content.faq : [];

    // Keep open answers open when switching language.
    var openOnes = {};
    Array.prototype.forEach.call(holder.querySelectorAll("details"), function (item, index) {
      if (item.open) openOnes[index] = true;
    });

    holder.textContent = "";
    questions.forEach(function (entry, index) {
      var question = translated(entry, "question");
      var answer = translated(entry, "answer");
      if (!question) return;
      var item = make("details", "faq-item");
      if (openOnes[index]) item.open = true;
      item.appendChild(make("summary", null, question));
      if (answer) item.appendChild(make("p", null, answer));
      holder.appendChild(item);
    });
    section.hidden = holder.children.length === 0;
  }

  function buildContact() {
    var holder = document.getElementById("contact-details");
    holder.textContent = "";
    var contact = content.contact || {};

    if (contact.name) holder.appendChild(make("p", "contact-name", contact.name));

    var list = make("ul", "contact-list");
    list.setAttribute("role", "list");

    if (contact.email) {
      var emailItem = make("li");
      emailItem.appendChild(make("span", "contact-label", ui("emailLabel")));
      var emailLink = make("a", null, contact.email);
      emailLink.href = "mailto:" + contact.email;
      emailItem.appendChild(emailLink);
      list.appendChild(emailItem);
    }

    if (contact.phone) {
      var phoneItem = make("li");
      phoneItem.appendChild(make("span", "contact-label", ui("phoneLabel")));
      var phoneLink = make("a", null, contact.phone);
      phoneLink.href = "tel:" + contact.phone.replace(/[^\d+]/g, "");
      phoneItem.appendChild(phoneLink);
      list.appendChild(phoneItem);
    }

    if (list.children.length) holder.appendChild(list);
  }

  function render() {
    document.documentElement.lang = language;
    document.title = ui("browserTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", ui("metaDescription"));

    Array.prototype.forEach.call(document.querySelectorAll("[data-ui]"), function (element) {
      element.textContent = ui(element.getAttribute("data-ui"));
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === language));
    });

    buildChecklist();
    buildFaq();
    buildContact();
    updateProgress();
    updateStorageWarning();
  }

  function showLoadError() {
    var checklist = document.getElementById("checklist");
    if (checklist) {
      checklist.textContent = "";
      checklist.appendChild(make("p", "load-error",
        "The checklist could not load. Please try again later. / No se pudo cargar la lista. Intente más tarde."));
    }
    if (window.console) {
      console.error("steps.js did not load. If you just edited it, look for a missing comma, quote mark or bracket near the line you changed.");
    }
  }

  /* ---------- Start ---------- */

  function start() {
    if (!content || !content.ui || !content.ui.en || !Array.isArray(content.stages) || !Array.isArray(content.steps)) {
      showLoadError();
      return;
    }

    checkStorage();
    language = startingLanguage();
    done = loadProgress();

    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });

    document.getElementById("reset-button").addEventListener("click", function () {
      if (!window.confirm(ui("resetConfirm"))) return;
      done = {};
      storageRemove(PROGRESS_KEY);
      Array.prototype.forEach.call(document.querySelectorAll(".step-checkbox"), function (box) {
        box.checked = false;
      });
      Array.prototype.forEach.call(document.querySelectorAll(".step.is-done"), function (item) {
        item.classList.remove("is-done");
      });
      updateProgress();
      updateStorageWarning();
    });

    render();
  }

  start();
})();
