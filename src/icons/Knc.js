import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnc(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#31CB9E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.101 5.058l-8.518 6.51c-.37.28-.586.72-.583 1.184V26.55c0 .46.213.905.583 1.184l8.518 6.502a1.488 1.488 0 001.797 0l8.52-6.51c.369-.28.585-.72.582-1.183v-13.8c0-.464-.215-.901-.583-1.183L20.9 5.058a1.464 1.464 0 00-1.797 0zm-1.575 15.698l10.948 6.288-8.248 6.296-2.7-12.583zm10.948-8.506l-8.24-6.295-2.708 12.583 10.948-6.288zm-10.637 7.397l11.047-6.353v12.698l-11.047-6.345zM18.962 6.57l-7.846 5.991v14.17l7.846 5.991-2.807-13.076 2.807-13.076z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgKnc = React.memo(SvgKnc);
export default MemoSvgKnc;
