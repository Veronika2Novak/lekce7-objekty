let poleZvirat = [
    {jmeno: "kravicka", foto: 'obrazky/krava.jpg'},
    {jmeno: "ovecka", foto: 'obrazky/ovce.jpg'},
    {jmeno: "husa", foto: 'obrazky/husa.jpg'},
    {jmeno: "kocka", foto: 'obrazky/kocka.jpg'}
]

/*let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
}; */

poleZvirat.forEach(function(zviratko){
    let zvire = document.createElement("div");
    zvire.className = "zvire";

    let fotoZvirete = document.createElement("img");
    fotoZvirete.className = "foto";
    fotoZvirete.src = zviratko.foto;
    fotoZvirete = zviratko.jmeno;

    let jmenoZvirete = document.createElement("span");
    jmenoZvirete.className = "jmeno";
    jmenoZvirete.innerHTML = zviratko.jmeno;

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    let farma = document.querySelector(".farma");
    farma.appendChild(zvire);
}) 

//zkusit přepsat foreach na for 

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?

