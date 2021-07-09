// norint terminale iskviesti si faila:
// rasome "node ." (be kabuciu)


const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();

console.log(automobiliai); // Sarasas {}

automobiliai.prideti('audi');
automobiliai.prideti('volvo');
automobiliai.prideti('tesla');
automobiliai.prideti('bmw');
automobiliai.prideti('opel');
automobiliai.prideti('nissan');

//console.log(automobiliai); // Sarasas {}

automobiliai.spausdinti();
// terminale reikia isspausdinti visus automobilius tokiu principu:
// nr. auto-pavadinimas
// 1. audi
// 2. volvo

// bandom gauti toki rezultata:
// Sarasas:
// ===============
// 1. audi
// 2. volvo
// ===============

automobiliai.redaguoti(0, 'mazda');
// kurio automobilio pavadinima norim keisti? 
// 0 (pirmas parametras) rodo saraso vieta, ka norime keisti
// antras parametras rodo, i ka norim ji keisti

automobiliai.redaguoti(10, 'mazda');
automobiliai.redaguoti(-1, 'mazda');
automobiliai.redaguoti(2.5, 'mazda');

automobiliai.redaguoti(3, 'mitsubishi');

automobiliai.spausdinti();

automobiliai.pasalinti(1);
automobiliai.pasalinti(2);
automobiliai.pasalinti(3);

automobiliai.spausdinti();

