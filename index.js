// Aos for moving the elements around
AOS.init();

document.addEventListener('DOMContentLoaded', (event) => {
    const switchInput = document.querySelector('.switchInput');
    switchInput.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  });

  const languageData = {
    en: {
      changingText: [
        "Hi there! &#x1F44B;",
        "I'm Asem <span class='blue-text'>Yaseen</span>",
        "I'm a Web <span class='blue-text'>Developer</span>",
        "<span class='textSizeDown'>Let's build something <span class='blue-text'>GREAT</span> together!</span>"
      ],
      whyMe: "Why me?",
      badHabits: "Bad habits",
      projects: "Projects",
      contact: "Contact",
      Easy:"Easy to deal with !",
      Simple:"Simple communication, clear plans, and efficient discussions.",
      Works:"Works with dedication !",
      Dedicated:"Dedicated to your project's success, treating it with the same passion as my own.",
      Values:"Values your time !",
      William:"”Better three hours too soon than a minute too late.” — William Shakespeare",
      yourWay:"Builds it your way !",
      Crafting:"Crafting solutions tailored to your preferences and vision.",
      // Bad Habits 
      Exceeding:"Exceeding Expectations:",
      dontLike:"I may want your project to succeed more than you do, and some people don't like that!",
      Unsolicited:"Offering Unsolicited Advice:",
      advice:"I may give you advice you did not ask for, such as how to save money or suggestions to make your project better !",
      Space:"Space consumer:",
      alwaysWork:"You may always work with me, and this means that I will occupy additional space between your contacts!",
      Different:"Different from society :",
      additional:"I may do additional free things, while this is unacceptable because society is accustomed to paying for everything !",
      // Projects
      someProjects:"Some projects I worked on :",
      BrightEyes: "3- <span class='projects-span'>Bright Eye</span> : Eyeglasses online store",
      FieldsCorners: "4- <span class='projects-span'>Fields Corners</span> : Stadium reservations website",
      CoachTick: "5- <span class='projects-span'>Coach Tick</span>: School attendance and students manager website",
      MiskSoftERP: "6- <span class='projects-span'>Misk Soft - ERP system</span>: worked on an ERP system, building some parts of its front and backend",
      haveLook:"And there is much more! , You can have a look at some of my projects down here:",
      TravelersDes:"It is a website where you choose your budget and the number of days you will spend in a specific city, and it will suggest to you the best places for rent, food, and entertainment according to that budget.",
      FieldsDes:"It is a site through which reservations are made for the various available fields, such as football fields, basketball fields, golf courses, or even swimming pools.",
      KolDes:"It is a large website that allows you to collect all online stores in one place, and I am currently working on it.",
      // Contact
      contactMessage:"I know that together we will build something that we can both be proud of, so do not hesitate to contact me to make your idea a reality.",
      letsTalk: "LET'S TALK !",
      copyWrite:"© 2024 Copyright: AsemYassen"

    },
    ar: {
      changingText: [
        "مرحبًا! &#x1F44B;",
        "أنا عاصم <span class='blue-text'>ياسين</span>",
        "أنا مطور <span class='blue-text'>ويب</span>",
        "<span class='textSizeDown'>لنبني شيئًا <span class='blue-text'>عظيمًا</span> معًا!</span>"
      ],
      whyMe: "لماذا أنا؟",
      badHabits: "عادات سيئة",
      projects: "المشاريع",
      contact: "تواصل معي",
      Easy: "سهولة التعامل معي",
      Simple:"تواصل بسيط وخطط واضحة ومناقشات فعالة",
      Works:"أعمل بتفان !",
      Dedicated:"أكرس نفسي لنجاح مشروعك ,اعمل عليه كما لو كان لي !",
      Values:"أقدر وقتك !",
      William: "'ثلاث ساعات مبكرة جدًا أفضل من دقيقة واحدة متأخرة جدًا.' - وليام شكسبير",
      yourWay: "ابنيه على طريقتك !",
      Crafting: "صياغة حلول مصممة خصيصًا لتفضيلاتك ورؤيتك",
      // Bad Habits 
      Exceeding: "يفوق التوقعات",
      dontLike: "قد أرغب في نجاح مشروعك أكثر منك، والبعض لا يعجبه ذلك!",
      Unsolicited:"تقديم نصائح لم تطلبها",
      advice:"قد أقدم لك نصيحة لم تطلبها، مثل كيفية توفير المال أو اقتراحات لجعل مشروعك أفضل!",
      Space: "مستهلك للمساحة",
      alwaysWork: "سوف ترغب بالعمل معي دائمًا، وهذا يعني أنني سأشغل مساحة إضافية بين جهات الاتصال الخاصة بك!",
      Different:"مختلف عن المجتمع",
      additional:"قد أقوم بأشياء إضافية مجانية، في حين أن هذا غير مقبول لأن المجتمع اعتاد على دفع ثمن كل شيء!",
      // Projects
      someProjects: "بعض المشاريع التي عملت عليها :",
      BrightEyes: "3- <span class='projects-span'>Bright Eye</span> : متجر نظارات على الإنترنت",
      FieldsCorners: "4- <span class='projects-span'>Fields Corners</span> : موقع حجوزات الملاعب",
      CoachTick: "5- <span class='projects-span'>Coach Tick</span>: موقع إدارة الحضور ادارة الطلاب للمدارس",
      MiskSoftERP: "6- <span class='projects-span'>Misk Soft - ERP system</span>: عملت على نظام ERP، بناء بعض أجزاء واجهته الأمامية والخلفية",
      haveLook: "وهناك ما هو أكثر من ذلك بكثير! ، يمكنك إلقاء نظرة على بعض مشاريعي هنا:",
      TravelersDes:"هو موقع تختار فيه ميزانيتك وعدد الأيام التي ستقضيها في مدينة معينة، وسيقترح عليك أفضل الأماكن للإيجار والطعام والترفيه حسب تلك الميزانية.",
      FieldsDes: "وهو موقع يتم من خلاله حجز المجالات المختلفة المتوفرة مثل ملاعب كرة القدم أو ملاعب كرة السلة أو ملاعب الجولف أو حتى حمامات السباحة.",
      KolDes: "هو موقع كبير يتيح لك جمع كل المتاجر الإلكترونية في مكان واحد، وأنا أعمل عليه حالياً.",
      // Contact
      contactMessage:"أعلم أننا معًا سنبني شيئًا يمكننا أن نفخر به، لذا لا تتردد في الاتصال بي لتحويل فكرتك إلى حقيقة.",
      letsTalk:"لنتحدث !",
      copyWrite: "جميع الحقوق محفوظة Asem Yaseen@ 2024",
    }
  };
  let typed; // Holds the instance of Typed

  function initTyped(textsArray) {
    const changingTextElement = document.getElementById('changingText');
    if (typed) typed.destroy(); // Destroy the previous instance if it exists
    typed = new Typed(changingTextElement, {
      strings: textsArray,
      typeSpeed: 30, // Typing speed
      backSpeed: 30, // Backspacing speed
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing
      loop: true, // Infinite loop
      loopCount: Infinity, // Number of loops
    });
  }
  
  function changeLanguage(lang) {
    const headerNameElement = document.querySelector('.HeaderName');
    // Update classes for RTL support and typography changes
    if (lang === 'ar') {
        headerNameElement.classList.add('lang-ar', 'textSizeUp', 'marhey');
        headerNameElement.classList.remove('madimi-one-regular', 'textSizeDown');
    } else {
        headerNameElement.classList.remove('lang-ar', 'textSizeUp', 'marhey');
        headerNameElement.classList.add('madimi-one-regular', 'textSizeDown');
    }

    // Reinitialize the typed animation
    const changingTextArray = languageData[lang].changingText;
    initTyped(changingTextArray);

    // Update all elements that have a language key attribute
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (languageData[lang] && languageData[lang][key]) {
            // If the element's content is expected to contain HTML (like Bright Eyes), use innerHTML
            if (elem.hasAttribute('data-contains-html')) {
                elem.innerHTML = languageData[lang][key];
            } else {
                // Otherwise, if it's just text, use textContent
                elem.textContent = languageData[lang][key];
            }
        } else {
            console.error(`Translation for the key '${key}' not found for language '${lang}'.`);
        }
    });

    // Update text direction and language attribute accordingly
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang; 
}

// Initialize the text when the page content has finished loading
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('en');
});