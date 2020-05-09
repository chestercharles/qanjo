import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type NotesProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Notes: React.FC<NotesProps> = ({
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
      <Path d="M9 18V5l12-2v13"></Path>
      <Circle cx="6" cy="18" r="3"></Circle>
      <Circle cx="18" cy="16" r="3"></Circle>
    </Svg>
  );
};

export default Notes;
