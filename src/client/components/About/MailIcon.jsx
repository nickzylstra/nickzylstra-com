import React from 'react';
import SocialIcon from './SocialIcon.jsx';

const pathD = 'M 502.3 190.8 c 3.9 -3.1 9.7 -0.2 9.7 4.7 V 400 c 0 26.5 -21.5 48 -48 48 H 48 c -26.5 0 -48 -21.5 -48 -48 V 195.6 c 0 -5 5.7 -7.8 9.7 -4.7 c 22.4 17.4 52.1 39.5 154.1 113.6 c 21.1 15.4 56.7 47.8 92.2 47.6 c 35.7 0.3 72 -32.8 92.3 -47.6 c 102 -74.1 131.6 -96.3 154 -113.7 Z M 256 320 c 23.2 0.4 56.6 -29.2 73.4 -41.4 c 132.7 -96.3 142.8 -104.7 173.4 -128.7 c 5.8 -4.5 9.2 -11.5 9.2 -18.9 v -19 c 0 -26.5 -21.5 -48 -48 -48 H 48 C 21.5 64 0 85.5 0 112 v 19 c 0 7.4 3.4 14.3 9.2 18.9 c 30.6 23.9 40.7 32.4 173.4 128.7 c 16.8 12.2 50.2 41.8 73.4 41.4 Z';

const MailIcon = () => (
  <SocialIcon
    url="mailto:nick.zylstra@gmail.com"
    viewBox="0 0 496 512"
    pathD={pathD}
  />
);

export default MailIcon;
