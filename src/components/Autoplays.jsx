import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import cardimg from "../images/adult-asian-attractive-background-beach-beautiful-1629599-pxhere.com-min.jpg";
import { Button, Box, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

// swipper card

const Swippercard = () => {
  return (
    <>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <Box
        position={"absolute"}
        sx={{ zIndex: "20", bottom: 0, textAlign: "left" }}
        p={4}
      >
        <Button
          sx={{ fontSize: "10px", paddingBottom: "4px" }}
          variant="contained"
          color="error"
          className="ronded-0"
        >
          Popular
        </Button>
        <Typography
          sx={{ padding: "10px 0", fontWeight: 400, color: "#fff" }}
          variant="h5"
        >
          Federal government of the United States
        </Typography>
        <Typography
          sx={{
            padding: "5px 0",
            fontWeight: 400,
            color: "#fff",
            fontSize: "0.8rem",
          }}
          variant="p"
        >
          <AccountCircleRoundedIcon sx={{ fontSize: "0.8rem" }} /> {"user"}{" "}
          <AccessTimeIcon sx={{ fontSize: "0.8rem" }} /> {"August 4, 2022"}
        </Typography>
      </Box>
      <Box className="post-cover"></Box>
    </>
  );
};

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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        navigation={{
          nextEl: `.slideleft`,
          prevEl: `.slideright`,
        }}
      >
        <SwiperSlide style={{ position: "relative" }}>
          <Swippercard />
        </SwiperSlide>
        <SwiperSlide style={{ position: "relative" }}>
          <Swippercard />
        </SwiperSlide>
        <SwiperSlide style={{ position: "relative" }}>
          <Swippercard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
