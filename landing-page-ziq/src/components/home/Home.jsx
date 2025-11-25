import './Home.css';
import HeroImage from '../../assets/Hero.png';

export function Home() {
  return (
    <div id='home' className='wrapper'>
      <div className="wrapper-content">
        <h1 className='main-title'>Go Green, Save Green: Sustainable Home Solutions That Cut Your Bills.</h1>
        <h2 className='sub-title'>"Start Your Green Home Transformation Today. Discover the Essential Products That Make Sustainability Easy."</h2>
      </div>
      <div className="image-wrapper">
        <img
          className='hero-image'
          src={HeroImage} />
      </div>

      <div className="cta-holder">
        <a className='cta' href='#products'>Explore More</a>
      </div>
    </div>
  );
}