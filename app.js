const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".slide-in");

        elements.forEach(function (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("slide-in");
            }
        });
    });
});
