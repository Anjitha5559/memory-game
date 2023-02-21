const moves = document.getElementById('moves');
const time = document.getElementById('time');
const gameStart = document.getElementById('startGame');
const gameStop = document.getElementById('stopGame');
const gameBody = document.getElementById('game');
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
  generateRandom();


//To pick random items from the items array
function generateRandom(size = 4) {
  let tempArray = [...items];//Just copying the array as elements to tempArray
  console.log(tempArray);
  let randomArray = [];//Just initiating the array in which the randomly chosen elements are stored
  size = (size*size)/2;//This size is so cuz if we chose 4*4 matrix then we have 16 slots and we need 8 images as each repeats one time 
  for(let i=0;i<size;i++){//making a loop to pick random elements
    const randomIndex = Math.floor(Math.random()*tempArray.length);//math.random makes a random value bw 0 and 1 multiplying it with the size of tempArray and then rounding it will give different locations which is stores in LHS
    randomArray.push(tempArray[randomIndex]);//Inserting the randomly chosen elemetn to randomArray
    tempArray.splice(randomIndex,1);//splicing it from tempArray so that it is not repeated
  }
  console.log(randomArray);//This is not printing so itinr munne tanne error nd

return randomArray;//returning the array
}
matrixGenerator();

//converting the array to matrix format
function matrixGenerator(randomArray,size=4){
  gameBody.innerHTML="";
  randomArray = [...randomArray,...randomArray];//This is done coz the randomly chosen images has to be repeated twice
  //doing shuffling
  randomArray.sort(() => Math.random() - 0.5);
  for(let i=0;i<size;i++){
    gameBody.innerHTML+=`
    <div class="slots" slotValue = "${randomArray[i].name}">
    <div class="card-before">?</div>
        <div class="card-after">
        <img src="img/${randomArray[i].image}" class="image"/></div>
    </div>`
  }
game.style.gridTemplateColumns = `repeat(${size},1fr)`;


}
const initializer = () => {
  let randomArray = generateRandom();
  console.log(tempArray);
  matrixGenerator(tempArray);
};

