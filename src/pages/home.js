import React from "react";
import AppBar from "../components/Appbar";
import Drawer from "../components/Drawer";
import Autoplays from "../components/Autoplays";
import { Button, ButtonGroup, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "../components/Slider";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandMore, NavigateBefore } from "@mui/icons-material";
import cardimg from "../images/adult-asian-attractive-background-beach-beautiful-1629599-pxhere.com-min.jpg";
import { Heading } from "../components/Heading";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const home = () => {
  const Cards = () => {
    return (
      <Card
        sx={{ width: "100%", borderRadius: "none", boxShadow: "none" }}
        className="rounded-0"
      >
        {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        /> */}
        <CardMedia
          component="img"
          height="250"
          image={cardimg}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container px={4} py={4}>
          <Grid
            item
            xl={6}
            md={12}
            spacing={0}
            className="modern-slider"
            sx={{ cursor: "pointer" }}
          >
            <Grid container xl={6} md={12} position={"relative"}>
              <Autoplays />
              <button
                className="btn slideright rounded-0 slick-arrow position-absolute border-0 py-2 px-2"
                style={{
                  left: 0,
                  transform: "translate(0,-50%)",
                  zIndex: "20",
                }}
                // variant="outlined"
              >
                <NavigateBeforeIcon />
              </button>
              <button
                className="btn slideleft rounded-0 slick-arrow position-absolute border-0 py-2 px-2"
                style={{
                  right: 0,
                  transform: "translate(0,-50%)",
                  zIndex: "20",
                }}
                // variant="outlined"
              >
                <NavigateNextIcon />
              </button>
            </Grid>
          </Grid>
          <Grid item container xl={6} md={12} xs={12} spacing={0}>
            <Grid item xl={6} md={12} xs={12} height={"400px"} paddingRight={1}>
              <Grid xl={6} md={12} height={"200px"} bgcolor={"yellow"} sx={{objectFit:"contain",position:"relative"}}>
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
                  >
                    Popular
                  </Button>
                  <Typography
                    sx={{ padding: "5px 0", fontWeight: 400, color: "#fff",fontSize:"1.1rem" }}
                    variant="h6"
                  >
                    Volcano near Iceland’s main airport
                  </Typography>
                </Box>
              </Grid>
              <Grid xl={6} md={12} height={"200px"} bgcolor={"red"}  sx={{objectFit:"fill",position:"relative"}}>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={"100%"} height={"100%"} />
                <Box
                  position={"absolute"}
                  sx={{ zIndex: "20", bottom: 0, textAlign: "left" }}
                  p={2}
                >
                  <Button
                    sx={{ fontSize: "10px", paddingBottom: "4px" }}
                    variant="contained"
                    color="error"
                  >
                    Popular
                  </Button>
                  <Typography
                    sx={{ padding: "5px 0", fontWeight: 400, color: "#fff",fontSize:"1.1rem" }}
                    variant="h6"
                  >
                    Volcano near Iceland’s main airport
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item xl={6} md={12} xs={12} height={"400px"} paddingLeft={3}>
              <ButtonGroup
                sx={{ width: "100%" }}
                size="large"
                className="rounded-0"
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    textTransform: "capitalize",
                    background: "#d42929",
                  }}
                  className="rounded-0"
                >
                  <AccessTimeIcon fontSize="small" /> Recent
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    textTransform: "capitalize",
                    background: "#d42929",
                  }}
                  className="rounded-0"
                >
                  <LocalFireDepartmentIcon fontSize="small" /> Popular
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    textTransform: "capitalize",
                    background: "#d42929",
                  }}
                  className="rounded-0"
                >
                  <TrendingUpIcon fontSize="small" /> tranding
                </Button>
              </ButtonGroup>
              <Grid
                xl={6}
                md={12}
                xs={12}
                height={"89.5px"}
                bgcolor={"black"}
              ></Grid>
              <Grid
                xl={6}
                md={12}
                xs={12}
                height={"89.5px"}
                bgcolor={"blue"}
              ></Grid>
              <Grid
                xl={6}
                md={12}
                xs={12}
                height={"89.5px"}
                bgcolor={"aqua"}
              ></Grid>
              <Grid
                xl={6}
                md={12}
                xs={12}
                height={"89.5px"}
                bgcolor={"pink"}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container px={4}>
          <Grid item xl={12} md={12} spacing={0} position={"relative"}>
            <Heading text={"latest News"} />
            <ButtonGroup sx={{ position: "absolute", right: "0", top: "0" }}>
              <Button
                className="prev rounded-0 border px-1 py-1"
                variant="outlined"
              >
                <NavigateBeforeIcon />
              </Button>
              <Button
                className="next rounded-0 border px-1 py-1"
                variant="outlined"
              >
                <NavigateNextIcon />
              </Button>
            </ButtonGroup>
            <Slider />
          </Grid>
        </Grid>
      </Box>

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container px={4}>
          <Grid item container xl={9} md={12} spacing={1}>
            <Grid container xl={4} md={12}>
              <Cards/>
            </Grid>
            <Grid container xl={4} md={12}>
              <Cards/>
            </Grid>
            <Grid container xl={4} md={12}>
              <Cards/>
            </Grid>
            <Grid container xl={4} md={12}>
              <Cards/>
            </Grid>
            <Grid container xl={4} md={12}>
              <Cards/>
            </Grid>
          </Grid>
          <Grid item container xl={3} md={12} xs={12} spacing={0}></Grid>
        </Grid>
      </Box> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid item xl={9} md={12} spacing={0}>
          <Grid container xl={6} md={12}>
            {/* <Autoplays /> */}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container px={4} py={4}>
          <Grid
            item
            container
            xl={9}
            sx={{ bgcolor: "" }}
            spacing={4}
            paddingRight={1}
          >
            <Grid item xl={4}>
              {/* <Item> */}
              <Cards />
              {/* </Item> */}
            </Grid>
            <Grid item xl={4}>
              {/* <Item> */}
              <Cards />
              {/* </Item> */}
            </Grid>
            <Grid item xl={4}>
              {/* <Item> */}
              <Cards />
              {/* </Item> */}
            </Grid>
            <Grid item xl={4}>
              {/* <Item> */}
              <Cards />
              {/* </Item> */}
            </Grid>
          </Grid>
          <Grid item xl={3} sx={{ bgcolor: "" }} paddingLeft={3}>
            <Grid item xl={12}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default home;
