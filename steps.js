/* =====================================================================
   SITE-BASED MENTORING: ALL THE WORDS ON THE SITE LIVE HERE
   The program quiz, the four program checklists, and every label,
   in English and Spanish.
   =====================================================================

   ⚠ SPANISH REVIEW REQUIRED BEFORE LAUNCH ⚠
   Every "es:" section below is a first-draft translation. A bilingual
   staff member must review ALL Spanish text before this site goes live,
   especially anything about background checks, fingerprinting (Live
   Scan), the sex offender registry check, mandated reporting, TB
   testing, the Code of Conduct, parent permission, consent, or other
   legal requirements. Sections that need extra care are marked
   "SPANISH REVIEW: legal".
   When the review is done, delete this note and write who reviewed it
   and when, for example:  Spanish reviewed by ______ on ______.

   ⚠ STEPS MARKED  draft: true  NEED STAFF REVIEW ⚠
   Level Up!, Big Futures and High School Bigs steps were drafted from
   the Lunch Buddies process and the program flyers. While a program has
   draft: true, its page shows a note asking people to email us before
   they start. Confirm the steps, then change it to draft: false.

   HOW TO EDIT THIS FILE (no coding needed)
   - Only change the text between the "quote marks".
   - Keep every quote mark, comma, colon and curly bracket { } in place.
   - Do NOT paste from Word or Google Docs if it turns "straight quotes"
     into “curly quotes”. Curly quotes around a value break the page.
     Curly quotes or apostrophes INSIDE the text are fine.
   - To add a link, replace COMING SOON with the full web address,
     starting with https://   Example:  link: "https://example.org/form",
   - Links copied from Outlook may start with urldefense.com or
     safelinks.protection.outlook.com. Those are email-security wrappers
     and can carry personal data. Use the real address inside them. The
     page hides wrapped links automatically.
   - Use "" (empty) for a step that should never show a link.
   - Never paste a link that contains someone's personal information or a
     personal/pre-filled token. Use the public, blank version of the form.
     This website is public: anyone can read this file.
   - Never change a step's "id" or a program's "id" after launch. Saved
     checkmarks and shared links use them.
   - Steps open one at a time, in the order they appear in this file.
   - After you save, wait a few minutes, then reload the site to check.
   ===================================================================== */

