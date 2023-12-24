const products = [{ id: 1, nom: 'Mélange original 200g', montant: 500, nbre: 0 },
    { id: 2, nom: 'Mélange original 500g', montant: 900, nbre: 0 },
    { id: 3, nom: 'Mélange spécial 200g', montant: 700, nbre: 0 },
    { id: 4, nom: 'Mélange spécial 500g', montant: 1200, nbre: 0 }
];
const purchases = [];
var forms = document.getElementById('forms')
var product;


function display(nom, montant, nbre) {
    if (nbre == 1) {
        return nom + " " + montant + "yens " + nbre + " item.\n";
    } else {
        return nom + " " + montant + "yens " + nbre + " items.\n";
    }

}

function add() {
    for (let iprod of products) {
        if (forms.product.value == iprod.id) {
            iprod.nbre = iprod.nbre + parseInt(forms.number.value);
            product = iprod;
        }
    }
    alert(display(product.nom, product.montant, product.nbre));
}

function calc() {
    let message = "";
    let subtotal = 0;
    let frais_expedit = 0;
    let montant_total = 0;
    for (let iprod of products) {
        if (iprod.nbre != 0) {
            message = message + display(iprod.nom, iprod.montant, iprod.nbre);
            subtotal = subtotal + iprod.montant * iprod.nbre;
        }
    }

    if (subtotal != 0) {
        message = message + "\nSous-total : " + subtotal + "yens\n";
        if (subtotal < 2000) {
            frais_expedit = 500;
        } else if (subtotal < 3000) {
            frais_expedit = 250;
        } else {
            frais_expedit = 0;
        }
        message = message + "Frais d'expédition : " + frais_expedit + "yens\n";
        montant_total = subtotal + frais_expedit;
        message = message + "Montant total :" + montant_total + "yens.";
        alert(message);
    }

}