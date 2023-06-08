import React, { useState, useEffect, useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import ComputersCanvas from './Computers';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function playAudio() {
  const audio = new Audio('/music/lofi.mp3');
  audio.play();
}

const styles = {
  nameStyle: {
    position: 'relative',
    top: '5%',
    fontSize: '4.25em',
    paddingBottom: '2.5%',
    color: '#59cbe8',
    // width: '100%',
  },
  inlineChild: {
    display: 'inline-block',
    paddingBottom: '7.5%',
    color: '#fff ',
    position: 'relative',
    top: '5%',
  },
  mainContainer: {
    // minHeight: '100vh',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'left top, right top',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '5%',
    position: 'relative',
    top: '-20%',
    right: '-75%',
    transform: 'translateY(-50%)',
    '@media (max-width: 768px)': {
      position: 'relative',
      // top: 'auto',
      // right: 'auto',
      transform: 'none',
      marginTop: '20px',
      alignSelf: 'center',
    },
  },

  badge: {
    width: '120px',
    height: '120px',
    margin: '30px 10px',
  },
};

function Home() {
  const [data, setData] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  useEffect(() => {
    async function requestAudioPermission() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        console.log('Audio permission granted:', stream);
        playAudio();
      } catch (error) {
        console.log('Audio permission denied:', error);
      }
    }
    requestAudioPermission();
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <Fade>
      <div className='section-content-container'>
        <div style={styles.mainContainer}>
          {data ? (
            <>
              <h1 style={{ ...styles.nameStyle }}>{data.name}</h1>

              <style>{`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.5);
                }
                100% {
                  transform: scale(1);
                }
              }

              @keyframes slide-in {
                from {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0%);
                  opacity: 1;
                }
              }
            `}</style>

              <div style={styles.inlineChild}>
                <h2 style={styles.inlineChild}> </h2>
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: data?.roles,
                  }}
                />
              </div>
              <ComputersCanvas />

              <Social />
            </>
          ) : (
            <FallbackSpinner />
          )}

          <div style={styles.imageContainer}>
            <img
              src='/images/home/aws-certified-cloud-practitioner.png'
              style={{
                ...styles.badge,
                animation: `${
                  isImageLoaded ? 'pulse 1.5s ease-out infinite' : ''
                }`,
              }}
              onLoad={handleImageLoad}
              alt='AWS Certified Cloud Practitioner'
            />
            <img
              src='/images/home/aws-certified-solutions-architect-associate.png'
              style={{
                ...styles.badge,
                animation: `${
                  isImageLoaded ? 'pulse 1.5s ease-out infinite' : ''
                }`,
              }}
              onLoad={handleImageLoad}
              alt='AWS Certified Solutions Architect Associate'
            />
            <img
              src='/images/home/hashicorp-certified-terraform-associate-002.png'
              style={{
                ...styles.badge,
                animation: `${
                  isImageLoaded ? 'pulse 1.5s ease-out infinite' : ''
                }`,
              }}
              onLoad={handleImageLoad}
              alt='HashiCorp Certified Terraform Associate'
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
