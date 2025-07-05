import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in-active');
      }, index * 200);
    });
  }, []);

  return (
    <section id="home" className="home-section text-center section-padding">
      <div className="container">
        <img
          src="https://via.placeholder.com/200"
          alt="Fridasam Karimi"
          className="hero-img mb-4 fade-in"
        />
        <h1 className="display-4 fade-in">Fridasam Karimi</h1>
        <p className="lead fade-in">Cybersecurity Enthusiast | React Developer | CTF Competitor</p>
        <a href="#projects" className="btn btn-primary mt-3 fade-in">Explore My Work</a>
      </div>
    </section>
  );
}

export default Home;