import React from 'react'
import FooterSection from '../Footer/FooterSection'
import HeaderSection from '../Header/HeaderSection'
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
    <HeaderSection/>
    <Outlet/>
    <FooterSection/>
   
    </>
  );
}

export default SharedLayout