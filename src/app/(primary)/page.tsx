'use client'

import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRef } from 'react'
import { signInWithGoogle, signInWithEmailPassword, createAccountWithEmailPassword, signInWithGithub } from '../../utilities/firebaseClient';

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    }
  }, []);
  

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (mounted.current) {
      try {
        const userCredential = await createAccountWithEmailPassword(email, password);
        var user = userCredential.user;
  
        if(user){
          try {
            const idToken = await user.getIdToken(true);
            console.log('Token: ', idToken);
            window.location.href = '/dataroom';
          } catch(error) {
            console.log('Error retrieving token', error);
          }
        } 
      } catch(error: any) {
        console.error("Error signing up with email and password", error.message);
      }
    }
  }

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (mounted.current) {
      try {
        const userCredential = await signInWithEmailPassword(email, password);
        var user = userCredential.user;
    
        if(user){
          try {
            const idToken = await user.getIdToken(true);
            console.log('Token: ', idToken);
            window.location.href = '/dataroom';
          } catch(error) {
            console.log('Error retrieving token', error);
          }
        }   
      } catch(error: any) {
        console.error("Error signing in with email and password", error.message);
      }
    }
  }

  const handleGoogleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await signInWithGoogle();
  
      var user = result.user;
      if(user){
        try {
          const idToken = await user.getIdToken(true);
          console.log('Token: ', idToken);
          window.location.href = '/dataroom';
        } catch(error) {
          console.log('Error retrieving token', error);
        }
      } 
    } catch(error: any) {
      console.error("Error signing in with Google", error.message);
    }
  }

  const handleGithubSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await signInWithGithub();
  
      var user = result.user;
      if(user){
        try {
          const idToken = await user.getIdToken(true);
          console.log('Token: ', idToken);
          window.location.href = '/dataroom';
        } catch(error) {
          console.log('Error retrieving token', error);
        }
      } 
    } catch(error: any) {
      console.error("Error signing in with Google", error.message);
    }
  }

  return (
    <main>
  <Head>
    <title>iDeFi.ai</title>
  </Head>
  <section className='bg-black'>
    <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
      <Image src='/cube.gif' alt="Company Logo" width={150} height={100} />
      <h1 className='mt-4 text-white'>iDeFi.AI</h1>
      <p className='mt-2 text-sm text-white-800'>
        A New Era of Financial Security and Literacy
      </p>
      <br></br>
      <hr style={{border: 'none', borderBottom: '3px solid grey', width: '100%'}} />
      <form onSubmit={(evt) => { 
        evt.preventDefault(); // prevent the page reload
        handleSignIn(evt);
      }}>
        <h3 style={{fontWeight: 'bold'}}>Access the Data Room</h3>
        <br />
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.25rem'}}>
            Email:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.25rem'}}>
            Password:
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <button type='button' onClick={(evt) => { 
              evt.preventDefault(); // prevent the page reload
              handleSignUp(evt);
            }} className="neon-button">
              Sign Up
            </button> 
            <input type='submit' value='Sign In' className="neon-button" />
          </div>
        </div>
      </form>
      <div className="google-signin-button">
        <button onClick={(evt) => { 
            evt.preventDefault(); // prevent the page from reload
            handleGoogleSignIn(evt);
          }}>
          <Image 
            src='/google_logo.png' 
            alt='Google logo'
            width={25} 
            height={25} 
          />
          <span>Sign In with Google</span>
        </button>
      </div>
      <div className="github-signin-button">
        <button onClick={(evt) => { 
            evt.preventDefault(); // prevent the page from reload
            handleGithubSignIn(evt);
          }}>
          <Image 
            src='/github_logo.png' 
            alt='Github logo'
            width={25} 
            height={25} 
          />
          <span>Sign In with Github</span>
        </button>
      </div>
    </div>
  </section>
</main>
  )
}
