import React from 'react'
import logo from '/src/Images/Logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      <marquee class="marq" bgcolor="Green" direction="left"  behavior= 'scroll'loop="" scrollamount ="20">Score 300 in JAMB and 6 A's in WAEC, sign up to Matric</marquee>

      <div className='home-1'>
       <div class=" ">
        <div class="row align-items-start hero">
          <div class="col-12 col-lg-5">
           <img src="https://teesas.com/assets/landing/images/banner-img.png" alt="" className='hero-img'/>
          </div>
          <div class="col-12 col-lg-7 no-2">
            <h2>Premium Learning Experience that Unlocks Potential</h2>
            <h4>Improve your academic performance and develop the skills you need to be life-ready without using data or the internet!</h4>
            <div className='form-head'>
              <form action="" className='form'>
                <h3>Learn From The Best Tutors Across Africa</h3>
                <input type="text" placeholder='ENTER NAME'/>
                <input type="email" placeholder='EMAIL'/>
                <input type="number" placeholder='MOBILE NUMBER'/>
                <button>Start your free trial NOW!</button>
              </form>
            </div>
          </div>
          
        </div>

      </div>
      </div>

      <div className='home-2'>
          <div className=' info d-flex align-items-center'>
            <div class="container text-center">
              <h3>Join Our Vast Community of Learners!</h3>
                <div class="row align-items-center">
                <div class="col">
                  <h2>1M+</h2>
                  <h4>Learners</h4>
                </div>
                <div class="col">
                  <h2>4.5+</h2>
                  <h4>Ratings</h4>
                </div>
                <div class="col">
                  <h2>30+</h2>
                  <h4>Cities Worldwide</h4>
                </div>
              </div>
            </div>
            </div>
      </div>


     <div className='home-3'>
        <div class="container text-left">
            <div class="row align-items-start">
              <div class="col-12 col-lg-6">
                <h2>Experience a <strong>personalised learning journey powered by AI.</strong><span>|</span></h2>
                <h6>Step into the future of education with</h6>
                <img src={logo} alt="" className='logo mt-5'/> <br />
                <button>Start your free trial NOW!</button> 
              </div>
              <div class="col-12 col-lg-6">
                One of three columns
              </div>
              
            </div>
          </div>
     </div>


     <div className='home-4 mt-5 text-center'>
      <h2>Our Products</h2>
      <marquee behavior="" direction="">
        <img src="https://teesas.com/assets/landing/images/p_img5.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img6.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img1.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img2.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img4.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img5.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img5.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img6.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img1.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img2.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img4.png" alt=""/>
        <img src="https://teesas.com/assets/landing/images/p_img5.png" alt=""/>
      </marquee>
     </div>


     <div className='home-5 mt-5 py-5'>
       <div class="container ">
        <h2 className='text-center'>Gift your child with a love for learning</h2>
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
           <img src="https://teesas.com/assets/landing/images/pic1.png" alt=""/>
          </div>
          <div class="col-12 col-lg-6 omo">
            <p>Buy an <img src="https://teesas.com/assets/landing/images/icon1.png" alt=""/> Tablet with a Teesas Education App subscription plan, to access unlimited video lessons, without the internet or data!</p>
            <button>Buy NOW!</button> 
          </div>
        </div>
      </div>
      <h3 className='text-center mt-3'>Access Teesas Education App on all devices</h3>
      <div className='devices'>
       <img src="https://teesas.com/assets/landing/images/all-screen.png" alt="" className='container'/>
      </div>
     </div>


      <div className='home-6'>
        <h2 className='text-center'>Our learning library is extensive!</h2>
        <h4 className='text-center mb-5'>Get started with the best programme for you.</h4>

        <Swiper
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img1.png" alt=""/></div><br />
          <div><img src="https://teesas.com/assets/landing/images/l-img2.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img3.png" alt=""/> </div> <br />
          <div><img src="https://teesas.com/assets/landing/images/l-img4.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img5.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img1.png" alt=""/></div><br />
          <div><img src="https://teesas.com/assets/landing/images/l-img2.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img3.png" alt=""/> </div> <br />
          <div><img src="https://teesas.com/assets/landing/images/l-img4.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img5.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img1.png" alt=""/></div><br />
          <div><img src="https://teesas.com/assets/landing/images/l-img2.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img3.png" alt=""/> </div> <br />
          <div><img src="https://teesas.com/assets/landing/images/l-img4.png" alt=""/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div><img src="https://teesas.com/assets/landing/images/l-img5.png" alt=""/></div>
        </SwiperSlide>
      </Swiper>

        
      </div>



        <div className='home-7'>
          
        </div>
    </div>
  )
}

export default Home
