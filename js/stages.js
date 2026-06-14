/* =====================================

PRIMORDIAL PARK

stages.js

Battle Stages + Unlock System

===================================== */


const battleStages=[


/* ====================

STAGE 1

==================== */

{

stage:1,

unlockLevel:1,

unlocks:[],

reward:{

cash:10,

coins:3000,

dna:250,

food:5000

},

enemies:[

{

id:"gallimimus",

level:3

},

{

id:"compsognathus",

pack:2,

level:2

}

]

},




/* ====================

STAGE 2

==================== */

{

stage:2,

unlockLevel:2,

unlocks:[

"ratcroc"

],

reward:{

cash:10,

coins:3000,

dna:250,

food:5000

},

enemies:[

{

id:"ratcroc",

level:4

},

{

id:"gallimimus",

level:4

}

]

},





{

stage:3,

unlockLevel:3,

unlocks:[],

reward:{

cash:30,

coins:3000,

dna:250,

food:5000

},

enemies:[

{

id:"gallimimus",

level:5

},

{

id:"microceratus",

level:5

}

]

},





{

stage:4,

unlockLevel:4,

unlocks:[

"microceratus"

],

reward:{

cash:15,

coins:4500,

dna:300,

food:6000

},

enemies:[

{

id:"ratcroc",

level:6

},

{

id:"gallimimus",

level:6

}

]

},





{

stage:5,

unlockLevel:5,

unlocks:[

"diplocaulus"

],

reward:{

cash:20,

coins:5000,

dna:350,

food:7000

},

enemies:[

{

id:"diplocaulus",

level:6

},

{

id:"ratcroc",

level:7

}

]

},






{

stage:6,

unlockLevel:6,

unlocks:[

"dilophosaurus"

],

reward:{

cash:20,

coins:6000,

dna:400,

food:9000

},

enemies:[

{

id:"dilophosaurus",

pack:3,

level:7

}

]

},





{

stage:7,

unlockLevel:7,

unlocks:[

"velociraptor"

],

reward:{

cash:25,

coins:7000,

dna:450,

food:10000

},

enemies:[

{

id:"velociraptor",

pack:3,

level:8

}

]

},





{

stage:8,

unlockLevel:8,

unlocks:[

"pteranodon"

],

reward:{

cash:25,

coins:8000,

dna:500,

food:11000

},

enemies:[

{

id:"pteranodon",

pack:3,

level:8

}

]

},





{

stage:9,

unlockLevel:9,

unlocks:[

"utahraptor"

],

reward:{

cash:30,

coins:10000,

dna:550,

food:13000

},

enemies:[

{

id:"utahraptor",

pack:2,

level:10

}

]

},






/* ======================

LEVEL 10 PACK

====================== */

{

stage:10,

unlockLevel:10,

unlocks:[

"baryonyx"

],

reward:{

cash:40,

coins:12000,

dna:700,

food:15000,

specialPack:true

},

enemies:[

{

id:"utahraptor",

pack:3,

level:11

},

{

id:"baryonyx",

level:10

}

]

},






{

stage:11,

unlockLevel:11,

unlocks:[

"ceratosaurus"

],

reward:{

cash:40,

coins:14000,

dna:750,

food:17000

},

enemies:[

{

id:"ceratosaurus",

level:12

}

]

},





{

stage:12,

unlockLevel:12,

unlocks:[

"carnotaurus"

],

reward:{

cash:50,

coins:16000,

dna:800,

food:20000

},

enemies:[

{

id:"carnotaurus",

level:13

}

]

},






{

stage:13,

unlockLevel:13,

unlocks:[

"parasaurolophus"

],

reward:{

cash:50,

coins:18000,

dna:900,

food:22000

},

enemies:[

{

id:"parasaurolophus",

level:14

}

]

},






{

stage:14,

unlockLevel:14,

unlocks:[

"allosaurus"

],

reward:{

cash:55,

coins:20000,

dna:950,

food:25000

},

enemies:[

{

id:"allosaurus",

level:15

}

]

},






{

stage:15,

unlockLevel:15,

unlocks:[

"hatzegopteryx"

],

reward:{

cash:60,

coins:22000,

dna:1000,

food:27000

},

enemies:[

{

id:"hatzegopteryx",

pack:3,

level:16

}

]

},






{

stage:16,

unlockLevel:16,

unlocks:[

"deinosuchus"

],

reward:{

cash:70,

coins:25000,

dna:1100,

food:30000

},

enemies:[

{

id:"deinosuchus",

level:17

}

]

},





{

stage:17,

unlockLevel:17,

unlocks:[

"quetzalcoatlus"

],

reward:{

cash:80,

coins:27000,

dna:1200,

food:35000

},

enemies:[

{

id:"quetzalcoatlus",

pack:3,

level:18

}

]

},






{

stage:18,

unlockLevel:18,

unlocks:[

"stegosaurus"

],

reward:{

cash:85,

coins:30000,

dna:1300,

food:37000

},

enemies:[

{

id:"stegosaurus",

level:19

}

]

},






{

stage:19,

unlockLevel:19,

unlocks:[

"sarcosuchus"

],

reward:{

cash:90,

coins:32000,

dna:1400,

food:40000

},

enemies:[

{

id:"sarcosuchus",

level:20

}

]

},





/* ====================

LEVEL 20 PACK

==================== */

{

stage:20,

unlockLevel:20,

unlocks:[

"ankylosaurus"

],

reward:{

cash:100,

coins:35000,

dna:1500,

food:50000,

specialPack:true

},

enemies:[

{

id:"ankylosaurus",

level:21

},

{

id:"sarcosuchus",

level:21

}

]

},






{

stage:21,

unlockLevel:21,

unlocks:[

"triceratops"

],

reward:{

cash:110,

coins:38000,

dna:1600,

food:55000

},

enemies:[

{

id:"triceratops",

level:22

}

]

},





{

stage:22,

unlockLevel:22,

unlocks:[],

reward:{

cash:120,

coins:42000,

dna:1700,

food:60000

},

enemies:[

{

id:"allosaurus",

level:23

},

{

id:"ankylosaurus",

level:22

}

]

},





{

stage:23,

unlockLevel:23,

unlocks:[],

reward:{

cash:130,

coins:45000,

dna:1800,

food:65000

},

enemies:[

{

id:"therizinosaurus",

level:24

}

]

},





{

stage:24,

unlockLevel:24,

unlocks:[],

reward:{

cash:140,

coins:50000,

dna:1900,

food:70000

},

enemies:[

{

id:"giganotosaurus",

level:25

}

]

},






{

stage:25,

unlockLevel:25,

unlocks:[

"ankylosaurus"

],

reward:{

cash:150,

coins:55000,

dna:2000,

food:80000

},

enemies:[

{

id:"ankylosaurus",

level:26

}

]

},





{

stage:26,

unlockLevel:26,

unlocks:[],

reward:{

cash:160,

coins:60000,

dna:2200,

food:85000

},

enemies:[

{

id:"carcharodontosaurus",

level:27

}

]

},





{

stage:27,

unlockLevel:27,

unlocks:[],

reward:{

cash:170,

coins:65000,

dna:2500,

food:90000

},

enemies:[

{

id:"trex",

level:28

}

]

},





/* ====================

FINAL STAGE

==================== */

{

stage:28,

unlockLevel:28,

unlocks:[

"carcharodontosaurus",

"ChampionLeague"

],

reward:{

cash:250,

coins:100000,

dna:5000,

food:150000

},

enemies:[

{

id:"trex",

level:40

},

{

id:"spinosaurus",

level:40

},

{

id:"giganotosaurus",

level:40

}

]

}

];







/* =====================

CHAMPION LEAGUE

===================== */

const championLeague={

unlockLevel:28,

noLevelCap:true,

creatures:[

"argentinosaurus",

"tyrannospinus",

"carnothereus"

],

future:

"Godly Hybrids"

};







/* =====================

SPECIAL PACK

===================== */

const specialPack=[

{

reward:"velociraptor",

chance:10

},

{

reward:"utahraptor",

chance:8

},

{

reward:"alanqa",

chance:8

},

{

reward:"50000 Food",

chance:15

},

{

reward:"25000 Food",

chance:15

},

{

reward:"10000 Coins",

chance:15

},

{

reward:"20000 Coins",

chance:12

},

{

reward:"50 Cash",

chance:10

},

{

reward:"100 Cash",

chance:5

},

{

reward:"Carnotaurus",

chance:1.5

},

{

reward:"Therizinosaurus",

chance:0.8

}

];







function getStage(stage){

return battleStages.find(

x=>x.stage===stage

);

}
