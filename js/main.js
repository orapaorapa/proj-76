document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });

    // Diameter sliders
    const minDiameterSlider = document.getElementById('min-diameter-slider');
    const maxDiameterSlider = document.getElementById('max-diameter-slider');
    const minDiameterValue = document.getElementById('min-diameter-value');
    const maxDiameterValue = document.getElementById('max-diameter-value');

    minDiameterSlider?.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        if (minDiameterValue) {
            minDiameterValue.textContent = value.toFixed(1);
        }
        
        // Ensure min value doesn't exceed max value
        if (maxDiameterSlider && value > parseFloat(maxDiameterSlider.value)) {
            maxDiameterSlider.value = value.toString();
            if (maxDiameterValue) {
                maxDiameterValue.textContent = value.toFixed(1);
            }
        }
    });

    maxDiameterSlider?.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        if (maxDiameterValue) {
            maxDiameterValue.textContent = value.toFixed(1);
        }
        
        // Ensure max value doesn't go below min value
        if (minDiameterSlider && value < parseFloat(minDiameterSlider.value)) {
            minDiameterSlider.value = value.toString();
            if (minDiameterValue) {
                minDiameterValue.textContent = value.toFixed(1);
            }
        }
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