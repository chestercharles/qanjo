import React from 'react';
import Svg, { Path } from 'react-native-svg';

type EditProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Edit: React.FC<EditProps> = ({
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
      <Path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></Path>
      <Path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></Path>
    </Svg>
  );
};

export default Edit;
