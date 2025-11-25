import './Guides.css';

const guidesContent = [
  {
    number: 1,
    title: "Optimize Home Energy and Water Efficiency",
    content: [
      { text: "Make immediate energy savings by using " },
      { text: "smart power strips", bold: true },
      { text: " to eliminate 'vampire power' from idle electronics, and conserve water by installing simple " },
      { text: "low-flow fixtures", bold: true },
      { text: " on faucets and showerheads." },
    ]
  },
  {
    number: 2,
    title: "Master the Art of Waste Reduction and Circularity",
    content: [
      { text: "Drastically cut your household landfill waste by setting up an indoor " },
      { text: "composting system", bold: true },
      { text: " for food scraps and replacing all disposable paper and plastic items with durable, " },
      { text: "reusable alternatives", bold: true },
      { text: "." },
    ]
  },
  {
    number: 3,
    title: "Embrace Conscious and Ethical Consumption",
    content: [
      { text: "Shift your mindset from fast consumption to long-term value. Prioritize investing in " },
      { text: "high-quality, repairable items", bold: true },
      { text: " and always check local secondhand markets before buying brand new decor or furniture." },
    ]
  }
];

export function Guides() {
  return (
    <section id="guides" className="guides-section">
      <h2 className="section-title">Our Guide to a Sustainable Home</h2>

      {guidesContent.map((guide) => (
        <details key={guide.number} className='details'>
          <summary className='details-summary'>
            <span className="number">{guide.number}</span>
            <h3>{guide.title}</h3>
          </summary>
          <div className="guide-sub-point">
            <p>
              {guide.content.map((item, index) => (
                <span key={index} className={item.bold ? 'bold-text' : ''}>
                  {item.text}
                </span>
              ))}
            </p>
          </div>
        </details>
      ))}
      <a href="#products" className="cta-secondary">Start Your Green Journey</a>

    </section>
  );
}