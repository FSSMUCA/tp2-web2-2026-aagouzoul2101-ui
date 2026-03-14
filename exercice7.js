let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1. Calculez le sous-total
let sousTotal = prix * quantite;
console.log(`Sous-total : ${sousTotal} MAD`);

// 2. Appliquez la réduction
let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
console.log(`Réduction : ${reduction} MAD`);

// 3. Calculez le total final
let total = sousTotal - reduction;
console.log(`Total final : ${total} MAD`);

// 4. Vérifiez le solde
let statut;
if (soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}
console.log(`Statut : ${statut}`);

// 5. Nouveau solde si accepté
let nouveauSolde;
if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
    console.log(`Nouveau solde : ${nouveauSolde} MAD`);
}

// 6. Récapitulatif
console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${total} MAD`);
console.log(`Statut    : ${statut}`);
if (statut === "Paiement accepté") {
    console.log(`Solde     : ${nouveauSolde} MAD`);
}
console.log("=========================");