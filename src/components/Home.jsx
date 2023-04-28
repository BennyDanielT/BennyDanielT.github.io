import React, { useState, useEffect, useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import ComputersCanvas from './Computers';
import ParticlesComponent from './Particle';


const styles = {
  nameStyle: {
    fontSize: '5em',
    paddingBottom: '5%',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        {/* <ParticlesComponent /> */}

        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row', paddingBottom: '4%' }}>
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
