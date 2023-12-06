// Get the header
var header = document.querySelector('.header');

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the transparent class to the header when at the top
function setTransparentHeader() {
    if (window.scrollY === 0) {
        header.classList.remove('solid');
    } else {
        header.classList.add('solid');
    }
}

// Listen for the scroll event and call the setTransparentHeader function
window.onscroll = function() {
    setTransparentHeader();
};