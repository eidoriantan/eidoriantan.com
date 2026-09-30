import { Check } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import './About.css'

export function About() {
  return (
    <section id="about" className="page-section about-section">
      <div className="about-intro">
        <p className="eyebrow">About me</p>
        <h2>Adriane Justine Tan</h2>
        <p>
          I&apos;m a full-stack software developer who helps people turn ideas into useful,
          reliable digital products. I build websites, apps, and AI-powered experiences that are
          practical, thoughtful, and ready to work in the real world.
        </p>
      </div>
      <div className="about-details">
        <div className="detail-block">
          <p className="eyebrow">Skills &amp; tools</p>
          <div className="skill-cloud">
            {portfolio.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="detail-block achievements">
          <p className="eyebrow">Achievements</p>
          {portfolio.achievements.map((achievement) => (
            <div className="achievement" key={achievement.year}>
              <span>{achievement.year}</span>
              <div>
                <h3>{achievement.title}</h3>
                <p>
                  {achievement.event} · {achievement.detail}
                </p>
              </div>
              <Check size={17} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
