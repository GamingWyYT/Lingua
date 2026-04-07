LANGUAGE_REGISTRY.register({
    id: "french",
    name: "French",
    native: "Français",
    flag: "🇫🇷",

    vocab: [
        // Basics
        { foreign: "Bonjour", english: "Hello / Good day", category: "Basics" },
        { foreign: "Bonsoir", english: "Good evening", category: "Basics" },
        { foreign: "Au revoir", english: "Goodbye", category: "Basics" },
        { foreign: "À bientôt", english: "See you soon", category: "Basics" },
        { foreign: "Oui", english: "Yes", category: "Basics" },
        { foreign: "Non", english: "No", category: "Basics" },
        { foreign: "S'il vous plaît", english: "Please (formal)", category: "Basics" },
        { foreign: "Merci", english: "Thank you", category: "Basics" },
        { foreign: "De rien", english: "You're welcome", category: "Basics" },
        { foreign: "Excusez-moi", english: "Excuse me", category: "Basics" },
        { foreign: "Pardon", english: "Sorry", category: "Basics" },
        // Pronouns & Core Verbs
        { foreign: "Je", english: "I", category: "Pronouns" },
        { foreign: "Tu", english: "You (informal)", category: "Pronouns" },
        { foreign: "Il / Elle", english: "He / She", category: "Pronouns" },
        { foreign: "Nous", english: "We", category: "Pronouns" },
        { foreign: "Ils / Elles", english: "They (m/f)", category: "Pronouns" },
        { foreign: "Je suis", english: "I am", category: "Pronouns" },
        { foreign: "J'ai", english: "I have", category: "Pronouns" },
        { foreign: "Je veux", english: "I want", category: "Pronouns" },
        { foreign: "Je peux", english: "I can", category: "Pronouns" },
        { foreign: "Je vais", english: "I go / I am going", category: "Pronouns" },
        // Numbers
        { foreign: "Un / Une", english: "One", category: "Numbers" },
        { foreign: "Deux", english: "Two", category: "Numbers" },
        { foreign: "Trois", english: "Three", category: "Numbers" },
        { foreign: "Quatre", english: "Four", category: "Numbers" },
        { foreign: "Cinq", english: "Five", category: "Numbers" },
        { foreign: "Six", english: "Six", category: "Numbers" },
        { foreign: "Sept", english: "Seven", category: "Numbers" },
        { foreign: "Huit", english: "Eight", category: "Numbers" },
        { foreign: "Neuf", english: "Nine", category: "Numbers" },
        { foreign: "Dix", english: "Ten", category: "Numbers" },
        { foreign: "Vingt", english: "Twenty", category: "Numbers" },
        { foreign: "Cent", english: "One hundred", category: "Numbers" },
        // Family
        { foreign: "La famille", english: "Family", category: "Family" },
        { foreign: "La mère", english: "Mother", category: "Family" },
        { foreign: "Le père", english: "Father", category: "Family" },
        { foreign: "Le frère", english: "Brother", category: "Family" },
        { foreign: "La sœur", english: "Sister", category: "Family" },
        { foreign: "Le fils", english: "Son", category: "Family" },
        { foreign: "La fille", english: "Daughter", category: "Family" },
        { foreign: "Le grand-père", english: "Grandfather", category: "Family" },
        { foreign: "La grand-mère", english: "Grandmother", category: "Family" },
        { foreign: "L'oncle", english: "Uncle", category: "Family" },
        { foreign: "La tante", english: "Aunt", category: "Family" },
        { foreign: "L'ami / L'amie", english: "Friend (m/f)", category: "Family" },
        // Food & Drink
        { foreign: "L'eau", english: "Water", category: "Food & Drink" },
        { foreign: "Le café", english: "Coffee", category: "Food & Drink" },
        { foreign: "Le vin", english: "Wine", category: "Food & Drink" },
        { foreign: "La bière", english: "Beer", category: "Food & Drink" },
        { foreign: "Le pain", english: "Bread", category: "Food & Drink" },
        { foreign: "La viande", english: "Meat", category: "Food & Drink" },
        { foreign: "Le poulet", english: "Chicken", category: "Food & Drink" },
        { foreign: "Le poisson", english: "Fish", category: "Food & Drink" },
        { foreign: "Le riz", english: "Rice", category: "Food & Drink" },
        { foreign: "Les légumes", english: "Vegetables", category: "Food & Drink" },
        { foreign: "Les fruits", english: "Fruits", category: "Food & Drink" },
        { foreign: "Le lait", english: "Milk", category: "Food & Drink" },
        { foreign: "Le fromage", english: "Cheese", category: "Food & Drink" },
        { foreign: "L'œuf", english: "Egg", category: "Food & Drink" },
        // Places
        { foreign: "La maison", english: "House", category: "Places" },
        { foreign: "L'hôtel", english: "Hotel", category: "Places" },
        { foreign: "L'aéroport", english: "Airport", category: "Places" },
        { foreign: "La gare", english: "Train station", category: "Places" },
        { foreign: "La boutique", english: "Shop / Store", category: "Places" },
        { foreign: "Le marché", english: "Market", category: "Places" },
        { foreign: "L'hôpital", english: "Hospital", category: "Places" },
        { foreign: "La plage", english: "Beach", category: "Places" },
        { foreign: "La banque", english: "Bank", category: "Places" },
        { foreign: "Le restaurant", english: "Restaurant", category: "Places" },
        { foreign: "La pharmacie", english: "Pharmacy", category: "Places" },
        // Time
        { foreign: "Aujourd'hui", english: "Today", category: "Time" },
        { foreign: "Demain", english: "Tomorrow", category: "Time" },
        { foreign: "Hier", english: "Yesterday", category: "Time" },
        { foreign: "Maintenant", english: "Now", category: "Time" },
        { foreign: "Bientôt", english: "Soon", category: "Time" },
        { foreign: "Le matin", english: "Morning", category: "Time" },
        { foreign: "L'après-midi", english: "Afternoon", category: "Time" },
        { foreign: "Le soir", english: "Evening", category: "Time" },
        { foreign: "La semaine", english: "Week", category: "Time" },
        { foreign: "Le mois", english: "Month", category: "Time" },
        { foreign: "L'année", english: "Year", category: "Time" },
        // Descriptions
        { foreign: "Grand", english: "Big / Tall", category: "Descriptions" },
        { foreign: "Petit", english: "Small", category: "Descriptions" },
        { foreign: "Bon", english: "Good", category: "Descriptions" },
        { foreign: "Mauvais", english: "Bad", category: "Descriptions" },
        { foreign: "Rapide", english: "Fast", category: "Descriptions" },
        { foreign: "Lent", english: "Slow", category: "Descriptions" },
        { foreign: "Beau / Belle", english: "Beautiful (m/f)", category: "Descriptions" },
        { foreign: "Cher", english: "Expensive", category: "Descriptions" },
        { foreign: "Bon marché", english: "Cheap", category: "Descriptions" },
        { foreign: "Nouveau / Nouvelle", english: "New (m/f)", category: "Descriptions" },
        { foreign: "Vieux / Vieille", english: "Old (m/f)", category: "Descriptions" },
        { foreign: "Heureux", english: "Happy", category: "Descriptions" },
        { foreign: "Triste", english: "Sad", category: "Descriptions" },
        { foreign: "Fatigué", english: "Tired", category: "Descriptions" },
        { foreign: "Chaud", english: "Hot", category: "Descriptions" },
        { foreign: "Froid", english: "Cold", category: "Descriptions" },
    ],

    phrases: [
        { foreign: "Comment vous appelez-vous ?", english: "What is your name? (formal)", context: "Introductions" },
        { foreign: "Je m'appelle…", english: "My name is…", context: "Introductions" },
        { foreign: "D'où venez-vous ?", english: "Where are you from?", context: "Introductions" },
        { foreign: "Je viens de…", english: "I come from…", context: "Introductions" },
        { foreign: "Enchanté(e).", english: "Nice to meet you.", context: "Introductions" },
        { foreign: "Combien ça coûte ?", english: "How much does it cost?", context: "Shopping" },
        { foreign: "Avez-vous cela dans une autre taille ?", english: "Do you have this in another size?", context: "Shopping" },
        { foreign: "Je voudrais acheter ceci.", english: "I would like to buy this.", context: "Shopping" },
        { foreign: "Où sont les toilettes ?", english: "Where is the bathroom?", context: "Travel" },
        { foreign: "Comment aller à… ?", english: "How do I get to…?", context: "Travel" },
        { foreign: "Un billet pour…, s'il vous plaît.", english: "A ticket to…, please.", context: "Travel" },
        { foreign: "Une table pour deux, s'il vous plaît.", english: "A table for two, please.", context: "Restaurant" },
        { foreign: "L'addition, s'il vous plaît.", english: "The bill, please.", context: "Restaurant" },
        { foreign: "Qu'est-ce que vous recommandez ?", english: "What do you recommend?", context: "Restaurant" },
        { foreign: "Je ne comprends pas.", english: "I don't understand.", context: "Communication" },
        { foreign: "Pouvez-vous parler plus lentement ?", english: "Can you speak more slowly?", context: "Communication" },
        { foreign: "Parlez-vous anglais ?", english: "Do you speak English?", context: "Communication" },
        { foreign: "J'ai faim.", english: "I am hungry.", context: "Daily Life" },
        { foreign: "Je suis fatigué(e).", english: "I am tired.", context: "Daily Life" },
        { foreign: "Bon appétit !", english: "Enjoy your meal!", context: "Daily Life" },
    ],

    grammar: [
        {
            title: "Le / La / Les / L' (The)",
            text: "French definite articles agree with the noun's gender and number. Le = masculine, La = feminine, Les = plural. Before a vowel or silent h, le/la contract to l'.",
            examples: [
                { foreign: "le chat, la chatte, les chats", english: "the cat (m), the cat (f), the cats" },
                { foreign: "l'ami (m), l'amie (f)", english: "the friend — elision before vowel" },
            ]
        },
        {
            title: "Être — To Be",
            text: "Être is irregular and essential. Used for identity, origin, and profession. Also forms the passé composé of motion/reflexive verbs.",
            examples: [
                { foreign: "je suis, tu es, il est, nous sommes, vous êtes, ils sont", english: "I am, you are, he is, we are, you are, they are" },
            ]
        },
        {
            title: "Avoir — To Have",
            text: "Avoir (to have) is used for possession, age, and as the main auxiliary for forming the past tense (passé composé). Many common expressions use avoir where English uses 'to be'.",
            examples: [
                { foreign: "j'ai, tu as, il a, nous avons, vous avez, ils ont", english: "I have, you have, he has, we have, you have, they have" },
                { foreign: "J'ai faim. / J'ai 20 ans.", english: "I am hungry. / I am 20 years old. (lit: I have hunger / 20 years)" },
            ]
        },
        {
            title: "Negation: Ne … Pas",
            text: "To negate a verb, wrap it with ne…pas. Before a vowel, ne becomes n'. In spoken French, ne is commonly dropped.",
            examples: [
                { foreign: "Je ne parle pas anglais.", english: "I don't speak English." },
                { foreign: "Elle n'est pas ici.", english: "She is not here." },
            ]
        },
        {
            title: "Adjective Agreement & Position",
            text: "French adjectives agree in gender and number with the noun. Most adjectives follow the noun. Common exceptions (grand, petit, bon, beau, nouveau, vieux) precede it.",
            examples: [
                { foreign: "un homme grand / une femme grande", english: "a tall man / a tall woman" },
                { foreign: "un bon repas / une bonne idée", english: "a good meal / a good idea (before noun)" },
            ]
        },
        {
            title: "Passé Composé (Past Tense)",
            text: "The most common past tense uses avoir or être + past participle. Verbs of motion and all reflexive verbs use être, and the participle agrees with the subject's gender/number.",
            examples: [
                { foreign: "J'ai mangé une pizza.", english: "I ate a pizza. (avoir)" },
                { foreign: "Elle est allée au marché.", english: "She went to the market. (être + agreement)" },
            ]
        },
    ],

    learningPath: [
        {
            section: "Les Bases",
            icon: "🌱",
            description: "Start with the essentials — greet people and count to ten.",
            nodes: [
                {
                    id: "fr-greetings",
                    name: "Greetings",
                    icon: "👋",
                    description: "Bonjour, bonsoir, au revoir — nail the French hello and goodbye.",
                    skills: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                    xp: 20,
                    status: "done"
                },
                {
                    id: "fr-articles",
                    name: "Le / La / Les",
                    icon: "📖",
                    description: "French nouns have gender. Learn which article goes with which noun.",
                    skills: ["Le (masc)", "La (fem)", "Les (pl)", "L' (vowel)"],
                    xp: 30,
                    status: "done"
                },
                {
                    id: "fr-numbers",
                    name: "Numbers",
                    icon: "🔢",
                    description: "Un, deux, trois… count your way into French.",
                    skills: ["Un", "Deux", "Trois", "Dix", "Vingt"],
                    xp: 20,
                    status: "active"
                },
            ]
        },
        {
            section: "La Vie Quotidienne",
            icon: "☕",
            description: "Handle daily situations in French.",
            nodes: [
                {
                    id: "fr-family",
                    name: "La Famille",
                    icon: "👨‍👩‍👧",
                    description: "Mère, père, frère, sœur — talk about the people you love.",
                    skills: ["La mère", "Le père", "Le frère", "La sœur"],
                    xp: 30,
                    status: "locked"
                },
                {
                    id: "fr-food",
                    name: "Food & Drink",
                    icon: "🥖",
                    description: "From baguettes to café au lait — essential French food vocab.",
                    skills: ["Le pain", "Le vin", "Le fromage", "L'eau"],
                    xp: 40,
                    status: "locked"
                },
                {
                    id: "fr-places",
                    name: "Places",
                    icon: "🗼",
                    description: "Navigate cities, find the gare, and check into l'hôtel.",
                    skills: ["La maison", "La gare", "L'aéroport", "La plage"],
                    xp: 40,
                    status: "locked"
                },
            ]
        },
        {
            section: "La Grammaire",
            icon: "✏️",
            description: "Understand the patterns that make French work.",
            nodes: [
                {
                    id: "fr-etre",
                    name: "Être — To Be",
                    icon: "🧩",
                    description: "Je suis, tu es, il est — the most essential verb in French.",
                    skills: ["Je suis", "Tu es", "Il est", "Nous sommes"],
                    xp: 50,
                    status: "locked"
                },
                {
                    id: "fr-negation",
                    name: "Ne … Pas",
                    icon: "🚫",
                    description: "Negate any sentence with the ne…pas wrapper.",
                    skills: ["Je ne sais pas", "Ce n'est pas", "Il ne vient pas"],
                    xp: 50,
                    status: "locked"
                },
                {
                    id: "fr-passe",
                    name: "Passé Composé",
                    icon: "⏳",
                    description: "Talk about the past: j'ai mangé, elle est allée.",
                    skills: ["J'ai mangé", "Tu as dit", "Elle est allée"],
                    xp: 70,
                    status: "locked"
                },
            ]
        },
        {
            section: "Niveau Avancé",
            icon: "🎭",
            description: "Reach true conversational fluency in French.",
            nodes: [
                {
                    id: "fr-adjectives",
                    name: "Adjectives",
                    icon: "🎨",
                    description: "Grand, petit, beau — match gender and number like a native.",
                    skills: ["Grand / Grande", "Bon / Bonne", "Vieux / Vieille"],
                    xp: 60,
                    status: "locked"
                },
            ]
        },
    ],
});
