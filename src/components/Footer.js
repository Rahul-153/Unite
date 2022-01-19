import React from 'react'
import '../Styles/Footer.css'

function Footer() {
    return (
        <div>
              <footer id="footer">
    <div className='footer-left'>  
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label for="name">Name</label><br/>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label for="email">Email</label><br/>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label for="message">Message</label><br/>
            <textarea name="message" id="message" rows="3"></textarea>
          </div>
        </div>
        <ul className="actions">
          <div className='send'><input type="submit" value="Send Message" /></div>
        </ul>
      </form>
    </div>
    <div className="footer-right">
      <div className="right address">
        <h3>Address</h3>
        <p>1234 Somewhere Road #87257<br />
        Nashville, TN 00000-0000</p>
      </div>
      <div className='right number'>
        <h3>Phone</h3>
        <p>(000) 000-0000</p>
      </div>
      <div className='right email'>
        <h3>Email</h3>
        <p>info@untitled.tld</p>
      </div>
      <div className='right social'>
        <div className="icons alt">
          <div><i className="fab fa-twitter"></i></div>
          <div><i className="fab fa-facebook-f"></i></div>
          <div><i className="fab fa-github"></i></div>
          <div><i className="fab fa-instagram"></i></div>
        </div>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer
