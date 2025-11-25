import './Products.css';
import image1 from '../../assets/1.PNG';
import image2 from '../../assets/2.PNG';
import image3 from '../../assets/3.PNG';

const productsData = [
  {
    name: "Blueland Starter Kit",
    description: "Dissolvable, non-toxic cleaning tablets for multi-surface, glass, and bathroom (refillable system).",
    link: "https://www.amazon.com/BLUELAND-Laundry-Essentials-Spring-Bloom/dp/B0DR9LG7M1",
    image: image1,
    category: "Cleaning"
  },
  {
    name: "Epica Stainless Steel Compost Bin (1.3 Gal)",
    description: "High-quality stainless steel countertop bin with an odor absorbing charcoal filter for indoor food scraps.",
    link: "https://www.amazon.com/Epica-Stainless-Compost-Gallon-Charcoal/dp/B00AMNCYNQ",
    image: image2,
    category: "Waste Reduction"
  },
  {
    name: "EF ECOFLOW Portable Power Station (256Wh)",
    description: "A lightweight solar-compatible power station featuring a long-life LiFePO4 battery (3000+ cycles, 10-year life) and solar charging capability (panel optional), providing clean, portable, emission-free energy backup.",
    link: "https://www.amazon.com/EF-ECOFLOW-Portable-RIVER-Generator/dp/B0B8MXPRDB",
    image: image3,
    category: "Energy Efficiency"
  }
];

export function Products() {
  return (
    <section id="products" className="products-section">
      <h2 className="section-title">Sustainable Essentials</h2>
      <p className="product-section-intro">
        We've searched major retailers to find the best-performing, eco-friendly swaps that deliver on quality and sustainability.
      </p>

      <div className="products-grid">
        {productsData.map((product, index) => (
          <article key={index} className="product-card">
            <div className="product-media">
              <img className="product-image" src={product.image} alt={product.name} />
            </div>

            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>
              <p className="category-tag">{product.category}</p>
              <p className="product-description">{product.description}</p>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={product.link}
              className="buy-link"
            >
              See Product Details <i className="bi bi-link-external"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
