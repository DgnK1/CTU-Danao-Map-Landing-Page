import { useEffect } from 'react';

const useMainSection = () => {
    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item');
        const imageBackground = document.getElementById('imageBackground');
        const overlay = document.createElement('div'); 
        overlay.classList.add('image-overlay');
        imageBackground.parentElement.appendChild(overlay); 

        let activeItem = null; 

        gridItems.forEach((item) => {
            item.addEventListener('click', () => {
                const newImage = item.getAttribute('data-image');

                if (activeItem === item) {
                    imageBackground.classList.remove('active'); 
                    overlay.classList.remove('hidden'); 
                    activeItem = null; 
                } else {
                    imageBackground.style.backgroundImage = `url('${newImage}')`; 
                    imageBackground.classList.add('active'); 
                    overlay.classList.add('hidden'); 
                    activeItem = item; 
                }
            });
        });

        return () => {
            gridItems.forEach((item) => {
                item.removeEventListener('click', () => {});
                item.removeEventListener('mouseenter', () => {});
                item.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);
};

export default useMainSection;