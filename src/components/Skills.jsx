import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  iconStyle: {
    height: 75,
    width: 80,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

const skills_data = {
  intro:
    "Assimilate new concepts and experiment with new technologies - that's an another weekday for me.\nThese are some of the major languages, technologies, tools and platforms I have worked with, check out my Github page for more:",
  skills: [
    {
      title: 'Languages & Databases',
      items: [
        {
          icon: 'images/skills/java.png',
          title: 'Java',
        },
        {
          icon: 'images/skills/js.png',
          title: 'JavaScript',
        },
        {
          icon: 'images/skills/python.png',
          title: 'Python',
        },
        {
          icon: 'images/skills/nosql.png',
          title: 'NoSQL',
        },
        {
          icon: 'images/skills/mysql.png',
          title: 'MySQL',
        },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      items: [
        {
          icon: 'images/skills/android_new.png',
          title: 'Android',
        },
        {
          icon: 'images/skills/react.png',
          title: 'React',
        },
        {
          icon: 'images/skills/nodejs.png',
          title: 'Nodejs',
        },
        {
          icon: 'images/skills/terraform.png',
          title: 'Terraform',
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        {
          icon: 'images/skills/android-studio.png',
          title: 'Android Studio',
        },
        {
          icon: 'images/skills/git.png',
          title: 'Git',
        },
        {
          icon: 'images/skills/docker.png',
          title: 'Docker',
        },
      ],
    },
  ],
};

function Skills(props) {
  const { header } = props;
  // const [jsondata, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      // .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {skills_data ? (
        <Fade>
          <div className='section-content-container'>
            <Container>
              {renderSkillsIntro(skills_data.intro)}
              {skills_data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: 'inline-block' }}>
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
