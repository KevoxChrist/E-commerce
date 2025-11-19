import React, { useRef, useState } from 'react';
// import HomeProductCard from '../components/HomeProductCard';
import Header from '../components/Header';
import '../styles/Home.css';


function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  const scrollNext = (e) => {
    e.preventDefault();
    const nextSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    document.getElementById(`slide${nextSlide}`).scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  const scrollPrev = (e) => {
    e.preventDefault();
    const prevSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    setCurrentSlide(prevSlide);
    document.getElementById(`slide${prevSlide}`).scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };
  
  return(
    <>
      <Header />
      {/* <!-- Hero Section --> */}
      <main className="hp-hero">

 <section className="img-section">
      {/* <!-- Hero img 8  --> */}
        <div className="img-container">
          <img src="/Images/Hero_img8.svg" alt="Street light photo" />

          <div className="hp-product-slider">
            <div className="hp-product-slider-track">
              {/* <!-- Product Card 1 --> */}
              <div className="slider-card-wrapper" id="slide1">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">MINOLTA LENS</h3>
                    <p className="hp-product-spec">58mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_rokk.svg" alt="Apex Lens" />
                  </div>
                </a>
              </div>

              {/* <!-- Product Card 2 --> */}
              <div className="slider-card-wrapper" id="slide2">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">TTARTISAN LENS</h3>
                    <p className="hp-product-spec">35mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_artisan.svg" alt="Blazar Lens" />
                  </div>
                </a>
              </div>

              {/* <!-- Product Card 3 --> */}
              <div className="slider-card-wrapper" id="slide3">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">HELIOS 44-2</h3>
                    <p className="hp-product-spec">58mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_helios.png" alt="Helios Lens" />
                  </div>
                </a>
              </div>

              {/* <!-- Product Card 4 --> */}
              <div className="slider-card-wrapper" id="slide4">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">MINOLTA LENS</h3>
                    <p className="hp-product-spec">58mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_rokk.svg" alt="Apex Lens" />
                  </div>
                </a>
              </div>

              {/* <!-- Product Card 5 --> */}
              <div className="slider-card-wrapper" id="slide5">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">TTARTISAN LENS</h3>
                    <p className="hp-product-spec">35mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_artisan.svg" alt="Blazar Lens" />
                  </div>
                </a>
              </div>

              {/* <!-- Product Card 6 --> */}
              <div className="slider-card-wrapper" id="slide6">
                <a href="Products Page/product.html" className="hp-product-card">
                  <div className="hp-product-info">
                    <h3 className="hp-product-title">HELIOS 44-2</h3>
                    <p className="hp-product-spec">58mm</p>
                    <span className="hp-product-cta">SHOP NOW</span>
                  </div>
                  <div className="hp-product-thumbnail">
                    <img src="/Images/Shop_helios.png" alt="Helios Lens" />
                  </div>
                </a>
              </div>
            </div>

            {/* <!-- Navigation Buttons --> */}
            <button onClick={scrollPrev} className="slider-btn slider-btn-left" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button onClick={scrollNext} className="slider-btn slider-btn-right" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>


        </div>
    
      {/* <!-- Hero img 1 --> */}

        <picture className="img-container">
          <source srcSet="/Images/Hero_Img_c1.svg" media="(max-width: 625px)" />
          <source srcSet="/Images/Hero_Img_t.svg" media="(max-width: 1300px)" />
          <img src="/Images/Hero_Img.svg" alt="Film maker holding a camera" />

          {/* <!-- Product Card --> */}
          <a href="Products Page/product.html" className="hp-product-card" id="product-1">
            <div className="hp-product-info">
              <h3 className="hp-product-title">BLAZAR LENS</h3>
              <p className="hp-product-spec">35mm</p>
              <span className="hp-product-cta">SHOP NOW</span>
            </div>
            <div className="hp-product-thumbnail">
              <img src="/Images/Shop_apex.png" alt="Blazar Lens" />
            </div>
          </a>
        </picture>

        {/* <!-- Hero img 2 --> */}
        <picture className="img-container">
          <source
            srcSet="/Images/Hero_img2_m.svg"
            media="(max-width: 1300px)"
          />
          <img  src="/Images/Hero_img2.svg" alt="Film maker holding a camera" />


          {/* <!-- Product Card --> */}
          <a href="Products Page/product.html" className="center hp-product-card">
            <div className="hp-product-info">
              <h3 className="hp-product-title">LOMO R-F LENS</h3>
              <p className="hp-product-spec">50mm</p>
              <span className="hp-product-cta">SHOP NOW</span>
            </div>
            <div className="hp-product-thumbnail">
              <img id = "hero-2-img" src="/Images/Shop_lomo.png" alt="Blazar Lens" />
            </div>
          </a>
        </picture>





        <div className="img-container">
          <img src="/Images/Frame it (4).svg" alt="Girl holding books" />
        </div>

        {/* <!-- Hero img 3 --> */}
        <picture className="img-container">
          {/* <!-- <source srcSet="Hero_img3_t.svg" media="(max-width: 1050px)"> --> */}

          <img src="/Images/Hero_img3.svg" alt="Vision, Capture, Relive" />
        </picture>

        {/* <!-- Hero img 4 --> */}
        <picture className="img-container">
          <source srcSet="/Images/Hero_img4_m.svg" media="(max-width: 450px)" />

          <img src="/Images/Hero_img4.svg" alt="Story Telling" />


          {/* <!-- Product Card --> */}
          <a href="Products Page/product.html" className="right hp-product-card">
            <div className="hp-product-info">
              <h3 className="hp-product-title">PETZVAL LENS</h3>
              <p className="hp-product-spec">35mm</p>
              <span className="hp-product-cta">SHOP NOW</span>
            </div>
            <div className="hp-product-thumbnail">
              <img id="hero-4-img" src="/Images/Shop_Joesph1.svg" alt="Blazar Lens" />
            </div>
          </a>
        </picture>

        {/* <!-- Hero img 5 --> */}
        <div className="img-container">
          <img
            src="/Images/Hero_img5.svg"
            alt="Black and white long exposure portrait"
          />
        </div>

        {/* <!-- Hero img 6 --> */}
        <div className="img-container">
          <img
            src="/Images/Hero_img6.svg"
            alt="Black and white street and landscape photo"
          />
        </div>

        {/* <!-- Hero img 7 --> */}
        <div className="img-container">
          <img src="/Images/Hero_img7.svg" alt="Three portrait photos" />


          {/* <!-- Product Card --> */}
          <a href="Products Page/product.html" className="center hp-product-card">
            <div className="hp-product-info">
              <h3 className="hp-product-title">SAMYANG LENS</h3>
              <p className="hp-product-spec">50mm</p>
              <span className="hp-product-cta">SHOP NOW</span>
            </div>
            <div className="hp-product-thumbnail">
              <img src="/Images/Shop_samyang.png" alt="SAMYANG Lens" />
            </div>
          </a>

        </div>
      </section>

    </main>
    </>
  )
}

export default Home;