import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import axios from 'axios'
import { toast } from 'sonner'
import Footer from './Footer'
import Navbar from './shared/Navbar'

const CONTACT_API = 'http://localhost:5000/api/contact' // 🔁 change if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ✅ Validation
  const validateForm = () => {
    const { name, email, message } = formData

    if (!name.trim()) {
      toast.error('Name is required')
      return false
    }
    if (!email.trim()) {
      toast.error('Email is required')
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Enter a valid email')
      return false
    }
    if (!message.trim()) {
      toast.error('Message is required')
      return false
    }
    return true
  }

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      setLoading(true)
      const res = await axios.post(CONTACT_API, formData)

      toast.success(res.data.message || 'Message sent successfully')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need help ? Fill the form and we’ll get back to you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <InfoItem icon={<Mail />} title="Email" value="support@jobportal.com" />
          <InfoItem icon={<Phone />} title="Phone" value="+91 98765 43210" />
          <InfoItem icon={<MapPin />} title="Address" value="Bangalore, India" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl space-y-4"
        >
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Textarea
            placeholder="Your Message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 w-full"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </section>

      <Footer />
    </div>
  )
}

const InfoItem = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  </div>
)

export default Contact
