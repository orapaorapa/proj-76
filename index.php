<?php
require_once 'includes/header.php';
?>

<main class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
        <div class="mb-6">
            <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">Diamètre pierre principale. De : <span id="min-diameter-value">1.0</span></span>
                    <input 
                        type="range" 
                        id="min-diameter-slider"
                        min="0.1" 
                        max="200.0" 
                        step="0.1" 
                        value="1.0"
                        class="w-48"
                    >
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">à : <span id="max-diameter-value">200.0</span></span>
                    <input 
                        type="range" 
                        id="max-diameter-slider"
                        min="0.1" 
                        max="200.0" 
                        step="0.1" 
                        value="200.0"
                        class="w-48"
                    >
                </div>
            </div>
            <h1 class="text-2xl font-semibold mb-4">Diamants naturels</h1>
            <div class="flex flex-wrap gap-2">
                <button class="btn-filter" data-filter="price">Prix</button>
                <button class="btn-filter" data-filter="image">À une image</button>
                <button class="btn-filter" data-filter="video">À une vidéo</button>
                <button class="btn-filter" data-filter="returnable">Retournable</button>
                <button class="btn-filter active" data-filter="express">EXPRESS</button>
            </div>
        </div>
        <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <?php include 'includes/products.php'; ?>
        </div>
    </div>
</main>

<?php
require_once 'includes/footer.php';
?>