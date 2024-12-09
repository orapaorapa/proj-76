<?php
$products = [
    [
        'id' => '1',
        'name' => 'Round 1.01ct H VS1 EX EX EX Faint',
        'image' => '/placeholder.svg',
        'image2' => '/placeholder.svg',
        'price' => 1916.43,
        'clarity' => 'VS1',
        'color' => 'H',
        'cut' => 'Excellent',
        'dimensions' => '6.51 × 3.97'
    ],
    [
        'id' => '2',
        'name' => 'Oval 1.50ct D IF EX EX None',
        'image' => '/placeholder.svg',
        'image2' => '/placeholder.svg',
        'price' => 4250.00,
        'clarity' => 'IF',
        'color' => 'D',
        'cut' => 'Excellent',
        'dimensions' => '7.21 × 4.15'
    ],
    [
        'id' => '3',
        'name' => 'Princess 2.01ct G VS2 VG VG Faint',
        'image' => '/placeholder.svg',
        'image2' => '/placeholder.svg',
        'price' => 3150.75,
        'clarity' => 'VS2',
        'color' => 'G',
        'cut' => 'Very Good',
        'dimensions' => '6.89 × 4.22'
    ]
];

foreach ($products as $product): ?>
    <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="relative group">
            <div class="flex flex-col">
                <img
                    src="<?php echo htmlspecialchars($product['image']); ?>"
                    alt="<?php echo htmlspecialchars($product['name']); ?> - Vue 1"
                    class="w-full h-52 sm:h-48 md:h-44 lg:h-40 object-cover"
                >
                <img
                    src="<?php echo htmlspecialchars($product['image2']); ?>"
                    alt="<?php echo htmlspecialchars($product['name']); ?> - Vue 2"
                    class="w-full h-52 sm:h-48 md:h-44 lg:h-40 object-cover"
                >
            </div>
            <div class="absolute top-2 right-2 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="btn-icon">
                    <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="btn-icon">
                    <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                </button>
            </div>
        </div>
        <div class="p-2">
            <h3 class="font-semibold text-[10px] mb-1 text-left truncate"><?php echo htmlspecialchars($product['name']); ?></h3>
            <div class="text-xs text-gray-600 space-y-0.5 text-left">
                <p>Clarté: <?php echo htmlspecialchars($product['clarity']); ?></p>
                <p>Couleur: <?php echo htmlspecialchars($product['color']); ?></p>
                <p>Taille: <?php echo htmlspecialchars($product['cut']); ?></p>
                <p>Dimensions: <?php echo htmlspecialchars($product['dimensions']); ?></p>
            </div>
            <div class="mt-2 flex justify-between items-center">
                <span class="font-bold text-sm">€<?php echo number_format($product['price'], 2, ',', ' '); ?></span>
                <button class="btn-primary text-xs px-2 py-1">Voir détails</button>
            </div>
        </div>
    </div>
<?php endforeach; ?>