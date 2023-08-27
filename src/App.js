import React from 'react';
import './App.css';
import './Components/Youtube/Youtube.css'
import {Routes, Route} from 'react-router-dom'
  
// import HeaderSection from './Components/Header/HeaderSection'
// import AlertSection from './Components/Alerts/AlertSection';
// import FirstSection from './Components/First/FirstSection';
// import SecondSection from './Components/Second/SecondSection';
// import ThirdSection from './Components/Third/ThirdSection';
// import FourthtSection from './Components/Fourth/FourthSection';
// import FifthSection from './Components/Fifth/FifthSection';
// import SixSection from './Components/Six/SixSection';
import YoutubeVideos from './Components/Youtube/YoutubeVideos';
// import FooterSection from './Components/Footer/FooterSection';


import Main from './Components/Pages/Main/Main';
import Mac from './Components/Pages/Mac/Mac';
import Ipad from './Components/Pages/Ipad/Ipad';
import Iphone from './Components/Pages/Iphone/Iphone';
import Support from './Components/Pages/Support/Support';
import Watch from './Components/Pages/Watch/Watch';
import Tv from './Components/Pages/TV/Tv';
import Music from './Components/Pages/Music/Music'; 
import Iphonedb from './Components/Pages/Iphone/Iphonedb';
 import Four04 from './Components/Pages/Four04/Four04'
import SharedLayout from './Components/Pages/SharedLayout';
import Productpage from './Components/Pages/Productpage/Productpage';
function App() {
  return (
    <>
  {/* <HeaderSection/> 
  
       <FooterSection/>*/}
    
       <Routes>
        <Route path="/" element={<
          SharedLayout />}>
        
        <Route path="/Home"  element={<Main />} />
        <Route path="/Mac" element={<Mac />}/>
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Iphone" element={<Iphone />}/>
        <Route path="/Iphonedb" element={<Iphonedb />}/>
        <Route path="/Iphonedb/:productID" element={<productPage />}/>
        <Route path="/Support" element={<Support />} />
        <Route path="/Watch" element={<Watch />}/>
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Music" element={<Music/>}/>
        <Route path="Iphonedb" element={<Iphonedb />} />
        <Route path='*' element={<Four04/>} />

        </Route>
       </Routes>
     
    </>
  );
}

export default App;
