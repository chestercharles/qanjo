import React from 'react';
import Svg, { Path } from 'react-native-svg';

type ListProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const List: React.FC<ListProps> = ({
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
      <Path d="M8 6L21 6"></Path>
      <Path d="M8 12L21 12"></Path>
      <Path d="M8 18L21 18"></Path>
      <Path d="M3 6L3.01 6"></Path>
      <Path d="M3 12L3.01 12"></Path>
      <Path d="M3 18L3.01 18"></Path>
    </Svg>
  );
};

export default List;
