<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');     // À modifier selon votre configuration
define('DB_PASS', '');         // À modifier selon votre configuration
define('DB_NAME', 'diamonds_db');

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
        DB_USER,
        DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
    );
} catch(PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>