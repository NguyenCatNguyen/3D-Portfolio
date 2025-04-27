import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGithubAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger) // Register the ScrollTrigger plugin to allow GSAP to use it

const Link = ({webLink, gitLink}) => {
    return (
        <div className='flex items-center'>
            <a href={webLink} target='_blank' className='web-btn'>
              <FaLink className=' size-5' />
            </a>
            <a href={gitLink} target='_blank' className='web-btn'>
              <FaGithubAlt className='size-5' />
            </a>

        </div>
    )
}

// Animation for cards in showcase section
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const P1ref = useRef(null);
    const P2ref = useRef(null);
    const P3ref = useRef(null);


    // Section Animation
    useGSAP(()=>{
        // Section Animation
        gsap.fromTo(sectionRef.current, 
            {
                opacity: 0,
            },
            { opacity: 1, duration: 1.5}

        )

        // Project Animation
        const cards = [P1ref.current, P2ref.current, P3ref.current];
        cards.forEach((card, index) => {
            gsap.fromTo(
            card,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1), // Delay each card appear
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                  
                    toggleActions: "play reverse play reverse",
                },
            }
            );
        });
    }) 

  return (
    <div id='work' ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={P1ref} >
                    <div className="image-wrapper" >
                        <img src="/3D-Portfolio/images/project1.png" alt="Zelda Wiki Compedium" />
                    </div>
                <div className="text-content">
                    <h2>
                        Zentry Gaming — A Frontend Developer’s Approach to Esports UI
                    </h2>
                    <p className="text-white-50 md:text-xl">
                        A web built with React, TailwindCSS and GSAP for a fast,
                        user-friendly experience.
                    </p>
                    <Link 
                        webLink="https://nguyencatnguyen.github.io/ZentryGaming/"
                        gitLink="https://github.com/NguyenCatNguyen/ZentryGaming"
                     />
                </div>
                </div>



                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={P2ref} >
                    <div className="image-wrapper py-5 bg-[#51080d] mb-2 ">
                        <img src="/3D-Portfolio/images/project2.png" alt="Library Management Platform" /> 
                    </div>
                    <h2 className='pb-2'>3D Profolio</h2>
                    <Link gitLink="https://github.com/NguyenCatNguyen/3D-Portfolio" />
                    </div>

                    <div className="project" ref={P3ref} >
                    <div className="image-wrapper py-5 bg-[#274272] project-hover">
                        <img src="/3D-Portfolio/images/project3.png" alt="YC Directory App" />
                    </div>
                    <h2 className='pb-2'>ZeldaWiki- BOTW Compedium</h2>
                    <Link webLink="https://nguyencatnguyen.github.io/ZeldaWIki/" gitLink="https://github.com/NguyenCatNguyen/ZeldaWIki"/>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection