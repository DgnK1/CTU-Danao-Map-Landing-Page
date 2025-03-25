import { useEffect } from 'react';

const useGallery = () => {
    useEffect(() => {
        const backBtn = document.getElementById("backBtn");
        const nextBtn = document.getElementById("nextBtn");
        const gallery = document.querySelector(".gallery");

        const scrollAmount = gallery.offsetWidth * 0.6;

        function updateButtonState() {
            backBtn.style.visibility = gallery.scrollLeft > 0 ? "visible" : "hidden";
            nextBtn.style.visibility = 
                gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth 
                ? "visible" 
                : "hidden";
        }

        backBtn.addEventListener("click", () => {
            gallery.scrollBy({
                left: -scrollAmount, 
                behavior: "smooth",  
            });
        });

        nextBtn.addEventListener("click", () => {
            gallery.scrollBy({
                left: scrollAmount,  
                behavior: "smooth", 
            });
        });

        gallery.addEventListener("scroll", updateButtonState);
        window.addEventListener("resize", updateButtonState);

        updateButtonState();

        return () => {
            backBtn.removeEventListener("click", () => {
                gallery.scrollBy({
                    left: -scrollAmount, 
                    behavior: "smooth",  
                });
            });

            nextBtn.removeEventListener("click", () => {
                gallery.scrollBy({
                    left: scrollAmount,  
                    behavior: "smooth", 
                });
            });

            gallery.removeEventListener("scroll", updateButtonState);
            window.removeEventListener("resize", updateButtonState);
        };
    }, []);
};

export default useGallery;