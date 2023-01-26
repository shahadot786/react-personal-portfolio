import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static & Dynamic Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PHD to Html Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reskin Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any design related work</p>
            </li>
          </ul>
        </article>
        {/* end of frontend */}
        <article className="service">
          <div className="service__head">
            <h3>Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PHP & Laravel Dev</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog & Portfolio with Backend</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Developmet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any development related work</p>
            </li>
          </ul>
        </article>
        {/* end of Backend */}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Android App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>iOS App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Native App Dev</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any Mobile Application Related Work</p>
            </li>
          </ul>
        </article>
        {/* end of Native */}
      </div>
    </section>
  );
};

export default services;
