const test = [
    // DATORS
    {
        num: 1,
        img: "img\\balkouras-nicos-ncOQxZe8Krw-unsplash.jpg",
        q: "Novērtējiet datoru pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dabīgs", "Neitrāli", "Drīzāk dabīgs nekā mākslīgs", "Pilnīgi dabīgs"],
    },
    {
        num: 2,
        img: "img\\balkouras-nicos-ncOQxZe8Krw-unsplash.jpg",
        q: "Novērtējiet datoru pēc dotas pazīmes:",
        options: ["Pilnīgi mašīnveidīgs", "Drīzāk mašīnveidīgs nekā cilvēcisks", "Neitrāli", "Drīzāk cilvēcisks nekā mašīnveidīgs", "Pilnīgi cilvēcisks"],
    },
    {
        num: 3,
        img: "img\\balkouras-nicos-ncOQxZe8Krw-unsplash.jpg",
        q: "Novērtējiet datoru pēc dotas pazīmes:",
        options: ["Pilnīgi neapzināts", "Drīzāk neapzināts nekā apzināts", "Neitrāli", "Drīzāk apzināts nekā neapzināts", "Pilnīgi apzināts"],
    },
    {
        num: 4,
        img: "img\\balkouras-nicos-ncOQxZe8Krw-unsplash.jpg",
        q: "Novērtējiet datoru pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dzīvs", "Neitrāli", "Drīzāk dzīvs nekā mākslīgs", "Pilnīgi dzīvs"],
    },
    {
        num: 5,
        img: "img\\balkouras-nicos-ncOQxZe8Krw-unsplash.jpg",
        q: "Novērtējiet datoru pēc dotas pazīmes:",
        options: ["Kustas pilnīgi stingri", "Kustas drīzāk stingri nekā eleganti", "Neitrāli", "Kustas drīzāk eleganti nekā stingri", "Kustas pilnīgi eleganti"],
    },
    // PRINTERIS
    {
        num: 6,
        img: "img\\joonas-sild-QbOnQQebbjU-unsplash.jpg",
        q: "Novērtējiet printeri pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dabīgs", "Neitrāli", "Drīzāk dabīgs nekā mākslīgs", "Pilnīgi dabīgs"],
    },
    {
        num: 7,
        img: "img\\joonas-sild-QbOnQQebbjU-unsplash.jpg",
        q: "Novērtējiet printeri pēc dotas pazīmes:",
        options: ["Pilnīgi mašīnveidīgs", "Drīzāk mašīnveidīgs nekā cilvēcisks", "Neitrāli", "Drīzāk cilvēcisks nekā mašīnveidīgs", "Pilnīgi cilvēcisks"],
    },
    {
        num: 8,
        img: "img\\joonas-sild-QbOnQQebbjU-unsplash.jpg",
        q: "Novērtējiet printeri pēc dotas pazīmes:",
        options: ["Pilnīgi neapzināts", "Drīzāk neapzināts nekā apzināts", "Neitrāli", "Drīzāk apzināts nekā neapzināts", "Pilnīgi apzināts"],
    },
    {
        num: 9,
        img: "img\\joonas-sild-QbOnQQebbjU-unsplash.jpg",
        q: "Novērtējiet printeri pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dzīvs", "Neitrāli", "Drīzāk dzīvs nekā mākslīgs", "Pilnīgi dzīvs"],
    },
    {
        num: 10,
        img: "img\\joonas-sild-QbOnQQebbjU-unsplash.jpg",
        q: "Novērtējiet printeri pēc dotas pazīmes:",
        options: ["Kustas pilnīgi stingri", "Kustas drīzāk stingri nekā eleganti", "Neitrāli", "Kustas drīzāk eleganti nekā stingri", "Kustas pilnīgi eleganti"],
    },
    // ROBOTS
    {
        num: 11,
        img: "img\\owen-beard-K21Dn4OVxNw-unsplash.jpg",
        q: "Novērtējiet robotu pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dabīgs", "Neitrāli", "Drīzāk dabīgs nekā mākslīgs", "Pilnīgi dabīgs"],
    },
    {
        num: 12,
        img: "img\\owen-beard-K21Dn4OVxNw-unsplash.jpg",
        q: "Novērtējiet robotu pēc dotas pazīmes:",
        options: ["Pilnīgi mašīnveidīgs", "Drīzāk mašīnveidīgs nekā cilvēcisks", "Neitrāli", "Drīzāk cilvēcisks nekā mašīnveidīgs", "Pilnīgi cilvēcisks"],
    },
    {
        num: 13,
        img: "img\\owen-beard-K21Dn4OVxNw-unsplash.jpg",
        q: "Novērtējiet robotu pēc dotas pazīmes:",
        options: ["Pilnīgi neapzināts", "Drīzāk neapzināts nekā apzināts", "Neitrāli", "Drīzāk apzināts nekā neapzināts", "Pilnīgi apzināts"],
    },
    {
        num: 14,
        img: "img\\owen-beard-K21Dn4OVxNw-unsplash.jpg",
        q: "Novērtējiet robotu pēc dotas pazīmes:",
        options: ["Pilnīgi mākslīgs", "Drīzāk mākslīgs nekā dzīvs", "Neitrāli", "Drīzāk dzīvs nekā mākslīgs", "Pilnīgi dzīvs"],
    },
    {
        num: 15,
        img: "img\\owen-beard-K21Dn4OVxNw-unsplash.jpg",
        q: "Novērtējiet robotu pēc dotas pazīmes:",
        options: ["Kustas pilnīgi stingri", "Kustas drīzāk stingri nekā eleganti", "Neitrāli", "Kustas drīzāk eleganti nekā stingri", "Kustas pilnīgi eleganti"],
    },
    // IDAQ:
    {
        num: 16,
        q: "Cik lielā mērā datoram ir savas domas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 17,
        q: "Cik lielā mērā datoram ir nodomi?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 18,
        q: "Cik lielā mērā datoram ir brīvā griba?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 19,
        q: "Cik lielā mērā datoram ir apziņa?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 20,
        q: "Cik lielā mērā datoram ir vēlmes?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 21,
        q: "Cik lielā mērā datoram ir vērtības un normas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 22,
        q: "Cik lielā mērā dators piedzīvo emocijas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 23,
        q: "Cik lielā mērā printerim ir savas domas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 24,
        q: "Cik lielā mērā printerim ir nodomi?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 25,
        q: "Cik lielā mērā printerim ir brīvā griba?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 26,
        q: "Cik lielā mērā printerim ir apziņa?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 27,
        q: "Cik lielā mērā printerim ir vēlmes?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 28,
        q: "Cik lielā mērā printerim ir vērtības un normas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 29,
        q: "Cik lielā mērā printeris piedzīvo emocijas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 30,
        q: "Cik lielā mērā robotam ir savas domas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 31,
        q: "Cik lielā mērā robotam ir nodomi?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 32,
        q: "Cik lielā mērā robotam ir brīvā griba?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 33,
        q: "Cik lielā mērā robotam ir apziņa?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 34,
        q: "Cik lielā mērā robotam ir vēlmes?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 35,
        q: "Cik lielā mērā robotam ir vērtības un normas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
    {
        num: 36,
        q: "Cik lielā mērā robots piedzīvo emocijas?",
        options: ["Vispār nav", "Drīzāk nav", "Neitrāli", "Drīzāk ir", "Noteikti ir"],
    },
]
