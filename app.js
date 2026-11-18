/* =====================================================================
   app.js builds the home page, the program quiz and each program's
   checklist from steps.js.
   Staff normally don't need to edit this file. To change any words or
   links, edit steps.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var LANGUAGE_KEY = "bbbs-site-checklist-language";
  var PROGRESS_PREFIX = "bbbs-site-checklist-progress:";
  var COMING_SOON = "COMING SOON";
  var LANGUAGES = ["en", "es"];
  var THEMES = ["green", "light", "forest", "charcoal"];

  var content = window.SITE_CONTENT;
  var storageWorks = true;
  var language = "en";
  var program = null;     // the program being shown, or null on the home page
  var done = {};          // { stepId: true } for checked steps of this program
  var quiz = null;        // quiz state on the home page

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
      return values && Object.prototype.hasOwnProperty.call(values, name) ? values[name] : match;
    });
  }

  // Site words in the current language, falling back to English.
  function ui(key, values) {
    var words = content.ui[language] || {};
    var text = words[key];
    if (text === undefined || text === "") text = (content.ui.en || {})[key];
    return fill(text, values);
  }

  // A field from a program, stage, step or question, falling back to English.
  function translated(item, field) {
    var inLanguage = item && item[language] && item[language][field];
    if (inLanguage) return inLanguage;
    return (item && item.en && item.en[field]) || "";
  }

  // For items whose en/es values are plain text (answers, highlights).
  function translatedText(item) {
    return (item && (item[language] || item.en)) || "";
  }

  function programName(p) {
    return translated(p, "name");
  }

  function findProgram(id) {
    for (var i = 0; i < content.programs.length; i++) {
      if (content.programs[i].id === id) return content.programs[i];
    }
    return null;
  }

  function homeUrl() {
    return window.location.pathname + "?lang=" + language;
  }

  function programUrl(id) {
    return window.location.pathname + "?program=" + encodeURIComponent(id) + "&lang=" + language;
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

  function byId(id) {
    return document.getElementById(id);
  }

  /* ---------- Icons ---------- */

  var SVG_NS = "http://www.w3.org/2000/svg";

  var ICONS = {
    people: ["M5 8a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", "M14 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0", "M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6", "M14.5 14.2c.6-.3 1.3-.5 2-.5 2.8 0 5 2.4 5 5.3"],
    calendar: ["M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z", "M3 10h18", "M8 3v4", "M16 3v4", "M8 14h3v3H8z"],
    chat: ["M4 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3.5V14H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M18 9h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H12a2 2 0 0 1-1.7-1"],
    school: ["M3 21h18", "M5 21V10l7-5 7 5v11", "M12 18s-3.2-1.9-3.2-4a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8c0 2.1-3.2 4-3.2 4z"],
    target: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0", "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"],
    heart: ["M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"],
    loop: ["M4.5 12a7.5 7.5 0 0 1 13.2-4.9", "M19.5 12a7.5 7.5 0 0 1-13.2 4.9", "M18.5 3v4.5H14", "M5.5 21v-4.5H10"],
    cap: ["M2 9.5 12 5l10 4.5L12 14z", "M6 11.3V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.7", "M22 9.5V15"],
    briefcase: ["M4 8h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z", "M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8", "M3 13.5h18"],
    compass: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M15.5 8.5l-2 5-5 2 2-5z"],
    award: ["M7 8.5a5 5 0 1 0 10 0a5 5 0 1 0 -10 0", "M9.2 12.7 8 21l4-2.2 4 2.2-1.2-8.3"],
    star: ["M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"],
    clock: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 7v5l3.2 2"],
    trend: ["M3 17l6-6 4 4 8-8", "M15 7h6v6"],
    book: ["M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z", "M12 6.5v13"],
    smile: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M8.5 14.5a4.2 4.2 0 0 0 7 0", "M9 9.5h.01", "M15 9.5h.01"],
    lock: ["M6 11h12v9H6z", "M8.5 11V8a3.5 3.5 0 0 1 7 0v3"],
    external: ["M14 4h6v6", "M20 4l-8.5 8.5", "M17 13.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5.5"],
    down: ["M12 4v15", "M5.5 12.5 12 19l6.5-6.5"],
    arrow: ["M4 12h15", "M13 5.5 19.5 12 13 18.5"],
    info: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 11v5", "M12 7.8h.01"]
  };

  function icon(name, className, size) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", String(size || 20));
    svg.setAttribute("height", String(size || 20));
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("class", className || "icon");
    (ICONS[name] || ICONS.people).forEach(function (d) {
      var path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      svg.appendChild(path);
    });
    return svg;
  }

  /* ---------- Language ---------- */

  function urlParam(name) {
    try { return new URLSearchParams(window.location.search).get(name); }
    catch (error) { return null; }
  }

  function startingLanguage() {
    var fromLink = urlParam("lang");
    if (LANGUAGES.indexOf(fromLink) !== -1) {
      storageSet(LANGUAGE_KEY, fromLink);
      return fromLink;
    }
    var saved = storageGet(LANGUAGE_KEY);
    if (LANGUAGES.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "").toLowerCase();
    return browser.indexOf("es") === 0 ? "es" : "en";
  }

  function setLanguage(newLanguage) {
    if (LANGUAGES.indexOf(newLanguage) === -1 || newLanguage === language) return;
    language = newLanguage;
    storageSet(LANGUAGE_KEY, newLanguage);
    // Keep the address in step, so a reload or shared link keeps this language.
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", newLanguage);
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (error) { /* older browser: language is still saved */ }
    render();
  }

  /* ---------- Shared page parts ---------- */

  function setTheme(theme) {
    var hero = byId("hero");
    THEMES.forEach(function (name) { hero.classList.remove("theme-" + name); });
    hero.classList.add("theme-" + (THEMES.indexOf(theme) !== -1 ? theme : "green"));
  }

  function heroButton(href, label, iconName, primary) {
    var link = make("a", primary ? "button-hero" : "button-hero button-hero-secondary");
    link.href = href;
    link.appendChild(make("span", null, label));
    if (iconName) link.appendChild(icon(iconName, "icon-hero", 18));
    return link;
  }

  function buildContact() {
    var holder = byId("contact-details");
    holder.textContent = "";
    var contact = content.contact || {};
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

  function buildFacts(p, className) {
    var facts = (p[language] && p[language].facts) || (p.en && p.en.facts) || {};
    var list = make("dl", className || "facts");
    [["factMentors", "mentors"], ["factMentees", "mentees"], ["factWhen", "when"]].forEach(function (pair) {
      if (!facts[pair[1]]) return;
      var row = make("div", "fact");
      row.appendChild(make("dt", null, ui(pair[0])));
      row.appendChild(make("dd", null, facts[pair[1]]));
      list.appendChild(row);
    });
    return list;
  }

  function setMeta(title, description) {
    document.title = title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }

  /* =====================================================================
     HOME PAGE: quiz and program list
     ===================================================================== */

  function newQuiz() {
    return {
      stage: "intro",          // intro, question, result
      index: 0,                // current question
      candidates: content.programs.map(function (p) { return p.id; }),
      scores: {},
      chosen: {},              // questionId: answerId
      history: [],             // snapshots for the Back button
      result: null,
      also: null,
      error: false
    };
  }

  function questionAt(index) {
    return content.quiz && content.quiz.questions ? content.quiz.questions[index] : null;
  }

  function finishQuiz() {
    var ranked = quiz.candidates.slice().sort(function (a, b) {
      var difference = (quiz.scores[b] || 0) - (quiz.scores[a] || 0);
      return difference !== 0 ? difference : quiz.candidates.indexOf(a) - quiz.candidates.indexOf(b);
    });
    quiz.result = ranked[0] || null;
    quiz.also = null;
    if (ranked.length > 1) {
      var best = quiz.scores[ranked[0]] || 0;
      var second = quiz.scores[ranked[1]] || 0;
      if (second > 0 && second >= best - 1) quiz.also = ranked[1];
    }
    quiz.stage = "result";
  }

  function answerQuiz(question, answer) {
    quiz.history.push({
      index: quiz.index,
      candidates: quiz.candidates.slice(),
      scores: JSON.parse(JSON.stringify(quiz.scores))
    });
    quiz.chosen[question.id] = answer.id;
    quiz.error = false;

    if (answer.result && findProgram(answer.result)) {
      quiz.candidates = [answer.result];
      finishQuiz();
      return;
    }

    if (Array.isArray(answer.only)) {
      var kept = answer.only.filter(function (id) { return quiz.candidates.indexOf(id) !== -1 && findProgram(id); });
      if (kept.length) quiz.candidates = kept;
    }

    if (answer.points) {
      Object.keys(answer.points).forEach(function (id) {
        quiz.scores[id] = (quiz.scores[id] || 0) + Number(answer.points[id] || 0);
      });
    }

    if (quiz.candidates.length <= 1 || !questionAt(quiz.index + 1)) {
      finishQuiz();
      return;
    }
    quiz.index += 1;
  }

  function quizBack() {
    var last = quiz.history.pop();
    if (!last) {
      quiz = newQuiz();
      return;
    }
    quiz.index = last.index;
    quiz.candidates = last.candidates;
    quiz.scores = last.scores;
    quiz.result = null;
    quiz.also = null;
    quiz.error = false;
    quiz.stage = "question";
  }

  function focusSoon(element) {
    if (!element) return;
    window.setTimeout(function () { element.focus(); }, 0);
  }

  function renderQuiz(focus) {
    var body = byId("quiz-body");
    if (!body) return;
    body.textContent = "";

    if (quiz.stage === "intro") {
      body.appendChild(make("p", "quiz-intro", ui("quizIntro")));
      var start = make("button", "button-primary", ui("quizStart"));
      start.type = "button";
      start.addEventListener("click", function () {
        quiz.stage = "question";
        renderQuiz(true);
      });
      body.appendChild(start);
      return;
    }

    if (quiz.stage === "question") {
      var question = questionAt(quiz.index);
      var form = make("form", "quiz-form");
      form.noValidate = true;

      var fieldset = make("fieldset", "quiz-fieldset");
      var legend = make("legend", "quiz-legend");
      legend.appendChild(make("span", "quiz-count", ui("quizQuestionLabel", { number: quiz.history.length + 1 })));
      var title = make("h3", "quiz-question", translated(question, "question"));
      title.tabIndex = -1;
      legend.appendChild(title);
      fieldset.appendChild(legend);

      var help = translated(question, "help");
      if (help) fieldset.appendChild(make("p", "quiz-help", help));

      var options = make("div", "quiz-options");
      question.answers.forEach(function (answer) {
        var option = make("label", "quiz-option");
        var input = make("input");
        input.type = "radio";
        input.name = "quiz-" + question.id;
        input.value = answer.id;
        input.checked = quiz.chosen[question.id] === answer.id;
        // Remember the pick right away, so switching language keeps it.
        input.addEventListener("change", function () {
          quiz.chosen[question.id] = answer.id;
        });
        option.appendChild(input);
        option.appendChild(make("span", "quiz-option-text", translatedText(answer)));
        options.appendChild(option);
      });
      fieldset.appendChild(options);

      var error = make("p", "quiz-error", ui("quizChooseError"));
      error.id = "quiz-error";
      error.setAttribute("role", "alert");
      error.hidden = !quiz.error;
      fieldset.appendChild(error);
      form.appendChild(fieldset);

      var actions = make("div", "quiz-actions");
      var back = make("button", "button-secondary", ui("quizBack"));
      back.type = "button";
      back.addEventListener("click", function () {
        quizBack();
        renderQuiz(true);
      });
      actions.appendChild(back);
      var next = make("button", "button-primary", ui("quizNext"));
      next.type = "submit";
      actions.appendChild(next);
      form.appendChild(actions);

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var picked = form.querySelector("input:checked");
        if (!picked) {
          quiz.error = true;
          error.hidden = false;
          var first = form.querySelector("input");
          if (first) first.focus();
          return;
        }
        var answer = question.answers.filter(function (a) { return a.id === picked.value; })[0];
        answerQuiz(question, answer);
        renderQuiz(true);
      });

      body.appendChild(form);
      if (focus) focusSoon(title);
      return;
    }

    // Result
    var match = findProgram(quiz.result);
    var result = make("div", "quiz-result");
    if (match) {
      var card = make("div", "quiz-result-card theme-" + (match.theme || "green"));
      var top = make("div", "quiz-result-top");
      top.appendChild(make("p", "quiz-result-label", ui("quizResultLabel")));
      var heading = make("h3", "quiz-result-name", programName(match));
      heading.tabIndex = -1;
      top.appendChild(heading);
      top.appendChild(make("p", "quiz-result-tagline", translated(match, "tagline")));
      card.appendChild(top);

      var details = make("div", "quiz-result-body");
      details.appendChild(make("p", null, translated(match, "summary")));
      details.appendChild(buildFacts(match, "facts"));
      var go = make("a", "button-primary");
      go.href = programUrl(match.id);
      go.appendChild(make("span", null, ui("quizStartChecklist", { program: programName(match) })));
      go.appendChild(icon("arrow", "icon-inline", 18));
      var goRow = make("p", "quiz-result-action");
      goRow.appendChild(go);
      details.appendChild(goRow);
      card.appendChild(details);
      result.appendChild(card);

      var also = findProgram(quiz.also);
      if (also) {
        var alsoLine = make("p", "quiz-also");
        alsoLine.appendChild(document.createTextNode(ui("quizAlsoFit") + " "));
        var alsoLink = make("a", null, programName(also));
        alsoLink.href = programUrl(also.id);
        alsoLine.appendChild(alsoLink);
        result.appendChild(alsoLine);
      }
      if (focus) focusSoon(heading);
    }

    var retake = make("button", "button-secondary", ui("quizRetake"));
    retake.type = "button";
    retake.addEventListener("click", function () {
      quiz = newQuiz();
      quiz.stage = "question";
      renderQuiz(true);
    });
    result.appendChild(retake);
    body.appendChild(result);
  }

  function renderHome() {
    setTheme("green");
    setMeta(ui("homeBrowserTitle"), ui("homeMetaDescription"));
    byId("back-link").hidden = true;
    byId("hero-eyebrow").textContent = ui("homeEyebrow");
    byId("hero-title").textContent = ui("homeTitle");
    byId("hero-pill").textContent = ui("homePill");
    byId("hero-tagline").textContent = ui("homeTagline");
    var actions = byId("hero-actions");
    actions.textContent = "";
    actions.appendChild(heroButton("#quiz", ui("quizButton"), "down", true));
    actions.appendChild(heroButton("#programs", ui("programsButton"), null, false));

    var view = byId("view");
    view.textContent = "";

    // Quiz
    var quizSection = make("section", "quiz-section");
    quizSection.id = "quiz";
    quizSection.setAttribute("aria-labelledby", "quiz-heading");
    var quizWrap = make("div", "wrap");
    var quizCard = make("div", "quiz-card");
    var quizHeading = make("h2", "section-heading", ui("quizHeading"));
    quizHeading.id = "quiz-heading";
    quizCard.appendChild(quizHeading);
    var quizBody = make("div", "quiz-body");
    quizBody.id = "quiz-body";
    quizCard.appendChild(quizBody);
    quizWrap.appendChild(quizCard);
    quizSection.appendChild(quizWrap);
    view.appendChild(quizSection);

    // Program list
    var programsSection = make("section", "programs");
    programsSection.id = "programs";
    programsSection.setAttribute("aria-labelledby", "programs-heading");
    var wrap = make("div", "wrap");
    var heading = make("h2", "section-heading", ui("programsHeading"));
    heading.id = "programs-heading";
    wrap.appendChild(heading);
    wrap.appendChild(make("p", "section-intro", ui("programsIntro")));

    var list = make("ul", "program-cards");
    list.setAttribute("role", "list");
    content.programs.forEach(function (p) {
      var item = make("li", "program-card theme-" + (p.theme || "green"));
      var top = make("div", "program-card-top");
      top.appendChild(make("h3", "program-card-name", programName(p)));
      top.appendChild(make("p", "program-card-tagline", translated(p, "tagline")));
      item.appendChild(top);

      var cardBody = make("div", "program-card-body");
      cardBody.appendChild(make("p", "program-card-summary", translated(p, "summary")));
      cardBody.appendChild(buildFacts(p, "facts"));
      var link = make("a", "button-primary");
      link.href = programUrl(p.id);
      link.appendChild(make("span", null, ui("openChecklist", { program: programName(p) })));
      link.appendChild(icon("arrow", "icon-inline", 18));
      var linkRow = make("p", "program-card-action");
      linkRow.appendChild(link);
      cardBody.appendChild(linkRow);
      item.appendChild(cardBody);
      list.appendChild(item);
    });
    wrap.appendChild(list);
    programsSection.appendChild(wrap);
    view.appendChild(programsSection);

    renderQuiz(false);
  }

  /* =====================================================================
     PROGRAM PAGE: description and step-by-step checklist
     ===================================================================== */

  function progressKey() {
    return PROGRESS_PREFIX + program.id;
  }

  // Steps open in order, so saved checkmarks must be an unbroken run from step 1.
  function loadProgress() {
    var result = {};
    var saved = storageGet(progressKey());
    if (!saved) return result;
    var list = [];
    try {
      list = JSON.parse(saved);
      if (!Array.isArray(list)) list = [];
    } catch (error) { list = []; }
    for (var i = 0; i < program.steps.length; i++) {
      if (list.indexOf(program.steps[i].id) === -1) break;
      result[program.steps[i].id] = true;
    }
    return result;
  }

  function saveProgress() {
    var list = program.steps.filter(function (step) { return done[step.id]; }).map(function (step) { return step.id; });
    if (list.length) storageSet(progressKey(), JSON.stringify(list));
    else storageRemove(progressKey());
    updateStorageWarning();
  }

  function doneCount() {
    var count = 0;
    while (count < program.steps.length && done[program.steps[count].id]) count += 1;
    return count;
  }

  function updateStorageWarning() {
    var warning = byId("storage-warning");
    if (warning) warning.hidden = storageWorks;
  }

  // Shows which steps are done, which one is next, and which are still locked.
  function updateSteps() {
    var count = doneCount();
    var total = program.steps.length;

    program.steps.forEach(function (step, index) {
      var item = document.querySelector('[data-step-id="' + step.id + '"]');
      if (!item) return;
      var checkbox = item.querySelector(".step-checkbox");
      var isDone = index < count;
      var isCurrent = index === count;
      var isLocked = index > count;
      var canUncheck = index === count - 1;

      checkbox.checked = isDone;
      checkbox.disabled = !(isCurrent || canUncheck);

      item.classList.toggle("is-done", isDone);
      item.classList.toggle("is-current", isCurrent);
      item.classList.toggle("is-locked", isLocked);

      item.querySelector(".step-badge").hidden = !isCurrent;
      item.querySelector(".step-locked-note").hidden = !isLocked;
      item.querySelector(".step-done-note").hidden = !(isDone && !canUncheck);

      var link = item.querySelector(".step-link");
      var placeholder = item.querySelector(".step-link-locked");
      if (link) link.hidden = isLocked;
      if (placeholder) placeholder.hidden = !isLocked;
    });

    var message = ui("progress", { done: count, total: total });
    if (total > 0 && count === total) message += " " + ui("allDone");
    byId("progress-text").textContent = message;
    byId("progress-fill").style.width = (total ? (count / total) * 100 : 0) + "%";

    Array.prototype.forEach.call(document.querySelectorAll(".stage"), function (section) {
      var boxes = section.querySelectorAll(".step-checkbox");
      var allChecked = boxes.length > 0 && Array.prototype.every.call(boxes, function (box) { return box.checked; });
      section.classList.toggle("is-complete", allChecked);
      section.querySelector(".stage-done").hidden = !allChecked;
    });
  }

  function buildStep(step, number) {
    var inputId = "step-" + step.id;
    var detailsId = inputId + "-details";
    var lockedId = inputId + "-locked";
    var doneNoteId = inputId + "-done";

    var item = make("li", "step");
    item.setAttribute("data-step-id", step.id);

    var checkbox = make("input", "step-checkbox");
    checkbox.type = "checkbox";
    checkbox.id = inputId;
    checkbox.setAttribute("aria-describedby", detailsId + " " + lockedId + " " + doneNoteId);
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) done[step.id] = true;
      else delete done[step.id];
      saveProgress();
      updateSteps();
    });

    var body = make("div", "step-body");

    var badge = make("p", "step-badge", ui("upNext"));
    badge.hidden = true;
    body.appendChild(badge);

    var heading = make("h4", "step-title");
    var label = make("label");
    label.htmlFor = inputId;
    label.appendChild(make("span", "step-number", ui("stepLabel", { number: number })));
    label.appendChild(document.createTextNode(" "));
    label.appendChild(make("span", "step-name", translated(step, "title")));
    heading.appendChild(label);
    body.appendChild(heading);

    var lockedNote = make("p", "step-locked-note");
    lockedNote.id = lockedId;
    lockedNote.appendChild(icon("lock", "icon-lock", 16));
    lockedNote.appendChild(make("span", null, ui("lockedNote", { number: number - 1 })));
    lockedNote.hidden = true;
    body.appendChild(lockedNote);

    var doneNote = make("p", "visually-hidden step-done-note", ui("lockedDoneNote"));
    doneNote.id = doneNoteId;
    doneNote.hidden = true;
    body.appendChild(doneNote);

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

    // Optional list of short instructions under the description.
    var points = translated(step, "details");
    if (Array.isArray(points) && points.length) {
      var pointList = make("ul", "step-list");
      points.forEach(function (point) {
        if (point) pointList.appendChild(make("li", null, point));
      });
      details.appendChild(pointList);
    }

    // Pick the link: the Spanish form if there is one, otherwise the main link.
    var spanishLink = language === "es" ? safeWebLink(step.linkEs) : null;
    var link = spanishLink || safeWebLink(step.link);
    var comingSoon = !link && !!(step.link || step.linkEs);

    if (language === "es" && step.englishOnly && !spanishLink && (link || comingSoon)) {
      details.appendChild(make("p", "step-note", ui("englishOnly")));
    }
    body.appendChild(details);

    if (link) {
      var linkText = translated(step, "linkText") || link;
      var action = make("p", "step-action");

      var anchor = make("a", "button-primary step-link");
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.appendChild(make("span", null, linkText));
      anchor.appendChild(make("span", "visually-hidden", " " + ui("newTab")));
      anchor.appendChild(icon("external", "icon-inline", 16));
      action.appendChild(anchor);

      // Shown instead of the link while the step is locked.
      var placeholder = make("span", "button-primary is-disabled step-link-locked");
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.appendChild(make("span", null, linkText));
      placeholder.appendChild(icon("lock", "icon-inline", 16));
      placeholder.hidden = true;
      action.appendChild(placeholder);

      body.appendChild(action);
    } else if (comingSoon) {
      body.appendChild(make("p", "step-soon", ui("comingSoon")));
    }

    item.appendChild(checkbox);
    item.appendChild(body);
    return item;
  }

  function buildChecklist() {
    var checklist = byId("checklist");
    checklist.textContent = "";
    var number = 0;
    var knownStages = {};

    program.stages.forEach(function (stage, index) {
      knownStages[stage.id] = true;
      var steps = program.steps.filter(function (step) { return step.stage === stage.id; });
      if (!steps.length) return;

      var headingId = "stage-" + stage.id + "-heading";
      var section = make("section", "stage");
      section.setAttribute("aria-labelledby", headingId);

      var marker = make("div", "stage-marker");
      marker.setAttribute("aria-hidden", "true");
      marker.appendChild(make("span", null, String(index + 1)));
      section.appendChild(marker);

      var heading = make("h3", "stage-heading");
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
      steps.forEach(function (step) {
        number += 1;
        list.appendChild(buildStep(step, number));
      });
      section.appendChild(list);
      checklist.appendChild(section);
    });

    program.steps.forEach(function (step) {
      if (!knownStages[step.stage] && window.console) {
        console.warn("steps.js: step \"" + step.id + "\" in " + program.id + " is hidden because its stage \"" + step.stage + "\" doesn't match any stage id.");
      }
    });
  }

  function buildFaq(holder, openOnes) {
    var questions = Array.isArray(program.faq) ? program.faq : [];
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
  }

  function renderProgram() {
    var name = programName(program);
    setTheme(program.theme);
    setMeta(ui("programBrowserTitle", { program: name }), ui("programMetaDescription", { program: name }));

    var back = byId("back-link");
    back.hidden = false;
    back.href = homeUrl() + "#programs";
    byId("hero-eyebrow").textContent = ui("programEyebrow");
    byId("hero-title").textContent = name;
    byId("hero-pill").textContent = translated(program, "tagline");
    byId("hero-tagline").textContent = ui("programTagline");
    var actions = byId("hero-actions");
    actions.textContent = "";
    actions.appendChild(heroButton("#checklist-heading", ui("startButton"), "down", true));

    // Keep open answers open when switching language.
    var openOnes = {};
    Array.prototype.forEach.call(document.querySelectorAll(".faq-item"), function (item, index) {
      if (item.open) openOnes[index] = true;
    });

    var view = byId("view");
    view.textContent = "";

    // About the program (black band)
    var about = make("section", "about");
    about.setAttribute("aria-labelledby", "about-heading");
    var aboutWrap = make("div", "wrap");
    var aboutHeading = make("h2", "section-heading", ui("aboutHeading", { program: name }));
    aboutHeading.id = "about-heading";
    aboutWrap.appendChild(aboutHeading);
    aboutWrap.appendChild(make("p", "about-text", translated(program, "about")));
    aboutWrap.appendChild(buildFacts(program, "facts facts-on-dark"));

    var highlightsHeading = translated(program, "highlightsHeading");
    if (highlightsHeading) aboutWrap.appendChild(make("h3", "highlights-heading", highlightsHeading));
    var highlights = Array.isArray(program.highlights) ? program.highlights : [];
    if (highlights.length) {
      var tiles = make("ul", "highlights");
      tiles.setAttribute("role", "list");
      highlights.forEach(function (tile) {
        var text = translatedText(tile);
        if (!text) return;
        var li = make("li", "highlight");
        li.appendChild(icon(tile.icon, "highlight-icon", 32));
        li.appendChild(make("p", null, text));
        tiles.appendChild(li);
      });
      aboutWrap.appendChild(tiles);
    }
    about.appendChild(aboutWrap);
    view.appendChild(about);

    // Checklist
    var wrap = make("div", "wrap");
    var checklistHeading = make("h2", "section-heading checklist-heading", ui("checklistHeading"));
    checklistHeading.id = "checklist-heading";
    checklistHeading.tabIndex = -1;
    wrap.appendChild(checklistHeading);

    if (program.draft) {
      var notice = make("p", "draft-notice");
      notice.appendChild(icon("info", "icon-inline", 20));
      var noticeText = make("span", null, ui("draftNotice") + " ");
      var email = (content.contact || {}).email;
      if (email) {
        var mail = make("a", null, email);
        mail.href = "mailto:" + email;
        noticeText.appendChild(mail);
      }
      notice.appendChild(noticeText);
      wrap.appendChild(notice);
    }

    var intro = make("div", "intro");
    intro.appendChild(make("p", null, ui("introText")));
    intro.appendChild(make("p", "privacy-note", ui("privacyNote")));
    wrap.appendChild(intro);

    var panel = make("div", "progress-panel");
    var progressText = make("p", "progress-text");
    progressText.id = "progress-text";
    progressText.setAttribute("role", "status");
    panel.appendChild(progressText);
    var track = make("div", "progress-track");
    track.setAttribute("aria-hidden", "true");
    var fillBar = make("div", "progress-fill");
    fillBar.id = "progress-fill";
    track.appendChild(fillBar);
    panel.appendChild(track);
    var warning = make("p", "storage-warning", ui("storageWarning"));
    warning.id = "storage-warning";
    warning.hidden = true;
    panel.appendChild(warning);
    var reset = make("button", "button-secondary", ui("resetButton"));
    reset.type = "button";
    reset.addEventListener("click", function () {
      if (!window.confirm(ui("resetConfirm"))) return;
      done = {};
      storageRemove(progressKey());
      updateSteps();
      updateStorageWarning();
    });
    panel.appendChild(reset);
    wrap.appendChild(panel);

    var checklist = make("div", "checklist");
    checklist.id = "checklist";
    wrap.appendChild(checklist);

    var faqSection = make("section", "faq");
    faqSection.setAttribute("aria-labelledby", "faq-heading");
    var faqHeading = make("h2", "section-heading", ui("faqHeading"));
    faqHeading.id = "faq-heading";
    faqSection.appendChild(faqHeading);
    var faqItems = make("div");
    faqSection.appendChild(faqItems);
    buildFaq(faqItems, openOnes);
    if (faqItems.children.length) wrap.appendChild(faqSection);

    view.appendChild(wrap);

    buildChecklist();
    updateSteps();
    updateStorageWarning();
  }

  /* ---------- Render ---------- */

  function render() {
    document.documentElement.lang = language;

    Array.prototype.forEach.call(document.querySelectorAll("[data-ui]"), function (element) {
      element.textContent = ui(element.getAttribute("data-ui"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === language));
    });

    if (program) renderProgram();
    else renderHome();
    buildContact();
  }

  function showLoadError() {
    var view = byId("view");
    if (view) {
      view.textContent = "";
      var wrap = make("div", "wrap");
      wrap.appendChild(make("p", "load-error",
        "This page could not load. Please try again later. / No se pudo cargar esta página. Intente más tarde."));
      view.appendChild(wrap);
    }
    if (window.console) {
      console.error("steps.js did not load. If you just edited it, look for a missing comma, quote mark or bracket near the line you changed.");
    }
  }

  /* ---------- Start ---------- */

  function start() {
    if (!content || !content.ui || !content.ui.en || !Array.isArray(content.programs) || !content.programs.length) {
      showLoadError();
      return;
    }

    checkStorage();
    language = startingLanguage();
    program = findProgram(urlParam("program"));
    if (program) {
      if (!Array.isArray(program.stages)) program.stages = [];
      if (!Array.isArray(program.steps)) program.steps = [];
      done = loadProgress();
    } else {
      quiz = newQuiz();
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });

    render();

    // Jump to a section named in the address (e.g. #programs) after building it.
    if (window.location.hash) {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  start();
})();
