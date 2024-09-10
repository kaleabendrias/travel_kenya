import { useState } from 'react';
import axios from "axios";
import { Card } from "@/components/ui/card";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    need: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.need === '' || formData.message === '') {
      alert('Please fill out all fields');
    } else {
      await axios.post("https://travel-utnq.onrender.com/api/contactus", formData);
      alert('Form submitted successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        need: '',
        message: '',
      });
    }
  };

  return (
    <div className='min-h-screen m-4 flex items-center justify-center text-black'>
      <Card className="w-full max-w-3xl p-6 bg-white shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="form_name" className="block mb-2 text-gray-700">First Name</label>
              <input
                id="form_name"
                type="text"
                name="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please enter your firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="form_lastname" className="block mb-2 text-gray-700">Last Name</label>
              <input
                id="form_lastname"
                type="text"
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please enter your lastname"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="form_email" className="block mb-2 text-gray-700">Email</label>
            <input
              id="form_email"
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="form_need" className="block mb-2 text-gray-700">Please specify your need *</label>
            <select
              id="form_need"
              name="need"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.need}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Your Request Type
              </option>
              <option>Flight Booking Assistance</option>
              <option>Hotel Reservation Help</option>
              <option>Travel Package Information</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="form_message" className="block mb-2 text-gray-700">Message</label>
            <textarea
              id="form_message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactUs;
