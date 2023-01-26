import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a titile 1',
    github: 'https://github.com/shrcreation',
    demo: 'https://shrcreation.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a titile 1',
    github: 'https://github.com/shrcreation',
    demo: 'https://shrcreation.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a titile 1',
    github: 'https://github.com/shrcreation',
    demo: 'https://shrcreation.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a titile 1',
    github: 'https://github.com/shrcreation',
    demo: 'https://shrcreation.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a titile 1',
    github: 'https://github.com/shrcreation',
    demo: 'https://shrcreation.com',
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
