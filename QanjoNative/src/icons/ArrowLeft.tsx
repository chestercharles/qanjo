import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type ArrowLeftProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const ArrowLeft: React.FC<ArrowLeftProps> = ({
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
      <Path d="M19 12L5 12"></Path>
      <Path d="M12 19L5 12 12 5"></Path>
    </Svg>
  );
};

export default ArrowLeft;
