/* ===================================

PRIMORDIAL PARK

buildings.js

Buildings Database

=================================== */

const buildings = [

/* =========================

PREHISTORIC PROMENADE

========================= */

{

id:"promenade",

name:"Prehistoric Promenade",

rarity:"Common",

price:19000,

coin:17000,

collectTime:60, //minutes

width:190,

height:120,

image:"assets/buildings/promenade.png",

description:

"Busy boardwalk with souvenir stands and photo booths.",

bonus:null

},



/* =========================

FOSSIL FUEL GRILL

========================= */

{

id:"grill",

name:"Fossil Fuel Grill",

rarity:"Rare",

price:45000,

coin:30200,

collectTime:120,

width:190,

height:140,

image:"assets/buildings/grill.png",

description:

"Dinosaur themed restaurant shaped like a giant ribcage.",

bonus:null

},



/* =========================

AMBER EXCHANGE

========================= */

{

id:"amberExchange",

name:"Amber Exchange",

rarity:"Very Rare",

price:50000,

coin:56000,

collectTime:120,

width:190,

height:130,

image:"assets/buildings/amberexchange.png",

description:

"Luxury cloned amber jewelry marketplace.",

bonus:null

},



/* =========================

MESOZOIC MEGA THEATER

========================= */

{

id:"theater",

name:"Mesozoic Mega-Theater",

rarity:"Very Rare",

price:60000,

coin:10100,

collectTime:30,

width:210,

height:150,

image:"assets/buildings/theater.png",

description:

"3D prehistoric stampede cinema.",

bonus:null

},




/* =========================

PALAEO AMPHITHEATER

========================= */

{

id:"amphitheater",

name:"Palaeo-Amphitheater",

rarity:"Event Exclusive",

price:10000,

coin:2900,

collectTime:5,

maxAllowed:5,

eventOnly:true,

width:220,

height:160,

image:"assets/buildings/amphitheater.png",

description:

"Massive dinosaur show arena.",

bonus:null

},





/* =========================

PANGAEA SKY DECK

========================= */

{

id:"skydeck",

name:"Pangaea Sky-Deck",

rarity:"Legendary",

price:110000,

coin:39000,

collectTime:60,

width:220,

height:160,

image:"assets/buildings/skydeck.png",

description:

"Glass-bottom observation tower above predator habitats.",

bonus:null

}

];







/* ==========================

CREATE BUILDING

========================== */

function createBuilding(

building,

x,

y

){

const div=

document.createElement("div");



div.className=

"building";



div.style.left=

x+"px";



div.style.top=

y+"px";



div.style.width=

building.width+"px";



div.style.height=

building.height+"px";



div.dataset.id=

building.id;



div.innerHTML=

`

<div class="buildingName">

${building.name}

</div>

<div class="buildingIncome">

${building.coin.toLocaleString()}

</div>

`;



div.onclick=()=>{

openBuildingInfo(

building

);

}



document

.getElementById(

"buildingsLayer"

)

.appendChild(

div

);



return div;

}







/* ==========================

OPEN INFO PANEL

========================== */

function openBuildingInfo(

building

){

const panel=

document

.getElementById(

"marketPanel"

);



panel

.classList

.remove(

"hidden"

);



document

.getElementById(

"marketContent"

)

.innerHTML=

`

<h2>

${building.name}

</h2>


<p>

${building.description}

</p>


<br>


<b>

Price

</b>

:

${building.price.toLocaleString()}

Coins


<br><br>


<b>

Income

</b>

:

${building.coin.toLocaleString()}

Coins


<br><br>


<b>

Collection

</b>

:

Every

${building.collectTime}

minutes


<br><br>


<button

onclick=

"buyBuilding(

'${building.id}'

)"

>

BUY

</button>

`;

}







/* ==========================

BUY BUILDING

========================== */

function buyBuilding(

id

){

const b=

buildings.find(

x=>

x.id===id

);



if(!b)

return;



if(

game.coins

<

b.price

){

alert(

"Not enough coins"

);

return;

}



game.coins-=

b.price;



updateResources();



let x=

Math.random()

*3000

+100;



let y=

Math.random()

*1800

+100;



createBuilding(

b,

x,

y

);



alert(

b.name+

" Built!"

);

}







/* ==========================

COLLECT BUILDING

========================== */

function collectBuilding(

building

){

game.coins+=

building.coin;



updateResources();

}







/* ==========================

COLLECT ALL

========================== */

function collectAllBuildings(){

document

.querySelectorAll(

".building"

)

.forEach(

b=>{

const id=

b.dataset.id;



const building=

buildings.find(

x=>

x.id===id

);



if(

building

){

game.coins+=

building.coin;

}

}

);



updateResources();

}







/* ==========================

PASSIVE INCOME

========================== */

setInterval(()=>{


document

.querySelectorAll(

".building"

)

.forEach(

b=>{


const id=

b.dataset.id;



const building=

buildings.find(

x=>

x.id===id

);



if(

building

){

game.coins+=

Math.floor(

building.coin

/

100

);

}



});



updateResources();



},60000);







/* ==========================

SPECIAL RULES

========================== */



function canBuild(

building

){




if(

building.id

===

"amphitheater"

){




let count=

document

.querySelectorAll(

'[data-id="amphitheater"]'

)

.length;




if(

count>=5

){

return false;

}




if(

window

.eventActive

!==

true

){

return false;

}

}




return true;

}







/* ==========================

BUILDING BONUS HELPERS

========================== */



function nearbyBuildings(

x,

y,

radius=250

){

let arr=[];



document

.querySelectorAll(

".building"

)

.forEach(

b=>{



let bx=

parseInt(

b.style.left

);



let by=

parseInt(

b.style.top

);



let dist=

Math.sqrt(

(x-bx)**2

+

(y-by)**2

);




if(

dist

<=

radius

){

arr.push(

b

);

}



});



return arr;

}
