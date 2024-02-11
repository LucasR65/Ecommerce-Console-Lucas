let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));

const positionElement3 = document.querySelector("#container-produits-panier");

if (produitEnregistreDansLocalStorage === null || produitEnregistreDansLocalStorage.length === 0) {
    const panierVide = `<div class="container-panier-vide">
                            <div> Le panier est vide </div>
                        </div>`;
    positionElement3.innerHTML = panierVide;
} else {
    let structureProduitPanier = "";
    for (let k = 0; k < produitEnregistreDansLocalStorage.length; k++) {
        structureProduitPanier += `
            <div class="container-recapitulatif">
                <div>Quantité 1 - ${produitEnregistreDansLocalStorage[k].nomProduit}</div>
                <div>${produitEnregistreDansLocalStorage[k].prix} € - 
                    <button class="btn-supprimer" data-index="${k}"> supprimer </button>
                </div>
            </div>
        `;
    }
    positionElement3.innerHTML = structureProduitPanier;

    let btn_supprimer = document.querySelectorAll(".btn-supprimer");

    for (let l = 0; l < btn_supprimer.length; l++) {
        btn_supprimer[l].addEventListener("click", (event) => {
            event.preventDefault();
            const index = parseInt(event.target.getAttribute("data-index"));
            produitEnregistreDansLocalStorage.splice(index, 1);
            localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));
            alert("Ce produit a été supprimé du panier");
            window.location.href = "panier.html";
        });
    }
}

const btn_tous_supprimer_panier_html = `
    <button class="btn-tous-supprimer-panier"> Vider le panier </button>
`;

positionElement3.insertAdjacentHTML("beforeend", btn_tous_supprimer_panier_html);
git 
const btn_tous_supprimer_panier = document.querySelector(".btn-tous-supprimer-panier");

btn_tous_supprimer_panier.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("produit");
    alert("Le panier a été vidé");
    window.location.href = "panier.html";
});






const queryString_url_id = window.location.search;

const id = queryString_url_id.slice(1);

const idProduitSelectionner = reponse.find((element) => element._id === id);

const btn_envoyerPanier = document.querySelectorAll("#btn-envoyer");

btn_envoyerPanier.forEach((button) => {
  button.addEventListener("click", () => {
    let newUrl = button.attributes["0"].nodeValue;

    window.location.href = newUrl;
  });
});

btn_envoyerPanier.forEach((button) => {
  button.addEventListener("click", () => {
    let optionsProduit = {
      nomProduit: idProduitSelectionner.nomProduit,
      id_ProduitSelectionner: idProduitSelectionner,
      prix: idProduitSelectionner.prix / 100,
    };
    console.log(optionsProduit);
    let produitEnregistreDansLocalStorage = JSON.parse(
      localStorage.getItem("produit")
    );

    if (produitEnregistreDansLocalStorage) {
      produitEnregistreDansLocalStorage.push(optionsProduit);
      localStorage.setItem(
        "produit",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    } else {
      produitEnregistreDansLocalStorage = [];
      produitEnregistreDansLocalStorage.push(optionsProduit);
      localStorage.setItem(
        "produit",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    }
  });
});