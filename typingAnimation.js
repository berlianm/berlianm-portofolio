document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const texts = ["Data Scientist  ", "UI/UX Designer  ", "Freelancer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        currentText = texts[index];
        if (isDeleting) {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        } else {
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
            }
        }
        textElement.textContent = currentText.substring(0, charIndex);
        setTimeout(type, isDeleting ? 100 : 300);
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text-hello");
    const texts = ["Hello ", "Bonjour ", "안녕하세요", "こんにちは ", "مرحبا ", "你好 "];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        currentText = texts[index];
        if (isDeleting) {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        } else {
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
            }
        }
        textElement.textContent = currentText.substring(0, charIndex);
        setTimeout(type, isDeleting ? 100 : 500);
    }

    type();
});