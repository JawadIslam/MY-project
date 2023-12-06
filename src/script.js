document.addEventListener('DOMContentLoaded', function () {
    const text = " <CODE WITH US MORE FREELY> ";
    let index = 0;
    const textElement = document.getElementById('animated-text');


    const cursorElement = document.getElementById('cursor');
    const animationDelay = 4000; // Time gap between repetitions in milliseconds

    function type() {
        textElement.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(type, 100); // Adjust the typing speed (milliseconds)
        } else {
            // Animation completed, reset index and start again after a delay
            index = 0;
            setTimeout(type, animationDelay);
        }
    }

    function blinkCursor() {
        cursorElement.classList.toggle('opacity-0');
        setTimeout(blinkCursor, 300); // Adjust the cursor blinking speed (milliseconds)
    }

    // Start typing animation and cursor blinking
    type();
    blinkCursor();
});


document.addEventListener('DOMContentLoaded', function () {
    const text = " <CODE WITH US MORE FREELY> ";
    let index = 0;
    const textElement2 = document.getElementById('animated-text-2');


    const cursorElement2 = document.getElementById('cursor-2');
    const animationDelay = 4000; // Time gap between repetitions in milliseconds

    function type() {
        textElement2.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(type, 100); // Adjust the typing speed (milliseconds)
        } else {
            // Animation completed, reset index and start again after a delay
            index = 0;
            setTimeout(type, animationDelay);
        }
    }

    function blinkCursor() {
        cursorElement2.classList.toggle('opacity-0');
        setTimeout(blinkCursor, 300); // Adjust the cursor blinking speed (milliseconds)
    }

    // Start typing animation and cursor blinking
    type();
    blinkCursor();
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel p');
    let currentItemIndex = 0;

    function showNextItem() {
        // Hide the current item
        carouselItems[currentItemIndex].classList.add('translate-x-full');

        // Move to the next item
        currentItemIndex = (currentItemIndex + 1) % carouselItems.length;

        // Show the next item
        carouselItems[currentItemIndex].classList.remove('translate-x-full');
    }

    // Show the next item every 3 seconds
    setInterval(showNextItem, 3000);
});