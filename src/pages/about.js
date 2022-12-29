import React from 'react';
import Layout from "../components/Layout/layout";
import BtaskeeInfo from "../components/BtaskeeInfo/btaskeeInfo";

const About = () => {
    return (
        <Layout>
            <div className="experience-title" style={{
                color: '#fff',
                fontSize: `2rem`
            }}>
                WORK EXPERIENCE
            </div>
            <div className="work-experience">
                <BtaskeeInfo/>
            </div>
        </Layout>
    );
};

export default About;
