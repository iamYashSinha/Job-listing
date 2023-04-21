import React from 'react';

export default function Home() {
  
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#F2F2F2',
      fontSize: '1.5rem'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem' 
      }}>Welcome to Our Job Listing Site</h1>
      <p style={{ 
        marginBottom: '1.5rem',
        textAlign: 'center',
        maxWidth: '50ch'
      }}>
        Find your next job with us! We have a wide variety of job listings from top companies around the world.
      </p>
      <button style={{ 
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        backgroundColor: '#0077FF',
        color: '#FFF',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer'
      }}>Search Jobs</button>
    </div>
  );
}
