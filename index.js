// Aos for moving the elements around
AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const changingTextElement = document.getElementById('changingText');
    const textArray = [
        "Hi there ! &#x1F44B;",
        "I'm Asem <span class='blue-text'>Yaseen</span>",
        "I'm a Web <span class='blue-text'>Developer</span>",
        "<span class='textSizeDown'>Let's Build something <span class='blue-text'>GREAT</span> together ! </span>",
    ];
        function updateText(index) {
        changingTextElement.innerHTML = textArray[index];
    }

    let currentIndex = 0;
    updateText(currentIndex);

    const typed = new Typed(changingTextElement, {
        strings: textArray,
        typeSpeed: 30, // Typing speed in milliseconds
        backSpeed: 30, // Backspacing speed in milliseconds
        backDelay: 1000, // Delay before starting to backspace
        startDelay: 500, // Delay before starting to type
        loop: true, // Infinite loop
        loopCount: Infinity, // Number of loops (Infinity for infinite looping),
    });
});
