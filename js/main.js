document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Diameter slider
    const diameterSlider = document.getElementById('diameter-slider');
    const diameterValue = document.getElementById('diameter-value');

    diameterSlider.addEventListener('input', (e) => {
        diameterValue.textContent = parseFloat(e.target.value).toFixed(1);
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Here you would typically implement the filtering logic
            const filterType = button.dataset.filter;
            console.log('Filter selected:', filterType);
        });
    });
});