import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingLearnMore = () => {
    return (
        <section id="learnmore">
            <div className="bg-white px-6 py-12 max-w-7xl mx-auto text-gray-800">

                {/* Title and Description */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Learn More About our platform - <span className="text-green-600">GreenAI</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-600 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Our project is designed to help you offer step by step guidelines to easily get involved in community development.
                    </motion.p>
                </div>

                {/* Survey Introduction */}
                <motion.div
                    className="bg-gray-100 p-6 rounded-xl text-center shadow mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg text-gray-700 mb-6">
                        We collected survey data using Google Forms from university students at UCSY, YTU, YU, and MTU to understand their challenges while trying to involve in community development.
                    </p>

                    <Link
                        to="/survey"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        View Survey Data
                    </Link>
                </motion.div>

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
                        We are tech lovers who want to combine technology with community development. We also want to research about SDGs goals and offer educational content to individuals who are also interested in community development like us.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingLearnMore;
