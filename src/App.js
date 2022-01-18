import './App.css';
import './assets/css/main.css'


function App() {
  return (
    <div className="App">
			<div id="wrapper" className="fade-in">

{/* <!-- Intro --> */}
  <div id="intro">
    <h1>Unite<br />
    <small>Join Create Progress</small></h1>
    <ul className="actions">
      <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
    </ul>
  </div>

{/* <!-- Header --> */}
  <header id="header">
    <a href="index.html" className="logo">Hack A fun</a>
  </header>

{/* <!-- Nav --> */}
  <nav id="nav">
    <ul className="links">
      <li className="active"><a href="index.html">Home</a></li>
      <li><a href="generic.html">WorkShops</a></li>
      <li><a href="elements.html">Join A Community</a></li>
      <li><a href="elements.html">Discussions</a></li>
    </ul>
    <ul className="icons">
      <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
      <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="/" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
    </ul>
  </nav>

{/* <!-- Main --> */}
  <div id="main">

    {/* <!-- Featured Post --> */}
      <article className="post featured">
        <header className="major">
          <span className="date">April 25, 2017</span>
          <h2><a href="/">Unite<br />
          Join Create Progress</a></h2>
          <p>Want your doubts solved, too shy to ask the teachers, want an open discussions forum,got an idea, like to contribute.You have a single stop for all your solutions.</p>
        </header>
        <a href="/" className="image main"><img src="images/pic01.jpg" alt="" /></a>
        <ul className="actions special">
          <li><a href="/" className="button large">Hit Me!</a></li>
        </ul>
      </article>

    {/* <!-- Posts --> */}
      <section className="posts">
        <article>
          <header>
            {/* <span className="date">April 24, 2017</span> */}
            <h2><a href="/">WorkShops</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            {/* <span className="date">April 22, 2017</span> */}
            <h2><a href="/">DISCUSSIONS<br />
            FORUM</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 18, 2017</span>
            <h2><a href="/">PROJECT<br />
            BUILDING</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 14, 2017</span>
            <h2><a href="/">ENHANCE YOUR<br />
            SKILLS</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 11, 2017</span>
            <h2><a href="/"><br />
            sed consectetur</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 7, 2017</span>
            <h2><a href="/">Augue lorem<br />
            primis vestibulum</a></h2>
          </header>
          <a href="/" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href="/" className="button">Full Story</a></li>
          </ul>
        </article>
      </section>

    {/* <!-- Footer --> */}
      <footer>
        <div className="pagination">
          {/* <!--<a href="/" className="previous">Prev</a>--> */}
          <a href="/" className="page active">1</a>
          <a href="/" className="page">2</a>
          <a href="/" className="page">3</a>
          <span className="extra">&hellip;</span>
          <a href="/" className="page">8</a>
          <a href="/" className="page">9</a>
          <a href="/" className="page">10</a>
          <a href="/" className="next">Next</a>
        </div>
      </footer>

  </div>

{/* <!-- Footer --> */}
  <footer id="footer">
    <section>
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="3"></textarea>
          </div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </form>
    </section>
    <section className="split contact">
      <section className="alt">
        <h3>Address</h3>
        <p>1234 Somewhere Road #87257<br />
        Nashville, TN 00000-0000</p>
      </section>
      <section>
        <h3>Phone</h3>
        <p><a href="/">(000) 000-0000</a></p>
      </section>
      <section>
        <h3>Email</h3>
        <p><a href="/">info@untitled.tld</a></p>
      </section>
      <section>
        <h3>Social</h3>
        <ul className="icons alt">
          <li><a href="/" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="/" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="/" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="/" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </section>
    </section>
  </footer>

{/* <!-- Copyright --> */}
  <div id="copyright">
    <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
  </div>

</div>
    </div>
  );
}

export default App;
