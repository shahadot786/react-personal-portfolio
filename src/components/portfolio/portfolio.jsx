import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movies Database Vanilla JS',
    github: 'https://github.com/shrcreation/Movies-Database-DOM-Vanilla-JS-',
    demo: 'https://movies.shrcreation.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'JScript- Learn JavaScript Online | Android App',
    github: 'https://github.com/shrcreation/JScript-Learn-JavaScript',
    demo: 'https://javascript.shrcreation.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Responsive App Landing Page ',
    github: 'https://github.com/shrcreation/App-Landing-Page',
    demo: 'https://landingpage.shrcreation.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ToDoList- Vanilla JavaScript',
    github: 'https://github.com/shrcreation/ToDoList-Vanilla-JavaScript-App',
    demo: 'https://react.shrcreation.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'React Native Weather App',
    github: 'https://github.com/shrcreation/react-native-weather-app-api',
    demo: 'https://github.com/shrcreation/react-native-weather-app-api',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Static Personal Portfolio',
    github: 'https://portfolio.shrcreation.com/',
    demo: 'https://portfolio.shrcreation.com/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Wordpress Portfolio',
    github: 'https://www.zahidhasan.shrcreation.com/',
    demo: 'https://www.zahidhasan.shrcreation.com/',
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
