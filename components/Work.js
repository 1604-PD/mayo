import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

import Web1 from '../assets/images/work/web.png'
import Web2 from '../assets/images/work/web2.png'

export default function Work() {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
          <div className='px-3'>
         
          <Carousel
          additionalTransfrom={0}
  arrows
 
  autoPlaySpeed={0}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}

          swipeable={true}
         
         
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          
          
        
        
      
         
          removeArrowOnDeviceType={["tablet", "mobile"]}
          
          
            >
            

                <div className='mx-0.5'>
                  <Image src={Web1} width={3000} height={1500} objectFit='contain'/>
                </div>
                <div className='mx-0.5'>
                  <Image src={Web2} width={3000} height={1500} objectFit='contain'/>
                </div>
                
                  
             
             
            </Carousel>
          </div>
          
  );
};

