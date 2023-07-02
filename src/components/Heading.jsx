import { Typography } from "@mui/material";
import React from "react";

export const Heading = (props) => {

 







  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `

    .heading{
        margin-bottom: 20px;
        padding-bottom: 20px;
        line-height: 1.3;
        text-transform: capitalize;
        color: #2f3235;
        position: relative;
        font-size: 22px;
    }

    .heading:after{
        content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #eee;
    }

    .heading:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 4px;
        background: #d42929;
        z-index: 1;
    }


    .widget {
        word-wrap: break-word;
        margin-bottom: 40px;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.7;
        color: #4c4f53;
    }
      
    `,
        }}
      />
      <Typography variant="div" className="widget">
        <Typography variant="h2" className="heading">
          {props.text ? props.text : "enter text"}
        </Typography>
      </Typography>
    </>
  );
};
