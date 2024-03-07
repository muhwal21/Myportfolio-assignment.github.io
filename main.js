const buttonsBox = document.querySelectorAll('.navbar li');
const pointer = document.querySelector('.pointer');

// Event untuk tombol di navbar
buttonsBox.forEach(buttonBox => {
    buttonBox.addEventListener('mousemove', (e) => {
        const rect = buttonBox.getBoundingClientRect();
        const x = e.clientX - rect.left - buttonBox.offsetWidth / 7;
        const y = e.clientY - rect.top - buttonBox.offsetHeight / 7;

        buttonBox.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        if (buttonBox.children.length > 0) {
            buttonBox.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }
        pointer.classList.add('buttonHover');
    });

    buttonBox.addEventListener('mouseout', () => {
        buttonBox.style.transform = `translate(0px, 0px)`;
        if (buttonBox.children.length > 0) {
            buttonBox.children[0].style.transform = `translate(0px, 0px)`;
        }
        pointer.classList.remove('buttonHover');
    });
});

// Event untuk pointer
window.addEventListener('mousemove', (e) => {
    pointer.style.left = e.pageX + 'px';
    pointer.style.top = e.pageY + 'px';
});





