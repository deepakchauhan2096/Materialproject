import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import cardimg from "../images/adult-asian-attractive-background-beach-beautiful-1629599-pxhere.com-min.jpg";
import { Button, Box, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

export default function Autoplays() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        modules={[Autoplay, Pagination, Navigation , EffectFade]}
        className="mySwiper"
        
        navigation={{
          nextEl: `.slideleft`,
          prevEl: `.slideright`
        }}

      >
        <SwiperSlide style={{position:"relative"}}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <Box position={"absolute"} sx={{zIndex:"20",bottom:0, textAlign:"left"}} p={4}>
            <Button sx={{fontSize:"10px",paddingBottom:"4px"}} variant="contained" color="error">Popular</Button>
            <Typography sx={{padding:"10px 0",fontWeight:400,color:"#fff"}} variant="h5" >Federal government of the United States</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{position:"relative"}}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <Box position={"absolute"} sx={{zIndex:"20",bottom:0, textAlign:"left"}} p={4}>
            <Button sx={{fontSize:"10px",paddingBottom:"4px"}} variant="contained" color="error">Popular</Button>
            <Typography sx={{padding:"10px 0",fontWeight:400,color:"#fff"}} variant="h5" >Federal government of the United States</Typography>
          </Box>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
        
      </Swiper>
      
    </>
  );
}
