import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  cs: {
    translation: {
      nav: {
        projects: "Projekty",
        education: "Vzdělání",
        experience: "Zkušenosti",
        techStack: "Tech Stack",
        contact: "Kontakt"
      },
      hero: {
        badge: "Jan Přikryl",
        titleRole: "Frontend Developer",
        titleExp: "s víc než 2,5 lety zkušeností",
        bio: "Vítám tě na svém webu. Jsem student, programátor a rád se učím novým věcem.",
        viewProjects: "Prohlédnout projekty",
        more: "Další"
      },
      stats: {
        expLabel: "Let zkušeností",
        projectsLabel: "Projektů & aplikací",
        locationLabel: "Lokalita (ČR)",
        locationValue: "Ostrava / Olomouc",
        langLabel: "Jazykové znalosti",
        langValue: "CZ / EN"
      },
      experience: {
        badge: "Pracovní Zkušenosti",
        title: "Pracovní Historie",
        subtitle: "Přehled dosavadních pracovních zkušeností a projektových rolí.",
        present: "současnost",
        itixoRole: "Frontend developer (React)",
        itixoDesc1: "Vývoj moderních webových aplikací v knihovně React",
        itixoDesc2: "Návrh a implementace uživatelských rozhraní",
        itnetworkRole: "Redaktor / Autor IT článků",
        itnetworkDesc: "Psaní výukových článků a návodů z oblasti IT a programování",
        wernherdRole: "Vývojář & IT Technik",
        wernherdDesc1: "Programování mobilních aplikací pro systém Android",
        wernherdDesc2: "Programování mikrokontrolerů Arduino",
        wernherdDesc3: "Oprava a diagnostika akumulátorů",
        smrziceRole: "Technická podpora & údržba",
        smrziceDesc: "Zahradnické práce a údržba veřejné zeleně",
        arboekoRole: "Zahradní pracovník",
        arboekoDesc: "Péče o zeleň a zahradnické práce",
        taborRole: "Vedoucí na táboře",
        taborDesc: "Organizování programů a péče o děti"
      },
      education: {
        badge: "Vzdělání",
        title: "Dosažené vzdělání",
        current: "Probíhající",
        vsbSchool: "Vysoká škola báňská - Technická univerzita Ostrava",
        ingDegree: "Inženýr (Ing.)",
        bcDegree: "Bakalář (Bc.)",
        spseSchool: "Vyšší odborná škola a Střední průmyslová škola elektrotechnická",
        maturitaDegree: "Maturita",
        electrotechnics: "Elektrotechnika",
        infoScience: "Information Science/Studies"
      },
      techStack: {
        badge: "Technologie",
        title: "Technologie & Nástroje",
        more: "A další",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          tools: "Nástroje",
          "hosting & deployment": "Hosting & Deployment"
        }
      },
      projects: {
        badge: "Portfolio",
        title: "Vybrané Projekty",
        all: "Vše",
        webs: "Weby",
        apps: "Aplikace",
        others: "Ostatní",
        detail: "Detail projektu",
        back: "Zpět na přehled projektů",
        repo: "Zobrazit repozitář na GitHubu",
        loading: "Načítání projektů...",
        error: "Nepodařilo se načíst projekty z API.",
        detailLoading: "Načítání detailu projektu...",
        detailError: "Nepodařilo se načíst detaily projektu.",
        screenshots: "Snímky obrazovky",
        moreProjects: "Další projekty na GitHubu",
        showAll: "Zobrazit všech {{count}} projektů",
        showLess: "Zobrazit méně projektů"
      },
      contact: {
        badge: "Kontakt",
        title: "Napište mi zprávu",
        subtitle: "Rád si promluvím o vašem projektu, ať už se jedná o nový web, aplikaci, nebo vývoj na zakázku.",
        socials: "Sociální sítě & profily",
        name: "Jméno",
        namePlaceholder: "Jan Novák",
        nameRequired: "Jméno je povinné",
        email: "Email",
        emailPlaceholder: "jan@example.com",
        emailRequired: "Email je povinný",
        emailInvalid: "Zadejte platnou emailovou adresu",
        subject: "Předmět",
        subjectPlaceholder: "Předmět zprávy",
        subjectRequired: "Předmět je povinný",
        message: "Zpráva",
        messagePlaceholder: "Vaše zpráva...",
        messageRequired: "Zpráva nemůže být prázdná",
        send: "Odeslat zprávu",
        sending: "Odesílám...",
        success: "Zpráva byla úspěšně odeslána!",
        error: "Odeslání zprávy selhalo. Zkuste to prosím znovu."
      },
      footer: {
        copyright: "© {{year}} Jan Přikryl"
      }
    }
  },
  en: {
    translation: {
      nav: {
        projects: "Projects",
        education: "Education",
        experience: "Experience",
        techStack: "Tech Stack",
        contact: "Contact"
      },
      hero: {
        badge: "Jan Přikryl",
        titleRole: "Frontend Developer",
        titleExp: "with over 2.5 years of experience",
        bio: "Welcome to my website. I am a student, programmer, and I love learning new things.",
        viewProjects: "View Projects",
        more: "More"
      },
      stats: {
        expLabel: "Years of Experience",
        projectsLabel: "Projects & Apps",
        locationLabel: "Location (CZ)",
        locationValue: "Ostrava / Olomouc",
        langLabel: "Language Skills",
        langValue: "CZ / EN"
      },
      experience: {
        badge: "Work Experience",
        title: "Work History",
        subtitle: "Overview of career experience and project roles.",
        present: "present",
        itixoRole: "Frontend developer (React)",
        itixoDesc1: "Development of modern web applications using React",
        itixoDesc2: "Design and implementation of user interfaces",
        itnetworkRole: "Editor / IT Author",
        itnetworkDesc: "Writing educational articles and tutorials on IT and programming",
        wernherdRole: "Developer & IT Technician",
        wernherdDesc1: "Programming mobile applications for Android",
        wernherdDesc2: "Programming Arduino microcontrollers",
        wernherdDesc3: "Battery diagnostics and repair",
        smrziceRole: "Technical Support & Maintenance",
        smrziceDesc: "Gardening and public greenery maintenance",
        arboekoRole: "Gardener",
        arboekoDesc: "Greenery care and gardening jobs",
        taborRole: "Camp Counselor",
        taborDesc: "Organizing activities and childcare at summer camps"
      },
      education: {
        badge: "Education",
        title: "Education",
        subtitle: "Overview of academic and professional education.",
        current: "Ongoing",
        vsbSchool: "VŠB - Technical University of Ostrava",
        ingDegree: "Master's Degree (Ing.)",
        bcDegree: "Bachelor's Degree (Bc.)",
        spseSchool: "Higher Vocational & Secondary Industrial School of Electrical Engineering",
        maturitaDegree: "High School Diploma",
        electrotechnics: "Electrical Engineering",
        infoScience: "Information Science/Studies"
      },
      techStack: {
        badge: "Technologies",
        title: "Technologies & Tools",
        more: "And more",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          tools: "Tools",
          "hosting & deployment": "Hosting & Deployment"
        }
      },
      projects: {
        badge: "Portfolio",
        title: "Featured Projects",
        all: "All",
        webs: "Websites",
        apps: "Applications",
        others: "Others",
        detail: "Project Detail",
        back: "Back to Projects",
        repo: "View Repository on GitHub",
        loading: "Loading projects...",
        error: "Failed to load projects from API.",
        detailLoading: "Loading project details...",
        detailError: "Failed to load project details.",
        screenshots: "Screenshots",
        moreProjects: "More projects on GitHub",
        showAll: "Show all {{count}} projects",
        showLess: "Show fewer projects"
      },
      contact: {
        badge: "Contact",
        title: "Send Me a Message",
        subtitle: "I would love to talk about your project, whether it's a new website, app, or custom development.",
        socials: "Social Networks & Profiles",
        name: "Name",
        namePlaceholder: "John Doe",
        nameRequired: "Name is required",
        email: "Email",
        emailPlaceholder: "john@example.com",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        subject: "Subject",
        subjectPlaceholder: "Message subject",
        subjectRequired: "Subject is required",
        message: "Message",
        messagePlaceholder: "Your message...",
        messageRequired: "Message cannot be empty",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      footer: {
        copyright: "© {{year}} Jan Přikryl"
      }
    }
  }
};

const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "cs" : "cs";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
