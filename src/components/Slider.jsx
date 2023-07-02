import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Slider() {

  const Latest = () => {
    return (
      <>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={"100%"} height={"100%"}  />
                <Box
                  position={"absolute"}
                  sx={{ zIndex: "20", bottom: 0, textAlign: "left" }}
                  p={2}
                
                >
                  <Button
                    sx={{ fontSize: "10px", paddingBottom: "4px" }}
                    variant="contained"
                    color="error"
                    className="rounded-0"
                  >
                    Popular
                  </Button>
                  <Typography
                    sx={{ padding: "5px 0", fontWeight: 400, color: "#fff",fontSize:"1.1rem" }}
                    variant="h6"
                  >
                    Volcano near Iceland’s main airport
                  </Typography>
                  <Typography
                    sx={{ padding: "5px 0", fontWeight: 400, color: "#fff",fontSize:"0.8rem" }}
                    variant="p"
                  >
                   <AccountCircleRoundedIcon sx={{fontSize:"0.8rem"}} /> {"user"} <AccessTimeIcon sx={{fontSize:"0.8rem"}} /> {"August 4, 2022"} 
                  </Typography>
                  
                </Box>
                <Box className="post-cover"></Box>
              </>
    )
  }

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination ,Navigation ]}
        style={{height:"250px",background:"#fff"}}
        navigation={{
          nextEl: `.next`,
          prevEl: `.prev`
        }}
      >
        <SwiperSlide><Latest/></SwiperSlide>  
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
        <SwiperSlide><Latest/></SwiperSlide>
      </Swiper>

  

      
    </>
  );
}
