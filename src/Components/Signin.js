import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';



const Signin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem',
    },
    button: {
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      backgroundColor: '#4285F4',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
    },
  };

  
  return (
    <div style={styles.container}>
      {user ? (
        <div >
          <p>Signed in successfully!</p>
          <button style={styles.button} onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <button style={styles.button} onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Signin;
