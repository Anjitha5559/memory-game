const moves = document.getElementById('moves');
const time = document.getElementById('time');
const gameStart = document.getElementById('startGame');
const gameStop = document.getElementById('stopGame');
const gameBody = document.querySelector('.game');
let cards;
let firstCard = false;
let lastCard = false;



const items = [
    { name: "8gen2", image: "8gen2.png" },
    { name: "hpVictus", image: "hp victus.png" },
    { name: "ideapad", image: "ideapad.png" },
    { name: "gorilla", image: "gorilla.png" },
    { name: "legion", image: "Legion.png" },
    { name: "S22ultra", image: "S22 ulrta.png" },
    { name: "X4pro", image: "X4 pro.png" },
    { name: "ROGStrix", image: "ROG Strix.png" },
    { name: "iPhone14", image: "iPhone 14.png" },
    { name: "poweramp", image: "poweramp.png" },
    { name: "asustuf", image: "asus tuf 12 gen.png" },
    { name: "RAM", image: "RAM.png" },
  ];

