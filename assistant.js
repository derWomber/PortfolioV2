document.addEventListener("DOMContentLoaded", () => {
const responses = [
    {
        keywords: [
            "über dich", "wer bist du", "erzähle mir über dich", "stella dich vor",
            "kannst du dich vorstellen", "about you", "tell me about yourself",
            "beschreibe dich", "wer bist du genau", "mehr über dich", "wer bist du eigentlich",
            "kurze vorstellung", "kurz vorstellen"
        ],
        answer: "Ich bin Youssef Beddouch, ein Mensch, der alles lernen kann, was er sich vornimmt, und niemals aufgibt. Ich habe Erfahrung mit HTML, CSS, JavaScript und praktischer Projektarbeit. Derzeit studiere ich Literatur und Geisteswissenschaften an der Université Mohammed V in Rabat."
    },
    // Personal Data
    {
        keywords: [
            "geburtsdatum", "wann wurdest du geboren", "wann ist dein geburtstag",
            "birthdate", "date of birth"
        ],
        answer: "Ich wurde am 11. Februar 2005 in Salé, Marokko geboren."
    },
    {
        keywords: ["telefon", "phone number", "nummer", "handynummer", "kontakt nummer"],
        answer: "Meine Telefonnummer ist +212-77-0225-849."
    },
    {
        keywords: ["email", "e-mail", "mail", "kontakt", "kontakt email"],
        answer: "Meine E-Mail-Adresse ist youssef.edu.2023@gmail.com."
    },
    {
        keywords: ["github", "git hub", "mein github", "github profil", "github account"],
        answer: "Mein GitHub-Profil ist github.com/derWomber."
    },
    {
        keywords: ["linkedin", "linkdin", "linkedin profil", "mein linkedin", "linkedin account"],
        answer: "Mein LinkedIn-Profil ist linkedin.com/in/youssef-beddouch."
    },
    {
        keywords: ["führerschein", "driver license", "führerschein klasse b", "führerschein b"],
        answer: "Ich besitze einen Führerschein der Klasse B."
    },

    // Education
    {
        keywords: [
            "bildung", "schule", "studium", "education", "wo hast du studiert",
            "studiengang", "universität", "was hast du studiert", "bildungshintergrund"
        ],
        answer: "Ich studiere seit September 2024 Literatur und Geisteswissenschaften an der Université Mohammed V in Rabat und habe mein erstes Studienjahr erfolgreich abgeschlossen. Zuvor habe ich im Juni 2023 mein Abitur mit Schwerpunkt Physik und französischer Option abgeschlossen."
    },
    {
        keywords: ["deutsch", "german certificate", "sprachzertifikat", "deutschniveau", "b1", "b2"],
        answer: "Ich habe das Deutsch-Zertifikat B1 erfolgreich abgeschlossen und bereite mich derzeit auf die B2-Prüfung vor."
    },

    // Certificates
    {
        keywords: [
            "weiterbildung", "zertifikate", "training", "certificates",
            "kurse", "online kurse", "fortbildung", "fortbildungen"
        ],
        answer: "Ich habe mehrere Online- und praktische Weiterbildungen abgeschlossen, darunter Webentwicklung, JavaScript Grundlagen, Entrepreneurship & Innovation, Weblayout-Planung und Integration benutzerfreundlicher Formulare."
    },

    // Projects
    {
        keywords: [
            "projekte", "projects", "portfolio", "firmenwebsite", "webseiten",
            "webseitenprojekte", "meine projekte", "meine webseiten", "website links"
        ],
        answer: "Ich habe praktische Projekte umgesetzt, darunter eine Firmenwebsite für den Sportbodenbetrieb meines Vaters, mein Portfolio, und meine erste Volleyball-Webseite. Links: Firmenwebsite: https://derwomber.github.io/BeddouchSols/, Portfolio: https://derwomber.github.io/Portfolio/, Erste Webseite: https://derwomber.github.io/Volleys/."
    },

    // Skills
    {
        keywords: [
            "kenntnisse", "skills", "fähigkeiten", "abilities",
            "was kannst du", "it kenntnisse", "programmierkenntnisse",
            "programming skills", "it skills"
        ],
        answer: "Meine IT-Kenntnisse umfassen HTML, CSS, JavaScript, Python und SQL. Ich kann responsive Designs erstellen, debuggen und benutzerfreundliche Formulare entwickeln. Ich arbeite mit Visual Studio Code und Microsoft Office."
    },

    // Languages
    {
        keywords: [
            "sprachen", "languages", "welche sprachen sprichst du",
            "sprachkenntnisse", "language skills", "arabisch", "englisch",
            "deutsch", "französisch"
        ],
        answer: "Ich spreche Arabisch als Muttersprache, Englisch auf C2 Niveau, Deutsch auf B1/B2 Niveau, und Französisch auf B2 Niveau."
    },

    // Interests
    {
        keywords: [
            "interessen", "interessiert an", "interessiert", "leidenschaft", "teamarbeit", "kreativität"
        ],
        answer: "Ich interessiere mich für neue digitale Technologien, Kommunikation, kreative Problemlösungen und Teamarbeit. Ich bin motiviert, gemeinsam Ziele zu erreichen und Neues zu lernen."
    },

    // personal hobbies
    {
        keywords: [
            "sport", "hobby persönlich", "freizeit", "persönlich"
        ],
        answer: "In meiner Freizeit trainiere ich Kickboxing und Muay Thai, koche gerne und genieße das gelegentliche Lesen."
    },


];

responses.push({
    keywords: ["hahaha", "lol", "funny", "easter egg", "surprise", "hehe", "😂"],
    answer: "🎉 Überraschung! Du hast das geheime Easter Egg gefunden! 😎"
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

