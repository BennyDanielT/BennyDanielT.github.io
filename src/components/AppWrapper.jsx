import React from 'react';
import Splash from './Splash';

function AppWrapper({ children }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a delay to show the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <div>
          {/* Your app content goes here */}
          {children}
        </div>
      )}
    </>
  );
}

export default AppWrapper;
