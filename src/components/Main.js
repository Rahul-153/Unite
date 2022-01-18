import React from 'react'

function Main() {
    return (
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
  </div>
    )
}

export default Main
