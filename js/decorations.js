/* ===================================

PRIMORDIAL PARK

decorations.js

Decorations + Buff System

=================================== */

const decorations=[


/* =========================

VOLCANIC GEYSER FOUNTAIN

========================= */

{

id:"geyser",

name:"Volcanic Geyser Fountain",

price:110000,

bonus:7,

radius:250,

target:"all",

width:90,

height:90,

description:

"Erupts steam and glowing water. Gives +7% coin production to nearby assets."

},



/* =========================

PETRIFIED WOOD ARCHES

========================= */

{

id:"arches",

name:"Petrified Wood Arches",

price:80000,

bonus:5,

radius:220,

target:"building_amphibian",

width:90,

height:90,

description:

"Natural stone gateway. +5% income to buildings and amphibians."

},




/* =========================

AMBER MONOLITH DISPLAY

========================= */

{

id:"amber",

name:"Amber Monolith Display",

price:100000,

bonus:7,

radius:220,

target:"elite",

width:100,

height:100,

description:

"Premium amber display. +7% income to carnivores and herbivores."

},





/* =========================

FOSSILIZED FOOTPRINT PATH

========================= */

{

id:"footprint",

name:"Fossilized Footprint Path",

price:50000,

bonus:4,

radius:180,

target:"all",

width:80,

height:80,

description:

"Glowing prehistoric tracks. +4% production."

},





/* =========================

PREHISTORIC FLORA GROVE

========================= */

{

id:"flora",

name:"Prehistoric Flora Grove",

price:40000,

bonus:3,

radius:220,

target:"land",

width:95,

height:95,

description:

"Giant ferns and cycads. +3% to herbivores, carnivores and pterosaurs."

}

];






/* ==========================

CREATE DECORATION

========================== */

function createDecoration(

deco,

x,

y

){

const div=

document.createElement("div");



div.className=

"decoration";



div.style.left=

x+"px";



div.style.top=

y+"px";



div.style.width=

deco.width+"px";



div.style.height=

deco.height+"px";



div.dataset.id=

deco.id;





div.innerHTML=`

<div class="decoName">

${deco.name}

</div>

`;



document

.getElementById(

"decorationsLayer"

)

.appendChild(

div

);



return div;

}







/* ==========================

BUY DECORATION

========================== */

function buyDecoration(

id

){

const deco=

decorations.find(

x=>x.id===id

);



if(!deco)

return;



if(

game.coins

<

deco.price

){

alert(

"Not enough coins"

);

return;

}



game.coins-=

deco.price;



updateResources();



let x=

Math.random()

*3000

+100;



let y=

Math.random()

*1800

+100;



createDecoration(

deco,

x,

y

);



alert(

deco.name+

" Built!"

);

}








/* ==========================

DISTANCE

========================== */

function distance(

x1,

y1,

x2,

y2

){

return Math.sqrt(

(x2-x1)**2

+

(y2-y1)**2

);

}








/* ==========================

GET BONUS

========================== */

function getDecorationBonus(

target,

x,

y

){

let bonus=0;



document

.querySelectorAll(

".decoration"

)

.forEach(

d=>{



let deco=

decorations.find(

x=>

x.id===

d.dataset.id

);



if(!deco)

return;



let dx=

parseInt(

d.style.left

);



let dy=

parseInt(

d.style.top

);



let dist=

distance(

x,

y,

dx,

dy

);




if(

dist>

deco.radius

)

return;





if(

deco.target

==="all"

){

bonus+=

deco.bonus;

}





if(

deco.target

==="elite"

&&

(

target.type==="Carnivore"

||

target.type==="Herbivore"

)

){

bonus+=

deco.bonus;

}





if(

deco.target

==="land"

&&

(

target.type==="Carnivore"

||

target.type==="Herbivore"

||

target.type==="Pterosaur"

)

){

bonus+=

deco.bonus;

}





if(

deco.target

==="building_amphibian"

){

if(

target.type==="Amphibian"

||

target.kind==="Building"

){

bonus+=

deco.bonus;

}

}



});



return bonus;

}








/* ==========================

CALCULATE BOOSTED COINS

========================== */

function boostedCoins(

target,

base,

x,

y

){

let buff=

getDecorationBonus(

target,

x,

y

);



return Math.floor(

base

*

(

1+

buff/100

)

);

}








/* ==========================

SHOW BUFF EFFECT

========================== */

function showBuff(

element

){

element.style.boxShadow=

`

0 0 30px

gold

`;



setTimeout(()=>{


element.style.boxShadow=

"";



},1500);

}








/* ==========================

SHOW BONUS CIRCLE

========================== */

function showRadius(

deco,

x,

y

){

const circle=

document

.createElement(

"div"

);



circle.style.position=

"absolute";



circle.style.left=

(

x-

deco.radius

)

+"px";



circle.style.top=

(

y-

deco.radius

)

+"px";



circle.style.width=

(

deco.radius*2

)

+"px";



circle.style.height=

(

deco.radius*2

)

+"px";



circle.style.border=

"3px dashed yellow";



circle.style.borderRadius=

"50%";



circle.style.pointerEvents=

"none";



circle.style.opacity=

"0.5";



document

.getElementById(

"decorationsLayer"

)

.appendChild(

circle

);




setTimeout(()=>{

circle.remove();

},2500);

}








/* ==========================

AUTO APPLY DECORATION BUFFS

========================== */

function applyAllDecorationBuffs(){



document

.querySelectorAll(

".building"

)

.forEach(

b=>{


let x=

parseInt(

b.style.left

);



let y=

parseInt(

b.style.top

);



let building=

buildings.find(

k=>

k.id===

b.dataset.id

);



if(!building)

return;



let boosted=

boostedCoins(

{

kind:"Building"

},

building.coin,

x,

y

);



b.dataset.boosted=

boosted;



});






document

.querySelectorAll(

".dinosaur"

)

.forEach(

d=>{



let x=

parseInt(

d.style.left

);



let y=

parseInt(

d.style.top

);



let dino=

dinosaurs.find(

k=>

k.id===

d.dataset.id

);



if(!dino)

return;



let boosted=

boostedCoins(

dino,

dino.coin,

x,

y

);



d.dataset.boosted=

boosted;



});



}








/* ==========================

AUTO RECALCULATE

========================== */

setInterval(()=>{

applyAllDecorationBuffs();

},5000);
