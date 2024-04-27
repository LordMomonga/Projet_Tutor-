import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";
import { BiBus } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home, link: "/dash" },
    { id: 2, title: 'Profil', image: iconsImgs.budget },
    { id: 3, title: 'Vehicules', image: iconsImgs.plane, link: "/map" },
    { id: 4, title: 'Utilisateurs', image: iconsImgs.wallet },
    { id: 5, title: 'Map', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'conseil financier', image: iconsImgs.wealth },
    { id: 9, title: 'compte', image: iconsImgs.user },
    { id: 10, title: 'parametre', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Kaamisi samuel",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: "VIP"
    },
    {
        id: 12, 
        name: "Uried Fongang",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: "VIP"
    },
    {
        id: 13, 
        name: " FRANK KAMDEM",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: "VIP"
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Bus toyota",
        type: "20 places",
        amount: 2000
    },
    {
        id: 20, 
        title: " Bus Largo",
        type: "50 places VVp",
        amount: 16000
    },
    {
        id: 21, 
        title: "Bus Stuff",
        type: "60 places",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: "permis A"
    },
    {
        id: 25,
        title: "Fiber",
        due_date: "23/12/10",
        amount: "permis B"
    },
    {
        id: 26,
        title: "Neto",
        due_date: "23/12/22",
        amount: "permis D"
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "passager",
        date_taken: "23/12/22",
        amount_left: `: INCROYABLE`
    }
]