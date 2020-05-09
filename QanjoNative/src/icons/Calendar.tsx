import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type CalendarProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  color?: string;
};

const Calendar: React.FC<CalendarProps> = ({
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
      <Rect width="18" height="18" x="3" y="4" rx="2" ry="2"></Rect>
      <Path d="M16 2L16 6"></Path>
      <Path d="M8 2L8 6"></Path>
      <Path d="M3 10L21 10"></Path>
    </Svg>
  );
};

export default Calendar;
