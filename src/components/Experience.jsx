import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  // const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      // .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  const data_json = {
    experiences: [
      {
        title: 'Student Software Engineer',
        subtitle: 'Climative',
        workType: 'Co-Op / Internship',
        workDescription: [
          'Data Analytics & Machine Learning: Transformed and wrangled tax assessment datasets for 3 provinces in Canada, and subsequently executed Machine Learning models on datasets to generate actionable insights relevant to Energy Consumption and Carbon Emission.',
          'Backend Development: Automate bulk execution of audits for records in the order of 100,000 records in a energy simulation modelling software (Hot2000) using Python. In addition, I ran Extract, Transform and Load (ETL) jobs for each dataset,and worked on Data Engineering activities to derive data for a web based user interface.',
          'Automated Tests & CI/CD: Developed test scripts in Jest and PyTest to test Machine Learning model endpoints for processing test records in the order of 1000s, resulting in a 95% reduction in manual testing. Integrated tests with GitHub CI/CD Actions to create a streamlined workflow to merge pull requests when tests are successful.',
        ],
        dateText: 'January 2023 - April 2023',
        icon: {
          src: 'images/education/dalhousie.png',
        },
      },
      {
        title: 'Associate Engineer',
        subtitle: 'AstraZeneca Pvt. Ltd.',
        workType: 'Full Time',
        workDescription: [
          'Performance Metrics Generation: Formulated more than 300 metrics relevant to pharmaceutical data through requirement elicitation with stakeholders and product owners.',
          'Intelligent Cubes Generation: Constructed in-memory datasets (Intelligent Cubes) in MicroStrategy for dynamic aggregation and support for derived metrics which resulted in an improvement of 40% for the time taken to render data in the dashboards.',
          'Business Intelligence Development: Engineered dashboards with relevant Key Performance Indicators to assist stakeholders in making informed business decisions and deriving business insights from both historical and realtime data in the order of millions of records.',
          'Data Engineering: Implemented a new content pipeline consisting of multiple data layers using Spark to provision data relevant to pharmaceutical drugs in Amazon S3 buckets.',
          'Job Orchestration: Automated Data Extraction, Transformation and Load (ETL) jobs with Apache Airflow and eliminated manual data deployment tasks by more than 70%.',
        ],
        dateText: 'May 2018 – July 2021',
        icon: {
          src: 'images/education/dalhousie.png',
        },
      },
      {
        title: 'Research and Development Intern',
        subtitle: 'Glosys Technology Solutions Pvt. Ltd.',
        workType: 'Undergraduate Internship',
        workDescription: [
          'Devised a model to calculate optimal inventory volume that should be maintained in healthcare facilities thereby minimizing perishable equipment waste by at least 50%, leveraging Economic Order Quantity mathematical models and Machine Learning algorithms such as Neural Networks.',
          'Developed a web application for Healthcare personnel to maintain optimal inventory levels of perishable products with minimal human intervention, thereby reducing waste by at least 65 %.',
        ],
        dateText: 'December 2017 – April 2018',
        icon: {
          src: 'images/education/dalhousie.png',
        },
      },
    ],
  };
  let data=data_json.experiences;

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item) => (
                  <Fade>
                    <TimelineItem
                      key={item.title + item.dateText}
                      dateText={item.dateText}
                      dateInnerStyle={{ background: theme.accentColor }}
                      style={styles.itemStyle}
                      bodyContainerStyle={{ color: theme.color }}
                    >
                      <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          {item.subtitle}
                        </h4>
                        {item.workType && (
                        <h5 style={styles.inlineChild}>
                    &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                        )}
                      </div>
                      <ul style={styles.ulStyle}>
                        {item.workDescription.map((point) => (
                          <div key={point}>
                            <li>
                              <ReactMarkdown
                                children={point}
                                components={{
                                  p: 'span',
                                }}
                              />
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </TimelineItem>
                  </Fade>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;
