import React from 'react';
import { Link } from 'react-router-dom';  // Optional if using navigation

const Landing = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Swapnil Changes</h1>
        <p style={styles.subtitle}>Your Comprehensive Mental Health Analysis Platform</p>
      </header>
      
      <div style={styles.content}>
        <p style={styles.description}>
          We analyze your mental health using advanced technology, including audio and video input, 
          to assess your stress, anxiety, and depression levels. Start your journey towards better mental health now.
        </p>
        <Link to="/start" style={styles.button}>Get Started</Link> {/* Link for navigation */}
      </div>

      <footer style={styles.footer}>
        <p>© 2024 MindMatrics. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles object for basic styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666',
    marginTop: '10px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '40px',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#555',
    marginBottom: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '20px 0',
    color: '#999',
  }
};

export default Landing;
