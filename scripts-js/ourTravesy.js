const icons = document.querySelectorAll('.i__edit__us');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

icons.forEach(icons =>{
    observer.observe(icons);
})