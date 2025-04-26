import React from 'react';
import { words } from '../constants/index.js';
import Button from "../components/Button";
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1', 
            {
            y: 50,
            opacity: 0
            },
            {
            y:0,
            opacity: 1,
            stagger: 0.2, // Create a smooth trasition between each line
            duration: 1,
            ease: 'power2.inOut'

            }

        )
    })
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="./images/bg.png" alt="" />
        </div>

        <div className="hero-layout">
            {/* LEFT HERO CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="hero-text">
                    <h1>
                        Shaping
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1">
                                        <img
                                            src={word.imgPath}
                                            alt="person"
                                            className="xl:size-17 md:size-15 size-7  "
                                        />
                                        <span className='text-red-400'>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>
                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-[600px]">
                    Hi, I’m Cat Nguyen, a frontend software engineer with a strong 
                    passion for building visually stunning 3D websites and beautiful UI/UX designs.
                </p>
                <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12 mt-5"
                id="work"
                />
            </header>

            {/* RIGHT 3D MODEL */}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience/>

                </div>
            </figure>
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero