document.addEventListener("DOMContentLoaded", () => {
    // Select offer boxes and dropdowns
    const offerBoxes = document.querySelectorAll('.offer-box');
    const dropdowns = document.querySelectorAll('.offer-box select');

    // Function to handle box expansion and content display
    const toggleBox = (box, isExpanded) => {
        const offerLabel = box.querySelector('.offer-label');
        const discount = box.querySelector('.discount');
        const strikePrice = box.querySelector('.strike-price');
        const radioButton = box.querySelector('input[type="radio"]');

        // Toggle the 'expanded' class
        box.classList.toggle('expanded', isExpanded);
        if (offerLabel) offerLabel.style.display = isExpanded ? 'none' : '';
        if (discount) discount.style.display = isExpanded ? 'block' : 'none';
        if (strikePrice) strikePrice.style.display = isExpanded ? 'block' : 'none';
        if (radioButton) radioButton.checked = isExpanded;
    };

    // Handle clicks on offer boxes
    offerBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Collapse all other boxes
            offerBoxes.forEach(b => {
                if (b !== box) toggleBox(b, false);
            });
            // Toggle the clicked box
            toggleBox(box, !box.classList.contains('expanded'));
        });
    });

    // Expand the first 'Popular' box by default
    const popularFirstBox = document.querySelector('.offer-box.Popular');
    if (popularFirstBox) toggleBox(popularFirstBox, true);

    // Handle clicks on dropdowns to collapse the parent box
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const parentBox = dropdown.closest('.offer-box');
            if (parentBox) toggleBox(parentBox, false);
        });
    });
});
