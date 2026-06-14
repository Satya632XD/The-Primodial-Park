let coins=10000,dna=400,cash=50;

const c=document.getElementById('coins');
const d=document.getElementById('dna');
const ca=document.getElementById('cash');

function update(){
 c.textContent=coins;
 d.textContent=dna;
 ca.textContent=cash;
}

document.getElementById('collect').onclick=()=>{
 coins+=100;
 update();
};

update();
console.log('Dinosaurs loaded:', DINOSAURS.length);
