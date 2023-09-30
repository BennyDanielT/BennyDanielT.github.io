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
  min-height: 50vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  // overflow-y: scroll;
`;
const SectionWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
`;

function MainApp() {
  const [data, setData] = useState(routesData);

  return (
    <MainWrapper className='MainApp'>
      <MainContent className='main'>
        <NavBarWithRouter />
        {/* <Home /> */}
        {data &&
          data.sections.map((route) => {
            const SectionComponent = React.lazy(() =>
              import('./components/' + route.component),
            );
            return (
              <React.Suspense
                fallback={<FallbackSpinner />}
                key={route.headerTitle}
              >
                <div id={route.sectionId}>
                  <SectionWrapper>
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
