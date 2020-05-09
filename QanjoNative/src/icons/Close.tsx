import React from 'react';
import Svg, { Path } from 'react-native-svg';

type CloseProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Close: React.FC<CloseProps> = ({
  width = 24,
  height = 24,
  fill = 'none',
  color = 'currentColor',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <Path d="M18 6L6 18"></Path>
      <Path d="M6 6L18 18"></Path>
    </Svg>
  );
};

export default Close;
