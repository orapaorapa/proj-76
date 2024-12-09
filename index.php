<?php
require_once 'includes/header.php';
?>

<main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 pt-20 pb-12">
        <div class="mb-4">
            <div class="flex items-center gap-4 mb-3">
                <div class="flex items-center gap-2">
                    <span class="text-xs text-gray-600">Diamètre : <span id="diameter-value">1.0</span> ct</span>
                    <input 
                        type="range" 
                        id="diameter-slider"
                        min="0.1" 
                        max="5.0" 
                        step="0.1" 
                        value="1.0"
                        class="w-[200px]"
                    >
                </div>
            </div>
            <h1 class="text-lg font-medium mb-3">Diamants naturels</h1>
            <div class="flex gap-2 flex-wrap">
                <button class="btn-filter" data-filter="price">Prix</button>
                <button class="btn-filter" data-filter="image">À une image</button>
                <button class="btn-filter" data-filter="video">À une vidéo</button>
                <button class="btn-filter" data-filter="returnable">Retournable</button>
                <button class="btn-filter active" data-filter="express">EXPRESS</button>
            </div>
        </div>
        <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            <?php include 'includes/products.php'; ?>
        </div>
    </div>
</main>

<?php
require_once 'includes/footer.php';
?>