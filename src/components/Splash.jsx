import React from 'react';
import '../css/navbar.css';

function Splash() {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [isTextAnimated, setIsTextAnimated] = React.useState(false);
  const backgroundStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    backgroundImage: 'url("images/home/star.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // width: '100vw',
  };
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  React.useEffect(() => {
    if (isImageLoaded) {
      setIsTextAnimated(true);
    }
  }, [isImageLoaded]);

  return (
    <div style={backgroundStyles}>
      <img
        src='/images/home/tech_knight_danny.png'
        alt='Logo'
        style={{
          width: '350px',
          animation: `${isImageLoaded ? 'pulse 1.5s ease-out infinite' : ''}`,
        }}
        onLoad={handleImageLoad}
      />

      {/* <p className='glitch'>Engaging Hyperdrive Engines...</p> */}

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
    </div>
  );
}

export default Splash;
