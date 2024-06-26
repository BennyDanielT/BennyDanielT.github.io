import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import '../css/icon.css';

const styles = {
  iconStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 40,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className='social'>
      {data
        ? data.social.map((social) => (
            <SocialIcon
              key={social.network}
              style={styles.iconStyle}
              url={social.href}
              network={social.network}
              bgColor={social.socialIconBgColor}
              target='_blank'
              rel='noopener'
            />
          ))
        : null}
    </div>
  );
}

export default Social;
