// Add any JavaScript code you need here
// For example, you can add an event listener for dynamic behavior

document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a click event listener to note elements
    const noteElements = document.querySelectorAll('.note');
    noteElements.forEach(function (note) {
        note.addEventListener('click', function () {
            alert('Note clicked!'); // Replace with your desired behavior
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation for theme cards
    const themeCards = document.querySelectorAll('.theme-card');

    // Function to add 'show' class to elements after a delay
    const showCards = () => {
        themeCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100); // Adjust the delay as needed
        });
    };

    // Trigger the animation when the page is loaded
    showCards();

    // Example: Add a click event listener to note elements
    const noteElements = document.querySelectorAll('.note');
    noteElements.forEach(function (note) {
        note.addEventListener('click', function () {
            alert('Note clicked!'); // Replace with your desired behavior
        });
    });
});