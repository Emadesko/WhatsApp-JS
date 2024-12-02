// function writeInFile(contenu) {
//     const fs = require('fs');
//     const cheminFichier = 'data.txt';
//     fs.writeFileSync(cheminFichier, contenu);
// }
// const cheminDuFichierJSON = 'data.txt';
// fetch(cheminDuFichierJSON)
//     .then(response => response.text())
//     .then(data => {
//         users = JSON.parse(data)
//         return users
//     })
const users = [
    {
        nom: "Vous",
        etat: "",
        actu: "Rendre fière maman 🍎❤",
        username: "Emadesko🏀",
        password: "1",
        tel: "+221 77 863 22 64",
        photo: "Imgs/emadesko.jpg",
        contacts:
            [
                {
                    type: "group",
                    tel: "310120241819",
                    deja: "oui",
                    owner: [{
                        "num":"+221 77 863 22 64",
                        "present":"oui"
                    }],
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                        { text: `Vous avez créé le groupe "ETSE_2-GLRS_B2 23-24□ISM"`, date: " ", owner: "créer", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Nelsam",
                    tel: "+221 77 346 18 82",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Aicha Anna Marie Akonde",
                    tel: "+221 77 014 44 15",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Beubeuuu 🤭❤️",
                    tel: "+221 78 531 82 98",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "HHBA💕🤝",
                    tel: "+221 77 306 45 29",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Opo",
                    tel: "+221 78 388 50 99",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Emadesko🏀 (Vous)",
                    tel: "+221 77 863 22 64",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Mr Aly",
                    tel: "+221 77 182 54 14",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Mr Baila",
                    tel: "+221 77 766 95 95",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups:
            [
                {
                    nom: "ETSE_2-GLRS_B2 23-24□ISM",
                    tel: "310120241819",
                    admins: ["+221 77 863 22 64"],
                    members:
                        [
                            {
                                num: "+221 77 863 22 64",
                                present: "oui",
                                color: "#7f66ff"
                            },
                            {
                                num: "+221 77 306 45 29",
                                present: "oui",
                                color: "#ff72a1"
                            },
                            {
                                num: "+221 77 014 44 15",
                                present: "oui",
                                color: "#99ebff"
                            },
                            {
                                num: "+221 78 388 50 99",
                                present: "oui",
                                color: "#1daa61"
                            },
                        ],
                    photo: "Imgs/glrs_etse.jpg",
                }
            ],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "Occupé(e)",
        username: "HHBA💕🤝",
        password: "1",
        tel: "+221 77 306 45 29",
        photo: "Imgs/hhba.jpg",
        contacts:
            [
                {
                    type: "group",
                    tel: "310120241819",
                    deja: "oui",
                    owner: [{
                        "num":"+221 77 863 22 64",
                        "present":"oui"
                    }],
                    messages: [
                        { text: `~Emadesko🏀 a créé le groupe "ETSE_2-GLRS_B2 23-24□ISM"`, date: " ", owner: "créer", etat: "bout" },
                    ],
                    myNotRead: [
                        { text: `~Emadesko🏀 vous a ajouté`, date: " ", owner: "ajouté", etat: "bout" },
                    ]
                },
                {
                    type: "friend",
                    nom: "HHBA💕🤝 (Vous)",
                    tel: "+221 77 306 45 29",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Aicha",
                    tel: "+221 77 014 44 15",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Nelsam",
        password: "1",
        tel: "+221 77 346 18 82",
        photo: "Imgs/nelsam.jpg",
        contacts:
            [
                {
                    type: "friend",
                    nom: "Nelsam (Vous)",
                    tel: "+221 77 346 18 82",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Edem",
                    tel: "+221 77 863 22 64",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Mr Aly",
                    tel: "+221 77 182 54 14",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Breukh",
        password: "1",
        tel: "+221 77 182 54 14",
        photo: "Imgs/aly.jpg",
        contacts:
            [
                {
                    type: "friend",
                    nom: "Breukh (Vous)",
                    tel: "+221 77 182 54 14",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Respon GLRS-B",
                    tel: "+221 77 014 44 15",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Baila",
                    tel: "+221 77 766 95 95",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Elolo",
                    tel: "+221 77 346 18 82",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Birane Baila Wane",
        password: "1",
        tel: "+221 77 766 95 95",
        photo: "Imgs/baila.jpg",
        contacts:
            [
                {
                    type: "friend",
                    nom: "Birane Baila Wane (Vous)",
                    tel: "+221 77 766 95 95",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Respon GLRS-B",
                    tel: "+221 77 014 44 15",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Aly",
                    tel: "+221 77 182 54 14",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Aicha Anna Marie Akonde",
        password: "1",
        tel: "+221 77 014 44 15",
        photo: "Imgs/aicha.jpg",
        contacts:
            [
                {
                    type: "group",
                    tel: "310120241819",
                    deja: "oui",
                    owner: [{
                        "num":"+221 77 863 22 64",
                        "present":"oui"
                    }],
                    messages: [
                        { text: `~Emadesko🏀 a créé le groupe "ETSE_2-GLRS_B2 23-24□ISM"`, date: " ", owner: "créer", etat: "bout" },
                    ],
                    myNotRead: [
                        { text: `~Emadesko🏀 vous a ajouté`, date: " ", owner: "ajouté", etat: "bout" },
                    ]
                },
                {
                    type: "friend",
                    nom: "Aicha Anna Marie Akonde (Vous)",
                    tel: "+221 77 014 44 15",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "HHBA💕🤝",
                    tel: "+221 77 306 45 29",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Edem",
                    tel: "+221 77 863 22 64",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Mr Aly",
                    tel: "+221 77 182 54 14",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Mr Baila",
                    tel: "+221 77 766 95 95",
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Opo",
        password: "1",
        tel: "+221 78 388 50 99",
        photo: "Imgs/opo.jpg",
        contacts:
            [
                {
                    type: "group",
                    tel: "310120241819",
                    deja: "oui",
                    owner: [{
                        "num":"+221 77 863 22 64",
                        "present":"oui"
                    }],
                    messages: [
                        { text: `~Emadesko🏀 a créé le groupe "ETSE_2-GLRS_B2 23-24□ISM"`, date: " ", owner: "créer", etat: "bout" },
                    ],
                    myNotRead: [
                        { text: `~Emadesko🏀 vous a ajouté`, date: " ", owner: "ajouté", etat: "bout" },
                    ]
                },
                {
                    type: "friend",
                    nom: "Opo (Vous)",
                    tel: "+221 78 388 50 99",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Helle Helle",
                    tel: "+221 77 306 45 29",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
                {
                    type: "friend",
                    nom: "Technicien",
                    tel: "+221 77 863 22 64",
                    deja: "non",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    ],
                    myNotRead: [
                    ]
                },
            ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Nour Mouhamad",
        password: "1",
        tel: "+221 77 299 78 04",
        photo: "Imgs/nour.jpg",
        contacts:[],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
    {
        nom: "Vous",
        etat: "",
        actu: "",
        username: "Gloria",
        password: "1",
        tel: "+221 78 531 82 98",
        photo: "Imgs/gloria.png",
        contacts:[
            {
                type: "friend",
                nom: "Beubeuuu 🤭❤️",
                tel: "+221 77 863 22 64",
                deja: "oui",
                messages: [
                    { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                ],
                myNotRead: [
                ]
            },
        ],
        groups: [],
        anciensGroups: [],
        messagesImportants: []
    },
];

const connexion = document.querySelector(".login-container");
const acceuil = document.querySelector(".acceuil");
const chat = document.querySelector(".chat");
const quit = document.querySelector(".quit");
const container = document.querySelector(".container");
const edit = document.querySelector(".edit");
const envoiDiv = document.querySelector(".envoiDiv");
const iconeChat = document.querySelector(".iconeChat");
const iconeCall = document.querySelector(".iconeCall");
const iconeStory = document.querySelector(".iconeStory");
const iconeArchive = document.querySelector(".iconeArchive");
const iconeImportant = document.querySelector(".iconeImportant");
const menuActual = document.querySelector(".menuActual");
const discussionBtn = document.querySelector(".discussionBtn");
const btnConnexion = document.querySelector(".btnConnexion");
const telephone = document.querySelector("#telephone");
const password = document.querySelector("#password");
const outputMessages = document.querySelector(".messages");
const outputContacts = document.querySelector(".liste");
const Rechercher = document.querySelector("#Rechercher");
const nom = document.querySelector(".nom");
const online = document.querySelector(".online");
const profilUser = document.querySelector(".profilUser");
const propioProfil = document.querySelector(".propioProfil");
const textMess = document.querySelector(".textMess");
const nouveau = document.querySelector(".new");
const actuTexte = document.querySelector(".actuTexte");
const actualise = document.querySelector(".title");
const loginError = document.querySelector(".loginError");
telephone.focus()
let totalSelected = 0
let totalContacts = 0
let membersForCreation = []
let numberMarqued = []
let f = []
let userActual
let friends;
let lastClick = -1

function login(number, password) {
    for (let i = 0; i < users.length; i++) {
        if (num(users[i].tel,1) === num(number,1) && users[i].password === password) {
            return i;
        }
    }
    return -1;
}

function add0(data) {
    if (data < 10) {
        return "0" + String(data)
    } else {
        return String(data)
    }
}

function getCurrentDate() {
    const d = new Date();
    jj = add0(d.getDate())
    mm = add0(d.getMonth() + 1)
    aa = add0(d.getFullYear())
    hh = add0(d.getHours())
    min = add0(d.getMinutes())
    return `${jj}/${mm}/${aa} ${hh}:${min}`
}

function generateGroupNumber() {
    const d = new Date();
    jj = d.getDate()
    mm = d.getMonth() + 1
    aa = d.getFullYear()
    hh = d.getHours()
    min = d.getMinutes()
    mil= d.getMilliseconds()
    return `${String(jj)+String(mm)+String(aa)+String(hh)+String(min)+String(mil)+String(Math.floor(Math.random()*255))}`
}

function generateColor() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function nbrContacts() {
    totalContacts=0
    userConnected.contacts.forEach(element => {
        if (element.type == "friend" && element.nom != "" && element.tel != userConnected.tel) {
            totalContacts += 1
        }
    });
}
function num(number,what="") {
    number=String(number)
    if(what=="" && number.indexOf("+") != -1){
        number = number.replace("+", "")
    }
    x = " "
    while (number.indexOf(x) != -1) {
        number = number.replace(x, "")
    }
    return number
}

function getFriendInfos(name, number, deja, lastSms, nbr, totalSms) {
    for (let i = 0; i < users.length; i++) {
        if (num(users[i].tel) === num(number)) {
            return { type: "friend", nom: name, etat: users[i].etat, actu: users[i].actu, username: "~" + users[i].username, tel: users[i].tel, photo: users[i].photo, lastSms: lastSms, myNotRead: nbr, nbrSms: totalSms, deja:deja};
        }
    }
    return null
}

function getGroupInfos(ownerNumber, groupNumber, deja, lastSms, nbr, totalSms) {
    if(deja=="quitter") {
        for (let index = 0; index < userConnected.anciensGroups.length; index++) {
            if(userConnected.anciensGroups[index].tel==groupNumber){
                if(lastSms.owner=="ajouté"){
                    admin=getUserByNumber(ownerNumber[0].num)
                    lastSms.text=`${admin.nom != "" ? admin.nom : admin.username} vous a ajouté`
                }
                if(lastSms.owner=="parti"){
                    admin=getUserByNumber(lastSms.concerner)
                    lastSms.text=`${admin.nom != "" ? admin.nom : admin.username} est parti`
                }
                return { type: "group", nom: userConnected.anciensGroups[index].nom, tel: userConnected.anciensGroups[index].tel, admins: userConnected.anciensGroups[index].admins, members: userConnected.anciensGroups[index].members, photo: userConnected.anciensGroups[index].photo, lastSms: lastSms, myNotRead: nbr, nbrSms: totalSms, deja:deja};
            }
        }
    }
    numAdmin=ownerNumber[ownerNumber.length-1].num
    for (let i = 0; i < users.length; i++) {
        if (num(users[i].tel) ===  num(numAdmin)) {
            for (let j = 0; j < users[i].groups.length; j++) {
                if (num(users[i].groups[j].tel) === num(groupNumber)) {
                    if(lastSms.owner=="ajouté"){
                        admin=getUserByNumber(ownerNumber[0].num)
                        lastSms.text=`${admin.nom != "" ? admin.nom : admin.username} vous a ajouté`
                    }
                    if(lastSms.owner=="parti"){
                        admin=getUserByNumber(lastSms.concerner)
                        lastSms.text=`${admin.nom != "" ? admin.nom : admin.username} est parti`
                    }
                    return { type: "group", nom: users[i].groups[j].nom, tel: users[i].groups[j].tel, admins: users[i].groups[j].admins, members: users[i].groups[j].members, photo: users[i].groups[j].photo, lastSms: lastSms, myNotRead: nbr, nbrSms: totalSms, deja:deja};
                }
            }
        }
    }
}

function getDiscussions(){
    totalNonLus=0
    totalArchiveNonLus=0
    contacts = [];
    userConnected.contacts.forEach(discussion => {
        myNotRead = discussion.myNotRead.length;
        cpt=0
        discussion.myNotRead.forEach(element => {
            if(element.owner=="quitté" || element.owner=="admin" || element.owner=="parti"){
                cpt+=1
            }
        });
        lus = discussion.messages.length;
        if (myNotRead != 0) {
            last = discussion.myNotRead[myNotRead - 1]
            if(discussion.deja=="archivé"){
                if(cpt!=myNotRead)
                totalArchiveNonLus+=1
            }else{
                if(cpt!=myNotRead)
                totalNonLus+=1
            }
            if(cpt!=0){
                myNotRead-=cpt
            }
        } else {
            last = discussion.messages[lus - 1]
        }
        if (discussion.type == "friend") {
            contacts.push(getFriendInfos(discussion.nom, discussion.tel, discussion.deja, last, myNotRead, lus + myNotRead))
        } else {
            contacts.push(getGroupInfos(discussion.owner, discussion.tel, discussion.deja, last, myNotRead, lus + myNotRead))
        }
    })
    if(document.querySelector(".totalNonLus")){
        document.querySelector(".totalNonLus").remove()
    }
    if(document.querySelector(".totalArchNonLus")){
        document.querySelector(".totalArchNonLus").remove()
    }
    if(totalNonLus!=0){
        const iconeNombre=document.createElement('div')
        iconeNombre.classList.add('totalNonLus')
        iconeNombre.innerHTML=totalNonLus
        iconeNombre.style.zIndex=2
        iconeNombre.style.position="absolute"
        iconeNombre.style.top="2px"
        iconeNombre.style.right="2px"
        iconeChat.appendChild(iconeNombre)
    }
    if(totalArchiveNonLus!=0){
        const iconeNombreArchive=document.createElement('div')
        iconeNombreArchive.classList.add('totalArchNonLus')
        iconeNombreArchive.innerHTML=totalArchiveNonLus
        iconeNombreArchive.style.zIndex=2
        iconeNombreArchive.style.position="absolute"
        iconeNombreArchive.style.top="2px"
        iconeNombreArchive.style.right="2px"
        iconeArchive.appendChild(iconeNombreArchive)
    }
    return contacts;
}

function getDiscussionsArchives(){
    contacts = [];
    userConnected.contacts.forEach(discussion => {
        if(discussion.deja.indexOf("archivé") !=-1 ){
            myNotRead = discussion.myNotRead.length;
            lus = discussion.messages.length;
            if (myNotRead != 0) {
                last = discussion.myNotRead[myNotRead - 1]
            } else {
                last = discussion.messages[lus - 1]
            }
            if (discussion.type == "friend") {
                contacts.push(getFriendInfos(discussion.nom, discussion.tel, discussion.deja, last, myNotRead, lus + myNotRead))
            } else{
                contacts.push(getGroupInfos(discussion.owner, discussion.tel, discussion.deja, last, myNotRead, lus + myNotRead))
            }
        }
    })
    return contacts;
}

function delNonLus(number) {
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if (num(userConnected.contacts[i].tel) === num(number)) {
            for (let m = userConnected.contacts[i].messages.length - 1; m >= 0; m--) {
                if (userConnected.contacts[i].messages[m].owner == "nonLus"){
                    userConnected.contacts[i].messages.splice(m, 1)
                    break
                }
                if (userConnected.contacts[i].messages[m].owner.indexOf("you") != -1){
                    break
                }
            }
            break
        }
    }
}

function remove(identity){
    if(document.querySelector(identity)){
        document.querySelector(identity).remove()
    }
}

function trie(){
    ordre=[]
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if(userConnected.contacts[i].deja.indexOf("non")!=-1){
            ordre.push(userConnected.contacts.splice(i,1)[0])
            i--
        }
    }
    ordre.sort((a,b)=>a.nom.localeCompare(b.nom)).forEach(element => {
        userConnected.contacts.push(element)
    });
}

function quitterGroupe(user){
    if(!confirm("Seuls les admins sauront que vous avez quitté le groupe")){
        return
    }
    for (let index = 0; index < userConnected.contacts.length; index++){
        if(userConnected.contacts[index].tel==user.tel){
            if(userActual==user){
                userConnected.contacts[index].messages.push(
                    { text: `Vous avez quitté le groupe`, date: " ", owner: "quitté", etat: "bout" }
                )
            }else{
                userConnected.contacts[index].myNotRead.push(
                    { text: `Vous avez quitté le groupe`, date: " ", owner: "quitté", etat: "bout" }
                )
            }
            userConnected.contacts[index].deja="quitter"
            owners=[]
            for (let i = 0; i < userConnected.contacts[index].owner.length; i++) {
                if(userConnected.contacts[index].owner[i].present=="oui")
                owners.push(userConnected.contacts[index].owner[i].num)
            }
            for (let i = 0; i < users.length; i++) {
                if (owners.indexOf(users[i].tel)!=-1){
                    for (let j = 0; j < users[i].groups.length; j++) {
                        if (users[i].groups[j].tel === user.tel) {
                            for (let k = 0; k < users[i].groups[j].members.length; k++) {
                                if (users[i].groups[j].members[k].num===userConnected.tel) {
                                    users[i].groups[j].members[k].present= "non"
                                    group=structuredClone(users[i].groups[j]) 
                                    break
                                }
                            }
                            break
                        }
                    }
                }
            }
            groupInfos=getGroupInfos(userConnected.contacts[index].owner,userConnected.contacts[index].tel,"","","","")
            if(groupInfos.admins.indexOf(userConnected.tel)!=-1){
                groupInfos.admins.splice(groupInfos.admins.indexOf(userConnected.tel),1)
                group.admins.splice(groupInfos.admins.indexOf(userConnected.tel),1)
                if(!groupInfos.admins.length){
                    ok=false
                    for (let index = 0; index < groupInfos.members.length; index++) {
                        if(groupInfos.members[index].present=="oui"){
                            newAdmin=(groupInfos.members[index].num)
                            ok=true
                            break
                        }
                    }
                    if(ok){
                        groupInfos.admins.push(newAdmin)
                        group.admins.push(newAdmin)
                        groupInfos.members.forEach(member => {
                            for (let index = 0; index < users.length; index++) {
                                if(member.num==users[index].tel){
                                    for (let j = 0; j < users[index].contacts.length; j++) {
                                        if(users[index].contacts[j].tel==groupInfos.tel){
                                            for (let q = 0; q <  users[index].contacts[j].owner.length; q++) {
                                                if( users[index].contacts[j].owner[q].num==userConnected.tel){
                                                    users[index].contacts[j].owner[q].present="non"
                                                    break
                                                }
                                            }
                                            users[index].contacts[j].owner.push({
                                                "num":newAdmin,
                                                "present":"oui"
                                            })
                                            if(users[index].tel==newAdmin){
                                                users[index].contacts[j].myNotRead.push(
                                                    { text: `Vous etes désormais admin`, date: " ", owner: "admin", etat: "bout" }
                                                )
                                                users[index].groups.push(group)
                                            }
                                            
                                            break
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }
            groupInfos.admins.forEach(element => {
                for (let index = 0; index < users.length; index++) {
                    if(element==users[index].tel){
                        for (let j = 0; j < users[index].contacts.length; j++) {
                            if(users[index].contacts[j].tel==groupInfos.tel){
                                users[index].contacts[j].myNotRead.push(
                                    { text: `${userConnected.username} est parti`, date: " ", owner: "parti", etat: "bout", concerner: userConnected.tel}
                                )
                                break
                            }
                        }
                    }
                }
            });
            break
        }
    }
    userConnected.anciensGroups.push(structuredClone(group))
    if(userActual!=-1 && userActual.tel==user.tel){
        detailsUser(num(user.tel))
    }
}


function supprimerDiscussion(user){
    if(!confirm("Toutes vos discussions seront perdus")){
        return
    }
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if(userConnected.contacts[i].tel==user.tel){
            if(userConnected.contacts[i].type=="friend"){
                userConnected.contacts[i].messages=[{ text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" }]
                userConnected.contacts[i].myNotRead=[]
                if(userConnected.contacts[i].deja.indexOf("bloquer")!=-1){
                    userConnected.contacts[i].deja="non bloquer"
                }else{
                    userConnected.contacts[i].deja="non"
                }
            }else{
                userConnected.contacts.splice(i, 1)
            }
            lastClick=-1;
            acceuil.classList.remove("hide");
            chat.classList.add("hide");
            break
        }
    }
}

function buildOptionContact(e,user){
    e.preventDefault()
    editButton()
    const optionsDiv=document.createElement("div")
    optionsDiv.classList.add('optionsDiv')
    optionsDiv.innerHTML=`
                        <div class="option marquer">
                            <i class="ri-chat-3-line"></i>
                            <div class="optionText">Marquer comme ${user.myNotRead==0 && document.querySelector(`#marque${num(user.tel)}`).classList.value.indexOf("hide")!=-1?"non":""} lu</div>
                        </div>
                        <div class="option archiver">
                            <i class="ri-archive-line"></i>
                            <div class="optionText">${user.deja.indexOf("archivé")!=-1?"Désarchiver":"Archiver"}</div>
                        </div>
                        <div class="option effacer">
                            <i class="ri-brush-line"></i>
                            <div class="optionText">Effacer les messages</div>
                        </div>
                        ${user.type=="friend" || user.deja=="quitter"?
                            `<div class="option supprimer">
                                <i class="ri-delete-bin-line"></i>
                                <div class="optionText">Supprimer</div>
                            </div>`
                            :
                            `<div class="option quitter">
                                <i class="ri-logout-circle-line"></i>
                                <div class="optionText">Quitter le groupe</div>
                            </div>`
                        }
                        ${chat.classList.value.indexOf("hide")==-1 && user.tel==userActual.tel?
                            `<div class="option fermer">
                                <i class="ri-close-line"></i>
                                <div class="optionText">Fermer la discussion</div>
                            </div>`:""
                        }
                        `
    optionsDiv.style.left=`${e.x}px`
    optionsDiv.style.top=`${e.y}px`
    container.appendChild(optionsDiv)
    const marquer=document.querySelector(".marquer")
    const archiver=document.querySelector(".archiver")
    const effacer=document.querySelector(".effacer")
    marquer.addEventListener('click',function(){
        if(user.myNotRead==0){
            if(numberMarqued.indexOf(user.tel+userConnected.tel)==-1){
                numberMarqued.push(user.tel+userConnected.tel)
            }else{
                numberMarqued.splice(numberMarqued.indexOf(user.tel+userConnected.tel),1)
            }
            document.querySelector(`#marque${num(user.tel)}`).classList.toggle('hide')
            remove(".optionsDiv")
        }else{
            if(user.deja.indexOf("bloquer")==-1){
                blueTick(user.tel,user.deja)
            }
            getMessages(user.tel)
            delNonLus(user.tel)
            actualisation()
        }
    })
    archiver.addEventListener('click',function(){
        for (let i = 0; i < userConnected.contacts.length; i++) {
            if(userConnected.contacts[i].tel==user.tel){
                if(userConnected.contacts[i].deja.indexOf("archivé")!=-1 && userConnected.contacts[i].deja.indexOf("bloquer")!=-1){
                    userConnected.contacts[i].deja="bloquer"
                    actualisation()
                    break
                }else if(userConnected.contacts[i].deja.indexOf("archivé")!=-1 && userConnected.contacts[i].deja.indexOf("bloquer")==-1){
                    userConnected.contacts[i].deja="oui"
                    actualisation()
                    break
                }
                if(userConnected.contacts[i].deja.indexOf("archivé")==-1 && userConnected.contacts[i].deja.indexOf("bloquer")!=-1){
                    userConnected.contacts[i].deja="bloquer archivé"
                    actualisation()
                    break
                }else if(userConnected.contacts[i].deja.indexOf("archivé")==-1 && userConnected.contacts[i].deja.indexOf("bloquer")==-1){
                    userConnected.contacts[i].deja="archivé"
                    actualisation()
                    break
                }
            }
        }
    })
    effacer.addEventListener('click',function(){
        if(!confirm("Toutes vos discussions seront perdus")){
            actualisation()
            return
        }
        for (let i = 0; i < userConnected.contacts.length; i++) {
            if(userConnected.contacts[i].tel==user.tel){
                userConnected.contacts[i].messages=[{ text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" }]
                userConnected.contacts[i].myNotRead=[]
                actualisation()
                break
            }
        }
    })
    if(user.type=="friend" || user.deja=="quitter"){
        const supprimer=document.querySelector(".supprimer")
        supprimer.addEventListener('click',function(){
            supprimerDiscussion(user)
            actualisation()
        })
    }else{
        const quitter=document.querySelector(".quitter")
        quitter.addEventListener('click',function(){
            quitterGroupe(user)
            actualisation()
        })
    }
    if(chat.classList.value.indexOf("hide")==-1 && user.tel==userActual.tel){
        const fermer=document.querySelector(".fermer")
        fermer.addEventListener('click',function(){
            acceuil.classList.remove("hide");
            chat.classList.add("hide");
            actualisation()
            lastClick=-1
        })
    }
}

function buildOptionMessage(e,user,message){
    e.preventDefault()
    editButton()
    const optionsDiv=document.createElement("div")
    optionsDiv.classList.add('optionsDiv')
    optionsDiv.innerHTML=`
                        <div class="option transférer">
                            <i class="ri-share-forward-fill"></i>
                            <div class="optionText">Transférer</div>
                        </div>
                        <div class="option important">
                            ${message.owner.indexOf("important")==-1?"<i class='ri-star-line'></i>":"<i class='ri-star-fill'></i>"}
                            <div class="optionText">${message.owner.indexOf("important")==-1?"Important":"Suppr.important"}</div>
                        </div>
                        <div class="option supprimer">
                            <i class="ri-delete-bin-line"></i>
                            <div class="optionText">Supprimer${message.owner.indexOf("them")!=-1?" pour moi":""}</div>
                        </div>
                        <div class="option selectionner">
                            <i class="ri-checkbox-line"></i>
                            <div class="optionText">Selectionner</div>
                        </div>
                        ${message.owner.indexOf("you")!=-1?
                            `<div class="option infoMessage">
                                <i class="ri-information-line"></i>
                                <div class="optionText">Infos</div>
                            </div>`
                            :
                            ``
                        }
                        `
    if(message.owner.indexOf("them")!=-1){
        optionsDiv.style.left=`${e.x}px`
    }else{
        optionsDiv.style.left=`${e.x-300}px`
    }
    optionsDiv.style.top=`${e.y}px`
    container.appendChild(optionsDiv)
    const transférer=document.querySelector(".transférer")
    const important=document.querySelector(".important")
    const supprimer=document.querySelector(".supprimer")
    const selectionner=document.querySelector(".selectionner")
    important.addEventListener("click", function(){
        if(message.owner.indexOf("important")==-1){
            message.owner+=" important"
            userConnected.messagesImportants.push(message)
        }else{
            message.owner=message.owner.replace(" important","")
            userConnected.messagesImportants.splice(userConnected.messagesImportants.indexOf(message),1)
        }
        actualisation()
    })
    if(message.owner.indexOf("you")!=-1){
        const infoMessage=document.querySelector(".infoMessage")
    }
}

function listUsers(divOutput, tab, type = "") {
    divOutput.innerHTML = ``;
    if (tab.length == 0) {
        divOutput.innerHTML += `<div class="mess résultat">Aucun résultat</div>`
        return
    }
    tab.forEach(function (user) {
        if (type == "tout" || user.deja=="oui" || user.deja=="quitter" || (user.deja.indexOf("bloquer")!=-1 && user.deja.indexOf("archivé")==-1 && user.deja.indexOf("non")==-1)) {
            if (divOutput == outputContacts) {
                const contact=document.createElement('div')
                contact.classList.add("contact")
                contact.id=`element${num(user.tel)}`
                contact.addEventListener('click',function(){
                    detailsUser(num(user.tel))
                })
                if(user.deja.indexOf("non")==-1){
                    contact.innerHTML += `
                            <div class="profil">
                                <img src=${user.photo} alt="">
                            </div>
                            <div class="textMess ">
                                <div class="nomHeure">
                                    <div class="nom">${user.nom != "" ? user.nom : user.tel}</div>
                                    <div class="heure ${(user.myNotRead != 0) ? `nonLu` : ""}">${user.lastSms.date.split(" ")[1]}</div>
                                </div>
                                <div class="messNbr">
                                    <div class="mess">${(user.lastSms.owner.indexOf("you")!=-1) ? `<i class='ri-check-double-line ${user.lastSms.etat}'></i>` : (user.lastSms.type == "group") ? ((getUserByNumber(user.lastSms.number).nom != "") ? getUserByNumber(user.lastSms.number).nom : getUserByNumber(user.lastSms.number).username) + ": " : ""} ${user.lastSms.text}</div>
                                    <div class="nbrArch">
                                        ${(user.deja.indexOf("archivé")!=-1) ? `<i class="ri-volume-mute-line"></i> <div class='arch'>Archivées</div>` : ``}
                                        ${(user.myNotRead != 0) ? `<div class='nbr'>${user.myNotRead}</div>` : `<div class='nbrMarque ${numberMarqued.indexOf(user.tel+userConnected.tel)==-1?"hide":""}' id='marque${num(user.tel)}'></div>`}
                                    </div>
                                </div>
                            </div>
                    `
                    contact.addEventListener("contextmenu", function (e) {
                        buildOptionContact(e,user)
                    });
                }else{
                    contact.innerHTML += `
                            <div class="profil">
                                <img src=${user.photo} alt="">
                            </div>
                            <div class="group">${user.nom != "" ? user.nom : user.tel}<br>${user.actu.trim() != "" ? `<span class="mess actu">${user.actu}</span>` : ""}</div>
                    `
                }
                divOutput.appendChild(contact)
            } else {
                if (user.type == "friend" && user.nom != "" && user.tel != userConnected.tel) {
                    const contact=document.createElement('div')
                    contact.classList.add("contact")
                    contact.id=`element${num(user.tel)}`
                    contact.addEventListener('click',function(){
                        detailsUser(num(user.tel))
                    })
                    contact.innerHTML += `
                            <div class="profil">
                                <img src=${user.photo} alt="">
                            </div>
                            <div class="group">${user.nom != "" ? user.nom : user.tel}<br>${user.actu.trim() != "" ? `<span class="mess actu">${user.actu}</span>` : ""}</div>
                    `
                    divOutput.appendChild(contact)
                }
            }
        }
    });
    if(chat.classList.value.indexOf("hide")==-1 && !document.querySelector(".fixe")){
        selected(userActual.tel)
    }
}

function listMessagesImportants(){
    
}

function getMessages(number) {
    outputMessages.innerHTML = ``
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if (userConnected.contacts[i].tel == number) {
            nl = userConnected.contacts[i].myNotRead.length
            if (nl > 0) {
                last=userConnected.contacts[i].myNotRead[nl-1]
                for (let index = 1; index <= userConnected.contacts[i].myNotRead.length; index++) {
                    if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="quitté"){
                        nl-=1
                    }
                    if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="admin"){
                        nl-=1
                    }
                    if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="parti"){
                        nl-=1
                    }
                }
                if (nl == 1) {
                    userConnected.contacts[i].messages.push({ text: `1 message non lu`, date: " ", owner: "nonLus", etat: "bout" })
                } else if(nl != 0){
                    userConnected.contacts[i].messages.push({ text: `${nl} messages non lus`, date: " ", owner: "nonLus", etat: "bout" })
                }
            }
            nl = userConnected.contacts[i].myNotRead.length
            for (let index = 1; index <= userConnected.contacts[i].myNotRead.length; index++) {
                if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="quitté"){
                    nl+=1
                }
                if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="admin"){
                    nl+=1
                }
                if(userConnected.contacts[i].myNotRead[userConnected.contacts[i].myNotRead.length-index].owner=="parti"){
                    nl+=1
                }
            }
            while (nl > 0) {
                userConnected.contacts[i].messages.push(userConnected.contacts[i].myNotRead.shift());
                nl = userConnected.contacts[i].myNotRead.length
            }
            if(numberMarqued.indexOf(number+userConnected.tel)!=-1){
                numberMarqued.splice(numberMarqued.indexOf(number+userConnected.tel),1)
            }
            if(userConnected.contacts[i].type=="group" && userConnected.contacts[i].messages[0].owner!="App" && userConnected.contacts[i].owner[0]!=userConnected.tel){
                admin=getUserByNumber(userConnected.contacts[i].owner[0].num)
                group=getGroupInfos(userConnected.contacts[i].owner,userConnected.contacts[i].tel,userConnected.contacts[i].deja,"","","")
                userConnected.contacts[i].messages[0].text=`${ admin.nom != "" ? admin.nom : admin.username} a créé le groupe "${group.nom}"`
                if(userConnected.contacts[i].messages[1].owner=="nonLus"){
                    userConnected.contacts[i].messages[2].text=`${admin.nom != "" ? admin.nom : admin.username} vous a ajouté`
                }else{
                    userConnected.contacts[i].messages[1].text=`${admin.nom != "" ? admin.nom : admin.username} vous a ajouté`
                }
            }
            printMessages(userConnected.contacts[i]);
            break
        }
    }
}

function getUserByNumber(number) {
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if (num(userConnected.contacts[i].tel) == num(number)) {
            if (userConnected.contacts[i].type == "friend") {
                return getFriendInfos(userConnected.contacts[i].nom, userConnected.contacts[i].tel, userConnected.contacts[i].deja,"", "","")
            } else {
                return getGroupInfos(userConnected.contacts[i].owner, userConnected.contacts[i].tel, userConnected.contacts[i].deja,"", "","")
            }
        }
    }
    return getFriendInfos("", number, "", "","","")
}

function getColor(groupNumber, adminNumber, senderNumber,deja) {
    ok=false
    if(deja=="quitter"){
        for (let index = 0; index < userConnected.anciensGroups.length; index++) {
            if(userConnected.anciensGroups[index].tel==groupNumber){
                if(userConnected.anciensGroups[index].admins.indexOf(senderNumber)!=-1){
                    ok=true
                }
                for (let j = 0; j < userConnected.anciensGroups[index].members.length; j++) {
                    if (userConnected.anciensGroups[index].members[j].num == senderNumber) {
                        return [userConnected.anciensGroups[index].members[j].color,ok]
                    }
                }
            }
        }
    }
    for (let i = 0; i < users.length; i++) {
        if (num(users[i].tel) === num(adminNumber)) {
            for (let j = 0; j < users[i].groups.length; j++) {
                if (users[i].groups[j].tel == groupNumber) {
                    if(users[i].groups[j].admins.indexOf(senderNumber)!=-1){
                        ok=true
                    }
                    for (let index = 0; index < users[i].groups[j].members.length; index++) {
                        if (users[i].groups[j].members[index].num == senderNumber) {
                            return [users[i].groups[j].members[index].color,ok]
                        }
                    }
                }
            }
        }
    }
}

function printMessages(user) {
    pre = ""
    user.messages.forEach(message => {
        const messageDiv=document.createElement('div')
        messageDiv.classList.add(`message`)
        messageDiv.classList.add(`${message.owner.split(" ")[0]}`)
        const content=document.createElement('div')
        content.classList.add('content')
        if(message.owner.indexOf("them")!=-1 || message.owner.indexOf("you")!=-1){
            content.addEventListener("contextmenu", function (e) {
                buildOptionMessage(e,user,message)
            });
        }
        content.innerHTML += `
                            ${(user.messages.indexOf(message) == 0 || pre.number != message.number) ? (message.type == "group") ? `<div class="groupNoms" onclick="detailsUser(${num(message.number)})" style='color:${getColor(user.tel, user.owner[user.owner.length-1].num, message.number,user.deja)[0]}'>${(getUserByNumber(message.number).nom != "") ? getUserByNumber(message.number).nom + (getColor(user.tel, user.owner[user.owner.length-1].num, message.number,user.deja)[1]?`&nbsp;<i class="ri-vip-crown-2-fill adminIcon"></i>`:"") : getUserByNumber(message.number).username + (getColor(user.tel, user.owner[user.owner.length-1].num, message.number,user.deja)[1]?`&nbsp;<i class="ri-vip-crown-2-fill adminIcon"></i>`:"")+ `<div class='groupNums'>${message.number}</div>`}</div>` : "" : ""}
                                <div class="text">${message.owner=="parti"?`${getUserByNumber(message.concerner).nom != "" ? getUserByNumber(message.concerner).nom : getUserByNumber(message.concerner).username} est parti`:message.text}</div>
                                <div class="hour">${(message.owner.indexOf("important")!=-1) ? `<i class="ri-star-fill" style="font-size:15px ;margin-top:3px"></i>`: ""} ${(message.owner.indexOf("diffusion")!=-1) ? `<i class="ri-megaphone-line"></i>`: ""} <span>${" "+message.date.split(" ")[1]}</span> ${(message.owner.indexOf("you")!=-1) ? `<i class="ri-check-double-line ${message.etat}"></i>` : ""}</div>
                            `
        messageDiv.appendChild(content)
        outputMessages.appendChild(messageDiv)
        pre = message
    });
    outputMessages.scrollTop = outputMessages.scrollHeight
}

function sendMessage(user,what='') {
    messageId=generateGroupNumber()
    ok=true
    for (let i = 0; i < userConnected.contacts.length; i++) {
        if (userConnected.contacts[i].tel == user.tel) {
            ok=false
            if (userConnected.contacts[i].tel == userConnected.tel) {
                userConnected.contacts[i].messages.push({ text: `${inputSms.value}`, date: getCurrentDate(), owner: `you${what!=""?" "+what:""}`, etat: "lu", type: "friend", id:messageId })
                if(userConnected.contacts[i].deja=="non"){
                    userConnected.contacts[i].deja="oui"
                }
                x = userConnected.contacts[i]
                userConnected.contacts.splice(i, 1)
                userConnected.contacts.unshift(x)
                return
            } else {
                userConnected.contacts[i].messages.push({ text: `${inputSms.value}`, date: getCurrentDate(), owner: `you${what!=""?" "+what:""}`, etat: "", type: "friend", id:messageId})
                if(userConnected.contacts[i].deja=="non"){
                    userConnected.contacts[i].deja="oui"
                }
                x = userConnected.contacts[i]
                userConnected.contacts.splice(i, 1)
                userConnected.contacts.unshift(x)
                break
            }
        }
    }
    if(ok){
        userConnected.contacts.unshift(
            {
                type: "friend",
                nom: "",
                tel: user.tel,
                deja: "oui",
                messages: [
                    { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                    { text: `${inputSms.value}`, date: getCurrentDate(), owner: "you", type: "friend", id:messageId }
                ],
                myNotRead: [
                ]
            }
        )
    }
    if (user.type == 'friend') {
        v = true
        for (let j = 0; j < users.length; j++) {
            if (users[j].tel == user.tel) {
                concerner = j
                for (let k = 0; k < users[j].contacts.length; k++) {
                    if (users[j].contacts[k].tel == userConnected.tel) {
                        if(users[j].contacts[k].deja.lastIndexOf("bloquer")==-1){
                            users[j].contacts[k].myNotRead.push({ text: `${inputSms.value}`, date: getCurrentDate(), owner: "them", type: "friend", id:messageId })
                            if(users[j].contacts[k].deja=="non"){
                                users[j].contacts[k].deja="oui"
                            }
                            x = users[j].contacts[k]
                            users[j].contacts.splice(k, 1)
                            users[j].contacts.unshift(x)
                        }
                        v = false
                        break
                    }
                }
                break
            }
        }
        if (v) {
            users[concerner].contacts.unshift(
                {
                    type: "friend",
                    nom: "",
                    tel: userConnected.tel,
                    deja: "oui",
                    messages: [
                        { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                        { text: `<div class="profilAdd">
                                    <img src=${userConnected.photo} alt="">
                                </div>
                                <div class="infos">
                                    <span>${userConnected.tel} </span>
                                    <span class="mess">~${userConnected.username}</span>
                                    <span class="mess">Ne fais pas partie de vos contacts</span>
                                    <button class="bloquer">Bloquer</button><button class="enregistrer">Ajouter aux contacts</button>
                                </div>`,
                     date: " ", owner: "add", etat: "bout" },
                    ],
                    myNotRead: [
                        { text: `${inputSms.value}`, date: getCurrentDate(), owner: "them", type: "friend", id:messageId }
                    ]
                }
            )
        }
    }else {
        user.members.forEach(member => {
            if(member.present=="oui"){
                for (let j = 0; j < users.length; j++) {
                    if (member.num != userConnected.tel) {
                        if (users[j].tel == member.num) {
                            for (let k = 0; k < users[j].contacts.length; k++) {
                                if (users[j].contacts[k].tel == user.tel) {
                                    users[j].contacts[k].myNotRead.push({ text: `${inputSms.value}`, date: getCurrentDate(), owner: "them", number: userConnected.tel, type: "group", id:messageId })
                                    x = users[j].contacts[k]
                                    users[j].contacts.splice(k, 1)
                                    users[j].contacts.unshift(x)
                                    break
                                }
                            }
                            break
                        }
                    }
                }
            }
        })
    }
}
function blueTick(number,deja) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].tel == number) {
            for (let j = 0; j < users[index].contacts.length; j++) {
                if (users[index].contacts[j].tel == userConnected.tel) {
                    for (let m = users[index].contacts[j].messages.length - 1; m >= 0; m--) {
                        if (users[index].contacts[j].messages[m].owner.indexOf("you")!=-1) {
                            if(deja.indexOf("bloquer") != -1 && users[index].contacts[j].messages[m].etat == ""){
                                users[index].contacts[j].messages[m].etat = "nlu"
                            }
                            if(users[index].contacts[j].messages[m].etat == ""){
                                users[index].contacts[j].messages[m].etat = "lu"
                            }else{
                                break
                            }
                        } else {
                            break
                        }
                    }
                    break
                }
            }
            break
        }
    }
}

function selected(tel) {
    if(document.querySelector(`#element${num(tel)}`)){
        const selected = document.querySelector(`#element${num(tel)}`)
        selected.classList.add("selected")
    }
}

function lastView(hour){
    if(hour=="En ligne" || hour==""){
        return hour
    }
    const actualDate=getCurrentDate().split(" ")
    const lastDate=hour.split(" ")
    if(actualDate[0]==lastDate[0] && actualDate[1]==lastDate[1]){
        return "A l'instant"
    }
    const actualHour=parseInt(actualDate[1].split(":")[0])
    const lastHour=parseInt(lastDate[1].split(":")[0])
    const lastMin=parseInt(lastDate[1].split(":")[1])
    const actualMin=parseInt(actualDate[1].split(":")[1])
    if(actualDate[0]==lastDate[0]){
        if(lastHour==actualHour){
            diff=actualMin-lastMin
            return `En ligne il y'à ${diff} ${diff==1?"minute":"minutes"}`
        }
        diff=60-lastMin+actualMin
        if(actualHour-lastHour==1 && diff<=60){
            if(diff==60){
                return `En ligne il y'à 1 heure`
            }
            return `En ligne il y'à ${diff} ${diff==1?"minute":"minutes"}`
        }
        return `En ligne aujourd'hui à ${lastDate[1]}`
    }
    const actualJour=parseInt(actualDate[0].split("/")[0])
    const actualMois=parseInt(actualDate[0].split("/")[1])
    const actualAnnee=parseInt(actualDate[0].split("/")[2])
    const lastJour=parseInt(lastDate[0].split("/")[0])
    const lastMois=parseInt(lastDate[0].split("/")[1])
    const lastAnnee=parseInt(lastDate[0].split("/")[2])
    if(lastAnnee==actualAnnee && lastMois==actualMois && actualJour-lastJour==1){
        diff=60-lastMin+actualMin
        if(lastHour-actualHour==23 && diff<=60){
            if(diff==60){
                return `En ligne il y'à 1 heure`
            }
            return `En ligne il y'à ${diff} ${diff==1?"minute":"minutes"}`
        }
        return `En ligne hier à ${lastDate[1]}`
    }
    return `En ligne le ${lastDate[0]} à ${lastDate[1]}`
}

function detailsUser(tel) {
    editButton()
    acceuil.classList.add("hide");
    chat.classList.remove("hide");
    userActual = getUserByNumber(tel)
    nom.innerHTML = userActual.nom != "" ? userActual.nom : userActual.tel;
    profilUser.innerHTML = `<img src="${userActual.photo}" alt="">`;
    actuTexte.innerHTML = ""
    if (userActual.type == "friend") {
        actuTexte.innerHTML = userActual.actu
        actuTexte.style.padding = "5px"
    } else {
        actuTexte.style.padding = 0
    }
    online.innerHTML = ''
    if (userActual.type == "friend") {
        online.innerHTML =userActual.tel==userConnected.tel?"Envoyez vous un méssage":lastView(userActual.etat);
    }
    else {
        noms = []
        me=false
        for (let i = 0; i < userActual.members.length; i++) {
            if (userActual.members[i].present=="oui") {
                if(userActual.members[i].num == userConnected.tel){
                    me=true
                }else{
                    x = getUserByNumber(userActual.members[i].num)
                    noms.push(x.nom != "" ? x.nom.split(' ')[0] : x.username.split(' ')[0]);
                }
            }
        }
        for (let i = 0; i <  noms.sort().length; i++) {
            if(i!=noms.length-1){
                online.innerHTML += noms.sort()[i] + ", "
            }else{
                online.innerHTML += noms.sort()[i]
            }
        }
        if(me){
            if(noms.length){
                online.innerHTML += ", Vous"
            }else{
                online.innerHTML += "Vous"
            }
        }
    }
    if(userActual.deja != "quitter"){
        blueTick(userActual.tel,userActual.deja)
    }
    if(userActual.deja != "quitter" && userActual.deja.indexOf("bloquer") == -1){
        envoiDiv.innerHTML=`
        <div class="case">
        <i class="ri-emotion-happy-line"></i>
        </div>
        <div class="case">
        <i class="ri-attachment-line"></i>
                                </div>
                                <div class="saisir">
                                    <textarea placeholder="Taper un message" class="inputSms"></textarea>
                                    </div>
                                <div class="case btnEnvoi">
                                <i class="ri-mic-line iconeEnvoi"></i>
                                </div>
        `
        inputSms = document.querySelector(".inputSms");
        sendBtn = document.querySelector(".btnEnvoi");
        iconeEnvoi = document.querySelector(".iconeEnvoi");
        inputSms.focus()
        inputSms.addEventListener('focus', function () {
            editButton()
        })
        inputSms.addEventListener('input', function () {
            iconeEnvoi.classList.remove("ri-mic-line")
            iconeEnvoi.classList.add("ri-send-plane-2-line")
            if (inputSms.value.trim() == "") {
                iconeEnvoi.classList.remove("ri-send-plane-2-line")
                iconeEnvoi.classList.add("ri-mic-line")
            }
            inputSms.addEventListener("keydown", (e) => {
                if(e.key=="Enter"){
                    processusEnvoi()
                }
            });
            sendBtn.addEventListener('click', function () {
                processusEnvoi()
            })
        })
    }else if(userActual.deja == "quitter"){
        envoiDiv.innerHTML=`Vous ne pouvez pas envoyer de messages dans ce groupe, car vous n'en faites plus partie`
    }else{
        envoiDiv.innerHTML=`<div>Vous avez bloquer ce contact. <span class="debloquer">Sélectionnez pour le débloquer</span></div>`
    }
    if(document.querySelector('.debloquer')){
        const debloquer=document.querySelector('.debloquer')
        debloquer.addEventListener("click", function(){
            remove(".optionsDiv")
            for (let index = 0; index < userConnected.contacts.length; index++) {
                if(userConnected.contacts[index].tel==userActual.tel){
                    if(userConnected.contacts[index].deja.indexOf("non")==-1){
                        if(userConnected.contacts[index].deja.indexOf("archivé")==-1){
                            userConnected.contacts[index].deja="oui"
                        }else{
                            userConnected.contacts[index].deja="archivé"
                        }
                    }else {
                        userConnected.contacts[index].deja="non"
                    }
                    userConnected.contacts[index].messages.push({ text: `Vous avez débloqué ce contact`, date: " ", owner: "admin", etat: "bout" })
                    actualisation()
                    detailsUser(num(userActual.tel))
                    break
                }
            }
        })
    }
    if (lastClick != tel) {
        outputMessages.innerHTML = ``
        lastClick = tel
        if(userActual.deja != "quitter" && userActual.deja.indexOf("bloquer") == -1){
            inputSms.value = ""
        }
        getMessages(userActual.tel)
        getDiscussions()
        delNonLus(userActual.tel)
        if(menuActual.innerHTML=="Discussions"){
            friends = getDiscussions()
            if (f.length == 0) {
                listUsers(outputContacts, friends)
            } else {
                getUsersByUsername(outputContacts, Rechercher.value)
            }
        }else{
            friends = getDiscussionsArchives()
            if (f.length == 0) {
                listUsers(outputContacts, friends,"tout")
            } else {
                getUsersByUsername(outputContacts, Rechercher.value)
            }
        }
        selected(userActual.tel)
        if(document.querySelector('.bloquer')){
            const bloquer=document.querySelector('.bloquer')
            const add=document.querySelector('.enregistrer')
            add.addEventListener("click", function(){
                remove(".optionsDiv")
                edit.classList.add("selected")
                nouveau.classList.remove('hide')
                newContact(1)
            })
            bloquer.addEventListener("click", function(){
                remove(".optionsDiv")
                for (let index = 0; index < userConnected.contacts.length; index++) {
                    if(userConnected.contacts[index].tel==userActual.tel){
                        if(userConnected.contacts[index].messages[1].owner=="add"){
                            userConnected.contacts[index].messages.splice(1,1)
                        }
                        if(userConnected.contacts[index].deja.indexOf("archivé")==-1){
                            userConnected.contacts[index].deja="bloquer"
                        }else{
                            userConnected.contacts[index].deja="archivé bloquer"
                        }
                        userConnected.contacts[index].messages.push({ text: `Vous avez bloqué ce contact`, date: " ", owner: "admin", etat: "bout" })
                        actualisation()
                        detailsUser(num(userActual.tel))
                        break
                    }
                }
            })
        }
    }
}

function processusEnvoi(){
    if (inputSms.value.trim() == "") {
        iconeEnvoi.classList.remove("ri-send-plane-2-line")
        iconeEnvoi.classList.add("ri-mic-line")
        inputSms.focus()
        return
    }
    if(userActual!=-1){
        sendMessage(userActual)
    }else{
        membersForCreation.forEach(element => {
            sendMessage(getUserByNumber(element),"diffusion")
        });
        lastClick = -1
        acceuil.classList.remove("hide");
        chat.classList.add("hide");
    }
    inputSms.value = ""
    Rechercher.value = ""
    f = []
    getDiscussions()
    if(menuActual.innerHTML=="Discussions"){
        friends = getDiscussions()
        listUsers(outputContacts, friends)
    }else{
        friends = getDiscussionsArchives()
        listUsers(outputContacts, friends,"tout")
    }
    delNonLus(userActual.tel)
    getMessages(userActual.tel)
    selected(userActual.tel)
    inputSms.focus()
    iconeEnvoi.classList.remove("ri-send-plane-2-line")
    iconeEnvoi.classList.add("ri-mic-line")
    if(document.querySelector('.bloquer')){
        const bloquer=document.querySelector('.bloquer')
        const add=document.querySelector('.enregistrer')
        add.addEventListener("click", function(){
            remove(".optionsDiv")
            edit.classList.add("selected")
            nouveau.classList.remove('hide')
            newContact(1)
        })
        bloquer.addEventListener("click", function(){
            remove(".optionsDiv")
            edit.classList.add("selected")
            nouveau.classList.remove('hide')
            for (let index = 0; index < userConnected.contacts.length; index++) {
                if(userConnected.contacts[index].tel==userActual.tel){
                    if(userConnected.contacts[index].messages[1].owner=="add"){
                        userConnected.contacts[index].messages.splice(1,1)
                    }
                    if(userConnected.contacts[index].deja.indexOf("archivé")==-1){
                        userConnected.contacts[index].deja="bloquer"
                    }else{
                        userConnected.contacts[index].deja="archivé bloquer"
                    }
                    userConnected.contacts[index].messages.push({ text: `Vous avez bloqué ce contact`, date: " ", owner: "admin", etat: "bout" })
                    actualisation()
                    detailsUser(num(userActual.tel))
                    break
                }
            }
        })
    }
}

function getUsersByUsername(divOutput, nom, what = "") {
    f = []
    if (nom != "") {
        friends.forEach(user => {
            if (user.nom.toLowerCase().indexOf(nom.toLowerCase()) != -1 || num(user.tel).indexOf(num(nom)) != -1) {
                f.push(user)
                if (what == "check") {
                    listForSelection(f)
                } else {
                    listUsers(divOutput, f, "tout")
                }
            }
            if (f.length == 0) {
                listUsers(divOutput, [])
            }
        })
    } else {
        f = []
        if (divOutput == outputContacts) {
            if(menuActual.innerHTML=="Discussions"){
                listUsers(divOutput, friends)
            }else{
                listUsers(divOutput, friends, "tout")
            }
        } else {
            if (document.querySelector(".fixeContact")) {
                fixeContact.classList.remove("hide")
                const allContacts = document.querySelector(".allContacts");
                allContacts.style.maxHeight="200px"
            }

            if (what == "check") {
                listForSelection(friends)
            } else {
                listUsers(divOutput, friends, 'tout')
            }
        }
    }
}

function editButton() {
    remove(".optionsDiv")
    nouveau.classList.add("hide")
    edit.classList.remove("selected")
    nouveau.innerHTML = ``
    nouveau.style.backgroundColor = "#2a2a2af4"
}

function rechercheAllContacts(division, divOutput, what = "") {
    division.addEventListener('input', function () {
        if (document.querySelector(".fixeContact")) {
            fixeContact = document.querySelector(".fixeContact")
            fixeContact.classList.add("hide")
            const allContacts = document.querySelector(".allContacts");
            allContacts.style.maxHeight="530px"
        }
        getUsersByUsername(divOutput, division.value, what)
    })
}

function remplirNouveau() {
    nouveau.innerHTML = ``
    nouveau.style.backgroundColor = "#2a2a2af4"
    nouveau.innerHTML = `
                        <div class="fixe">
                            <span class="">Nouvelle discussion</span>
                            <div class="form">
                                <i class="ri-search-line"></i>
                                <input type="text" placeholder="Rechercher un numéro ou un nom" class="recherche" id="RechercherGroup">
                            </div>
                            <div class="fixeContact">
                                <div class="contact" onclick="newContact()">
                                    <div class="profil">
                                        <img src=imgs/group.jpg alt="">
                                    </div>
                                    <div class="group">Nouveau contact</div>
                                </div>
                                <div class="contact" onclick="chooseMembers('group')">
                                    <div class="profil">
                                        <img src=imgs/group.jpg alt="">
                                    </div>
                                    <div class="group">Nouveau groupe</div>
                                </div>
                                <div class="contact" onclick="chooseMembers('diffusion')">
                                    <div class="profil">
                                        <img src=imgs/diffusion.jpg alt="">
                                    </div>
                                    <div class="group">Diffusion</div>
                                </div>
                                <div class="contact" id="element${num(userConnected.tel)}"  onclick="detailsUser(${num(userConnected.tel)})">
                                    <div class="profil">
                                        <img src=${userConnected.photo} alt="">
                                    </div>
                                    <div class="group">${userConnected.username} (${userConnected.nom})<br><span class="mess actu">Envoyez vous un méssage</span></div>
                                </div>
                            </div>
                        </div>
                        <span class="mess">Tous les contacts</span>
                        <br><br>
                        <div class="allContacts">
                        </div>
                    `
    const allContacts = document.querySelector(".allContacts");
    RechercherGroup = document.querySelector("#RechercherGroup");
    RechercherGroup.focus()
    RechercherGroup.addEventListener('input', function () {
        rechercheAllContacts(RechercherGroup, allContacts)
    })
    listUsers(allContacts, friends.sort((a,b)=>a.nom.localeCompare(b.nom)), "tout")
    totalSelected=0
    membersForCreation=[]
}

function createNumber(what=""){
    const newContactNom = document.querySelector("#newContactNom");
    const newContactNum = document.querySelector("#newContactNum");
    const creation = document.querySelector(".creation");
    const messasesError = document.querySelector(".messasesError");
    messasesError.innerHTML=""
    if(newContactNom.value.trim()!="" && newContactNum.value.trim()!=""){
        creation.innerHTML='<button class="suivant">Enregistrer</button><button class="annuler">Annuler</button>'
        if(document.querySelector('.suivant')){
            const enregistrer=document.querySelector('.suivant')
            enregistrer.addEventListener('click',function(){
                if(newContactNum.value.indexOf("+") != 0){
                    messasesError.innerHTML="Ce numero n'est pas sur WhatsApp"
                    return
                }
                newFriend=getUserByNumber(newContactNum.value.trim())
                if(newFriend==null){
                    messasesError.innerHTML="Ce numero n'est pas sur WhatsApp"
                    return
                }
                if(newFriend.deja==""){
                    userConnected.contacts.push(
                        {
                            type: "friend",
                            nom: newContactNom.value.trim(),
                            tel: newFriend.tel,
                            deja: "non",
                            messages: [
                                { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                            ],
                            myNotRead: [
                            ]
                        }
                    )
                    actualisation()
                    return
                }
                for (let index = 0; index < userConnected.contacts.length; index++) {
                    if(userConnected.contacts[index].tel==newFriend.tel){
                        if(userConnected.contacts[index].nom==""){
                            userConnected.contacts[index].nom=newContactNom.value.trim()
                            if(userConnected.contacts[index].messages.length>1 && userConnected.contacts[index].messages[1].owner=="add"){
                                userConnected.contacts[index].messages.splice(1,1)
                            }
                            actualisation()
                            return
                        }
                        if(userConnected.tel==newFriend.tel){
                            if(confirm(`Votre nom d'utilisateur "${userConnected.username}" sera modifier par ${newContactNom.value.trim()}`)){
                                userConnected.contacts[index].nom=newContactNom.value.trim()+" (Vous)"
                                userConnected.username=newContactNom.value.trim()
                                actualisation()
                            }
                        }else{
                            if(confirm(`${userConnected.contacts[index].tel} est déjà enregistré sous le nom "${userConnected.contacts[index].nom}" !! Ce nom sera modifier par ${newContactNom.value.trim()}`)){
                                userConnected.contacts[index].nom=newContactNom.value.trim()
                                actualisation()
                            }
                        }
                        return
                    }
                }
            })
        }
        if(document.querySelector('.annuler')){
            const annuler=document.querySelector('.annuler')
            annuler.addEventListener('click',function(){
                if(confirm("L'opération sera annuler")){
                    if(what==""){
                        remplirNouveau()
                    }else{
                        editButton()
                    }
                }else{
                    return
                }
            })
        }
    }else{
        creation.innerHTML=""
    }
}

function newContact(what=""){
    nouveau.style.backgroundColor = "#202020"
    nouveau.innerHTML = `
                        <div class="fixe">
                        ${what==""?"<span class='retour'><i class='ri-arrow-left-line'></i></span>":""}
                        <span> ${what==""?"Nouveau contact":"Enregistrer un contact"}</span>
                            <div class="form">
                                <input type="text" placeholder="Entrez le nom" class="recherche" id="newContactNom" value="${what==""?"":getUserByNumber(lastClick).username.replace("~","")}">
                            </div>
                            <div class="form">
                                <input type="text" placeholder="Entrez le numero" class="recherche" id="newContactNum" value="${what==""?"":getUserByNumber(lastClick).tel}">
                            </div>
                            <div class="messasesError">                 
                            </div>
                            <div class="creation">                 
                            </div>
                        </div>
                        `
    if(what==""){
        const retour = document.querySelector(".retour");
        retour.addEventListener('click', function () {
            remplirNouveau()
        })
        const newContactNom = document.querySelector("#newContactNom");
        newContactNom.focus()
        const newContactNum = document.querySelector("#newContactNum");
        newContactNom.addEventListener('input', function(){
            createNumber()
        })
        newContactNum.addEventListener('input', function(){
            createNumber()
        })
    }else{
        createNumber(1)
    }
}


function sendDiffusionSms(){
    editButton()
    noms = []
    userActual=-1
    outputMessages.innerHTML=""
    online.innerHTML=''
    for (let i = 0; i < membersForCreation.length; i++) {
        x = getUserByNumber(membersForCreation[i])
        noms.push(x.nom.split(' ')[0]);
    }
    for (let i = 0; i < noms.length; i++){
        if(i==noms.length-1){
            online.innerHTML += noms[i]
        }else{
            online.innerHTML += noms[i] + ", "
        }
    }
    acceuil.classList.add("hide");
    chat.classList.remove("hide");
    nom.innerHTML = `${membersForCreation.length} destinataire${membersForCreation.length!=1?"s":""}`;
    profilUser.innerHTML = `<img src=imgs/diffusion.jpg alt="">`;
    actuTexte.innerHTML = ""
    envoiDiv.innerHTML=`
        <div class="case">
        <i class="ri-emotion-happy-line"></i>
        </div>
        <div class="case">
        <i class="ri-attachment-line"></i>
                                </div>
                                <div class="saisir">
                                    <textarea placeholder="Taper un message" class="inputSms"></textarea>
                                    </div>
                                <div class="case btnEnvoi">
                                <i class="ri-mic-line iconeEnvoi"></i>
                                </div>
        `
    inputSms = document.querySelector(".inputSms");
    sendBtn = document.querySelector(".btnEnvoi");
    iconeEnvoi = document.querySelector(".iconeEnvoi");
    inputSms.focus()
    inputSms.addEventListener('focus', function () {
        editButton()
    })
    inputSms.addEventListener('input', function () {
        iconeEnvoi.classList.remove("ri-mic-line")
        iconeEnvoi.classList.add("ri-send-plane-2-line")
        if (inputSms.value.trim() == "") {
            iconeEnvoi.classList.remove("ri-send-plane-2-line")
            iconeEnvoi.classList.add("ri-mic-line")
        }
        inputSms.addEventListener("keydown", (e) => {
            if(e.key=="Enter"){
                processusEnvoi()
            }
        });
        sendBtn.addEventListener('click', function () {
            processusEnvoi()
        })
    })
    inputSms.focus()
}

function createGroupe(name){
    name=name!=""?name:"Groupe"
    groupNum=num(generateGroupNumber())
    members=[
        {
            num: userConnected.tel,
            present: "oui",
            color: generateColor()
        }
    ]
    membersForCreation.forEach(number => {
        memberTel=getUserByNumber(number).tel
        members.push(
            {
                num: memberTel,
                present: "oui",
                color: generateColor()
            }
        )
        for (let i = 0; i < users.length; i++) {
            if (users[i].tel == memberTel) {
                users[i].contacts.unshift(
                    {
                        type: "group",
                        tel: groupNum,
                        deja: "oui",
                        owner: [{
                                "num": userConnected.tel,
                                "present":"oui"
                            }],
                        messages: [
                            { text: `~${userConnected.username} a créé le groupe "${name}"`, date: " ", owner: "créer", etat: "bout" },
                        ],
                        myNotRead: [
                            { text: `~${userConnected.username} vous a ajouté`, date: " ", owner: "ajouté", etat: "bout" },
                        ]
                    }
                )
                break
            }
        }
    });
    userConnected.groups.push(
        {
            nom: name,
            tel: groupNum,
            admins: [userConnected.tel],
            members:members,
            photo: "Imgs/group.jpg",
        }
    )
    userConnected.contacts.unshift(
        {
            type: "group",
            tel: groupNum,
            deja: "oui",
            owner: [{
                    "num": userConnected.tel,
                    "present":"oui"
                }],
            messages: [
                { text: `<i class="ri-lock-2-line"></i> Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ces discussions, pas même whatsapp, ne peut les lire ou les écouter. Sélectionner pour en savoir plus.`, date: " ", owner: "App", etat: "bout" },
                { text: `Vous avez créé le groupe "${name}"`, date: " ", owner: "créer", etat: "bout" },
            ],
            myNotRead: [
            ]
        }
    )
    f=[]
    friends = getDiscussions()
    listUsers(outputContacts, friends)
    detailsUser(groupNum)
}

function selectedForCheck(tel,what) {
    RechercherGroup = document.querySelector("#RechercherGroup");
    RechercherGroup.focus()
    const checked = document.querySelector(`#check${tel}`)
    checked.checked = !checked.checked
    if (checked.checked == true) {
        membersForCreation.push(tel)
        totalSelected += 1
    } else {
        membersForCreation.splice(membersForCreation.indexOf(tel), 1)
        totalSelected -= 1
    }
    const nbrSelect = document.querySelector(`.nbrSelect`)
    nbrSelect.innerHTML = `${totalSelected != 0 ? `${totalSelected}/${totalContacts}` : ""}`
    const creation = document.querySelector(`.creation`)
    creation.innerHTML = `${totalSelected != 0 ? `<button class="suivant">Suivant</button><button class="annuler">Annuler</button>  ` : ""}`
    if(document.querySelector('.suivant')){
        suivant=document.querySelector('.suivant')
        annuler=document.querySelector('.annuler')
        suivant.addEventListener('click',function(){
            if(what=="diffusion"){
                if(membersForCreation.length==1){
                    alert("Au moins 2 contacts doivent être sélectionnés")
                    return
                }
                sendDiffusionSms()
                return
            }
            fixe.style.marginBottom='0px'
            fixe.style.backgroundColor='#202020'
            document.querySelector('.tous').classList.add("hide")
            document.querySelector('.form').classList.add("hide")
            allContacts.classList.add("hide")
            const infosGroup = document.querySelector(`.infosGroup`)
            infosGroup.innerHTML=`
                                <br>
                                <span class="mess">Ajouter un nom de groupe</span><br>
                                <div class="form">
                                    <input type="text" placeholder="Nom du groupe (facultatif)" class="recherche" id="groupName">
                                </div>`
            creation.innerHTML = `${totalSelected != 0 ? `<button class="creer">Créer</button><button class="annuler">Annuler</button>  ` : ""}`
            creer=document.querySelector('.creer')
            nomGroup=document.querySelector('#groupName')
            nomGroup.focus()
            creer.addEventListener('click',function(){
                createGroupe(nomGroup.value)
            })
            annuler=document.querySelector('.annuler')
            annuler.addEventListener('click',function(){
                if(confirm("Annuler la création du groupe?")){
                    remplirNouveau()
                }
                return
            })
        })
        annuler.addEventListener('click',function(){
            if(confirm(`Annuler la création ${what=="group"?"du groupe":"de la diffusion"}?`)){
                remplirNouveau()
            }
            return
        })
    }
    const fixe = document.querySelector(`.fixe`)
    if(totalSelected != 0 ){
        fixe.style.backgroundColor='#2c2c2c90'
        fixe.style.marginBottom='20px'
        fixe.style.borderRadius='10px'
    }else{
        fixe.style.marginBottom='0px'
        fixe.style.backgroundColor='#202020'
    }
    RechercherGroup = document.querySelector("#RechercherGroup");
    RechercherGroup.addEventListener('input', function () {
        rechercheAllContacts(RechercherGroup, allContacts, "check")
    })
}


function listForSelection(tab,what) {
    allContacts.innerHTML = ``;
    if (tab.length == 0) {
        allContacts.innerHTML += `<div class="mess résultat">Aucun résultat</div>`
        return
    }
    tab.forEach(function (user) {
            if (user.type == "friend" && user.nom != "" && user.tel != userConnected.tel) {
                const contact=document.createElement('div')
                contact.classList.add("contactSelect")
                contact.addEventListener('click',function(){
                    selectedForCheck(num(user.tel),what)
                })
                contact.innerHTML += `
                        <div class="profil">
                            <img src=${user.photo} alt="">
                        </div>
                        <div class="group">${user.nom != "" ? user.nom : user.tel}<br>${user.actu.trim() != "" ? `<span class="mess actu">${user.actu}</span>` : ""}</div>
                        <input type="checkbox" id="check${num(user.tel)}" disabled>
                `
                allContacts.appendChild(contact)
            }
    });
    membersForCreation.forEach(element => {
        const checked=document.querySelector(`#check${element}`)
        checked.checked=true
    });
}

function chooseMembers(what) {
    nouveau.style.backgroundColor = "#202020"
    nouveau.innerHTML = `
                        <div class="fixe">
                        <span class="retour"><i class="ri-arrow-left-line"></i></span>
                            <span>${what=="group"?"Nouveau groupe":"Diffusion"}</span><span class="nbrSelect mess"></span>
                            <div class="form">
                                <i class="ri-search-line"></i>
                                <input type="text" placeholder="Rechercher" class="recherche" id="RechercherGroup">
                            </div>
                            <div class="infosGroup">                 
                            </div>
                            <div class="creation">                 
                            </div>
                        </div>
                        <span class="mess tous">Tous les contacts</span>
                        <br><br>
                        <div class="allContacts">
                        </div>
                        `
    allContacts = document.querySelector(".allContacts");
    allContacts.style.maxHeight="530px"
    listForSelection(friends,what)
    RechercherGroup = document.querySelector("#RechercherGroup");
    RechercherGroup.focus()
    rechercheAllContacts(RechercherGroup, allContacts, "check")
    const retour = document.querySelector(".retour");
    retour.addEventListener('click', function () {
        remplirNouveau()
    })
}

function actualisation(){
    Rechercher.focus()
    trie()
    getDiscussions()
    if(chat.classList.value.indexOf("hide")==-1){
        userActual=getUserByNumber(lastClick)
        nom.innerHTML = userActual.nom != "" ? userActual.nom : userActual.tel;
        profilUser.innerHTML = `<img src="${userActual.photo}" alt="">`;
        actuTexte.innerHTML = ""
        online.innerHTML = ''
        if (userActual.type == "friend") {
            actuTexte.innerHTML = userActual.actu
            actuTexte.style.padding = "5px"
            online.innerHTML =userActual.tel==userConnected.tel?"Envoyez vous un méssage":lastView(userActual.etat);
        } else {
            actuTexte.style.padding = 0
            noms = []
            me=false
            for (let i = 0; i < userActual.members.length; i++) {
                if (userActual.members[i].present=="oui") {
                    if(userActual.members[i].num == userConnected.tel){
                        me=true
                    }else{
                        x = getUserByNumber(userActual.members[i].num)
                        noms.push(x.nom != "" ? x.nom.split(' ')[0] : x.username.split(' ')[0]);
                    }
                }
            }
            for (let i = 0; i <  noms.sort().length; i++) {
                if(i!=noms.length-1){
                    online.innerHTML += noms.sort()[i] + ", "
                }else{
                    online.innerHTML += noms.sort()[i]
                }
            }
            if(me){
                if(noms.length){
                    online.innerHTML += ", Vous"
                }else{
                    online.innerHTML += "Vous"
                }
            }
        }
        delNonLus(userActual.tel)
        getMessages(userActual.tel)
        selected(userActual.tel)
        inputSms.focus()
    }
    if(menuActual.innerHTML=="Discussions"){
        friends = getDiscussions()
        if (f.length == 0) {
            listUsers(outputContacts, friends)
        } else {
            getUsersByUsername(outputContacts, Rechercher.value)
        }
    }else{
        friends = getDiscussionsArchives()
        if (f.length == 0) {
            listUsers(outputContacts, friends, "tout")
        } else {
            getUsersByUsername(outputContacts, Rechercher.value)
        }
    }
    if(document.querySelector('.bloquer')){
        const bloquer=document.querySelector('.bloquer')
        const add=document.querySelector('.enregistrer')
        add.addEventListener("click", function(){
            remove(".optionsDiv")
            edit.classList.add("selected")
            nouveau.classList.remove('hide')
            nouveau.classList.remove('hide')
            newContact(1)
        })
        bloquer.addEventListener("click", function(){
            remove(".optionsDiv")
            edit.classList.add("selected")
            nouveau.classList.remove('hide')
            for (let index = 0; index < userConnected.contacts.length; index++) {
                if(userConnected.contacts[index].tel==userActual.tel){
                    if(userConnected.contacts[index].messages[1].owner=="add"){
                        userConnected.contacts[index].messages.splice(1,1)
                    }
                    if(userConnected.contacts[index].deja.indexOf("archivé")==-1){
                        userConnected.contacts[index].deja="bloquer"
                    }else{
                        userConnected.contacts[index].deja="archivé bloquer"
                    }
                    userConnected.contacts[index].messages.push({ text: `Vous avez bloqué ce contact`, date: " ", owner: "admin", etat: "bout" })
                    actualisation()
                    detailsUser(num(userActual.tel))
                    break
                }
            }
        })
    }
}

function selectedMenu(div){
    remove(".selection")
    iconeChat.classList.remove("selected")
    iconeCall.classList.remove("selected")
    iconeStory.classList.remove("selected")
    iconeImportant.classList.remove("selected")
    iconeArchive.classList.remove("selected")
    discussionBtn.classList.add("hide")
    const selectionDiv=document.createElement("div")
    selectionDiv.classList.add('selection')
    div.classList.add("selected")
    div.appendChild(selectionDiv)
}

Rechercher.addEventListener('input', function () {
    getUsersByUsername(outputContacts, Rechercher.value)
})
Rechercher.addEventListener('focus', function () {
    editButton()
})

telephone.addEventListener('input',function(){
    loginError.innerHTML=""
})

password.addEventListener('input',function(){
    loginError.innerHTML=""
})

btnConnexion.addEventListener('click', function () {
    if(telephone.value=="" || password.value==""){
        loginError.innerHTML="Veuillez remplir tous les champs"
        return;
    }
    positionUserConnected = login(telephone.value, password.value);
    if (positionUserConnected == -1) {
        loginError.innerHTML="Numero ou mot de passe incorrect"
        return;
    }
    loginError.innerHTML=""
    menuActual.innerHTML="Discussions"
    userConnected = users[positionUserConnected];
    userConnected.etat = "En ligne"
    telephone.value = "";
    password.value = "";
    container.classList.remove("hide");
    connexion.classList.add("hide");
    propioProfil.innerHTML=`<img src=${userConnected.photo} alt="">`
    trie()
    friends = getDiscussions()
    listUsers(outputContacts, friends)
    Rechercher.focus()
    nbrContacts()
    selectedMenu(iconeChat)
    discussionBtn.classList.remove("hide")
    userActual=-1
})

iconeChat.addEventListener('click', function () {
    Rechercher.focus()
    menuActual.innerHTML="Discussions"
    selectedMenu(iconeChat)
    discussionBtn.classList.remove("hide")
    friends=getDiscussions()
    if (f.length == 0) {
        listUsers(outputContacts, friends)
    } else {
        getUsersByUsername(outputContacts, Rechercher.value)
        listUsers(outputContacts, f, "tout")
    }
})

iconeImportant.addEventListener('click', function () {
    Rechercher.focus()
    menuActual.innerHTML="Messages importants"
    selectedMenu(iconeImportant)
})

iconeArchive.addEventListener('click', function () {
    Rechercher.focus()
    menuActual.innerHTML="Archives"
    selectedMenu(iconeArchive)
    friends=getDiscussionsArchives()
    if (f.length == 0) {
        listUsers(outputContacts, friends,"tout")
    } else {
        getUsersByUsername(outputContacts, Rechercher.value)
        listUsers(outputContacts, f, "tout")
    }
})

edit.addEventListener('click', function () {
    remove(".optionsDiv")
    nouveau.classList.toggle("hide")
    edit.classList.toggle("selected")
    remplirNouveau()
})

actualise.addEventListener('click',function(){
    actualisation()
})

quit.addEventListener('click', function () {
    editButton()
    f = []
    Rechercher.value = ""
    lastClick = -1
    userConnected.etat =getCurrentDate()
    outputMessages.innerHTML=``
    container.classList.add("hide");
    connexion.classList.remove("hide");
    acceuil.classList.remove("hide");
    chat.classList.add("hide");
    telephone.focus()
})


// container.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });
// outputMessages.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     editButton()
//     const optionsDiv=document.createElement("div")
//     optionsDiv.classList.add('optionsDiv')
//     optionsDiv.innerHTML=`
//                             <div class="option fermer">
//                                 <i class="ri-close-line"></i>
//                                 <div class="optionText">Fermer la discussion</div>
//                             </div>`
//     optionsDiv.style.left=`${e.x}px`
//     optionsDiv.style.top=`${e.y}px`
//     container.appendChild(optionsDiv)
//     const fermer=document.querySelector(".fermer")
//     fermer.addEventListener('click',function(){
//         acceuil.classList.remove("hide");
//         chat.classList.add("hide");
//         actualisation()
//         lastClick=-1
//     })
// });