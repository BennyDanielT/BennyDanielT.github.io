import React, { useState, useEffect } from 'react';
import FallbackSpinner from './components/FallbackSpinner';
import Home from './components/Home';
import endpoints from './constants/endpoints';
import styled from 'styled-components';
import NavBarWithRouter from './components/NavBar';
import routesData from './routes.json';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  width: 100%;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const SectionWrapper = styled.div`
  padding-top: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

// Define an array of background image URLs for each section
const sectionBackgrounds = [
  'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f")',
  'url("images/home/mee.jpg")',
  'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")',
  'url("https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg")',
  'url("images/home/miless.jpg")',
  'url("https://images.hdqwalls.com/download/spiderman-2099-in-spider-man-across-the-spider-verse-hn-1920x1080.jpg")',
  'url("images/home/miles.jpg")',
  'url("https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg")',
];

function MainApp() {
  const [data, setData] = useState(routesData);

  useEffect(() => {
    // Fetch data and update state as needed
  }, []);

  return (
    <MainWrapper className='MainApp'>
      <MainContent className='main'>
        <NavBarWithRouter />
        {data &&
          data.sections.map((route, index) => {
            const SectionComponent = React.lazy(() =>
              import('./components/' + route.component),
            );
            const sectionBackground =
              sectionBackgrounds[index % sectionBackgrounds.length]; // Repeats backgrounds if there are more sections than images
            return (
              <React.Suspense
                fallback={<FallbackSpinner />}
                key={route.headerTitle}
              >
                <div id={route.sectionId}>
                  <SectionWrapper
                    style={{ backgroundImage: sectionBackground }}
                  >
                    <SectionComponent header={route.headerTitle} />
                  </SectionWrapper>
                </div>
              </React.Suspense>
            );
          })}
      </MainContent>
    </MainWrapper>
  );
}

export default MainApp;
