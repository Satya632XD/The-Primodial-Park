/* ===============================

PRIMORDIAL PARK

dinosaurs.js

Complete Dinosaur Database

================================ */

const dinosaurs = [

/* =================
COMMON
================= */

{

id:"velociraptor",

name:"Velociraptor",

pack:true,

maxPack:3,

type:"Carnivore",

rarity:"Common",

health:450,

attack:35,

coin:5105,

coinTime:60,

recovery:5,

dna:300,

chance:"Very Common",

special:"Pack Hunter"

},

{

id:"dilophosaurus",

name:"Dilophosaurus",

pack:true,

maxPack:3,

type:"Carnivore",

rarity:"Common",

health:1200,

attack:390,

coin:7100,

coinTime:60,

recovery:20,

dna:500,

chance:"Very Common",

special:"Fast Recovery"

},

{

id:"pteranodon",

name:"Pteranodon",

pack:true,

maxPack:3,

type:"Pterosaur",

rarity:"Common",

health:1500,

attack:280,

coin:8200,

coinTime:60,

recovery:15,

dna:650,

chance:"Very Common",

special:"Sky Hunter"

},

{

id:"compsognathus",

name:"Compsognathus",

pack:true,

maxPack:5,

type:"Carnivore",

rarity:"Common",

health:350,

attack:210,

coin:590,

coinTime:60,

recovery:5,

dna:100,

chance:"Very Common",

special:"Swarm"

},

{

id:"gallimimus",

name:"Gallimimus",

pack:false,

type:"Herbivore",

rarity:"Common",

health:1000,

attack:180,

coin:990,

coinTime:60,

recovery:10,

dna:350,

chance:"Very Common",

special:"Fast Runner"

},

{

id:"microceratus",

name:"Microceratus",

pack:false,

type:"Herbivore",

rarity:"Common",

health:380,

attack:60,

coin:970,

coinTime:60,

recovery:5,

dna:200,

chance:"Very Common",

special:"Cute Bonus"

},

{

id:"ratcroc",

name:"RatCroc",

pack:false,

type:"Amphibian",

rarity:"Common",

health:850,

attack:240,

coin:1100,

coinTime:60,

recovery:8,

dna:450,

chance:"Common",

special:"Scavenger"

},

{

id:"diplocaulus",

name:"Diplocaulus",

pack:false,

type:"Amphibian",

rarity:"Common",

health:1200,

attack:140,

coin:900,

coinTime:60,

recovery:11,

dna:750,

chance:"Very Common",

special:"Boomerang Head"

},




/* =================
UNCOMMON / RARE
================= */

{

id:"utahraptor",

name:"Utahraptor",

pack:true,

maxPack:3,

type:"Carnivore",

rarity:"Uncommon",

health:1850,

attack:420,

coin:12500,

coinTime:60,

recovery:35,

dna:2500,

chance:"Common",

special:"Pack Hunter"

},

{

id:"baryonyx",

name:"Baryonyx",

pack:false,

type:"Carnivore",

rarity:"Rare",

health:3950,

attack:720,

coin:3150,

coinTime:15,

recovery:65,

dna:4500,

chance:"Uncommon",

special:"Water Bonus"

},

{

id:"carnotaurus",

name:"Carnotaurus",

pack:false,

type:"Carnivore",

rarity:"Rare",

health:3750,

attack:810,

coin:3450,

coinTime:15,

recovery:62,

dna:5700,

chance:"Uncommon",

special:"Speed Demon"

},

{

id:"ceratosaurus",

name:"Ceratosaurus",

pack:false,

type:"Carnivore",

rarity:"Rare",

health:3900,

attack:840,

coin:3600,

coinTime:15,

recovery:68,

dna:6600,

chance:"Uncommon",

special:"Mid Tier Brawler"

},

{

id:"stegosaurus",

name:"Stegosaurus",

pack:false,

type:"Herbivore",

rarity:"Rare",

health:5950,

attack:890,

coin:3850,

coinTime:15,

recovery:90,

dna:7500,

chance:"Rare",

special:"Plate Defense"

},

{

id:"parasaurolophus",

name:"Parasaurolophus",

pack:false,

type:"Herbivore",

rarity:"Rare",

health:3800,

attack:410,

coin:2100,

coinTime:15,

recovery:60,

dna:7500,

chance:"Rare",

special:"Herd Call"

},




/* =================
VERY RARE
================= */

{

id:"spinoMirabilis",

name:"Spinosaurus Mirabilis",

pack:false,

type:"Carnivore",

rarity:"Very Rare",

health:4725,

attack:980,

coin:5105,

coinTime:5,

recovery:105,

dna:11500,

chance:"Very Rare",

special:"30% Water Attack"

},

{

id:"sarcosuchus",

name:"Sarcosuchus",

pack:false,

type:"Amphibian",

rarity:"Very Rare",

health:4600,

attack:940,

coin:3850,

coinTime:5,

recovery:100,

dna:10500,

chance:"Rare",

special:"25% Water Bonus"

},

{

id:"allosaurus",

name:"Allosaurus",

pack:false,

type:"Carnivore",

rarity:"Very Rare",

health:4100,

attack:890,

coin:4250,

coinTime:5,

recovery:95,

dna:9900,

chance:"Rare",

special:"Berserk"

},

{

id:"hatzegopteryx",

name:"Hatzegopteryx",

pack:true,

maxPack:3,

type:"Pterosaur",

rarity:"Very Rare",

health:1900,

attack:550,

coin:4350,

coinTime:5,

recovery:80,

dna:9700,

chance:"Rare",

special:"Air Strike"

},

{

id:"deinosuchus",

name:"Deinosuchus",

pack:false,

type:"Amphibian",

rarity:"Super Rare",

health:4900,

attack:990,

coin:8000,

coinTime:10,

recovery:108,

dna:13000,

chance:"Very Rare",

special:"River King"

},




/* =================
SUPER RARE
================= */

{

id:"ankylosaurus",

name:"Ankylosaurus",

pack:false,

type:"Herbivore",

rarity:"Super Rare",

health:6500,

attack:820,

coin:5200,

coinTime:10,

recovery:110,

dna:12500,

chance:"Very Rare",

special:"Armored Hide"

},

{

id:"triceratops",

name:"Triceratops",

pack:false,

type:"Herbivore",

rarity:"Super Rare",

health:6225,

attack:1025,

coin:5505,

coinTime:10,

recovery:120,

dna:14000,

chance:"Very Rare",

special:"Horn Charge"

},

{

id:"quetzalcoatlus",

name:"Quetzalcoatlus",

pack:true,

maxPack:3,

type:"Pterosaur",

rarity:"Super Rare",

health:1800,

attack:580,

coin:4950,

coinTime:10,

recovery:75,

dna:9700,

chance:"Very Rare",

special:"Sky Terror"

},




/* =================
LEGENDARY
================= */

{

id:"trex",

name:"Tyrannosaurus Rex",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:5105,

attack:1235,

coin:55060,

coinTime:60,

recovery:120,

dna:14300,

chance:"Very Rare",

special:"Bone Crusher"

},

{

id:"spinosaurus",

name:"Spinosaurus",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:5325,

attack:1121,

coin:5505,

coinTime:5,

recovery:120,

dna:14500,

chance:"Super Rare",

special:"30% Water Attack + 25% Water Health"

},

{

id:"giganotosaurus",

name:"Giganotosaurus",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:5280,

attack:1210,

coin:56500,

coinTime:60,

recovery:120,

dna:14500,

chance:"Super Rare",

special:"Alpha Roar"

},

{

id:"carcharodontosaurus",

name:"Carcharodontosaurus",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:5050,

attack:1180,

coin:53500,

coinTime:60,

recovery:110,

dna:13255,

chance:"Super Rare",

special:"Bleeding Bite"

},

{

id:"tyrannotitan",

name:"Tyrannotitan",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:4980,

attack:1150,

coin:51200,

coinTime:60,

recovery:115,

dna:13500,

chance:"Very Rare",

special:"Titan Rage"

},

{

id:"therizinosaurus",

name:"Therizinosaurus",

pack:false,

type:"Carnivore",

rarity:"Legendary",

health:4400,

attack:1110,

coin:48900,

coinTime:60,

recovery:105,

dna:12900,

chance:"Super Rare",

special:"Razor Claws"

},




/* =================
MYTHIC
================= */

{

id:"argentinosaurus",

name:"Argentinosaurus",

pack:false,

type:"Herbivore",

rarity:"Mythic",

health:9500,

attack:750,

coin:85000,

coinTime:60,

recovery:180,

dna:25000,

chance:"Extremely Rare",

special:"Giant"

},

{

id:"paralititan",

name:"Paralititan",

pack:false,

type:"Herbivore",

rarity:"Mythic",

health:8900,

attack:610,

coin:77500,

coinTime:60,

recovery:165,

dna:23000,

chance:"Second Rarest",

special:"Titan Body"

},

{

id:"tyrannospinus",

name:"Tyrannospinus",

pack:false,

type:"Carnivore",

rarity:"Mythic",

health:5975,

attack:1550,

coin:6120,

coinTime:5,

recovery:190,

dna:null,

chance:"Fusion Only",

special:"20% Water Bonus"

},

{

id:"ankylyceratops",

name:"Ankylyceratops",

pack:false,

type:"Herbivore",

rarity:"Mythic",

health:7100,

attack:1000,

coin:73540,

coinTime:60,

recovery:180,

dna:null,

chance:"Fusion Only",

special:"Armor + Horn Charge"

},




/* =================
GODLY
================= */

{

id:"carnothereus",

name:"Carnothereus Rex",

pack:false,

type:"Carnivore",

rarity:"Godly",

health:7000,

attack:1900,

coin:16410,

coinTime:10,

recovery:480,

dna:null,

chance:"Fusion Only",

special:

"Meta Predator"

}

];





/* =====================

PACK EFFECTIVENESS

===================== */

function packMultiplier(alive,total){

if(total===3){

if(alive===3) return 1;

if(alive===2) return 0.7;

if(alive===1) return 0.4;

}

if(total===5){

if(alive===5) return 1;

if(alive===4) return 0.85;

if(alive===3) return 0.7;

if(alive===2) return 0.5;

if(alive===1) return 0.25;

}

return 1;

}





/* =====================

WATER BONUS

===================== */

function applyWaterBonus(dino){

if(

dino.id==="spinosaurus"

||

dino.id==="spinoMirabilis"

){

return{

health:

Math.floor(

dino.health*1.25

),

attack:

Math.floor(

dino.attack*1.30

)

}

}


if(

dino.type==="Amphibian"

||

dino.id==="baryonyx"

){

return{

health:

Math.floor(

dino.health*1.25

),

attack:

Math.floor(

dino.attack*1.25

)

}

}


return{

health:dino.health,

attack:dino.attack

}

}
