"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-2 border rounded-lg" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 School Street, Bangalore, India</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 123 456 7890</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@schoolname.com</p>
            {/* Placeholder for map */}
            <div className="mt-4 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map will be here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
