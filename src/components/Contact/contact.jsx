import './contact.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Contact() {
  return (
    <section id='contact' className='contact-section'>
      <h1 className='section-title'>Let's Get in Touch</h1>
        <div className='social-box autoBlur'>
            <a href="tel:+1234567890" className="contact-icon" title="Call Me">
            <i><FaPhoneVolume/></i>
            +63 928 155 0132
            </a>
            <a href="https://t.me/yourTelegramUsername" className="contact-icon" title="Telegram">
            <i><FaTelegramPlane/></i>
            +63 928 155 0132
            </a>
            <a href="https://discord.gg/bqKjPb4A" className="contact-icon" title="Discord">
            <i><FaDiscord/></i>
            #secretbox22
            </a>
        </div> 

        <div className='contact-box'>
            <p>Whatever you're looking to build a new website, improve your existing platform,
            or bring a unique project to life. I'm here to help.</p>
            <p>Full Name</p>
            <input type='text' placeholder='Your Full Name'></input>

            <p>Email Address</p>
            <input type='text' placeholder='Your Email'></input>

            <p>Your Message</p>
            <input className='input-message' type='text' placeholder='Share your thoughts...'></input>

            <button>
                <IoSend />
                Send Message
            </button>
        </div>
      
    </section>
  );
}

export default Contact;