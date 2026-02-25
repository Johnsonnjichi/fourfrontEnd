document.addEventListener('DOMContentLoaded', function() {
    // Select membership headers
    const foundationHeader = document.querySelector('.foundation-header');
    const economyHeader = document.querySelector('.economy-header');

    // Function to toggle description
    function toggleDescription(header) {
        const card = header.closest('.membership-card');
        const content = card.querySelector('.description-content');
        const icon = header.querySelector('.toggle-icon');

        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            content.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }

    // Add click events
    if (foundationHeader) {
        foundationHeader.addEventListener('click', function() {
            toggleDescription(foundationHeader);
        });
    }

    if (economyHeader) {
        economyHeader.addEventListener('click', function() {
            toggleDescription(economyHeader);
        });
    }

    // Simple validation example (if needed for requirements)
    console.log("Dashboard initialized successfully.");
});
