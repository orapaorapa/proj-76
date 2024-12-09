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
    <div class="bg-white rounded-lg shadow-sm p-3">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1 mb-2">
                <img
                    src="<?php echo htmlspecialchars($product['image']); ?>"
                    alt="<?php echo htmlspecialchars($product['name']); ?>"
                    class="w-full h-40 object-cover rounded-md"
                >
            </div>
            <div class="absolute top-2 right-2 flex gap-2">
                <button class="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                </button>
            </div>
        </div>
        <div class="space-y-2">
            <h3 class="font-medium text-sm leading-tight"><?php echo htmlspecialchars($product['name']); ?></h3>
            <div class="text-sm text-gray-600 space-y-1">
                <p>Clarté: <?php echo htmlspecialchars($product['clarity']); ?></p>
                <p>Couleur: <?php echo htmlspecialchars($product['color']); ?></p>
                <p>Taille: <?php echo htmlspecialchars($product['cut']); ?></p>
                <p>Dimensions: <?php echo htmlspecialchars($product['dimensions']); ?></p>
            </div>
            <div class="flex justify-between items-center pt-2">
                <span class="font-bold">€<?php echo number_format($product['price'], 2, ',', ' '); ?></span>
                <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Voir détails</a>
            </div>
        </div>
    </div>
<?php endforeach; ?>
