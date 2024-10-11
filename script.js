document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showVisibleItems() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('show');
            }
        });
    }

    // Initial check to show visible items
    showVisibleItems();

    // Listen for scroll events
    window.addEventListener('scroll', showVisibleItems);
    
    // Listen for resize events
    window.addEventListener('resize', showVisibleItems);
});
