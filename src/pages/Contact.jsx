
import '../styles/Contact.css'

function Contact(){
  return (

    <main className="contact-main">
      <section className="contact-section">


        <div id="contact-info-container">

            <div>
                <h2 id="contact-header">Contact US</h2>
            </div>


            <form id = "contact-form" action="/" method="GET">
            {/* <!--First Name--> */}
            <div className = "contact">
              <label htmlFor="first contact-input"></label>
              <input className="first contact-input" name="first name" type="text"  placeholder="First Name"/>
              <div className= "error-text"></div>
            </div>

            {/* <!--Last Name--> */}
            <div className = "contact">
              <label htmlFor="last contact-input"></label>
              <input className="last contact-input" name="last name" type="text" placeholder="Last Name"/>
              <div className = "error-text"></div>
            </div>

            {/* <!--Email--> */}
            <div className = "contact">
              <label htmlFor="email contact-input"></label>
              <input className="email contact-input" name="email" type="text" placeholder="Email" />
              <div className = "error-text"></div>
            </div>

            {/* <!--Comment--> */}
            <div className = "contact">
              <label htmlFor="comment contact-input"></label>
              <textarea className="comment contact-input" form = "contact-form" type="text" rows="5" cols="33" placeholder="Comment"></textarea>
              <div className = "error-text"></div>
            </div>

            <button id = "sub-btn" type="submit">Submit</button>

          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact