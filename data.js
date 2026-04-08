// ===== Topics and Learning Data =====

export const topics = [
  {
    id: 1,
    title: "Строение ПК",
    subtitle: "10 слов • Текст о компьютерном железе",
    icon: "💻",
    words: [
      { english: "hardware", russian: "физические компоненты компьютера", transcription: "/ˈhɑːrdwer/" },
      { english: "PSU", russian: "блок питания", transcription: "/ˌpiː es ˈjuː/" },
      { english: "to be powered", russian: "питаться, быть включенным в сеть", transcription: "/tuː biː ˈpaʊərd/" },
      { english: "mains electricity", russian: "электросеть", transcription: "/meɪnz ɪˌlekˈtrɪsəti/" },
      { english: "CPU", russian: "центральный процессор", transcription: "/ˌsiː piː ˈjuː/" },
      { english: "connector", russian: "разъём, соединитель", transcription: "/kəˈnektər/" },
      { english: "motherboard", russian: "материнская плата", transcription: "/ˈmʌðərbɔːrd/" },
      { english: "part", russian: "деталь, компонент", transcription: "/pɑːrt/" },
      { english: "RAM", russian: "оперативная память", transcription: "/ræm/" },
      { english: "SSD", russian: "твердотельный накопитель", transcription: "/ˌes es ˈdiː/" }
    ],
    text: `Computer hardware is divided into external components like the case, input devices (keyboard, mouse, microphone), and output devices (monitor, speakers, printer). The case houses and protects the internal components, including the motherboard, which serves as the main circuit board connecting all parts.

The CPU, or processor, acts as the computer's "brain" by processing large amounts of information at high speed and performing arithmetic and logical functions. The GPU handles all visual data by rendering and manipulating images, graphics, and videos.

RAM is a volatile, short-term memory that temporarily stores information while the computer is powered on, and all unsaved data is lost when power is turned off. HDDs and SSDs are non-volatile storage devices that permanently save data even when the computer is shut down.

The power supply unit provides electricity to all components by connecting to a power outlet or battery. Software includes application packages like Microsoft Office, email programs, web browsers, and productivity tools, while the operating system is the most critical piece of software. The operating system controls all computer functions, manages both hardware and software components, and serves as the interface between them. The most popular operating systems today are Microsoft Windows, Apple macOS, and Linux, which is widely used by developers.`,
    fillWords: [
      {
        text: "_____ refers to all the physical components of a computer, such as the keyboard, monitor, and internal drives, that you can actually see and touch.",
        answer: "hardware",
        options: ["hardware", "software", "CPU", "RAM"]
      },
      {
        text: "The _____ (power supply unit) converts alternating current from the wall outlet into stable direct current that the computer's internal components require.",
        answer: "PSU",
        options: ["PSU", "CPU", "RAM", "SSD"]
      },
      {
        text: "For the server to function continuously, it needs _____ by a reliable source, preferably with an uninterruptible backup system.",
        answer: "to be powered",
        options: ["to be powered", "to be charged", "to be loaded", "to be saved"]
      },
      {
        text: "Before performing any maintenance inside the case, you must disconnect the system from _____ to avoid the risk of electric shock.",
        answer: "mains electricity",
        options: ["mains electricity", "battery power", "solar energy", "backup power"]
      },
      {
        text: "The _____ (Central Processing Unit) is often referred to as the brain of the computer because it executes most of the instructions and calculations.",
        answer: "CPU",
        options: ["CPU", "GPU", "RAM", "SSD"]
      },
      {
        text: "Make sure to push the 24-pin _____ firmly into the motherboard until you hear a click; otherwise, the system may not start.",
        answer: "connector",
        options: ["connector", "processor", "memory", "drive"]
      },
      {
        text: "All internal components, such as the graphics card and storage drives, ultimately connect to the _____, which serves as the central hub of the computer.",
        answer: "motherboard",
        options: ["motherboard", "keyboard", "monitor", "speaker"]
      },
      {
        text: "Every _____ inside the computer case must be compatible with the others, especially when upgrading the processor or memory.",
        answer: "part",
        options: ["part", "port", "slot", "cable"]
      },
      {
        text: "When a program is opened, its necessary data is loaded from the storage drive into _____ (Random Access Memory) because it allows for much faster read and write speeds.",
        answer: "RAM",
        options: ["RAM", "ROM", "SSD", "HDD"]
      },
      {
        text: "Installing the operating system on an _____ (Solid State Drive) significantly reduces boot times and improves overall system responsiveness compared to a traditional hard drive.",
        answer: "SSD",
        options: ["SSD", "HDD", "USB", "DVD"]
      }
    ],
    test: [
      {
        question: "What does 'hardware' refer to?",
        options: ["Software programs", "Physical components of a computer", "Internet connection", "Cloud storage"],
        correct: 1
      },
      {
        question: "What does PSU stand for?",
        options: ["Processing System Unit", "Power Supply Unit", "Primary Storage Unit", "Peripheral Setup Utility"],
        correct: 1
      },
      {
        question: "What is the CPU often called?",
        options: ["The heart of the computer", "The brain of the computer", "The memory of the computer", "The power of the computer"],
        correct: 1
      },
      {
        question: "What type of memory loses data when power is turned off?",
        options: ["SSD", "HDD", "RAM", "ROM"],
        correct: 2
      },
      {
        question: "What connects all internal components together?",
        options: ["The CPU", "The GPU", "The motherboard", "The power supply"],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    title: "Онлайн-игры",
    subtitle: "10 слов • Текст о киберспорте",
    icon: "🎮",
    words: [
      { english: "e-sports", russian: "киберспорт", transcription: "/ˈiː spɔːrts/" },
      { english: "accessibility", russian: "доступность", transcription: "/əkˌsesəˈbɪləti/" },
      { english: "prize pool", russian: "призовой фонд", transcription: "/praɪz puːl/" },
      { english: "to stream", russian: "стримить, вести трансляцию", transcription: "/tuː striːm/" },
      { english: "community", russian: "сообщество", transcription: "/kəˈmjuːnəti/" },
      { english: "addiction", russian: "зависимость", transcription: "/əˈdɪkʃn/" },
      { english: "toxic behavior", russian: "токсичное поведение", transcription: "/ˈtɒksɪk bɪˈheɪvjər/" },
      { english: "trash-talking", russian: "перепалка, оскорбления", transcription: "/ˈtræʃ ˌtɔːkɪŋ/" },
      { english: "sportsmanship", russian: "спортивное поведение", transcription: "/ˈspɔːrtsmənʃɪp/" },
      { english: "inclusivity", russian: "инклюзивность", transcription: "/ɪnˌkluːsɪˈvɪəti/" }
    ],
    text: `Online competitive gaming, also known as e-sports, has become increasingly popular in recent years. One of the main advantages of online competitive gaming is its accessibility. This inclusivity has allowed people from all walks of life to participate and compete at a high level, regardless of their age or gender.

Furthermore, online competitive gaming provides a platform for individuals to showcase their skills and talents. Another benefit of online competitive gaming is the sense of community it fosters. Players can connect with others who share their interests, forming friendships and support networks.

However, there are also some drawbacks to online competitive gaming. One of the most significant concerns is the potential for addiction. Players may spend excessive amounts of time gaming, neglecting other important aspects of their lives. Additionally, the competitive nature of online gaming can sometimes lead to toxic behavior.

Developers and organisations must take steps to address these issues and promote inclusivity and sportsmanship within the community. In conclusion, online competitive gaming offers numerous benefits, such as accessibility, opportunities for self-expression, and a sense of belonging, but it's essential for players to be mindful of their gaming habits and to prioritise their well-being.`,
    fillWords: [
      {
        text: "The annual world championship has a massive _____, often exceeding several million dollars, attracting top teams from around the globe.",
        answer: "prize pool",
        options: ["prize pool", "entry fee", "ticket price", "subscription cost"]
      },
      {
        text: "One of the key reasons for the popularity of _____ is that it allows people who are not traditionally athletic to compete at the highest level.",
        answer: "e-sports",
        options: ["e-sports", "sports", "games", "tournaments"]
      },
      {
        text: "To build a loyal audience, many professional players choose to _____ their gameplay live on platforms like Twitch.",
        answer: "to stream",
        options: ["to stream", "to download", "to upload", "to record"]
      },
      {
        text: "Finding a supportive _____ can make a huge difference for new players, helping them learn the game and make friends.",
        answer: "community",
        options: ["community", "company", "corporation", "competition"]
      },
      {
        text: "While gaming is a fun hobby, players must be aware of the risk of _____ and ensure they take regular breaks.",
        answer: "addiction",
        options: ["addiction", "attention", "attraction", "adaptation"]
      },
      {
        text: "Game developers often implement automated systems to detect and punish _____, such as hate speech or intentionally ruining the game for teammates.",
        answer: "toxic behavior",
        options: ["toxic behavior", "friendly chat", "teamwork", "fair play"]
      },
      {
        text: "Friendly _____ can be part of the fun, but when it crosses the line into personal insults, it becomes a serious problem.",
        answer: "trash-talking",
        options: ["trash-talking", "small talk", "sweet talk", "idle talk"]
      },
      {
        text: "Showing respect to opponents after a loss, whether by saying 'gg' (good game) or not making excuses, is a sign of true _____.",
        answer: "sportsmanship",
        options: ["sportsmanship", "championship", "leadership", "friendship"]
      },
      {
        text: "The principle of _____ in gaming means designing games and communities that welcome players regardless of their age, gender, or physical abilities.",
        answer: "inclusivity",
        options: ["inclusivity", "exclusivity", "productivity", "creativity"]
      },
      {
        text: "Unlike traditional sports that demand peak physical coordination, the _____ of e-sports means that anyone with a computer and a good internet connection can try to go pro.",
        answer: "accessibility",
        options: ["accessibility", "difficulty", "complexity", "popularity"]
      }
    ],
    test: [
      {
        question: "What is the total amount of money awarded in a tournament called?",
        options: ["Entry fee", "Prize pool", "Ticket price", "Subscription"],
        correct: 1
      },
      {
        question: "What does it mean 'to stream' gameplay?",
        options: ["To download games", "To broadcast live", "To record videos", "To play offline"],
        correct: 1
      },
      {
        question: "What is a major concern related to excessive gaming?",
        options: ["Boredom", "Addiction", "Happiness", "Success"],
        correct: 1
      },
      {
        question: "What does 'sportsmanship' mean?",
        options: ["Being a professional athlete", "Fair and respectful behavior", "Winning at all costs", "Playing many sports"],
        correct: 1
      },
      {
        question: "What does 'inclusivity' in gaming refer to?",
        options: ["Expensive equipment", "Welcoming all players", "Professional teams only", "Specific age groups"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: "Кибербезопасность",
    subtitle: "10 слов • Текст о защите данных",
    icon: "🔒",
    words: [
      { english: "cyber attack", russian: "кибератака", transcription: "/ˈsaɪbər əˌtæk/" },
      { english: "cybersecurity", russian: "кибербезопасность", transcription: "/ˌsaɪbərsɪˈkjʊrəti/" },
      { english: "data security", russian: "защита данных", transcription: "/ˈdeɪtə sɪˌkjʊrəti/" },
      { english: "hacker", russian: "хакер", transcription: "/ˈhækər/" },
      { english: "leakage", russian: "утечка данных", transcription: "/ˈliːkɪdʒ/" },
      { english: "malware protection", russian: "защита от вредоносного ПО", transcription: "/ˈmælwer prəˌtekʃn/" },
      { english: "secure web service", russian: "защищённый веб-сервис", transcription: "/sɪˈkjʊr web ˈsɜːrvɪs/" },
      { english: "threat prevention", russian: "предотвращение угроз", transcription: "/θret prɪˈvenʃn/" },
      { english: "virus pattern", russian: "шаблон вируса", transcription: "/ˈvaɪrəs ˈpætərn/" },
      { english: "vulnerability analysis", russian: "анализ уязвимостей", transcription: "/ˌvʌlnərəˈbɪləti əˌnæləsɪs/" }
    ],
    text: `Cybersecurity involves defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. Network security focuses on securing a computer network from intruders, whether targeted attackers or opportunistic malware.

Application security aims to keep software and devices free of threats, with successful security beginning in the design stage. Information security protects the integrity and privacy of data, both in storage and in transit.

Operational security includes the processes and decisions for handling and protecting data assets, as well as user permissions and data storage procedures. Disaster recovery policies dictate how an organization restores its operations and information after a cybersecurity incident.

Business continuity is the plan an organization falls back on while trying to operate without certain resources. End-user education addresses the most unpredictable cybersecurity factor: people. Anyone can accidentally introduce a virus to an otherwise secure system by failing to follow good security practices. Teaching users to delete suspicious email attachments and avoid unidentified USB drives is vital for the security of any organization.`,
    fillWords: [
      {
        text: "A major financial institution suffered a sophisticated _____ that compromised millions of customer accounts.",
        answer: "cyber attack",
        options: ["cyber attack", "software update", "hardware failure", "power outage"]
      },
      {
        text: "As more businesses move online, investing in _____ has become essential to protect sensitive information.",
        answer: "cybersecurity",
        options: ["cybersecurity", "cybercrime", "cyberspace", "cybernetics"]
      },
      {
        text: "The company implemented stricter _____ measures after a previous breach exposed confidential client records.",
        answer: "data security",
        options: ["data security", "data mining", "data entry", "data backup"]
      },
      {
        text: "A skilled _____ managed to bypass the firewall within minutes, highlighting serious flaws in the system.",
        answer: "hacker",
        options: ["hacker", "cracker", "tracker", "worker"]
      },
      {
        text: "The accidental _____ of internal emails caused a public relations crisis for the organization.",
        answer: "leakage",
        options: ["leakage", "storage", "backup", "transfer"]
      },
      {
        text: "Without reliable _____, even a single infected email attachment can compromise an entire network.",
        answer: "malware protection",
        options: ["malware protection", "firewall settings", "password policy", "user training"]
      },
      {
        text: "The platform functions as a _____, encrypting all data transmitted between users and servers.",
        answer: "secure web service",
        options: ["secure web service", "public website", "social network", "file sharing"]
      },
      {
        text: "Effective _____ requires not only advanced software but also regular employee training on security best practices.",
        answer: "threat prevention",
        options: ["threat prevention", "threat detection", "threat response", "threat analysis"]
      },
      {
        text: "Antivirus programs constantly update their _____ databases to recognize and block newly discovered threats.",
        answer: "virus pattern",
        options: ["virus pattern", "virus code", "virus file", "virus link"]
      },
      {
        text: "A thorough _____ revealed several critical weaknesses in the company's legacy software.",
        answer: "vulnerability analysis",
        options: ["vulnerability analysis", "security audit", "penetration test", "risk assessment"]
      }
    ],
    test: [
      {
        question: "What is a malicious attempt to damage or disrupt a computer system called?",
        options: ["Software update", "Cyber attack", "System backup", "Network upgrade"],
        correct: 1
      },
      {
        question: "What does 'cybersecurity' protect?",
        options: ["Only hardware", "Only software", "Systems and data from attacks", "Only internet speed"],
        correct: 2
      },
      {
        question: "Who tries to gain unauthorized access to computer systems?",
        options: ["A programmer", "A user", "A hacker", "A designer"],
        correct: 2
      },
      {
        question: "What is an unauthorized release of confidential information called?",
        options: ["Backup", "Leakage", "Upload", "Download"],
        correct: 1
      },
      {
        question: "What protects against malicious software?",
        options: ["Malware protection", "Hardware upgrade", "Internet speed", "Screen brightness"],
        correct: 0
      }
    ]
  }
];

// ===== App State =====
export const appState = {
  currentTopic: null,
  currentScreen: 'home',
  wordIndex: 0,
  testScore: 0,
  fillWordsProgress: [],
  showTranslation: false,
  darkMode: localStorage.getItem('darkMode') === 'true'
};

// ===== Utility Functions =====
export function getTopicById(id) {
  return topics.find(topic => topic.id === id);
}

export function resetProgress() {
  appState.wordIndex = 0;
  appState.testScore = 0;
  appState.fillWordsProgress = [];
  appState.showTranslation = false;
}

// ===== Theme Functions =====
export function toggleTheme() {
  appState.darkMode = !appState.darkMode;
  localStorage.setItem('darkMode', appState.darkMode);
  applyTheme();
  return appState.darkMode;
}

export function applyTheme() {
  if (appState.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export function initTheme() {
  applyTheme();
}
