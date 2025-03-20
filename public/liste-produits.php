
<?php
// Activation du CORS pour permettre l'accès depuis le frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Tableau pour stocker les produits
$products = [];

// Affectation des valeurs directement dans les variables pour 15 produits
for ($i = 1; $i <= 15; $i++) {
    // Initialisation avec des valeurs par défaut
    $description[$i] = "";
    $clarte[$i] = "";
    $couleur[$i] = "";
    $taille[$i] = "";
    $dimensions[$i] = "";
    $prix[$i] = "";
}

// Produit 1
$description[1] = "Rond 1.09ct H VS1";
$clarte[1] = "VS1";
$couleur[1] = "H";
$taille[1] = "Excellent";
$dimensions[1] = "6.51 × 3.97";
$prix[1] = "€1 916,43";

// Produit 2
$description[2] = "Oval 1.50ct D IF EX EX None";
$clarte[2] = "IF";
$couleur[2] = "D";
$taille[2] = "Excellent";
$dimensions[2] = "7.21 × 4.15";
$prix[2] = "€4 250";

// Produit 3
$description[3] = "Princess 2.01ct G VS2 VG VG Faint";
$clarte[3] = "VS2";
$couleur[3] = "G";
$taille[3] = "Very Good";
$dimensions[3] = "6.89 × 4.22";
$prix[3] = "€3 150,75";

// Produit 4
$description[4] = "Pear 1.25ct E VVS1 EX EX None";
$clarte[4] = "VVS1";
$couleur[4] = "E";
$taille[4] = "Excellent";
$dimensions[4] = "7.02 × 4.11";
$prix[4] = "€2 890,60";

// Produit 5
$description[5] = "Emerald 1.75ct F VS1 EX EX Faint";
$clarte[5] = "VS1";
$couleur[5] = "F";
$taille[5] = "Excellent";
$dimensions[5] = "7.15 × 4.08";
$prix[5] = "€3 475,90";

// Produit 6
$description[6] = "Cushion 1.30ct I VVS2 VG EX None";
$clarte[6] = "VVS2";
$couleur[6] = "I";
$taille[6] = "Very Good";
$dimensions[6] = "6.75 × 4.01";
$prix[6] = "€2 250,30";

// Produit 7
$description[7] = "Rond 0.90ct F VS2 EX EX None";
$clarte[7] = "VS2";
$couleur[7] = "F";
$taille[7] = "Excellent";
$dimensions[7] = "6.20 × 3.80";
$prix[7] = "€1 780,50";

// Produit 8
$description[8] = "Marquise 1.15ct G VVS1 VG VG Faint";
$clarte[8] = "VVS1";
$couleur[8] = "G";
$taille[8] = "Very Good";
$dimensions[8] = "9.80 × 5.10";
$prix[8] = "€2 340,75";

// Produit 9
$description[9] = "Oval 2.05ct D VS1 EX EX None";
$clarte[9] = "VS1";
$couleur[9] = "D";
$taille[9] = "Excellent";
$dimensions[9] = "10.20 × 7.30";
$prix[9] = "€5 120,90";

// Produit 10
$description[10] = "Rond 1.50ct H SI1 VG EX Faint";
$clarte[10] = "SI1";
$couleur[10] = "H";
$taille[10] = "Very Good";
$dimensions[10] = "7.35 × 4.45";
$prix[10] = "€2 790,30";

// Produit 11
$description[11] = "Princess 1.80ct F VS2 EX EX None";
$clarte[11] = "VS2";
$couleur[11] = "F";
$taille[11] = "Excellent";
$dimensions[11] = "7.00 × 7.00";
$prix[11] = "€3 980,25";

// Produit 12
$description[12] = "Emerald 1.25ct E VVS2 VG VG Faint";
$clarte[12] = "VVS2";
$couleur[12] = "E";
$taille[12] = "Very Good";
$dimensions[12] = "7.90 × 5.80";
$prix[12] = "€3 150,60";

// Produit 13
$description[13] = "Rond 2.00ct G VS1 EX EX None";
$clarte[13] = "VS1";
$couleur[13] = "G";
$taille[13] = "Excellent";
$dimensions[13] = "8.10 × 4.90";
$prix[13] = "€4 560,80";

// Produit 14
$description[14] = "Pear 1.65ct D IF EX EX None";
$clarte[14] = "IF";
$couleur[14] = "D";
$taille[14] = "Excellent";
$dimensions[14] = "11.20 × 6.90";
$prix[14] = "€5 980,40";

// Produit 15
$description[15] = "Cushion 1.95ct F VVS1 EX EX Faint";
$clarte[15] = "VVS1";
$couleur[15] = "F";
$taille[15] = "Excellent";
$dimensions[15] = "8.30 × 6.70";
$prix[15] = "€4 870,25";

// Construction du tableau des produits
for ($i = 1; $i <= 15; $i++) {
    $products[] = [
        "id" => (string)$i,
        "name" => $description[$i],
        "image" => "/placeholder.svg",
        "image2" => "/placeholder.svg",
        "price" => $prix[$i],
        "specs" => [
            "clarity" => $clarte[$i],
            "color" => $couleur[$i],
            "cut" => $taille[$i],
            "dimensions" => $dimensions[$i]
        ]
    ];
}

// Retour des produits en format JSON
echo json_encode($products);
?>
