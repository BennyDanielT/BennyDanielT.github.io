import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';
import aboutSection from './JSON/about.json';
const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'justify',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    marginTop: '-80px', // adjust this value to your liking
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(aboutSection);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  // useEffect(() => {
  //   fetch(endpoints.about, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => err);
  // }, []);

  return (
    <>
      <Header title='Who am I ?' />
      <div className='section-content-container'>
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                </Col>
                <Col style={styles.introImageContainer}>
                  <img
                    id='about'
                    className='rotate-image'
                    src='/images/about/Ben_Cal.jpeg'
                    alt='profile'
                    style={{
                      position: 'relative',
                      borderRadius: '80%',
                      marginTop: '10px',
                    }}
                  />
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
