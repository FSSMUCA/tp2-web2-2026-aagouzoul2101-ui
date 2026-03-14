let titreLivre = "1984";
let auteur = "George Orwell";
let anneePublication = 1949;
let estDisponible = false;
let emprunteur = "Alice Dupont";
let dateEmprunt = new Date("2023-10-01");
let dureeMaxJours = 14;

// 1. Afficher les informations du livre
console.log(`Titre : ${titreLivre}`);
console.log(`Auteur : ${auteur}`);
console.log(`Année : ${anneePublication}`);
console.log(`Disponible : ${estDisponible ? "Oui" : "Non"}`);

// 2. Vérifier la disponibilité
if (estDisponible) {
    // Simuler l'emprunt
    emprunteur = "Vous";
    dateEmprunt = new Date();
    estDisponible = false;
    console.log("Emprunt réussi !");
} else {
    // Calculer les jours écoulés
    let maintenant = new Date();
    let joursEcoules = Math.floor((maintenant - dateEmprunt) / (1000 * 60 * 60 * 24));
    console.log(`Le livre est emprunté par ${emprunteur} depuis ${joursEcoules} jour(s).`);
}

// 3. Afficher le statut final
console.log("===== STATUT FINAL =====");
console.log(`Titre : ${titreLivre}`);
console.log(`Auteur : ${auteur}`);
console.log(`Année : ${anneePublication}`);
console.log(`Disponible : ${estDisponible ? "Oui" : "Non"}`);
if (!estDisponible) {
    console.log(`Emprunteur : ${emprunteur}`);
    let joursEcoules = Math.floor((new Date() - dateEmprunt) / (1000 * 60 * 60 * 24));
    console.log(`Jours écoulés : ${joursEcoules}`);
}
console.log("=========================");