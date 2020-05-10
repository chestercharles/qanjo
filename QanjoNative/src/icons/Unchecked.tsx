import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type UncheckedProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Unchecked: React.FC<UncheckedProps> = ({
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
      <Rect width="18" height="18" x="3" y="3" rx="2" ry="2"></Rect>
    </Svg>
  );
};

export default Unchecked;
