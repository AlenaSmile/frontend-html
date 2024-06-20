document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const reviewText = this.previousElementSibling;
            reviewText.style.display = 'block';
            this.style.display = 'none';
        });
    });
});
