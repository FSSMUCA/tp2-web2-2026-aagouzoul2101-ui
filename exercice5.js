let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let valeur of nombres) {
    let categorie;
    if (Number.isNaN(valeur)) {
        categorie = "INVALIDE";
    } else if (valeur === Infinity || valeur === -Infinity) {
        categorie = "INFINI";
    } else if (valeur === 0 && 1 / valeur === -Infinity) {
        categorie = "ZERO NEGATIF";
    } else if (Number.isInteger(valeur) && valeur >= Number.MIN_SAFE_INTEGER && valeur <= Number.MAX_SAFE_INTEGER) {
        categorie = "ENTIER SUR";
    } else if (Number.isInteger(valeur)) {
        categorie = "ENTIER HORS LIMITES";
    } else {
        categorie = "DECIMAL";
    }
    console.log(`${valeur} -> ${categorie}`);
}
