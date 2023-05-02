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
    fontSize: '4.5em',
    paddingBottom: '2.5%',
    color: '#59cbe8',
  },
  inlineChild: {
    display: 'inline-block',
    paddingBottom: '5.5%',

    color: '#fff ',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'left top, right top',
  },
};

function Home() {
  const [data, setData] = useState(null);

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

  return data ? (
    <Fade>
      {/* <audio src='/music/lofi.mp3' autoplay loop></audio> */}
      <div style={styles.mainContainer}>
        {/* <img
          src='/images/home/tech_knight_danny2.png'
          alt='profile'
          style={styles.guardImage}
        />
        <img
          src='/images/home/tech_knight_danny2.png'
          alt='profile'
          style={styles.guardImage2}
        /> */}
        <h1 style={styles.nameStyle}>{data?.name}</h1>
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
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
