// partie milule rouge

let début = ["Bonjour", "Salut", "Salam"];
let milieu = ["tu deviens" , "tu resteras" ];
let fin = ["invisible" ,  "super intelligent" ];

let affichertext = document.getElementById("afficher");

let rouge = document.getElementById("rouge");
rouge.addEventListener("click" , test);

let input = document.getElementById("input");
let error = document.getElementById("choix");
let regex = /^[1-5]$/;

function test(){
    
    if (input.value.trim() == ""){
        
        error.innerHTML = "selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
    }
    
    else if (regex.test(input.value) == false) {
        error.innerHTML = "selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
        e.PreventDefault();
    }

    while (affichertext.firstChild){
        affichertext.removeChild(affichertext.firstChild);
    }

    for(i=0; i < input.value; i++ ){
        // math.floor pour arrondir (pas de chiffre apres la virgul)
    let tableauRandom1= Math.floor(Math.random()* (début.length));
    let tableauRandom2= Math.floor(Math.random()* (milieu.length));
    let tableauRandom3= Math.floor(Math.random()* (fin.length));
    let text = document.createElement("p");
    text.innerHTML = début[tableauRandom1] +" "+ milieu[tableauRandom2] +" "+ fin[tableauRandom3];
    // ds ma div 'afficher'
    document.getElementById("afficher").appendChild(text);
    
    }
};

// parti pilule bleu

let début1 = ["Bonjour", "Salut", "Salam"];
let milieu1 = ["tu es" , "tu resteras" ];
let fin1 = ["invensible" ,  "trop furieux" ];

let affichertext1 = document.getElementById("afficher1"); 

let bleu = document.getElementById("bleu");
bleu.addEventListener("click" , afficher1);

function afficher1(){

    if (input.value.trim() == ""){
        
        error.innerHTML = "selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
    }
    
    else if (regex.test(input.value) == false) {
        error.innerHTML = "selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
        e.PreventDefault();
    }

    while (affichertext1.firstChild) {
        affichertext1.removeChild(affichertext1.firstChild);
    }

    for(i=0; i < input.value; i++ ){
        let tableauRandom11= Math.floor(Math.random()* (début1.length));
        let tableauRandom22= Math.floor(Math.random()* (milieu1.length));
        let tableauRandom33= Math.floor(Math.random()* (fin1.length));
        let text1 = document.createElement("p");
        text1.innerHTML = début1[tableauRandom11] +" "+ milieu1[tableauRandom22] +" "+ fin1[tableauRandom33];
        document.getElementById("afficher1").appendChild(text1);
    }
};

