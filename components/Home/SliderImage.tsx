import React from 'react'
import {Swiper ,SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination ,Autoplay} from "swiper";
import { Box, Image, Text } from '@chakra-ui/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination,Autoplay ]);
function SliderImage() {
  return (
    <Swiper
    autoplay={true}
    slidesPerView={1}
    spaceBetween={0}
    pagination={true}
    navigation={{
      prevEl: ".custom_prev_i1",
      nextEl: ".custom_next_i1",
    }}
    style={{width:'100%'  , marginTop:'10px' , marginBottom:'20px'}}

    >
     <SwiperSlide>
        <Box position={'relative'} h={{xl:'370px',sm:'350px' , base:'220px'}}>
          <Image zIndex={-1} position={'absolute'} borderRadius={'5px'} w='100%' h={{xl:'370px',sm:'350px' , base:'220px'}} alt='Slider' src={'https://cdn.shopify.com/s/files/1/0334/4036/6725/files/iStock-1281106526_1_23161ff2-5977-4942-b4e6-464cc00ca690_800x384_crop_center.jpg?v=1638352624'}/>
          <Text textAlign={'center'} zIndex={1} w='100%' color={'#fff'} fontWeight='600' fontSize={{xl:'35px',sm:'35px' , base:'25px'}} position='absolute' top='20%'>CHRISTAMS GIFT IDEAS & TREATS</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box position={'relative'} h={{xl:'370px',sm:'350px' , base:'220px'}}>
          <Image zIndex={-1} position={'absolute'} borderRadius={'5px'} w='100%' h={{xl:'370px',sm:'350px' , base:'220px'}} alt='Slider' src={'https://cdn.shopify.com/s/files/1/0334/4036/6725/files/iStock-1281106526_1_23161ff2-5977-4942-b4e6-464cc00ca690_800x384_crop_center.jpg?v=1638352624'}/>
          <Text textAlign={'center'} zIndex={1} w='100%' color={'#fff'} fontWeight='600' fontSize={{xl:'35px' ,sm:'35px', base:'25px'}} position='absolute' top='20%'>CHRISTAMS GIFT IDEAS & TREATS</Text>
          </Box>
        </SwiperSlide>
    
    </Swiper>
  )
}

export default SliderImage