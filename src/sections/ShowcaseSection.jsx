import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger) // Register the ScrollTrigger plugin to allow GSAP to use it

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
                start: "top bottom-=80",
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
                        <img src="/images/project1.png" alt="Zelda Wiki Compedium" />
                    </div>
                <div className="text-content">
                    <h2>
                        On-Demand Rides Made Simple with a Powerful, User-Friendly App
                        called Ryde
                    </h2>
                    <p className="text-white-50 md:text-xl">
                        An app built with React Native, Expo, & TailwindCSS for a fast,
                        user-friendly experience.
                    </p>
                </div>
                </div>



                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={P2ref} >
                    <div className="image-wrapper bg-[#FFEFDB]">
                        <img
                        src="/images/project2.png"
                        alt="Library Management Platform"
                        />
                    </div>
                    <h2>The Library Management Platform</h2>
                    </div>

                    <div className="project" ref={P3ref} >
                    <div className="image-wrapper bg-[#FFE7EB]">
                        <img src="/images/project3.png" alt="YC Directory App" />
                    </div>
                    <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection