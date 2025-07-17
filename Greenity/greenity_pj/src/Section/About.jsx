import React from 'react';
import {
  FaLightbulb,
  FaChartLine,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import LandingFooter from '../Layout/Footer';
import conclustion_metric from '../assets/images/conclusion_metric.jpg'
import pca_graph from '../assets/images/PCA_graph.jpg'
import tsne_graph from '../assets/images/T-SNE_graph.jpg'
import wintwah from '../assets/images/ww.jpg'
import kalayar from '../assets/images/kalayar.JPG'
import ayeyumon from '../assets/images/ayeyumon.JPG'

const LandingAboutus = () => {

  const navigate = useNavigate();


  return (
    <>
      <Navbar />
      <div className="mt-9 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-white text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-gray-900 text-4xl md:text-6xl font-bold mb-6">About GreenAI</h1>
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
              The research project aimed to develop community.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Methodology Used</h2>
        <p className="text-gray-600 mb-4">
          In this project, we used a Retrieval-Augmented Generation (RAG)-based engine to generate structured and helpful guidelines for learners.
        </p>
        <p className="text-gray-600 mb-4">
          We sourced a curated dataset from Kaggle to provide real-world context and questions. A fine-tuned model from Hugging Face powers our responses.
        </p>
        <p className="text-gray-600 mb-6">
          LangChain was used to build the orchestration logic, while Large Language Models (LLMs) handled intelligent reasoning and answer generation.
        </p>
      </div>
      <div className="md:w-1/2 md:pl-12">
        <div className="bg-gray-100 p-8 rounded-xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              'Use RAG Engine',
              'Fetch from Our Dataset',
              'Integrate Hugging Face Model',
              'Build with LangChain',
              'Run via LLM',
              'Generate Guideline'
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                  <FaLightbulb className="text-white" />
                </div>
                <span className="text-xs font-medium text-gray-700">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-600 rounded-lg border border-blue-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <FaChartLine className="text-green-600 text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Intelligent Guideline Generation</p>
                <p className="text-xs text-white">From raw data to structured educational paths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Model Evaluation</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <img src={pca_graph} alt="Classification Report" className="rounded-lg shadow-md" />
        <p className="text-gray-600 text-sm mt-2">PCA Graph</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={conclustion_metric} alt="Confusion Matrix" className="rounded-lg shadow-md" />
        <p className="text-gray-600 text-sm mt-2">Confusion Matrix</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={tsne_graph} alt="t-SNE Visualization" className="rounded-lg shadow-md" />
        <p className="text-gray-600 text-sm mt-2">t-SNE Embedding Visualization</p>
      </div>
      {/* Add more image blocks as needed */}
    </div>
  </div>
</section>




        {/* Team section */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600">
                Meet the People Behind <span className='text-green-600'>GreenAI</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our team brings together educators, tech lovers, and problem-solvers who care about community development.
              </p>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {/* Member 1 */}
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md flex flex-col items-center text-center">
    <img
      src={wintwah}
      alt="Wint Wah Kyaw Soe"
      className="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold text-gray-900">Wint Wah Kyaw Soe</h3>
    <p className="text-green-600 font-medium">Team Member 1</p>
    <p className="text-gray-600 mt-2 text-sm">
      Loves coffee but hate assignments and tutorials.
    </p>
  </div>

  {/* Member 2 */}
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md flex flex-col items-center text-center">
    <img
      src={kalayar}
      alt="Team Member 2"
      className="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold text-gray-900">Kalayar Lin Mon</h3>
    <p className="text-green-600 font-medium">Team Member 2</p>
    <p className="text-gray-600 mt-2 text-sm">
      Love vlogging around and capturing beautiful moments.
    </p>
  </div>

  {/* Member 3 */}
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md flex flex-col items-center text-center">
    <img
      src={ayeyumon}
      alt="Team Member 3"
      className="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold text-gray-900">Aye Yu Mon</h3>
    <p className="text-green-600 font-medium">Team Member 3</p>
    <p className="text-gray-600 mt-2 text-sm">
      Driven by curiosity and innovation. Always ready to learn.
    </p>
  </div>
</div>

          </div>
        </section>

        {/* banner */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Involve in Community Development?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join with us to build better and greener future together.
            </p>
            <button onClick={() => navigate("/")} className="px-8 py-4 bg-green-600 text-white rounded-lg transition duration-300 text-lg font-semibold">
              Go back to homepage
            </button>
          </div>
        </section>
      </div>

      {/* footer */}
      <LandingFooter />
    </>
  );
};

export default LandingAboutus;