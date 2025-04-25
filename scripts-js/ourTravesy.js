const icons = document.querySelectorAll('.i__edit__us');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 250)
            
            observer.unobserve(entry.target);
        }
    });
});

icons.forEach(icons =>{
    observer.observe(icons);
})