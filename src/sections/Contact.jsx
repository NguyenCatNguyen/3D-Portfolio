import TitleHeader from '../components/TitleHeader.jsx'
import ContactModel from '../components/ContactModels/ContaxtModel.jsx'

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader 
          title="✨ Connect Me ✨" 
          sub="Let Create Amazing Project Together"/>
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form 
                className="w-full flex flex-col gap-7"
                action="">
                  {/*  Name Input */}
                  <div>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="What’s your good name?"
                      required
                    />
                  </div>

                  {/*  Email Input */}
                  <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                   
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      texs
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className=" w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactModel/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact