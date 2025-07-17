import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Layout/Navbar';
import LandingFooter from '../Layout/Footer';
import major from '../assets/images/major_data.png'
import past_activity from '../assets/images/past_activity.png'
import challenges from '../assets/images/challenges.png'
import feature from '../assets/images/feature.png'


const surveyGallery = [
    {
        image: major,
        caption: 'Survey with students from different universities to know their major profession.',
    },
    {
        image: past_activity,
        caption: 'Survey data about their past activities related to community development.',
    },
    {
        image: challenges,
        caption: 'Survey data about their challenges related to community development.',
    },
    {
        image: feature,
        caption: 'Survey data about what functionality should include in GreenAI.',
    },
];

const Survey = () => {
    return (
        <>
        <Navbar />
        <section className='mt-10'>
            <div className="bg-white px-6 py-12 max-w-7xl mx-auto text-gray-800">

                {/* Title and Description */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        Our Survey Process - <span className='text-Green-600'>GreenAI</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-600 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}>
                        We collected survey data using Google Forms from university students at UCSY, YTU, YU, and MTU to understand their challenges while trying to involve in community development.
                    </motion.p>
                </div>

                {/* 📊 Survey Gallery Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {surveyGallery.map((item, i) => (
                        <motion.div
                            key={i}
                            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-gray-50"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <img
                                src={item.image}
                                alt={`Survey ${i + 1}`}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-700">{item.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Section */}
                <motion.div
                    className="mt-20 bg-blue-50 p-10 rounded-xl text-center shadow-inner"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        We are tech lovers who want to combine technology with community development.
                        We also want to research about SDGs goals and offer educational content to
                        individuals who are also interested in community development like us.
                    </p>
                </motion.div>
            </div>

            <LandingFooter />
        </section>
        </>
    );
};

export default Survey;
