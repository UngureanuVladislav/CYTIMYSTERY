import React from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import Button from '@mui/material/Button';


const Home = () => {
    return (
        <section className='home'>
            <div className='video-container'>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
                <div className='video-overlay'></div>
                <div className='text-over-video'>
                    <h1 className="frijole-regular">Wellcome to CityMystery</h1>
                    <p className="gloria-hallelujah-regular">Welcome to CityMystery, where urban exploration meets thrilling adventure! Our platform is your gateway to uncovering the hidden mysteries and untold stories of your city. Whether you're a local looking for a new perspective or a visitor eager to delve into the heart of the urban landscape, CityMystery offers an immersive experience like no other.</p>
                    <Button variant="contained" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>Let's start</Button>
                </div>
            </div>
        </section>
    );
}

export default Home;