document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const smallImages = document.querySelectorAll('.small-image');

    smallImages.forEach(img => {
        img.addEventListener('click', function () {
            mainImage.src = this.src;
        });
    });
});