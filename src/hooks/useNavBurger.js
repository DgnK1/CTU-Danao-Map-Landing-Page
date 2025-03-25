import { useEffect } from 'react';

const useNavBurger = () => {
    useEffect(() => {
        const navToggle = document.getElementById('navToggle');
        const navigation = document.querySelector('.navigation');

        navToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });

        return () => {
            navToggle.removeEventListener('click', () => {
                navigation.classList.toggle('active');
            });
        };
    }, []);
};

export default useNavBurger;