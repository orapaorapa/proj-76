
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Récupère l'adresse IP du client
function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        // IP depuis les partages internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        // IP derrière un proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        // IP directe
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

// Retourne l'IP du client au format JSON
echo json_encode(['ip' => getClientIP()]);
?>
