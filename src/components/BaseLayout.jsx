import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";
import {Box} from "@mui/material";
import {Grid2} from '@mui/material' ;
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
import SocialIcon from "./home/SocialIcon";
import {info} from "../info/Info";

export default function BaseLayout() {
   const location = useLocation()

   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);



   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid2 container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid2 item="">
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid2>
            <Grid2 item="" flexGrow={1}>
               {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refPortfolio}}/> : <MultiPageRoutes />}
            </Grid2>
            <Grid2 item="">
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  {info.socials.map((social, index) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
               </Box>
            </Grid2>
         </Grid2>
      </Box>
   )
}
