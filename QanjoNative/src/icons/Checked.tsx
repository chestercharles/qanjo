import React from 'react';
import Svg, { Path } from 'react-native-svg';

type CheckedProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Checked: React.FC<CheckedProps> = ({
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
      <Path d="M9 11L12 14 22 4"></Path>
      <Path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></Path>
    </Svg>
  );
};

export default Checked;