window.SITE_CONTENT = {

  /* --------------------------------------------------------------
     CONTACT (shown at the bottom of every page)
     Leave phone as "" to hide it.
     -------------------------------------------------------------- */
  contact: {
    email: "programs@bbbs-sac.org",
    phone: "" // Optional: add a phone number, e.g. "(916) 555-0100"
  },

  /* --------------------------------------------------------------
     WORDS USED AROUND THE SITE (buttons, headings, messages)
     Words in {curly brackets} are filled in automatically. Keep them.
     -------------------------------------------------------------- */
  ui: {
    en: {
      orgName: "Big Brothers Big Sisters of the Greater Sacramento Area",
      skipLink: "Skip to main content",

      // Home page
      homeBrowserTitle: "Site-Based Mentoring | Big Brothers Big Sisters of the Greater Sacramento Area",
      homeMetaDescription: "Find the Big Brothers Big Sisters site-based mentoring program that fits you, then follow your step-by-step checklist.",
      homeEyebrow: "Site-based mentoring",
      homeTitle: "Become a Big",
      homePill: "Mentor a student at school",
      homeTagline: "Find the program that fits you, then follow your step-by-step checklist.",
      quizButton: "Take the quiz",
      programsButton: "See all programs",

      // Quiz
      quizHeading: "Which program fits you?",
      quizIntro: "Answer up to 4 quick questions. We’ll suggest a program, and you can still choose any program you like.",
      quizStart: "Start the quiz",
      quizQuestionLabel: "Question {number}",
      quizNext: "Next",
      quizBack: "Back",
      quizChooseError: "Choose an answer to continue.",
      quizResultLabel: "Your best match",
      quizAlsoFit: "Also a good fit:",
      quizStartChecklist: "Start the {program} checklist",
      quizRetake: "Retake the quiz",

      // Program list
      programsHeading: "Site-based programs",
      programsIntro: "Every program meets at a school or partner site. Choose one to see your checklist.",
      factMentors: "Who mentors",
      factMentees: "Who you’ll mentor",
      factWhen: "When",
      openChecklist: "Open the {program} checklist",

      // Program pages
      programBrowserTitle: "{program} Mentor Checklist | Big Brothers Big Sisters of the Greater Sacramento Area",
      programMetaDescription: "Your step-by-step checklist for becoming a {program} mentor with Big Brothers Big Sisters of the Greater Sacramento Area.",
      backLink: "All programs",
      programEyebrow: "Become a mentor",
      programTagline: "Your step-by-step checklist from applicant to mentor.",
      startButton: "See the steps",
      aboutHeading: "About {program}",
      checklistHeading: "Your checklist",
      draftNotice: "We’re still finalizing the steps for this program. Email us before you start.",
      introText: "Follow these steps in order. Each step opens after you check off the one before it.",
      privacyNote: "This site does not collect your information. Your checkmarks are saved only in this browser on this device. BBBS staff keep your official record.",
      progress: "{done} of {total} steps done",
      allDone: "You finished every step. Welcome to the BBBS family!",
      resetButton: "Reset my progress",
      resetConfirm: "Clear all your checkmarks for this program on this device? This can’t be undone.",
      storageWarning: "Your browser is not saving checkmarks right now (this can happen in private browsing). They will clear when you close this page.",
      stageLabel: "Stage {number}",
      stepLabel: "Step {number}",
      upNext: "Up next",
      lockedNote: "Finish step {number} first.",
      lockedDoneNote: "To change this step, uncheck the steps after it first.",
      whenLabel: "When:",
      newTab: "(opens in a new tab)",
      comingSoon: "Link coming soon. If you need it now, contact us below.",
      englishOnly: "",
      stageDone: "Stage complete",
      faqHeading: "Common questions",

      // Contact and footer
      contactHeading: "Want more info?",
      contactIntro: "We’re happy to help with any step. You can also reply to any email from us.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      footer: "Big Brothers Big Sisters of the Greater Sacramento Area. This site does not collect or store your information.",
      loadError: "This page could not load. Please try again later, or email us for help."
    },

    // SPANISH REVIEW: needs bilingual review before launch
    es: {
      orgName: "Big Brothers Big Sisters of the Greater Sacramento Area",
      skipLink: "Ir al contenido principal",

      homeBrowserTitle: "Mentoría en escuelas | Big Brothers Big Sisters of the Greater Sacramento Area",
      homeMetaDescription: "Encuentre el programa de mentoría en escuelas de Big Brothers Big Sisters que mejor le queda y siga su lista de pasos.",
      homeEyebrow: "Mentoría en escuelas",
      homeTitle: "Sea un Big",
      homePill: "Sea mentor/a de un estudiante en la escuela",
      homeTagline: "Encuentre el programa que mejor le queda y siga su lista de pasos.",
      quizButton: "Hacer el cuestionario",
      programsButton: "Ver todos los programas",

      quizHeading: "¿Qué programa le queda mejor?",
      quizIntro: "Responda hasta 4 preguntas rápidas. Le sugeriremos un programa, y de todos modos puede escoger el que usted quiera.",
      quizStart: "Empezar el cuestionario",
      quizQuestionLabel: "Pregunta {number}",
      quizNext: "Siguiente",
      quizBack: "Atrás",
      quizChooseError: "Escoja una respuesta para continuar.",
      quizResultLabel: "El programa que mejor le queda",
      quizAlsoFit: "También le podría quedar:",
      quizStartChecklist: "Empezar la lista de {program}",
      quizRetake: "Hacer el cuestionario otra vez",

      programsHeading: "Programas en escuelas",
      programsIntro: "Todos los programas se reúnen en una escuela o en un lugar aliado. Escoja uno para ver su lista de pasos.",
      factMentors: "Quién es mentor/a",
      factMentees: "A quién acompañará",
      factWhen: "Cuándo",
      openChecklist: "Abrir la lista de {program}",

      programBrowserTitle: "Lista de pasos para mentores de {program} | Big Brothers Big Sisters of the Greater Sacramento Area",
      programMetaDescription: "Su lista de pasos para ser mentor/a de {program} con Big Brothers Big Sisters of the Greater Sacramento Area.",
      backLink: "Todos los programas",
      programEyebrow: "Sea mentor/a",
      programTagline: "Su lista de pasos para pasar de solicitante a mentor/a.",
      startButton: "Ver los pasos",
      aboutHeading: "Acerca de {program}",
      checklistHeading: "Su lista de pasos",
      draftNotice: "Todavía estamos terminando los pasos de este programa. Escríbanos antes de empezar.",
      introText: "Siga estos pasos en orden. Cada paso se abre cuando marca como terminado el paso anterior.",
      privacyNote: "Este sitio no recopila su información. Sus marcas se guardan solo en este navegador, en este dispositivo. El personal de BBBS guarda su expediente oficial.",
      progress: "{done} de {total} pasos terminados",
      allDone: "¡Terminó todos los pasos! Bienvenido/a a la familia de BBBS.",
      resetButton: "Borrar mi progreso",
      resetConfirm: "¿Desea borrar todas sus marcas de este programa en este dispositivo? No se puede deshacer.",
      storageWarning: "Su navegador no está guardando las marcas en este momento (puede pasar en la navegación privada). Se borrarán cuando cierre esta página.",
      stageLabel: "Etapa {number}",
      stepLabel: "Paso {number}",
      upNext: "Siguiente paso",
      lockedNote: "Primero termine el paso {number}.",
      lockedDoneNote: "Para cambiar este paso, primero quite la marca de los pasos que siguen.",
      whenLabel: "Cuándo:",
      newTab: "(se abre en una pestaña nueva)",
      comingSoon: "El enlace estará disponible pronto. Si lo necesita ahora, comuníquese con nosotros (vea abajo).",
      englishOnly: "Por ahora, la página de este enlace está solo en inglés. Si necesita ayuda, comuníquese con nosotros.",
      stageDone: "Etapa terminada",
      faqHeading: "Preguntas frecuentes",

      contactHeading: "¿Quiere más información?",
      contactIntro: "Con gusto le ayudamos con cualquier paso. También puede responder a cualquier correo electrónico que le enviemos.",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      footer: "Big Brothers Big Sisters of the Greater Sacramento Area. Este sitio no recopila ni guarda su información.",
      loadError: "No se pudo cargar esta página. Intente más tarde o escríbanos para pedir ayuda."
    }
  },

  /* --------------------------------------------------------------
     PROGRAM QUIZ

     Questions are asked in order. Each answer can do one of three things:
       result: "program-id"     ends the quiz with that program
       only: ["id", "id"]       keeps only these programs as options
                                (if one is left, the quiz ends there)
       points: { "id": 2 }      gives points to programs
     The program with the most points wins. Ties go to the program
     listed first in "only".
     -------------------------------------------------------------- */
  quiz: {
    questions: [
      {
        id: "in-high-school",
        en: {
          question: "Are you in high school right now?",
          help: "High school students mentor through High School Bigs. Our other programs are for adults."
        },
        es: {
          question: "¿Está en la preparatoria (high school) ahora?",
          help: "Los estudiantes de preparatoria participan en High School Bigs. Los demás programas son para personas adultas."
        },
        answers: [
          { id: "yes", result: "high-school-bigs", en: "Yes, I’m a high school student", es: "Sí, soy estudiante de preparatoria" },
          { id: "no", only: ["lunch-buddies", "level-up", "big-futures"], en: "No", es: "No" }
        ]
      },
      {
        id: "age-group",
        en: { question: "Which students would you like to mentor?", help: "" },
        es: { question: "¿A qué estudiantes le gustaría acompañar como mentor/a?", help: "" },
        answers: [
          { id: "elementary", only: ["lunch-buddies"], en: "Elementary school students", es: "Estudiantes de primaria" },
          { id: "middle", only: ["level-up"], en: "Middle school students", es: "Estudiantes de secundaria (middle school)" },
          { id: "high", only: ["level-up", "big-futures"], en: "High school students", es: "Estudiantes de preparatoria (high school)" },
          { id: "any", only: ["lunch-buddies", "level-up", "big-futures"], en: "I’m open to any age", es: "Cualquier edad" }
        ]
      },
      {
        id: "focus",
        en: { question: "What would you most like to help a student with?", help: "" },
        es: { question: "¿En qué le gustaría más ayudar a un estudiante?", help: "" },
        answers: [
          { id: "belonging", points: { "lunch-buddies": 2, "level-up": 1 }, en: "Building confidence and feeling like they belong", es: "Ganar confianza y sentirse parte de la escuela" },
          { id: "on-track", points: { "level-up": 2 }, en: "Showing up, staying on track and setting goals", es: "Asistir a clases, mantenerse al día y fijarse metas" },
          { id: "future", points: { "big-futures": 2, "level-up": 1 }, en: "Planning for college and a career", es: "Planear su futuro en la universidad o en una carrera" }
        ]
      },
      {
        id: "format",
        en: { question: "Which kind of meeting sounds best to you?", help: "" },
        es: { question: "¿Qué tipo de reunión prefiere?", help: "" },
        answers: [
          { id: "one-to-one", points: { "lunch-buddies": 1, "level-up": 1 }, en: "One-to-one with the same student, twice a month at school", es: "Individual, con el mismo estudiante, dos veces al mes en la escuela" },
          { id: "group", points: { "big-futures": 2 }, en: "A group session once a month, with other professionals", es: "Una sesión grupal una vez al mes, con otros profesionales" },
          { id: "either", points: {}, en: "Either works for me", es: "Cualquiera de las dos" }
        ]
      }
    ]
  },

  /* --------------------------------------------------------------
     PROGRAMS (shown in this order on the home page)

     Each program has:
     id          Used in its web address: ...?program=lunch-buddies
                 Add &lang=es to open it in Spanish (handy for QR codes).
     theme       Page colors: "green", "light", "forest" or "charcoal".
     draft       true = show a "steps are being finalized" note.
     highlights  Tiles under the program description. icon can be:
                 people, calendar, chat, school, target, heart, loop, cap,
                 briefcase, compass, award, star, clock, trend, book, smile
     stages      Groups of steps, in order.
     steps       Each step's "stage" must match a stage id above it.
                 link: full https:// address, "COMING SOON", or "".
                 englishOnly: true tells Spanish readers the link is in
                 English only.
                 details: optional list of short instructions, shown as
                 bullet points under the description.
     faq         Common questions for that program.
     -------------------------------------------------------------- */
  programs: [

    /* ================================================================
       LUNCH BUDDIES
       ================================================================ */
    {
      id: "lunch-buddies",
      theme: "green",
      draft: false,
      en: {
        name: "Lunch Buddies",
        tagline: "Relationship-Centered Mentoring for Elementary Students",
        summary: "Mentor an elementary student over lunch and help them build confidence and a sense of belonging at school.",
        about: "Lunch Buddies is a site-based mentoring program that connects elementary students with caring mentors who offer encouragement, positive role modeling, and consistent support. Through regular mentoring sessions, students build confidence, strengthen social-emotional skills, and feel a stronger sense of belonging at school.",
        highlightsHeading: "",
        facts: { mentors: "Adults", mentees: "Elementary school students", when: "Twice a month at lunch, during the school day" }
      },
      es: {
        name: "Lunch Buddies",
        tagline: "Mentoría centrada en las relaciones para estudiantes de primaria",
        summary: "Sea mentor/a de un estudiante de primaria a la hora del almuerzo y ayúdele a ganar confianza y sentirse parte de su escuela.",
        about: "Lunch Buddies es un programa de mentoría en las escuelas que une a estudiantes de primaria con mentores que les dan ánimo, un buen ejemplo y apoyo constante. En sesiones regulares, los estudiantes ganan confianza, fortalecen sus habilidades socioemocionales y sienten que forman parte de su comunidad escolar.",
        highlightsHeading: "",
        facts: { mentors: "Personas adultas", mentees: "Estudiantes de primaria", when: "Dos veces al mes a la hora del almuerzo, durante el día escolar" }
      },
      highlights: [
        { icon: "people", en: "One-to-one mentoring with trained and screened mentors", es: "Mentoría individual con mentores capacitados y evaluados" },
        { icon: "calendar", en: "Regular sessions during the school day in a safe, structured setting", es: "Sesiones regulares durante el día escolar, en un ambiente seguro y organizado" },
        { icon: "chat", en: "Activities that build confidence, communication, and positive peer interaction", es: "Actividades que fomentan la confianza, la comunicación y la buena convivencia con los compañeros" },
        { icon: "school", en: "Support that strengthens connection to school and overall well-being", es: "Apoyo que fortalece la conexión con la escuela y el bienestar general" }
      ],
      stages: [
        { id: "application", en: { title: "Application", intro: "Tell us about yourself." }, es: { title: "Solicitud", intro: "Cuéntenos sobre usted." } },
        { id: "interview", en: { title: "Interview", intro: "A short online meeting so we can get to know you." }, es: { title: "Entrevista", intro: "Una reunión breve en línea para conocerle." } },
        {
          id: "welcome",
          en: { title: "Welcome", intro: "Within a week after your application and interview are both done, we’ll email you to let you know if you’re accepted. Accepted volunteers then finish these steps." },
          // SPANISH REVIEW: legal (acceptance)
          es: { title: "Bienvenida", intro: "A más tardar una semana después de que termine su solicitud y su entrevista, le enviaremos un correo electrónico para avisarle si fue aceptado/a. Las personas aceptadas completan después estos pasos." }
        },
        { id: "orientation", en: { title: "Orientation", intro: "Get ready to start mentoring." }, es: { title: "Orientación", intro: "Prepárese para empezar como mentor/a." } },
        { id: "launch-day", en: { title: "Launch Day", intro: "Meet your Little and start mentoring." }, es: { title: "Día de inicio (Launch Day)", intro: "Conozca a su Little (su estudiante) y empiece la mentoría." } }
      ],
      steps: [
        {
          id: "application", stage: "application",
          link: "https://bbbs.tfaforms.net/5007784", linkEs: "", englishOnly: true,
          en: { title: "Complete the volunteer application", when: "", description: "Tell us about yourself. The application also includes the BBBS Code of Conduct, so read it carefully.", linkText: "Open the application" },
          // SPANISH REVIEW: legal (Code of Conduct)
          es: { title: "Complete la solicitud de voluntario/a", when: "", description: "Cuéntenos sobre usted. La solicitud también incluye el Código de Conducta de BBBS, así que léalo con cuidado.", linkText: "Abrir la solicitud" }
        },
        {
          id: "interview", stage: "interview",
          // Marco Ramos's public Microsoft Bookings page. If the interviewer changes, replace this link.
          link: "https://bookings.cloud.microsoft/bookwithme/user/156962517c494942b4e8305270af8ed2@bbbs-sac.org/meetingtype/cerTDQhhNkibRiy_8GZk5Q2?anonymous&ismsaljsauthenabled&ep=mcard",
          linkEs: "", englishOnly: true,
          en: { title: "Book and do your 15-minute virtual interview", when: "Right after you submit your application", description: "Pick a time that works for you. The interview is a short, friendly online meeting so we can get to know you and answer your questions.", linkText: "Book your interview" },
          es: { title: "Programe y haga su entrevista virtual de 15 minutos", when: "Justo después de enviar su solicitud", description: "Escoja una hora que le convenga. La entrevista es una reunión en línea breve y amistosa para conocerle y responder sus preguntas.", linkText: "Programar su entrevista" }
        },
        {
          id: "references", stage: "interview",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Let your references know we’ll contact them", when: "", description: "We’ll reach out to the references you gave us. Let them know to expect a call or email from BBBS so they can reply quickly. We also check the state and federal sex offender registries and public records. You don’t need to do anything for those checks.", linkText: "" },
          // SPANISH REVIEW: legal (registry and public records checks)
          es: { title: "Avise a sus referencias que nos comunicaremos con ellas", when: "", description: "Nos comunicaremos con las referencias que nos dio. Avíseles que recibirán una llamada o un correo electrónico de BBBS para que puedan responder pronto. También revisamos los registros estatales y federales de delincuentes sexuales y los registros públicos. Usted no tiene que hacer nada para esas revisiones.", linkText: "" }
        },
        {
          id: "mandated-reporter", stage: "welcome",
          link: "https://mandatedreportertraining.com/volunteers/",
          linkEs: "", englishOnly: true,
          en: {
            title: "Complete mandated reporter training", when: "After you get your acceptance email",
            description: "This online training takes about 2 hours. It teaches you how to recognize and report suspected child abuse or neglect.",
            details: [
              "Create an account with a valid email address, and save your password.",
              "Confirm your email, then open the training.",
              "Choose the Big Brothers Big Sisters training, not the general volunteer one.",
              "You can pause and come back to finish later.",
              "Finish the assessment at the end, then send us a screenshot of the completed page.",
              "You don’t need to pay for a certificate, unless you want one for your records."
            ],
            linkText: "Open the training"
          },
          // SPANISH REVIEW: legal (mandated reporting)
          es: {
            title: "Complete la capacitación para reporteros obligatorios (mandated reporter)", when: "Después de recibir su correo de aceptación",
            description: "Esta capacitación en línea dura unas 2 horas. Le enseña a reconocer y reportar posibles casos de abuso o negligencia infantil.",
            details: [
              "Cree una cuenta con un correo electrónico válido y guarde su contraseña.",
              "Confirme su correo electrónico y después abra la capacitación.",
              "Escoja la capacitación de Big Brothers Big Sisters, no la de voluntarios en general.",
              "Puede pausarla y volver después para terminarla.",
              "Al final, complete la evaluación y envíenos una captura de pantalla de la página que muestra que la terminó.",
              "No tiene que pagar por un certificado, a menos que quiera uno para sus registros."
            ],
            linkText: "Abrir la capacitación"
          }
        },
        {
          id: "live-scan", stage: "welcome",
          link: "https://www.bbbs-sac.org/resource", // BBBS resources page with the Live Scan Background Check Form
          linkEs: "", englishOnly: true,
          en: { title: "Get fingerprinted with Live Scan", when: "", description: "Live Scan is a fingerprint background check. Every mentor needs one. Download the Live Scan form from our resources page, then take it to a Live Scan location with a photo ID.", linkText: "Get the Live Scan form" },
          // SPANISH REVIEW: legal (fingerprinting and background check)
          es: { title: "Tómese las huellas digitales con Live Scan", when: "", description: "Live Scan es una verificación de antecedentes con huellas digitales. Todos los mentores la necesitan. Descargue el formulario de Live Scan de nuestra página de recursos y llévelo a un lugar de Live Scan junto con una identificación con foto.", linkText: "Obtener el formulario de Live Scan" }
        },
        {
          id: "tb-clearance", stage: "welcome",
          link: "", linkEs: "", englishOnly: true,
          en: { title: "Get your TB clearance", when: "", description: "School volunteers need a tuberculosis (TB) clearance. You can get one from your doctor or a local clinic. We’ll need a copy of your clearance document.", linkText: "" },
          // SPANISH REVIEW: legal (health requirement)
          es: { title: "Obtenga su constancia de tuberculosis (TB clearance)", when: "", description: "Las personas voluntarias en las escuelas necesitan una constancia de tuberculosis (TB). Puede obtenerla con su médico o en una clínica. Necesitaremos una copia de esa constancia.", linkText: "" }
        },
        {
          id: "district-clearance", stage: "welcome",
          link: "COMING SOON", // TODO: school district volunteer clearance packet link
          linkEs: "", englishOnly: true,
          en: { title: "Complete the school district volunteer clearance, if your school needs it", when: "", description: "Some school districts have their own volunteer paperwork and background check. We’ll tell you if your school needs it. If it doesn’t, check this step off.", linkText: "Open the district clearance packet" },
          // SPANISH REVIEW: legal (district background check)
          es: { title: "Complete la autorización para voluntarios del distrito escolar, si su escuela la pide", when: "", description: "Algunos distritos escolares tienen sus propios formularios y su propia verificación de antecedentes para voluntarios. Le diremos si su escuela los pide. Si no los pide, marque este paso como terminado.", linkText: "Abrir los formularios del distrito" }
        },
        {
          id: "orientation", stage: "orientation",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Attend New Volunteer Orientation", when: "We’ll email you the date and details.", description: "Learn what to expect as a mentor and how we keep students safe.", linkText: "" },
          es: { title: "Asista a la orientación para voluntarios nuevos", when: "Le enviaremos la fecha y los detalles por correo electrónico.", description: "Aprenda qué esperar como mentor/a y cómo protegemos a los estudiantes.", linkText: "" }
        },
        {
          id: "schedule", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Confirm your school and lunch schedule", when: "", description: "We’ll confirm your school, the day and time of your lunch sessions, and who to contact at the school.", linkText: "" },
          es: { title: "Confirme su escuela y su horario de almuerzo", when: "", description: "Le confirmaremos su escuela, el día y la hora de sus sesiones de almuerzo y con quién comunicarse en la escuela.", linkText: "" }
        },
        {
          id: "first-session", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Go to your first Lunch Buddies session", when: "As soon as possible after orientation", description: "Meet the student you’ll mentor, your Little, over lunch. After that, BBBS staff will call you regularly to see how things are going.", linkText: "" },
          es: { title: "Vaya a su primera sesión de Lunch Buddies", when: "Lo antes posible después de la orientación", description: "Conozca a la hora del almuerzo al estudiante que va a acompañar como mentor/a: su Little. Después, el personal de BBBS le llamará con regularidad para saber cómo va todo.", linkText: "" }
        }
      ],
      faq: [
        {
          en: { question: "What if I can’t make a mentoring session?", answer: "Tell us as soon as you know you’ll be absent. On mentoring days, BBBS staff work directly with the school and will let you know if your student is absent or the schedule changes." },
          es: { question: "¿Qué pasa si no puedo ir a una sesión de mentoría?", answer: "Avísenos en cuanto sepa que va a faltar. Los días de mentoría, el personal de BBBS coordina directamente con la escuela y le avisará si su estudiante falta o si cambia el horario." }
        }
      ]
    },

    /* ================================================================
       LEVEL UP!   (draft: steps adapted from Lunch Buddies)
       ================================================================ */
    {
      id: "level-up",
      theme: "light",
      draft: true,
      en: {
        name: "Level Up!",
        tagline: "Targeted Mentoring for Student Engagement",
        summary: "Mentor a middle or high school student one-to-one and help them stay on track with attendance, behavior and goals.",
        about: "Level Up! is a one-to-one mentoring program for students who benefit from extra encouragement, accountability, and connection with trusted adults. Bigs help students build confidence, improve attendance, and feel more engaged at school.",
        highlightsHeading: "",
        facts: { mentors: "Adults", mentees: "Middle and high school students", when: "Twice a month during the school day" }
      },
      es: {
        name: "Level Up!",
        tagline: "Mentoría enfocada en el compromiso escolar",
        summary: "Sea mentor/a individual de un estudiante de secundaria o preparatoria y ayúdele a mantenerse al día con su asistencia, su conducta y sus metas.",
        about: "Level Up! es un programa de mentoría individual para estudiantes que se benefician de más ánimo, responsabilidad y conexión con adultos de confianza. Los mentores (Bigs) ayudan a los estudiantes a ganar confianza, mejorar su asistencia y participar más en la escuela.",
        highlightsHeading: "",
        facts: { mentors: "Personas adultas", mentees: "Estudiantes de secundaria y preparatoria", when: "Dos veces al mes durante el día escolar" }
      },
      highlights: [
        { icon: "calendar", en: "Twice-a-month mentoring sessions with trained adult mentors", es: "Sesiones de mentoría dos veces al mes con mentores adultos capacitados" },
        { icon: "target", en: "A focus on attendance, behavior, and goal setting", es: "Enfoque en la asistencia, la conducta y las metas" },
        { icon: "heart", en: "Relationship-centered support", es: "Apoyo centrado en las relaciones" },
        { icon: "loop", en: "Works alongside restorative practices and student support services", es: "Trabaja en conjunto con las prácticas restaurativas y los servicios de apoyo estudiantil" },
        { icon: "cap", en: "College readiness and workforce development", es: "Preparación para la universidad y el mundo laboral" }
      ],
      stages: [
        { id: "application", en: { title: "Application", intro: "Tell us about yourself." }, es: { title: "Solicitud", intro: "Cuéntenos sobre usted." } },
        { id: "interview", en: { title: "Interview", intro: "A short online meeting so we can get to know you." }, es: { title: "Entrevista", intro: "Una reunión breve en línea para conocerle." } },
        {
          id: "welcome",
          en: { title: "Welcome", intro: "Within a week after your application and interview are both done, we’ll email you to let you know if you’re accepted. Accepted volunteers then finish these steps." },
          // SPANISH REVIEW: legal (acceptance)
          es: { title: "Bienvenida", intro: "A más tardar una semana después de que termine su solicitud y su entrevista, le enviaremos un correo electrónico para avisarle si fue aceptado/a. Las personas aceptadas completan después estos pasos." }
        },
        { id: "orientation", en: { title: "Orientation", intro: "Get ready to start mentoring." }, es: { title: "Orientación", intro: "Prepárese para empezar como mentor/a." } },
        { id: "launch-day", en: { title: "Launch Day", intro: "Meet your Little and start mentoring." }, es: { title: "Día de inicio (Launch Day)", intro: "Conozca a su Little (su estudiante) y empiece la mentoría." } }
      ],
      steps: [
        {
          id: "application", stage: "application",
          link: "https://bbbs.tfaforms.net/5007784", // Same form as the QR code on the Level Up! flyer
          linkEs: "", englishOnly: true,
          en: { title: "Complete the volunteer application", when: "", description: "Tell us about yourself. The application also includes the BBBS Code of Conduct, so read it carefully.", linkText: "Open the application" },
          // SPANISH REVIEW: legal (Code of Conduct)
          es: { title: "Complete la solicitud de voluntario/a", when: "", description: "Cuéntenos sobre usted. La solicitud también incluye el Código de Conducta de BBBS, así que léalo con cuidado.", linkText: "Abrir la solicitud" }
        },
        {
          id: "interview", stage: "interview",
          link: "https://bookings.cloud.microsoft/bookwithme/user/156962517c494942b4e8305270af8ed2@bbbs-sac.org/meetingtype/cerTDQhhNkibRiy_8GZk5Q2?anonymous&ismsaljsauthenabled&ep=mcard",
          linkEs: "", englishOnly: true,
          en: { title: "Book and do your 15-minute virtual interview", when: "Right after you submit your application", description: "Pick a time that works for you. The interview is a short, friendly online meeting so we can get to know you and answer your questions.", linkText: "Book your interview" },
          es: { title: "Programe y haga su entrevista virtual de 15 minutos", when: "Justo después de enviar su solicitud", description: "Escoja una hora que le convenga. La entrevista es una reunión en línea breve y amistosa para conocerle y responder sus preguntas.", linkText: "Programar su entrevista" }
        },
        {
          id: "references", stage: "interview",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Let your references know we’ll contact them", when: "", description: "We’ll reach out to the references you gave us. Let them know to expect a call or email from BBBS so they can reply quickly. We also check the state and federal sex offender registries and public records. You don’t need to do anything for those checks.", linkText: "" },
          // SPANISH REVIEW: legal (registry and public records checks)
          es: { title: "Avise a sus referencias que nos comunicaremos con ellas", when: "", description: "Nos comunicaremos con las referencias que nos dio. Avíseles que recibirán una llamada o un correo electrónico de BBBS para que puedan responder pronto. También revisamos los registros estatales y federales de delincuentes sexuales y los registros públicos. Usted no tiene que hacer nada para esas revisiones.", linkText: "" }
        },
        {
          id: "mandated-reporter", stage: "welcome",
          link: "https://mandatedreportertraining.com/volunteers/",
          linkEs: "", englishOnly: true,
          en: {
            title: "Complete mandated reporter training", when: "After you get your acceptance email",
            description: "This online training takes about 2 hours. It teaches you how to recognize and report suspected child abuse or neglect.",
            details: [
              "Create an account with a valid email address, and save your password.",
              "Confirm your email, then open the training.",
              "Choose the Big Brothers Big Sisters training, not the general volunteer one.",
              "You can pause and come back to finish later.",
              "Finish the assessment at the end, then send us a screenshot of the completed page.",
              "You don’t need to pay for a certificate, unless you want one for your records."
            ],
            linkText: "Open the training"
          },
          // SPANISH REVIEW: legal (mandated reporting)
          es: {
            title: "Complete la capacitación para reporteros obligatorios (mandated reporter)", when: "Después de recibir su correo de aceptación",
            description: "Esta capacitación en línea dura unas 2 horas. Le enseña a reconocer y reportar posibles casos de abuso o negligencia infantil.",
            details: [
              "Cree una cuenta con un correo electrónico válido y guarde su contraseña.",
              "Confirme su correo electrónico y después abra la capacitación.",
              "Escoja la capacitación de Big Brothers Big Sisters, no la de voluntarios en general.",
              "Puede pausarla y volver después para terminarla.",
              "Al final, complete la evaluación y envíenos una captura de pantalla de la página que muestra que la terminó.",
              "No tiene que pagar por un certificado, a menos que quiera uno para sus registros."
            ],
            linkText: "Abrir la capacitación"
          }
        },
        {
          id: "live-scan", stage: "welcome",
          link: "https://www.bbbs-sac.org/resource", // BBBS resources page with the Live Scan Background Check Form
          linkEs: "", englishOnly: true,
          en: { title: "Get fingerprinted with Live Scan", when: "", description: "Live Scan is a fingerprint background check. Every mentor needs one. Download the Live Scan form from our resources page, then take it to a Live Scan location with a photo ID.", linkText: "Get the Live Scan form" },
          // SPANISH REVIEW: legal (fingerprinting and background check)
          es: { title: "Tómese las huellas digitales con Live Scan", when: "", description: "Live Scan es una verificación de antecedentes con huellas digitales. Todos los mentores la necesitan. Descargue el formulario de Live Scan de nuestra página de recursos y llévelo a un lugar de Live Scan junto con una identificación con foto.", linkText: "Obtener el formulario de Live Scan" }
        },
        {
          id: "tb-clearance", stage: "welcome",
          link: "", linkEs: "", englishOnly: true,
          en: { title: "Get your TB clearance", when: "", description: "School volunteers need a tuberculosis (TB) clearance. You can get one from your doctor or a local clinic. We’ll need a copy of your clearance document.", linkText: "" },
          // SPANISH REVIEW: legal (health requirement)
          es: { title: "Obtenga su constancia de tuberculosis (TB clearance)", when: "", description: "Las personas voluntarias en las escuelas necesitan una constancia de tuberculosis (TB). Puede obtenerla con su médico o en una clínica. Necesitaremos una copia de esa constancia.", linkText: "" }
        },
        {
          id: "district-clearance", stage: "welcome",
          link: "COMING SOON", // TODO: school district volunteer clearance packet link
          linkEs: "", englishOnly: true,
          en: { title: "Complete the school district volunteer clearance, if your school needs it", when: "", description: "Some school districts have their own volunteer paperwork and background check. We’ll tell you if your school needs it. If it doesn’t, check this step off.", linkText: "Open the district clearance packet" },
          // SPANISH REVIEW: legal (district background check)
          es: { title: "Complete la autorización para voluntarios del distrito escolar, si su escuela la pide", when: "", description: "Algunos distritos escolares tienen sus propios formularios y su propia verificación de antecedentes para voluntarios. Le diremos si su escuela los pide. Si no los pide, marque este paso como terminado.", linkText: "Abrir los formularios del distrito" }
        },
        {
          id: "orientation", stage: "orientation",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Attend New Volunteer Orientation", when: "We’ll email you the date and details.", description: "Learn what to expect as a mentor and how we keep students safe.", linkText: "" },
          es: { title: "Asista a la orientación para voluntarios nuevos", when: "Le enviaremos la fecha y los detalles por correo electrónico.", description: "Aprenda qué esperar como mentor/a y cómo protegemos a los estudiantes.", linkText: "" }
        },
        {
          id: "schedule", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Confirm your school and mentoring schedule", when: "", description: "We’ll confirm your school, the day and time of your sessions, and who to contact at the school.", linkText: "" },
          es: { title: "Confirme su escuela y su horario de mentoría", when: "", description: "Le confirmaremos su escuela, el día y la hora de sus sesiones y con quién comunicarse en la escuela.", linkText: "" }
        },
        {
          id: "first-session", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Meet your Little", when: "As soon as possible after orientation", description: "Meet the student you’ll mentor, your Little. You’ll meet twice a month during the school day, and BBBS staff will check in with you regularly.", linkText: "" },
          es: { title: "Conozca a su Little", when: "Lo antes posible después de la orientación", description: "Conozca al estudiante que va a acompañar como mentor/a: su Little. Se reunirán dos veces al mes durante el día escolar, y el personal de BBBS se comunicará con usted con regularidad.", linkText: "" }
        }
      ],
      faq: [
        {
          en: { question: "What if I can’t make a mentoring session?", answer: "Tell us as soon as you know you’ll be absent. On mentoring days, BBBS staff work directly with the school and will let you know if your student is absent or the schedule changes." },
          es: { question: "¿Qué pasa si no puedo ir a una sesión de mentoría?", answer: "Avísenos en cuanto sepa que va a faltar. Los días de mentoría, el personal de BBBS coordina directamente con la escuela y le avisará si su estudiante falta o si cambia el horario." }
        }
      ]
    },

    /* ================================================================
       BIG FUTURES   (draft: steps need staff review)
       ================================================================ */
    {
      id: "big-futures",
      theme: "forest",
      draft: true,
      en: {
        name: "Big Futures",
        tagline: "Post-secondary and Workforce Readiness",
        summary: "Share your career experience and help high school students plan for college, training and work after graduation.",
        about: "Big Futures helps high school students prepare for life after graduation through mentoring, career exploration, and planning for college or training. The program connects students to a national network of mentors and resources for college and career pathways.",
        highlightsHeading: "",
        facts: { mentors: "Working professionals, often through a partner company", mentees: "High school students", when: "Monthly group sessions led by BBBS staff" }
      },
      es: {
        name: "Big Futures",
        tagline: "Preparación para estudios superiores y el mundo laboral",
        summary: "Comparta su experiencia profesional y ayude a estudiantes de preparatoria a planear sus estudios, su capacitación y su trabajo después de graduarse.",
        about: "Big Futures ayuda a estudiantes de preparatoria a prepararse para la vida después de graduarse, con mentoría, exploración de carreras y planes para la universidad o una capacitación. El programa conecta a los estudiantes con una red nacional de mentores y recursos para su camino universitario y profesional.",
        highlightsHeading: "",
        facts: { mentors: "Profesionales, muchas veces a través de una empresa aliada", mentees: "Estudiantes de preparatoria", when: "Sesiones grupales una vez al mes, dirigidas por el personal de BBBS" }
      },
      highlights: [
        { icon: "briefcase", en: "Career exploration and workforce development", es: "Exploración de carreras y desarrollo laboral" },
        { icon: "compass", en: "Support planning for college and other education after high school", es: "Apoyo para planear la universidad y otros estudios después de la preparatoria" },
        { icon: "award", en: "Access to internships, scholarships, and national BBBS resources", es: "Acceso a prácticas profesionales, becas y recursos nacionales de BBBS" },
        { icon: "people", en: "Guidance from trusted mentors and professional role models", es: "Orientación de mentores de confianza y modelos profesionales a seguir" }
      ],
      stages: [
        { id: "application", en: { title: "Application", intro: "Tell us about yourself." }, es: { title: "Solicitud", intro: "Cuéntenos sobre usted." } },
        { id: "interview", en: { title: "Interview", intro: "A short conversation so we can get to know you." }, es: { title: "Entrevista", intro: "Una conversación breve para conocerle." } },
        {
          id: "welcome",
          en: { title: "Welcome", intro: "We’ll email you to let you know if you’re accepted. Accepted mentors then finish these steps." },
          // SPANISH REVIEW: legal (acceptance)
          es: { title: "Bienvenida", intro: "Le enviaremos un correo electrónico para avisarle si fue aceptado/a. Las personas aceptadas completan después estos pasos." }
        },
        { id: "orientation", en: { title: "Orientation", intro: "Get ready for your first session." }, es: { title: "Orientación", intro: "Prepárese para su primera sesión." } },
        { id: "launch-day", en: { title: "Launch Day", intro: "Start meeting with students." }, es: { title: "Día de inicio (Launch Day)", intro: "Empiece a reunirse con los estudiantes." } }
      ],
      steps: [
        {
          id: "application", stage: "application",
          link: "https://bbbs.tfaforms.net/5007784", // Believed to be the same application as Lunch Buddies. TODO: confirm with Jade
          linkEs: "", englishOnly: true,
          en: { title: "Complete the volunteer application", when: "", description: "Tell us about yourself. The application also includes the BBBS Code of Conduct, so read it carefully.", linkText: "Open the application" },
          // SPANISH REVIEW: legal (Code of Conduct)
          es: { title: "Complete la solicitud de voluntario/a", when: "", description: "Cuéntenos sobre usted. La solicitud también incluye el Código de Conducta de BBBS, así que léalo con cuidado.", linkText: "Abrir la solicitud" }
        },
        {
          id: "interview", stage: "interview",
          // Interviews are with Marco Ramos, same booking page as Lunch Buddies.
          link: "https://bookings.cloud.microsoft/bookwithme/user/156962517c494942b4e8305270af8ed2@bbbs-sac.org/meetingtype/cerTDQhhNkibRiy_8GZk5Q2?anonymous&ismsaljsauthenabled&ep=mcard",
          linkEs: "", englishOnly: true,
          en: { title: "Book and do your 15-minute virtual interview", when: "Right after you submit your application", description: "Pick a time that works for you. The interview is a short, friendly online meeting so we can get to know you and answer your questions.", linkText: "Book your interview" },
          es: { title: "Programe y haga su entrevista virtual de 15 minutos", when: "Justo después de enviar su solicitud", description: "Escoja una hora que le convenga. La entrevista es una reunión en línea breve y amistosa para conocerle y responder sus preguntas.", linkText: "Programar su entrevista" }
        },
        {
          id: "references", stage: "interview",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Let your references know we’ll contact them", when: "", description: "We’ll reach out to the references you gave us. Let them know to expect a call or email from BBBS so they can reply quickly. We also check the state and federal sex offender registries and public records. You don’t need to do anything for those checks.", linkText: "" },
          // SPANISH REVIEW: legal (registry and public records checks)
          es: { title: "Avise a sus referencias que nos comunicaremos con ellas", when: "", description: "Nos comunicaremos con las referencias que nos dio. Avíseles que recibirán una llamada o un correo electrónico de BBBS para que puedan responder pronto. También revisamos los registros estatales y federales de delincuentes sexuales y los registros públicos. Usted no tiene que hacer nada para esas revisiones.", linkText: "" }
        },
        {
          id: "mandated-reporter", stage: "welcome",
          link: "https://mandatedreportertraining.com/volunteers/",
          linkEs: "", englishOnly: true,
          en: {
            title: "Complete mandated reporter training", when: "After you get your acceptance email",
            description: "This online training takes about 2 hours. It teaches you how to recognize and report suspected child abuse or neglect.",
            details: [
              "Create an account with a valid email address, and save your password.",
              "Confirm your email, then open the training.",
              "Choose the Big Brothers Big Sisters training, not the general volunteer one.",
              "You can pause and come back to finish later.",
              "Finish the assessment at the end, then send us a screenshot of the completed page.",
              "You don’t need to pay for a certificate, unless you want one for your records."
            ],
            linkText: "Open the training"
          },
          // SPANISH REVIEW: legal (mandated reporting)
          es: {
            title: "Complete la capacitación para reporteros obligatorios (mandated reporter)", when: "Después de recibir su correo de aceptación",
            description: "Esta capacitación en línea dura unas 2 horas. Le enseña a reconocer y reportar posibles casos de abuso o negligencia infantil.",
            details: [
              "Cree una cuenta con un correo electrónico válido y guarde su contraseña.",
              "Confirme su correo electrónico y después abra la capacitación.",
              "Escoja la capacitación de Big Brothers Big Sisters, no la de voluntarios en general.",
              "Puede pausarla y volver después para terminarla.",
              "Al final, complete la evaluación y envíenos una captura de pantalla de la página que muestra que la terminó.",
              "No tiene que pagar por un certificado, a menos que quiera uno para sus registros."
            ],
            linkText: "Abrir la capacitación"
          }
        },
        {
          id: "live-scan", stage: "welcome",
          link: "https://www.bbbs-sac.org/resource", // BBBS resources page with the Live Scan Background Check Form
          linkEs: "", englishOnly: true,
          en: { title: "Get fingerprinted with Live Scan", when: "", description: "Live Scan is a fingerprint background check. Every mentor needs one. Download the Live Scan form from our resources page, then take it to a Live Scan location with a photo ID.", linkText: "Get the Live Scan form" },
          // SPANISH REVIEW: legal (fingerprinting and background check)
          es: { title: "Tómese las huellas digitales con Live Scan", when: "", description: "Live Scan es una verificación de antecedentes con huellas digitales. Todos los mentores la necesitan. Descargue el formulario de Live Scan de nuestra página de recursos y llévelo a un lugar de Live Scan junto con una identificación con foto.", linkText: "Obtener el formulario de Live Scan" }
        },
        {
          id: "site-requirements", stage: "welcome",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Complete any site requirements", when: "", description: "If your group sessions are held at a school, you may also need a TB clearance or school district paperwork. We’ll tell you what you need. If you don’t need anything, check this step off.", linkText: "" },
          // SPANISH REVIEW: legal (health and district requirements)
          es: { title: "Complete los requisitos del lugar, si hay", when: "", description: "Si sus sesiones grupales son en una escuela, es posible que también necesite una constancia de tuberculosis (TB) o formularios del distrito escolar. Le diremos qué necesita. Si no necesita nada, marque este paso como terminado.", linkText: "" }
        },
        {
          id: "orientation", stage: "orientation",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Attend mentor orientation", when: "We’ll email you the date and details.", description: "Learn how Big Futures sessions work and how we keep students safe.", linkText: "" },
          es: { title: "Asista a la orientación para mentores", when: "Le enviaremos la fecha y los detalles por correo electrónico.", description: "Aprenda cómo funcionan las sesiones de Big Futures y cómo protegemos a los estudiantes.", linkText: "" }
        },
        {
          id: "schedule", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Get your session schedule", when: "", description: "We’ll tell you where and when your monthly group sessions happen.", linkText: "" },
          es: { title: "Reciba su horario de sesiones", when: "", description: "Le diremos dónde y cuándo serán sus sesiones grupales mensuales.", linkText: "" }
        },
        {
          id: "first-session", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Join your first Big Futures session", when: "", description: "BBBS staff lead each monthly session. You’ll share your experience and help high school students explore their next steps after graduation.", linkText: "" },
          es: { title: "Participe en su primera sesión de Big Futures", when: "", description: "El personal de BBBS dirige cada sesión mensual. Usted compartirá su experiencia y ayudará a estudiantes de preparatoria a explorar sus próximos pasos después de graduarse.", linkText: "" }
        }
      ],
      faq: [
        {
          en: { question: "What if I can’t make a session?", answer: "Tell us as soon as you know you’ll miss a session." },
          es: { question: "¿Qué pasa si no puedo ir a una sesión?", answer: "Avísenos en cuanto sepa que va a faltar a una sesión." }
        }
      ]
    },

    /* ================================================================
       HIGH SCHOOL BIGS   (draft: steps need staff review)
       ================================================================ */
    {
      id: "high-school-bigs",
      theme: "charcoal",
      draft: true,
      en: {
        name: "High School Bigs",
        tagline: "Cross-Age Peer Mentoring",
        summary: "For high school students: mentor an elementary student, build leadership skills and give back to your community.",
        about: "High School Bigs is a cross-age mentoring program. High school students serve as positive role models (Bigs) and meet regularly with elementary school students (Littles) to build supportive, consistent relationships.",
        highlightsHeading: "What you’ll gain as a Big",
        facts: { mentors: "High school students", mentees: "Elementary school students", when: "Once a week after school, all school year" }
      },
      es: {
        name: "High School Bigs",
        tagline: "Mentoría entre estudiantes de distintas edades",
        summary: "Para estudiantes de preparatoria: sea mentor/a de un estudiante de primaria, desarrolle su liderazgo y ayude a su comunidad.",
        about: "High School Bigs es un programa de mentoría entre estudiantes de distintas edades. Estudiantes de preparatoria son ejemplos positivos (Bigs) y se reúnen con regularidad con estudiantes de primaria (Littles) para formar relaciones de apoyo constantes.",
        highlightsHeading: "Lo que usted gana como Big",
        facts: { mentors: "Estudiantes de preparatoria", mentees: "Estudiantes de primaria", when: "Una vez por semana después de clases, durante todo el año escolar" }
      },
      highlights: [
        { icon: "star", en: "Leadership skills", es: "Habilidades de liderazgo" },
        { icon: "clock", en: "Community service hours (if your school offers them)", es: "Horas de servicio comunitario (si su escuela las ofrece)" },
        { icon: "award", en: "Scholarship opportunities", es: "Oportunidades de becas" },
        { icon: "book", en: "Tutoring and mentoring experience", es: "Experiencia como tutor/a y mentor/a" },
        { icon: "smile", en: "More self-confidence", es: "Más autoestima" },
        { icon: "trend", en: "Better school attendance and grades", es: "Mejor asistencia y mejores calificaciones" },
        { icon: "people", en: "A chance to join other BBBS activities", es: "Oportunidad de participar en otras actividades de BBBS" },
        { icon: "heart", en: "Giving back to your community", es: "Ayudar a su comunidad" }
      ],
      stages: [
        { id: "sign-up", en: { title: "Sign up", intro: "Tell us you want to be a Big." }, es: { title: "Inscripción", intro: "Díganos que quiere ser Big." } },
        { id: "interview", en: { title: "Interview", intro: "A short, friendly conversation." }, es: { title: "Entrevista", intro: "Una conversación breve y amistosa." } },
        { id: "training", en: { title: "Training", intro: "Learn how to be a great Big." }, es: { title: "Capacitación", intro: "Aprenda a ser un gran Big." } },
        { id: "orientation", en: { title: "Orientation", intro: "Get ready to meet your Little." }, es: { title: "Orientación", intro: "Prepárese para conocer a su Little." } },
        { id: "launch-day", en: { title: "Launch Day", intro: "Meet your Little and start mentoring." }, es: { title: "Día de inicio (Launch Day)", intro: "Conozca a su Little y empiece la mentoría." } }
      ],
      steps: [
        {
          id: "application", stage: "sign-up",
          link: "COMING SOON", // TODO: High School Bigs application link
          linkEs: "", englishOnly: true,
          en: { title: "Complete the High School Bigs application", when: "", description: "Tell us about yourself and your school.", linkText: "Open the application" },
          es: { title: "Complete la solicitud de High School Bigs", when: "", description: "Cuéntenos sobre usted y su escuela.", linkText: "Abrir la solicitud" }
        },
        {
          id: "parent-permission", stage: "sign-up",
          link: "COMING SOON", // TODO: parent or guardian permission form
          linkEs: "", englishOnly: true,
          en: { title: "Get permission from a parent or guardian", when: "If you’re under 18", description: "A parent or guardian needs to sign a permission form. If you’re 18 or older, check this step off.", linkText: "Open the permission form" },
          // SPANISH REVIEW: legal (parent consent)
          es: { title: "Pida permiso a su madre, padre o tutor/a", when: "Si tiene menos de 18 años", description: "Su madre, padre o tutor/a debe firmar un formulario de permiso. Si tiene 18 años o más, marque este paso como terminado.", linkText: "Abrir el formulario de permiso" }
        },
        {
          id: "interview", stage: "interview",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Meet with BBBS staff", when: "", description: "We’ll email you to set up a short conversation so we can get to know you and answer your questions.", linkText: "" },
          es: { title: "Reúnase con el personal de BBBS", when: "", description: "Le enviaremos un correo electrónico para programar una conversación breve, para conocerle y responder sus preguntas.", linkText: "" }
        },
        {
          id: "references", stage: "interview",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Let your references know we’ll contact them", when: "", description: "We’ll reach out to the references you gave us. Let them know to expect a call or email from BBBS so they can reply quickly.", linkText: "" },
          es: { title: "Avise a sus referencias que nos comunicaremos con ellas", when: "", description: "Nos comunicaremos con las referencias que nos dio. Avíseles que recibirán una llamada o un correo electrónico de BBBS para que puedan responder pronto.", linkText: "" }
        },
        {
          id: "big-training", stage: "training",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Complete your Big training", when: "", description: "Learn how to be a positive role model, plan fun activities, and keep Littles safe, including how to tell a trusted adult about any concerns.", linkText: "" },
          // SPANISH REVIEW: legal (safety reporting)
          es: { title: "Complete su capacitación como Big", when: "", description: "Aprenda a ser un ejemplo positivo, a planear actividades divertidas y a proteger a los Littles, incluyendo cómo avisar a un adulto de confianza si algo le preocupa.", linkText: "" }
        },
        {
          id: "school-requirements", stage: "training",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Complete any school requirements", when: "", description: "Some schools need extra paperwork, like a TB clearance. We’ll tell you what your school needs. If it doesn’t need anything, check this step off.", linkText: "" },
          // SPANISH REVIEW: legal (health and school requirements)
          es: { title: "Complete los requisitos de la escuela, si hay", when: "", description: "Algunas escuelas piden formularios adicionales, como una constancia de tuberculosis (TB). Le diremos qué necesita su escuela. Si no necesita nada, marque este paso como terminado.", linkText: "" }
        },
        {
          id: "orientation", stage: "orientation",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Attend orientation", when: "We’ll email you the date and details.", description: "Learn what to expect as a Big and how sessions with your Little work.", linkText: "" },
          es: { title: "Asista a la orientación", when: "Le enviaremos la fecha y los detalles por correo electrónico.", description: "Aprenda qué esperar como Big y cómo funcionan las sesiones con su Little.", linkText: "" }
        },
        {
          id: "schedule", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Get your school and schedule", when: "", description: "We’ll tell you which elementary school you’ll visit and your weekly after-school time.", linkText: "" },
          es: { title: "Reciba su escuela y su horario", when: "", description: "Le diremos a qué escuela primaria irá y su horario semanal después de clases.", linkText: "" }
        },
        {
          id: "first-session", stage: "launch-day",
          link: "", linkEs: "", englishOnly: false,
          en: { title: "Meet your Little", when: "", description: "You’ll meet once a week after school for group activities with your Little, all school year.", linkText: "" },
          es: { title: "Conozca a su Little", when: "", description: "Se reunirán una vez por semana después de clases para hacer actividades en grupo con su Little, durante todo el año escolar.", linkText: "" }
        }
      ],
      faq: [
        {
          en: { question: "Can I earn community service hours?", answer: "It depends on your school. Ask us and your school counselor what counts." },
          es: { question: "¿Puedo ganar horas de servicio comunitario?", answer: "Depende de su escuela. Pregúntenos a nosotros y a su consejero/a escolar qué cuenta." }
        },
        {
          en: { question: "What if I can’t make a session?", answer: "Tell us as soon as you know you’ll be absent, so we can plan for your Little." },
          es: { question: "¿Qué pasa si no puedo ir a una sesión?", answer: "Avísenos en cuanto sepa que va a faltar, para que podamos organizarnos con su Little." }
        }
      ]
    }
  ]
};
