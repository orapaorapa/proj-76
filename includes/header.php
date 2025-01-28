<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diamants Naturels</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="/" class="text-xl font-semibold">Logo</a>
                <div class="hidden md:flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Accueil</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Produits</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                <button id="mobile-menu-button" class="md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accueil</a>
            <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Produits</a>
            <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        </div>
    </nav>