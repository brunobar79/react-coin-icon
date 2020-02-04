import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBnt(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#00224D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.012 6.75l6.13 3.488-6.13 3.488-6.016-3.488 6.016-3.488zm7.435 12.66l-6.13 3.487v-6.976l6.13-3.488v6.976zm-6.13 5.964l8.173-4.614v6.976l-8.173 4.614v-6.976zm-8.627-12.94l6.13 3.487v6.976l-6.13-3.487v-6.977zm0 16.428v-6.977l6.13 3.488v6.977l-6.13-3.488z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgBnt = React.memo(SvgBnt);
export default MemoSvgBnt;
