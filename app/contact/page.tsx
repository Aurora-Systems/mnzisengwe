"use client"
import emailjs from "@emailjs/browser"
import { useState, useRef } from "react";
import  {FormEvent} from "react"
export default function Contact() {
    const form:any = useRef(null)
    const [loading,set_loading] = useState<boolean>(false)

   const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    set_loading(true)
    console.log(e)
    emailjs
      .sendForm("service_o61m0en", "template_toru4mn", form.current, {
        publicKey: "gRorSRs9b_2tSpDqt",
      })
      .then(
        () => {
          alert("Message Sent Successfully");
          form.current.reset()
        },
        (error) => {
          console.log(error)
          alert("Message Not Sent");

        },
      ).finally(()=>{
        set_loading(false)
      })
  };


  return (
    <div>
      {/* Bootstrap CSS CDN - Include this in your HTML head */}
      
      
      <style jsx>{`
       
        .text-gold {
          color: #f59e0b;
        }
      
        .bg-gold {
          background-color: #f59e0b;
          border-color: #f59e0b;
        }
        .bg-gold:hover {
          background-color: #d97706;
          border-color: #d97706;
        }
        .icon-circle {
          width: 48px;
          height: 48px;
          background-color: rgba(245, 158, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bcc text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">
            Get In <span className="text-warning">Touch</span>
          </h1>
          <p className="lead opacity-75 mx-auto" style={{maxWidth: '42rem'}}>
            Ready to start your publishing journey? We're here to help bring your story to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container my-5">
        <form ref={form} onSubmit={sendEmail}>
            <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4 tp">Send Us a Message</h2>
                <div>
                <div className="row g-3 mb-3">
                    <div className="col-sm">
                    <label className="form-label fw-medium text-navy">First Name</label>
                    <input className="form-control bg-light" placeholder="John" name="full_name" required/>
                    </div>
                   
                </div>
                
                <div className="mb-3">
                    <label className="form-label fw-medium text-navy">Email</label>
                    <input className="form-control bg-light" placeholder="john@email.com" name="email" required/>
                </div>
                
                <div className="mb-3">
                    <label className="form-label fw-medium text-navy">Phone</label>
                    <input type="tel" className="form-control bg-light" placeholder="078********" name="phone" required/>
                </div>
                
                <div className="mb-3">
                    <label className="form-label fw-medium text-navy">Service Interest</label>
                    <select className="form-control" name="subject" required>
                      <option></option>
                      <option value="publishing">Book Publishing</option>
                    <option value="editing">Editorial Services</option>
                    <option value="marketing">Book Marketing</option>
                    <option value="distribution">Distribution</option>
                    <option value="consultation">Publishing Consultation</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="mb-3">
                    <label className="form-label fw-medium text-navy">Message</label>
                    <input className="form-control bg-light" style={{height: '120px', paddingTop: '8px'}} placeholder="Tell us about your project, questions, or how we can help you..." name="message" required/>
                    
                </div>
                
                <button type="submit" disabled={loading} className="btn bg-gold text-white w-100 fw-medium">
                    Send Message
                </button>
                </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4 tp">Contact Information</h2>
                
                <div className="d-flex flex-column gap-4">
                <div className="card">
                    <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                        <div className="icon-circle me-3">
                        <span style={{fontSize: '1.25rem'}}>📧</span>
                        </div>
                        <div>
                        <h3 className="h6 fw-semibold text-navy mb-1">Email</h3>
                        <p className="text-muted mb-1">info@globalwisdom.co.zw</p>
                        <p className="text-muted mb-0">submissions@globalwisdom.co.zw</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                        <div className="icon-circle me-3">
                        <span style={{fontSize: '1.25rem'}}>📞</span>
                        </div>
                        <div>
                        <h3 className="h6 fw-semibold text-navy mb-1">Phone</h3>
                        <p className="text-muted mb-1">+263 77 735 8130</p>
                        <p className="small text-muted mb-0">Mon-Fri, 8 AM - 5 PM CAT</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                        <div className="icon-circle me-3">
                        <span style={{fontSize: '1.25rem'}}>📍</span>
                        </div>
                        <div>
                        <h3 className="h6 fw-semibold text-navy mb-1">Office</h3>
                        <p className="text-muted mb-1">Office 1, Unforgettable Building</p>
                        <p className="text-muted mb-1">Bulawayo</p>
                        <p className="text-muted mb-0">Zimbabwe</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                        <div className="icon-circle me-3">
                        <span style={{fontSize: '1.25rem'}}>⏰</span>
                        </div>
                        <div>
                        <h3 className="h6 fw-semibold text-navy mb-1">Business Hours</h3>
                        <p className="text-muted mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-muted mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted mb-0">Sunday: Closed</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-5 tp">
            Frequently Asked Questions
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-navy mb-2">How long does the publishing process take?</h3>
                  <p className="text-muted mb-0">The timeline varies depending on the service package, but typically ranges from 3-6 months from manuscript submission to published book.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-navy mb-2">Do you accept all genres?</h3>
                  <p className="text-muted mb-0">Yes, we work with authors across all genres including fiction, non-fiction, poetry, children's books, and academic works.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-navy mb-2">What's included in your publishing packages?</h3>
                  <p className="text-muted mb-0">Our packages include editing, cover design, formatting, ISBN assignment, distribution, and marketing support. Specific services vary by package.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-navy mb-2">Do authors retain rights to their work?</h3>
                  <p className="text-muted mb-0">Absolutely. Authors retain full ownership and rights to their intellectual property. We believe in empowering authors, not controlling them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

