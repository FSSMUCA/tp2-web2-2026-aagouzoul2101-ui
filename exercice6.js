let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = [
    { name: "nom", value: nom },
    { name: "age", value: age },
    { name: "ville", value: ville },
    { name: "score", value: score },
    { name: "actif", value: actif }
];

// Partie A
for (let v of variables) {
    let result = v.value ?? "valeur par défaut";
    console.log(`${v.name} ?? "valeur par défaut"    -> ${result}`);
}

// Partie B
for (let v of variables) {
    let result = v.value || "valeur par défaut";
    console.log(`${v.name} || "valeur par défaut"    -> ${result}`);
}

// Partie C
for (let v of variables) {
    let nullish = v.value ?? "valeur par défaut";
    let or = v.value || "valeur par défaut";
    let same = nullish === or ? "même résultat" : "résultat différent";
    console.log(`${v.name}   : ?? et || -> ${same}`);
}