import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import Fade from 'react-reveal';
import Header from './Header';
import Typewriter from 'typewriter-effect';

import '../css/blog.css';
import blogSection from './JSON/blog.json';

const Blog = (props) => {
  const { header } = props;
  const [data, setData] = useState(blogSection);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  return (
    <>
      <Header title={header} />
      <div className='centered-container'>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            delay: 20,
            strings: data.about,
          }}
        />
      </div>
    </>
  );
};

Blog.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Blog;
