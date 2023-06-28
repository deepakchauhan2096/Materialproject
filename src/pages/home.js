import React from "react";
import AppBar from "../components/Appbar";
import Drawer from "../components/Drawer";
import Autoplays from "../components/Autoplays";
import { Button, ButtonGroup } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const home = () => {
  return (
    <>
      <AppBar />

      <div className="container-fluid bg-danger">
        <div className="row">
          <div className="col-xl-9 xol-sm-12">
            <div className="row">
              <div className="col-xl-8 col-sm-12 g-0">
                <Autoplays />
              </div>
              <div className="col-xl-4 col-sm-12">
                <div
                  className="row"
                  style={{ height: "400px", background: "pink" }}
                >
                  <div
                    className="col-12"
                    style={{ height: "200px", background: "green" }}
                  >
                    his
                  </div>
                  <div
                    className="col-12"
                    style={{ height: "200px", background: "yellow" }}
                  >
                    his
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 g-0 overflow-hidden">
            <div className="row">
              <div className="col-12">
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
              </div>
              <div className="col-12 border">
                <div className="row border" style={{ height: "90px" }}>
                  <div className="col-4">dee</div>
                  <div className="col-8">ku</div>
                </div>
                <div className="row border" style={{ height: "90px" }}>
                  <div className="col-4">dee</div>
                  <div className="col-8">ku</div>
                </div>
                <div className="row border" style={{ height: "90px" }}>
                  <div className="col-4">dee</div>
                  <div className="col-8">ku</div>
                </div>
                <div className="row border" style={{ height: "90px" }}>
                  <div className="col-4">dee</div>
                  <div className="col-8">ku</div>
                </div>
              </div>
              {/* <div className="col-12 border" style={{ height: "100px" }}></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
