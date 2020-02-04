import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDgx(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#E0A83A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 19.9L20 6.4l13.5 13.5-4.91 4.91L20 16.217l-8.592 8.591L6.5 19.9zM20 18.673l-7.364 7.364L20 33.4l7.363-7.363L20 18.672zm0 2.95l4.415 4.413L20 30.445l-4.414-4.407L20 21.622z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgDgx = React.memo(SvgDgx);
export default MemoSvgDgx;
