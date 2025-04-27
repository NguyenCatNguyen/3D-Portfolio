import TitleHeader from '../components/TitleHeader.jsx'
import ContactModel from '../components/ContactModels/ContaxtModel.jsx'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check
    if (form.current._honeypot?.value) return
    
    setLoading(true)
    setStatus({ message: '', isError: false })

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )

      setStatus({ message: 'Message sent successfully!', isError: false })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ 
        message: 'Failed to send message. Please try again.', 
        isError: true 
      })
      console.error("EmailJS Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader 
          title="✨ Connect Me ✨" 
          sub="Let Create Amazing Project Together 🚀"/>
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form 
                ref={form}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Honeypot field */}
                <input 
                  type="text" 
                  name="_honeypot" 
                  className="hidden" 
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name Input */}
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    disabled={loading}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {/* Status message */}
                {status.message && (
                  <p className={`mt-2 text-sm ${
                    status.isError ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactModel/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact