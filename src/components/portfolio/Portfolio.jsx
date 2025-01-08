import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box} from "@mui/material";
import {Grid2} from '@mui/material' ;
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <h1>This my Protfolio Page</h1>
        // <Box id={'portfolio'} ref={innerRef}>
        //     <Grid2 container display={'flex'} justifyContent={'center'}>
        //         {info.portfolio.map((project, index) => (
        //            <Grid2 item xs={12} md={6} key={index}>
        //                <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
        //            </Grid2>
        //         ))}
        //     </Grid2>
        // </Box>
    );
};