import React from 'react';
//countup
import CountUp from "react-countup";

// intersection observer hook
import {useInView} from 'react-intersection-observer';

// animations
import {motion} from 'framer-motion';

import {fadeIn} from "../variants";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/* image */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:false, amount:0.3}}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:false, amount:0.3}}
                        className="flex-1">
                        <h2 className="h2 text-accent">About .me</h2>
                        <h3 className="h3 mb-4">I love the ability to transform and create, preserving traditional knowledge and techniques while integrating modern designs and practices.</h3>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic id, inventore nobis optio pariatur provident quae quam quidem quis.</p><br/>
                        {/* stats */}
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            {/*1st*/}
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2"
                                     style={{lineHeight: '1.2', paddingTop: '5px'}}>
                                    {inView ? <CountUp start={0} end={3} duration={7}/> : null}
                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br/>
                                    Experience
                                </div>
                            </div>
                            {/*2nd*/}
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2"
                                     style={{lineHeight: '1.2', paddingTop: '5px'}}>
                                    {inView ? <CountUp start={0} end={13} duration={7}/> : null}
                                    k+
                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Project <br/>
                                    Completed
                                </div>
                            </div>
                            {/*3rd*/}
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2"
                                     style={{lineHeight: '1.2', paddingTop: '5px'}}>
                                    {inView ? <CountUp start={0} end={7} duration={7}/> : null}

                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Satisfied<br/>
                                    Client
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact me </button>
                            <a href="#" className="text-gradient btn-link">My Portfolio</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
