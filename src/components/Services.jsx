import React from 'react'
import {
  Search,
  Briefcase,
  Users,
  FileText,
  Building2,
} from 'lucide-react'
import Navbar from './shared/Navbar'
import Footer from './Footer'

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <Navbar/>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide end-to-end hiring solutions for job seekers and recruiters
          to make recruitment faster, smarter, and easier.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Search size={32} />}
            title="Job Search"
            desc="Search and apply for jobs across multiple domains and experience levels."
          />

          <ServiceCard
            icon={<FileText size={32} />}
            title="Resume Management"
            desc="Create, update, and manage your resume to attract recruiters."
          />

          <ServiceCard
            icon={<Briefcase size={32} />}
            title="Job Posting"
            desc="Recruiters can post jobs and reach thousands of candidates."
          />

          <ServiceCard
            icon={<Users size={32} />}
            title="Candidate Management"
            desc="Track applications, shortlist candidates, and schedule interviews."
          />

          <ServiceCard
            icon={<Building2 size={32} />}
            title="Company Profiles"
            desc="Showcase your company brand and culture to attract talent."
          />

          <ServiceCard
            icon={<Briefcase size={32} />}
            title="Career Guidance"
            desc="Helpful resources and guidance for students and freshers."
          />
        </div>
      </section>

      <Footer/>
    </div>
  )
}

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
)

export default Services
