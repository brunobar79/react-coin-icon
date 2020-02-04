import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSnx(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#25292E"
      />
      <Path
        d="M17.945 20.948a5.948 5.948 0 110-11.896h8.747a1.307 1.307 0 010 2.614h-8.747a3.335 3.335 0 000 6.67h4.106a5.948 5.948 0 110 11.895h-8.748a1.307 1.307 0 110-2.613h8.747a3.335 3.335 0 000-6.67h-4.105z"
        fill="#fff"
      />
      <Path
        d="M14.336 29.704l-2.124-1.522 13.36-18.646 2.125 1.522-13.361 18.646z"
        fill="#fff"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

const MemoSvgSnx = React.memo(SvgSnx);
export default MemoSvgSnx;
