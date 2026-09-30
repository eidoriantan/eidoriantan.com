import { portfolio } from '../content/portfolio'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="page-section services-section">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>
          Ways I can
          <br />
          <em>help out.</em>
        </h2>
      </div>
      <div className="services-list">
        {portfolio.services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-tools">{service.tools}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
