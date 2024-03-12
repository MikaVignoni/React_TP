import { Carousel } from 'bootstrap';
import Link from 'next/link';
import Footer from './Footer';


const landing = () => {
    return (
    <>
    <carrusel>    
    <div class="carousel-container">
        <div class="carousel">
            <div class="slide"><img src="Inicio_1.png" alt="Imagen 1"></img></div>
            <div class="slide"><img src="Inicio_2.png" alt="Imagen 2"></img></div>
            <div class="slide"><img src="Inicio_3.png" alt="Imagen 3"></img></div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const carousel = document.querySelector('.carousel');
            const slides = document.querySelectorAll('.slide');
            let currentIndex = 0;
            const totalSlides = slides.length;
            const slideWidth = slides[0].clientWidth;

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }

            function updateCarousel() {
                const offset = -currentIndex * slideWidth;
                carousel.style.transform = `translateX(${offset}px)`;
            }

            setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
        });
    </script>
    </carrusel>

    <style jsx>{`
        .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease;
        }

        .slide {
            flex: 0 0 100%;
        }
    `}
    </style>
    </>
    )
}

export default landing;