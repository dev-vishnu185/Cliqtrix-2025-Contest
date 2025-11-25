import './About.css';

export function About() {
  return (
    <div id="about" className="about-section">
      <h2 className='section-title about'>Our Mission: Sustainability Made Simple</h2>
      <div className="about-content">
        <p>
          At <b>EcoHabit</b>, we believe that living a sustainable lifestyle shouldn't be complicated or expensive. We do the research and vetting so you don't have to. Our mission is to curate the most effective, highest-quality, and genuinely eco-friendly products for your home.
        </p>

        <div className='about-sub-content'>
          <h3>
            The EcoHabit Difference is <q className='quotes'>We don't just sell products; we source solutions.</q>
          </h3>
        </div>
        <p>
          From reducing your energy consumption to eliminating plastic waste in your kitchen, we provide the tools and knowledge you need to make powerful, positive changes, one room at a time.
        </p>
        <blockquote className="impact-statement">
          <b>Every choice matters.</b> Join us in building a greener, healthier future—starting right at home.
        </blockquote>
      </div>
    </div>
  );
}