import React from 'react';
import './SkillsPage.css';
import '../App.css';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from "../components/footer/footer.jsx";
import SkillPageSection from './skillsPageSection.jsx';
import CpSection from './cpSection';
import { useState } from 'react';


const SkillsPage = () => {

    const[show,isShow] = useState(false);

    const handleCP =()=>{
        isShow(!show);
    }
    return (
        <>
            <Navbar />


            <button className='cpButton' onClick={handleCP}>{isShow?"Check language Stats": "Check Competitve coding Stats"}</button>
            {show? <CpSection />:<SkillPageSection />}

            

            <br />
            <br /><br /><br />

            <Footer />
        </>
    );
};

export default SkillsPage;
