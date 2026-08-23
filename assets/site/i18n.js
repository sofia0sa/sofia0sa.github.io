(function () {
  "use strict";

  var phraseTranslations = {
    "Início": "Home", "Música": "Music", "Produção Musical": "Music Production", "Trabalhos do Curso": "Coursework", "Canções Originais": "Original Songs", "Piano & Canto": "Piano & Singing", "Performances": "Performances", "Outros Instrumentos": "Other Instruments", "Diplomas & Certificados": "Diplomas & Certificates", "Dança": "Dance", "Teatro": "Theatre", "Fotografia": "Photography", "Enquanto Fotógrafa": "As a Photographer", "Enquanto Modelo": "As a Model", "Contacto": "Contact", "Contacta-me": "Get in touch", "Ver mais": "View more", "Ver Portfólio": "View portfolio", "Áreas de interesse": "Areas of interest", "Desce para explorar": "Scroll to explore", "Galeria": "Gallery", "Secção": "Section", "Arquivo": "Archive", "Experiência Profissional": "Professional Experience", "Exemplos de trabalhos creditados": "Selected credits", "Modelo": "Model", "Teatro e Representação": "Theatre and Acting", "Representação e Teatro": "Acting and Theatre", "Engenharia Informática": "Computer Engineering", "Percurso académico": "Academic journey", "Licenciatura": "Bachelor's degree", "Mestrado": "Master's degree", "Continuação": "Further studies", "Média do curso": "Course average", "presente": "present", "Vídeo": "Video", "Vídeo 01": "Video 01", "Vídeo 02": "Video 02", "Vídeo 03": "Video 03", "Vídeo 04": "Video 04", "Estúdio": "Studio", "Peça": "Play", "Sessão de estúdio": "Studio session", "Sessões fotográficas.": "Photo sessions.", "Aulas de teatro, peças, curtas-metragens e videoclips.": "Theatre classes, plays, short films and music videos.", "Abrir em nova aba": "Open in new tab", "Fechar": "Close", "Documento": "Document", "Este vídeo será adicionado em breve.": "This video will be added soon.", "Abrir menu": "Open menu", "Menu": "Menu", "Produção": "Production", "Canções": "Songs", "Instrumentos": "Instruments", "Diplomas": "Diplomas", "Ver mais": "View more", "Fotografia Amadora & Modelo": "Amateur Photography & Model",
    "Portfólio multidisciplinar de: ": "Multidisciplinary portfolio in: ", "O meu percurso na produção musical começa em": "My journey in music production began in", "Desde os 8 anos": "Since the age of 8", "aos 5 anos": "at the age of 5", "aos 14 anos": "at the age of 14", "aos 13": "at 13", "em breve": "soon", "Opção": "Elective", "1.º sem": "1st semester", "2.º sem": "2nd semester", "Trabalho Prático": "Practical Assignment", "Projeto final": "Final project", "Curso": "Course", "Produção": "Production", "Mistura": "Mixing", "Gravação": "Recording", "Design de Som": "Sound Design", "Composição": "Composition", "Arranjo": "Arrangement", "Contemporâneo": "Contemporary", "Comercial": "Commercial", "Grupo": "Group", "pavão": "peacock", "Engenharia": "Engineering", "Computação": "Computing", "Segurança Informática": "Information Security", "Interação Pessoa Computador": "Human-Computer Interaction", "Laboratório": "Laboratory", "Fundamentos": "Fundamentals", "Análise": "Analysis", "Matemática": "Mathematics", "Programação": "Programming", "Física": "Physics", "Teoria": "Theory", "Inteligência Artificial": "Artificial Intelligence", "Software": "Software", "Dados": "Data", "Sistemas": "Systems", "Redes": "Networks", "Gestão": "Management", "Serviços": "Services"
  };

  var fullTranslations = {
    "Sofia Sá - Portfólio Artístico": "Sofia Sá - Artistic Portfolio",
    "Sofia Sá - Música": "Sofia Sá - Music",
    "Sofia Sá - Dança": "Sofia Sá - Dance",
    "Sofia Sá - Teatro e Representação": "Sofia Sá - Theatre and Acting",
    "Sofia Sá — Fotografia": "Sofia Sá — Photography",
    "Sofia Sá - Engenharia Informática · FEUP": "Sofia Sá - Computer Engineering · FEUP",
    "O perfecionismo é": "Perfectionism is",
    "Desde os 8 anos que a dança é uma das minhas paixões, tendo explorado sobretudo as vertendes de Hip Hop, Comercial, Girlie e Contemporâneo. As minhas aulas de dança tomaram lugar, inicialmente, na Associação ANOZ, mais tarde na escola Turning Point em São João da Madeira e, atualmente, na PortDance Studios, no Porto. Participei e fui inclusivamente premiada em vários espetáculos de dança.": "Dance has been one of my passions since the age of eight. I have mainly explored Hip Hop, Commercial, Girlie and Contemporary. I first took classes at Associação ANOZ, later at Turning Point in São João da Madeira, and currently at PortDance Studios in Porto. I have taken part in and received awards at several dance showcases.",
    "Comecei no teatro no Grupo Teatral da FEUP, em 2022, com a formadora Joana Moraes. Participei também num workshop de representação com o ator Rui Santos e numa formação de teatro com a atriz Sandra Dias Pereira. Desde então, a representação em câmara também surgiu naturalmente, tomando presença em diversos projetos, desde projetos de teor académico a videoclips e publicidades.": "I started theatre with Grupo Teatral da FEUP in 2022, working with tutor Joana Moraes. I also took an acting workshop with actor Rui Santos and theatre training with actress Sandra Dias Pereira. Since then, acting for camera has emerged naturally, featuring in projects ranging from academic work to music videos and advertising.",
    "Peças dirigidas pela formadora Joana Moraes. Toca num cartão para ver a peça no leitor.": "Plays directed by tutor Joana Moraes. Select a card to watch it in the player.",
    "O meu interesse pela fotografia surgiu aos 14 anos, com a minha primeira câmara, e ganhou dedicação aos 18. Hoje é mais uma das minhas expressões artísticas, integrando um clube de fotografia amador com encontros mensais no distrito do Porto. Ao lado da câmara, a fotografia surge também do outro lado da câmara, em sessões como modelo.": "My interest in photography began at 14, with my first camera, and became a serious pursuit at 18. Today it is another of my artistic forms of expression; I am part of an amateur photography club with monthly meetings in the Porto district. Alongside being behind the camera, I also work in front of it in modelling sessions.",
    "Aos 3 anos, comecei a desfilar para uma marca de roupa local, MARKA. Ao longo do meu crescimento, a fotografia tornou-se uma extensão natural do meu percurso artístico.": "At the age of three, I began modelling for the local clothing brand MARKA. As I grew up, photography became a natural extension of my artistic journey.",
    "Estou sempre aberta a novos convites, oportunidades e colaborações. Se tens um projeto em mente e gostavas de trabalhar comigo, não hesites em entrar em contacto comigo pelas redes sociais ou pelo seguinte formulário!": "I am always open to new invitations, opportunities and collaborations. If you have a project in mind and would like to work with me, please get in touch through social media or the form below!",
    "Licenciatura em Engenharia Informática e Computação, a par do meu percurso artístico. Um contraponto de rigor e lógica que complementa a minha criatividade.": "A Bachelor's degree in Computer Engineering alongside my artistic journey. A counterpoint of rigour and logic that complements my creativity.",
    "Mestrado em Engenharia de Serviços e Gestão. Concluí o 1.º ano; o 2.º ano decorre em breve.": "Master's degree in Service and Management Engineering. I have completed the first year; the second year is coming soon.",
    "Participei em várias campanhas da marca": "I took part in several campaigns for the brand",
    "Ainda vais a tempo de acabar o ano com um casaco 100% animal-free": "There is still time to end the year with a 100% animal-free coat",
    "Presentes sem penas, sem pele, sem culpa": "Gifts without feathers, leather or guilt",
    "Protege-te melhor e escolhe melhor": "Protect yourself better and choose better",
    "Ainda vais a tempo de dizer não à pele e ao pelo": "There is still time to say no to leather and fur",
    "Nome Sobrenome": "First Last", "Resumo da Mensagem": "Message Summary", "Escreve aqui o conteúdo da tua mensagem...": "Write your message here...", "Enviar Email": "Send Email", "Endereço de Email": "Email Address", "Outras plataformas": "Other platforms",
    "Comecei na música aos 5 anos, ao piano, e a cantar pouco depois. Completei o 8.º grau de piano na Academia de Música de São João da Madeira e, aos 13, comecei a escrever as minhas próprias canções, atualmente lançadas em todas as plataformas.": "I started making music at the age of five, playing piano, and began singing soon after. I completed the 8th piano grade at the Academia de Música de São João da Madeira and, at 13, began writing my own songs, now released on all platforms.",
    "Em 2024, iniciei o Curso de Produção Musical na Rockschool Porto, e integro hoje a equipa de produção do produtor João André.": "In 2024, I began the Music Production Course at Rockschool Porto, and I am now part of producer João André's production team.",
    "Desde os 8 anos que exploro a dança em diferentes estilos - Hip Hop, Comercial e Contemporâneo - tendo participado e sido premiada em diversos espetáculos.": "Since the age of eight, I have explored dance in different styles - Hip Hop, Commercial and Contemporary - taking part in and receiving awards at several showcases.",
    "O meu interesse pela fotografia surgiu aos 14 anos, com a minha primeira câmara, e ganhou dedicação aos 18.": "My interest in photography began at 14, with my first camera, and became a serious pursuit at 18.",
    "Desde os 8 anos que a dança é uma das minhas paixões": "Dance has been one of my passions since the age of eight",
    "Do piano à produção musical, da composição ao palco. A música sempre fez parte da minha vida.": "From piano to music production, from composition to the stage. Music has always been part of my life."
  };

  var originals = new WeakMap();
  var phraseKeys = Object.keys(phraseTranslations).sort(function (a, b) { return b.length - a.length; });

  function translateText(text) {
    var value = fullTranslations[text.trim()];
    if (value) return text.replace(text.trim(), value);
    var result = text;
    phraseKeys.forEach(function (key) {
      result = result.split(key).join(phraseTranslations[key]);
    });
    return result;
  }

  function translate(root) {
    var isEnglish = document.documentElement.getAttribute("data-language") === "en";
    (root || document).querySelectorAll("*:not(script):not(style)").forEach(function (element) {
      Array.prototype.slice.call(element.childNodes).forEach(function (node) {
        if (node.nodeType !== 3 || !node.nodeValue.trim()) return;
        if (!originals.has(node)) originals.set(node, node.nodeValue);
        node.nodeValue = isEnglish ? translateText(originals.get(node)) : originals.get(node);
      });
    });
    (root || document).querySelectorAll("[alt], [title], [aria-label], [data-title], [placeholder], [data-placeholder]").forEach(function (element) {
      ["alt", "title", "aria-label", "data-title", "placeholder", "data-placeholder"].forEach(function (attribute) {
        if (!element.hasAttribute(attribute)) return;
        var key = attribute + "Original";
        if (!element.dataset[key]) element.dataset[key] = element.getAttribute(attribute);
        element.setAttribute(attribute, isEnglish ? translateText(element.dataset[key]) : element.dataset[key]);
      });
    });
  }

  function setLanguage(language) {
    document.documentElement.setAttribute("data-language", language);
    document.documentElement.lang = language === "en" ? "en" : "pt";
    localStorage.setItem("sofia-language-v2", language);
    document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", language === "en" ? "true" : "false");
      button.innerHTML = language === "en" ? "<span>PT</span><b>ENG</b>" : "<b>PT</b><span>ENG</span>";
    });
    translate(document);
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-language-toggle]");
    if (button) setLanguage(document.documentElement.getAttribute("data-language") === "en" ? "pt" : "en");
  });

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) translate(node);
      });
    });
    var language = document.documentElement.getAttribute("data-language");
    document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", language === "en" ? "true" : "false");
      button.innerHTML = language === "en" ? "<span>PT</span><b>ENG</b>" : "<b>PT</b><span>ENG</span>";
    });
  });
  observer.observe(document.documentElement, { childList: true, characterData: true, subtree: true });
  setLanguage(localStorage.getItem("sofia-language") || "pt");
  setLanguage(localStorage.getItem("sofia-language-v2") || "pt");
})();
