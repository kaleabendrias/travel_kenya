import { useState } from 'react';
import axios from "axios";

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
      // send form data to backend
      await axios.post(
        "https://travel-utnq.onrender.com/api/contactus",
        formData
      );
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
    <div className='' style={{
        background: "linear-gradient(to bottom, #1f1f1f, #000000)",
        backgroundSize: "cover",
      }}>

    <div className="text-white">
      <div className=" text-center pt-5">
        <h1>Contact Us</h1>
      </div>

      <div className="row pb-5">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 shadow-lg" style={{backgroundColor: "#f0f1f1"}}>
            <div className="card-body">
              <div className="container">
                <form id="contact-form" role="form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Firstname</label>
                          <input
                            id="form_name"
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Please enter your firstname *"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_lastname">Lastname</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Please enter your lastname *"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_need">Please specify your need *</label>
                          <select
                            id="form_need"
                            name="need"
                            className="form-control"
                            value={formData.need}
                            onChange={handleChange}
                            required
                          >
                            <option value="" selected disabled>
                              --Select Your Request Type--
                            </option>
                            <option>Flight Booking Assistance</option>
                            <option>Hotel Reservation Help</option>
                            <option>Travel Package Information</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12 d-flex justify-content-center">
                        <input
                          type="submit"
                          className="btn btn-success btn-send  pt-2 btn-block m-2"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
