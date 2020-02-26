const getRealImages = document.querySelectorAll("[data-src]");

const imageLoadOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageLoadOptions);

    getRealImages.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    getRealImages.forEach((img) => {
        loadImages(img);
    });
}