import React, { useRef, useState } from 'react';
import HomeProductCard from '../components/HomeProductCard';
import '../styles/Home.css';

// Import all images
import heroImg8 from '../assets/home_images/Hero_img8.svg';
import heroImgC1 from '../assets/home_images/Hero_Img_c1.svg';
import heroImgT from '../assets/home_images/Hero_Img_t.svg';
import heroImg from '../assets/home_images/Hero_Img.svg';
import heroImg2M from '../assets/home_images/Hero_img2_m.svg';
import heroImg2 from '../assets/home_images/Hero_img2.svg';
import frameIt from '../assets/home_images/Frame it (4).svg';
import heroImg3 from '../assets/home_images/Hero_img3.svg';
import heroImg4M from '../assets/home_images/Hero_img4_m.svg';
import heroImg4 from '../assets/home_images/Hero_img4.svg';
import heroImg5 from '../assets/home_images/Hero_img5.svg';
import heroImg6 from '../assets/home_images/Hero_img6.svg';
import heroImg7 from '../assets/home_images/Hero_img7.svg';
import shopRokk from '../assets/home_images/Shop_rokk.svg';
import shopArtisan from '../assets/home_images/Shop_artisan.svg';
import shopHelios from '../assets/home_images/Shop_helios.png';
import shopApex from '../assets/home_images/Shop_apex.png';
import shopLomo from '../assets/home_images/Shop_lomo.png';
import shopJoesph from '../assets/home_images/Shop_Joesph1.svg';
import shopSamyang from '../assets/home_images/Shop_samyang.png';

function Home() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  const sliderProducts = [
    { id: 1, title: 'MINOLTA LENS', spec: '58mm', image: shopRokk, alt: 'Apex Lens' },
    { id: 2, title: 'TTARTISAN LENS', spec: '35mm', image: shopArtisan, alt: 'Blazar Lens' },
    { id: 3, title: 'HELIOS 44-2', spec: '58mm', image: shopHelios, alt: 'Helios Lens' },
    { id: 4, title: 'MINOLTA LENS', spec: '58mm', image: shopRokk, alt: 'Apex Lens' },
    { id: 5, title: 'TTARTISAN LENS', spec: '35mm', image: shopArtisan, alt: 'Blazar Lens' },
    { id: 6, title: 'HELIOS 44-2', spec: '58mm', image: shopHelios, alt: 'Helios Lens' },
  ];

  const scrollNext = (e) => {
    e.preventDefault();
    const nextSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    document.getElementById(`slide${nextSlide}`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  const scrollPrev = (e) => {
    e.preventDefault();
    const prevSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    setCurrentSlide(prevSlide);
    document.getElementById(`slide${prevSlide}`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  return (
    <main className="hero">
      <section className="img-section">
        {/* Hero img 8 - Slider */}
        <div className="img-container">
          <img src={heroImg8} alt="Street light photo" />

          <div className="product-slider">
            <div className="product-slider-track" ref={sliderRef}>
              {sliderProducts.map((product) => (
                <div key={product.id} className="slider-card-wrapper" id={`slide${product.id}`}>
                  <HomeProductCard
                    title={product.title}
                    spec={product.spec}
                    image={product.image}
                    altText={product.alt}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <a 
              href="#slide1" 
              className="slider-btn slider-btn-left" 
              aria-label="Previous" 
              onClick={scrollPrev}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </a>
            <a 
              href="#slide6" 
              className="slider-btn slider-btn-right" 
              aria-label="Next" 
              onClick={scrollNext}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero img 1 */}
        <picture className="img-container">
          <source srcSet={heroImgC1} media="(max-width: 625px)" />
          <source srcSet={heroImgT} media="(max-width: 1300px)" />
          <img src={heroImg} alt="Film maker holding a camera" />

          <HomeProductCard
            title="BLAZAR LENS"
            spec="35mm"
            image={shopApex}
            altText="Blazar Lens"
            productId="product-1"
          />
        </picture>

        {/* Hero img 2 */}
        <picture className="img-container">
          <source srcSet={heroImg2M} media="(max-width: 1300px)" />
          <img src={heroImg2} alt="Film maker holding a camera" />

          <HomeProductCard
            title="LOMO R-F LENS"
            spec="50mm"
            image={shopLomo}
            altText="Blazar Lens"
            position="center"
            productId="hero-2"
          />
        </picture>

        {/* Hero img 3 - No card */}
        <div className="img-container">
          <img src={frameIt} alt="Girl holding books" />
        </div>

        {/* Hero img 4 - No card */}
        <picture className="img-container">
          <img src={heroImg3} alt="Vision, Capture, Relive" />
        </picture>

        {/* Hero img 5 */}
        <picture className="img-container">
          <source srcSet={heroImg4M} media="(max-width: 450px)" />
          <img src={heroImg4} alt="Story Telling" />

          <HomeProductCard
            title="PETZVAL LENS"
            spec="35mm"
            image={shopJoesph}
            altText="Blazar Lens"
            position="right"
            productId="hero-4"
          />
        </picture>

        {/* Hero img 6 - No card */}
        <div className="img-container">
          <img src={heroImg5} alt="Black and white long exposure portrait" />
        </div>

        {/* Hero img 7 - No card */}
        <div className="img-container">
          <img src={heroImg6} alt="Black and white street and landscape photo" />
        </div>

        {/* Hero img 8 */}
        <div className="img-container">
          <img src={heroImg7} alt="Three portrait photos" />

          <HomeProductCard
            title="SAMYANG LENS"
            spec="50mm"
            image={shopSamyang}
            altText="SAMYANG Lens"
            position="center"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;