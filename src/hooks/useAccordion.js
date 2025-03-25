import { useEffect } from 'react';

const useAccordion = () => {
    useEffect(() => {
        const accordions = document.querySelectorAll(".accordion");
        const image = document.getElementById("accordionImage");

        if (accordions.length > 0) {
            const firstAccordion = accordions[0];
            const initialImage = firstAccordion.getAttribute("data-image");
            if (initialImage) {
                image.src = initialImage;
            }
        }

        accordions.forEach((accordion) => {
            accordion.addEventListener("click", function () {
                accordions.forEach((item) => {
                    if (item !== this) {
                        item.classList.remove("active");
                        item.nextElementSibling.classList.remove("active");
                        setTimeout(() => {
                            item.nextElementSibling.style.maxHeight = null;
                        }, 400); 
                    }
                });

                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                panel.classList.toggle("active");

                if (panel.style.maxHeight) {
                    setTimeout(() => {
                        panel.style.maxHeight = null;
                    }, 400); 
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }

                const newImage = this.getAttribute("data-image");
                if (newImage) {
                    image.style.opacity = 0;
                    setTimeout(() => {
                        image.src = newImage;
                        image.style.opacity = 1;
                    }, 400); 
                }
            });
        });

        return () => {
            accordions.forEach((accordion) => {
                accordion.removeEventListener("click", function () {
                });
            });
        };
    }, []);
};

export default useAccordion;