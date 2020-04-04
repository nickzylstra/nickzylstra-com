import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Summary = () => (
  <>
    <Image
      src="/assets/images/full/headshot2.jpg"
      roundedCircle
      alt="headshot"
      width="300"
      height="278"
    />
    <h1>
      I&apos;m Nick Zylstra
    </h1>
    <h2>
      <i>(nik ZIel-strah)</i>
    </h2>
    <article>
      <p>
        I like to learn, teach, and build things.
        <span role="img" aria-label="learn">💡</span>
        <span role="img" aria-label="teach">🔥</span>
        <span role="img" aria-label="build">🏗️</span>
      </p>
      <p>
        The first 11 years of my career were at
        {' '}
        <a href="https://www.mckinstry.com" target="_blank" rel="noopener noreferrer">McKinstry</a>
        , making facilities energy efficient.
        Soon I start at
        {' '}
        <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>
        , building a better internet.
      </p>
      <p>
        You can check out my personal projects
        {' '}
        <Link to="/works">here</Link>
        .
      </p>
    </article>
  </>
);

export default Summary;
