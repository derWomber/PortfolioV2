document.addEventListener("DOMContentLoaded", () => {
const responses = [

    {
        keywords: ["bist du ein ai", "bist du eine ki", "bist du wirklich ein assistent", "ai", "ki", "künstliche intelligenz"],
        answer: "Ich bin ein digitaler Assistent, der speziell für Fragen über Youssef gebaut wurde. Ich kenne seine Daten, Projekte und Erfahrungen. Ich bin kein Mensch, aber ich antworte klar, schnell und ohne Ausreden."
    },
    {
        keywords: ["ende", "tschüss", "auf wiedersehen", "bye", "danke das wars", "das reicht"],
        answer: "Vielen Dank für das Gespräch! Wenn Sie später mehr Fragen zu Youssef haben, bin ich jederzeit hier. Einen schönen Tag noch!"
    },
    {
        keywords: ["bist du ein ai", "bist du eine ki", "bist du wirklich ein assistent", "ai", "ki", "künstliche intelligenz"],
        answer: "Ich bin ein digitaler Assistent, der speziell für Fragen über Youssef gebaut wurde. Ich kenne seine Daten, Projekte und Erfahrungen. Ich bin kein Mensch, aber ich antworte klar, schnell und ohne Ausreden."
    },            
    // About you
    {
        keywords: [
            "über dich", "wer bist du", "erzähle mir über dich", "stell dich vor",
            "kannst du dich vorstellen", "about you", "tell me about yourself",
            "beschreibe dich", "wer bist du genau", "mehr über dich",
            "wer bist du eigentlich", "kurze vorstellung", "kurz vorstellen"
        ],
        answer: "Ich bin Youssef Beddouch. Ich lerne sehr schnell und gebe nie auf. Wenn ich etwas nicht weiß, sage ich ehrlich: Ich weiß es nicht. Aber ich verspreche, dass ich die Antwort finde, und wahrscheinlich schneller als andere. Ich habe praktische Erfahrung mit HTML, CSS, JavaScript, Python und kleinen Webprojekten. Ich studiere Literatur und Geisteswissenschaften an der Université Mohammed V in Rabat."
    },

    // Personal Data
    {
        keywords: ["geburtsdatum", "wann wurdest du geboren", "wann ist dein geburtstag", "birthdate", "date of birth"],
        answer: "Ich wurde am 11. Februar 2005 in Salé, Marokko geboren."
    },
    {
        keywords: ["telefon", "phone number", "nummer", "handynummer", "kontakt nummer"],
        answer: "Meine Telefonnummer ist +212-77-0225-849. (Das selber Nummer für Whatsapp)"
    },
    {
        keywords: ["email", "e-mail", "mail", "kontakt", "kontakt email"],
        answer: "Meine E-Mail Adresse ist youssef@beddouch.de"
    },
    {
        keywords: ["github", "git hub", "mein github", "github profil", "github account"],
        answer: "Mein GitHub Profil ist github.com/derWomber."
    },
    {
        keywords: ["linkedin", "linkdin", "linkedin profil", "mein linkedin", "linkedin account"],
        answer: "Mein LinkedIn Profil ist linkedin.com/in/youssef-beddouch."
    },
    {
        keywords: ["führerschein", "driver license", "führerschein klasse b", "führerschein b"],
        answer: "Ich habe einen Führerschein der Klasse B."
    },

    // Education
    {
        keywords: ["bildung", "schule", "studium", "education", "wo hast du studiert", "studiengang", "universität", "was hast du studiert", "bildungshintergrund"],
        answer: "Ich studiere seit 2024 Literatur und Geisteswissenschaften an der Université Mohammed V in Rabat. Ich habe mein erstes Studienjahr erfolgreich abgeschlossen. Mein Abitur habe ich 2023 im Bereich Physik mit französischer Option gemacht."
    },
    {
        keywords: ["deutsch", "german certificate", "sprachzertifikat", "deutschniveau", "b1", "b2"],
        answer: "Ich habe das Deutsch Zertifikat B1 und bereite mich auf B2 vor."
    },

    // Certificates
    {
        keywords: ["weiterbildung", "zertifikate", "training", "certificates", "kurse", "online kurse", "fortbildung", "fortbildungen"],
        answer: "Ich habe mehrere Weiterbildungen abgeschlossen, zum Beispiel Webentwicklung, JavaScript Grundlagen, Entrepreneurship & Innovation und Weblayout Planung."
    },

    // Projects
    {
        keywords: ["projekte", "projects", "portfolio", "firmenwebsite", "webseiten", "webseitenprojekte", "meine projekte", "meine webseiten", "website links"],
        answer: "Ich habe verschiedene Webprojekte gemacht: eine Firmenwebsite für den Sportbodenbetrieb meines Vaters, mein Portfolio und eine Volleyball Webseite. Links: Firmenwebsite: https://derWomber.github.io/BeddouchSols/, Portfolio: https://derWomber.github.io/Portfolio/, Volleyballseite: https://derWomber.github.io/Volleys/."
    },

    // Skills 
    {
        keywords: ["kenntnisse", "skills", "fähigkeiten", "abilities", "was kannst du", "it kenntnisse", "programmierkenntnisse", "programming skills", "it skills"],
        answer: "Ich kann Webseiten mit HTML, CSS und JavaScript bauen. Ich kenne auch Python und SQL. Ich kann responsive Designs machen, kleine Fehler finden und nutzerfreundliche Formulare erstellen."
    },

    // Languages
    {
        keywords: ["sprachen", "languages", "welche sprachen sprichst du", "sprachkenntnisse", "arabisch", "englisch", "deutsch", "französisch"],
        answer: "Ich spreche Arabisch als Muttersprache, Englisch auf C2 Niveau, Deutsch auf B1/B2 Niveau und Französisch auf B2 Niveau."
    },

    // Interests
    {
        keywords: ["interessen", "interessiert an", "interessiert", "leidenschaft", "teamarbeit", "kreativität"],
        answer: "Ich interessiere mich für Technologie, Kommunikation, Teamarbeit und kreative Problemlösung. Ich lerne gerne neue Dinge und arbeite gerne mit Menschen zusammen."
    },

    // Personal hobbies
    {
        keywords: ["sport", "hobby persönlich", "freizeit", "persönlich"],
        answer: "Ich trainiere Kickboxing und Muay Thai, koche gerne und lese manchmal."
    },

    // Why
    {
        keywords: ["warum deutschland", "warum ausbildung", "warum it", "why germany", "why apprenticeship", "why IT"],
        answer: "Deutschland hat ein starkes Ausbildungssystem. IT interessiert mich, weil ich Probleme lösen und Dinge bauen kann. Ich möchte meine Fähigkeiten weiterentwickeln und in diesem Bereich arbeiten."
    },

    // Career
    {
        keywords: ["warum wechsel", "warum it wechsel", "career change", "literatur zu it", "studium wechseln", "fachwechsel", "quereinsteiger"],
        answer: "Mein Studium hat mir geholfen, gut zu analysieren und klar zu kommunizieren. Aber meine echte Leidenschaft ist IT. Ich habe viele Webprojekte selbst gelernt und möchte jetzt in diesem Bereich arbeiten."
    },

    // Strengths
    {
        keywords: ["stärken", "deine stärken", "strong points", "was kannst du gut"],
        answer: "Ich lerne schnell, arbeite fleißig und gebe nicht auf. Ich kann mich gut selbst organisieren und Probleme Schritt für Schritt lösen."
    },

    // Weaknesses
    {
        keywords: ["schwächen", "weakness", "your weaknesses", "was sind deine schwächen"],
        answer: "Ich arbeite manchmal zu lange an kleinen Details. Ich lerne aber, besser Prioritäten zu setzen und schneller Entscheidungen zu treffen."
    },

    // Teamwork
    {
        keywords: ["teamarbeit", "team player", "arbeitest du gerne im team", "work style", "arbeitsweise"],
        answer: "Ich arbeite gut im Team, aber auch selbstständig. Ich mag klare Kommunikation und eine ruhige, respektvolle Arbeitsatmosphäre."
    },

    // Stress
    {
        keywords: ["stress", "druck", "deadlines", "stress management", "arbeit unter druck"],
        answer: "Unter Druck bleibe ich ruhig. Ich teile Aufgaben ein, arbeite Schritt für Schritt und spreche früh mit dem Team, wenn es ein Problem gibt."
    },

    // Motivation
    {
        keywords: ["motivation", "ziel", "karriere", "future plans", "career goals", "ziele"],
        answer: "Mein Ziel ist es, ein guter Softwareentwickler zu werden. Ich möchte mehr praktische Erfahrung sammeln, meine Fähigkeiten verbessern und in Deutschland arbeiten."
    },

    // Availability
    {
        keywords: ["verfügbar", "startdatum", "wann kannst du anfangen", "umziehen", "relocation", "verfügbarkeit"],
        answer: "Ich kann flexibel anfangen und bin bereit, für die Ausbildung nach Deutschland umzuziehen."
    },

    // Soft skills
    {
        keywords: ["soft skills", "soziale kompetenzen", "kommunikation", "persönliche stärken"],
        answer: "Ich kommuniziere klar, arbeite zuverlässig und bin sehr motiviert. Ich kann Probleme ruhig lösen und bleibe konzentriert."
    },

    // Unique point
    {
        keywords: ["einzigartig", "unique", "was unterscheidet dich", "was macht dich anders"],
        answer: "Ich lerne sehr schnell, arbeite hart und liebe es, neue Dinge zu verstehen. Wenn ich etwas nicht weiß, sage ich es ehrlich, aber ich finde die Antwort. Und meistens schneller als andere."
    },

    // Greeting
    {
        keywords: ["Hallo", "hi", "hey"],
        answer: "Hallo! Ich bin der Assistent von Youssef Beddouch. Wenn Sie Fragen zu Youssef haben, zu Projekten, Ausbildung, Fähigkeiten oder seinem Hintergrund, helfe ich gerne weiter."
    }
];

responses.push({
    keywords: ["hahaha", "lol", "funny", "easter egg", "surprise", "hehe", "😂", "hidden"],
    answer: "🎉 Überraschung! Du hast das geheime Easter Egg gefunden! 😎, Schreib mir auf Insta (@der_joseph.b) Lol"
});


// === Function to match input to response ===
function getResponse(userInput) {
    const input = userInput.toLowerCase();
    for (let r of responses) {
        for (let keyword of r.keywords) {
            if (input.includes(keyword)) return r.answer;
        }
    }
    return "Entschuldigung, darauf habe ich keine Antwort.";
}


const messagesDiv = document.getElementById("messages");
const inputField = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");

// Load previous messages from localStorage
let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
chatHistory.forEach(msg => {
    const div = document.createElement("div");
    div.className = msg.type === "user" ? "user-msg" : "ai-msg";
    div.textContent = msg.text;
    messagesDiv.appendChild(div);
});
messagesDiv.scrollTop = messagesDiv.scrollHeight;

// Save messages
function saveMessage(type, text) {
    chatHistory.push({ type, text });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    if (chatHistory.length >= 20) {
        localStorage.removeItem("chatHistory");
        location.reload();
    }
}

// Send message
function sendMessage() {
    const input = inputField.value.trim();
    if (!input) return;

    const userDiv = document.createElement("div");
    userDiv.className = "user-msg";
    userDiv.textContent = input;
    messagesDiv.appendChild(userDiv);
    saveMessage("user", input);
    inputField.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Typing animation
    const typingDiv = document.createElement("div");
    typingDiv.className = "ai-msg";
    typingDiv.innerHTML = `<span class="typing"></span><span class="typing"></span><span class="typing"></span>`;
    messagesDiv.appendChild(typingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    setTimeout(() => {
        let responseText = "Entschuldigung, darauf habe ich keine Antwort.";
        const lowerInput = input.toLowerCase();

        for (let r of responses) {
            for (let k of r.keywords) {
                if (lowerInput.includes(k)) {
                    responseText = r.answer;
                    break;
                }
            }
            if (responseText !== "Entschuldigung, darauf habe ich keine Antwort.") break;
        }

        typingDiv.textContent = responseText;
        saveMessage("ai", responseText);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", (e) => { if (e.key === "Enter") { e.preventDefault(); sendMessage(); } });
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("chatHistory");
    messagesDiv.innerHTML = "";
    chatHistory = [];
});

});

