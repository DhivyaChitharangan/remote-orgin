// SVGIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SVGIcon = ({ color, size }:any) => {
  return (
    
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      fill={color}
    />
  </Svg>
  );
};

export default SVGIcon;
