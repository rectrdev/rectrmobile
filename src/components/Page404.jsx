import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to the homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
},
heading: {
    marginBottom:'30px',
    fontSize: '2rem',
    color: 'red',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.2rem',
    textDecoration: 'underline',
    color: 'blue',
  },
};

export default Page404;
