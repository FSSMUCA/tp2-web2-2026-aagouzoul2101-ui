let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let val = valeurs[i];
  let affichage;
  
  if (val === "") {
    affichage = "(chaine vide)";
  } else {
    affichage = String(val);
  }
  
  let type = val ? "truthy" : "falsy";
  
  console.log(`${affichage} -> ${type}`);
}