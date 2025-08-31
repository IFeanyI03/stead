import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUP } from '../../assets/Icons';
import { Button } from './Button';


export default function ProjectsSlider({ projectsData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Memoized function to go to the next slide
    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, []);

    // Effect for automated sliding
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => {
            clearInterval(timer); // Cleanup on component unmount or when paused
        };
    }, [nextSlide, isPaused]);

    // Reset the featured item when the main slide changes
    useEffect(() => {
        setFeaturedIndex(0);
    }, [activeIndex]);

    // Function to handle dot navigation
    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // Determine the 3 projects to display based on the activeIndex
    const totalProjects = projectsData.length;
    const visibleProjects = [
        projectsData[activeIndex],
        projectsData[(activeIndex + 1) % totalProjects],
        projectsData[(activeIndex + 2) % totalProjects],
    ];

    return (
        <section
            className=""
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-4">

                {/* Image Slider Grid */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-6 h-[300px] md:h-[500px]"
                    onMouseLeave={() => setFeaturedIndex(0)}
                >
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`
                relative rounded-[42px] overflow-hidden cursor-pointer group shadow-lg
                transform transition-all duration-700 ease-in-out
                ${index === featuredIndex ? 'lg:col-span-2' : 'lg:col-span-1'}
              `}
                            // onClick={() => goToSlide((activeIndex + index) % totalProjects)}
                            onMouseEnter={() => setFeaturedIndex(index)}
                        >
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            <Button className={"absolute w-15 h-15 backdrop-blur-[10px] border-[#FFFFFF99] bg-[#FFFFFF1A] opacity-0 right-4 top-4 group-hover:opacity-100 transition-opacity duration-300"} icon={<ArrowUP />} />


                            <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 py-6">
                                {/* <h3 className={`font-bold text-white transition-all duration-500
                    ${index === featuredIndex ? 'text-3xl' : 'text-xl'}`
                                }>
                                    {project.title}
                                </h3> */}
                                <p className={`text-white text-center text-[40px] font-bold w-fit transition-opacity duration-500 delay-100
                    ${index === featuredIndex ? 'opacity-100' : 'opacity-0'}`
                                }>
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center mt-8 space-x-3">
                    {projectsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                h-2 rounded-full transition-all duration-300
                ${activeIndex === index ? 'w-8 bg-[#636363]' : 'w-2 bg-[#D9D9D9] hover:bg-[#636363]'}
              `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}

