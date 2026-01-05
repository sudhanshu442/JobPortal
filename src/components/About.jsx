import React from 'react'
import { Briefcase, Users, Target } from 'lucide-react'
import Navbar from './shared/Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Navbar/>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-blue-600">Job Portal</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Job Portal is a modern recruitment platform designed to connect
          talented candidates with top companies. Whether you're a student,
          fresher, or an experienced professional — we help you find the right
          opportunity.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Target className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To simplify the hiring process by connecting job seekers and
              recruiters on a single, easy-to-use platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Briefcase className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">What We Do</h3>
            <p className="text-gray-600 text-sm">
              We provide job listings, company profiles, and tools that help
              candidates apply faster and recruiters hire smarter.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Users className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Who We Help</h3>
            <p className="text-gray-600 text-sm">
              Students, freshers, professionals, startups, and enterprises
              looking for the perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-2">Easy to Use</h4>
            <p className="text-sm text-gray-600">
              Simple and clean interface for both candidates and recruiters.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-2">Verified Companies</h4>
            <p className="text-sm text-gray-600">
              We ensure trusted and verified recruiters on our platform.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-2">Career Growth</h4>
            <p className="text-sm text-gray-600">
              Opportunities across multiple domains and experience levels.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-2">Fast Hiring</h4>
            <p className="text-sm text-gray-600">
              Recruiters can post jobs and manage applications efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <Footer/>
    </div>
  )
}

export default About
