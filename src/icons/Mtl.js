import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgMtl(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#1E1F25" />
        <Path
          fill="#FFF"
          d="M8 9h1v14H8V9zm5 3h1v9h-1v-9zm5 2h1v5h-1v-5zm5-5h1v14h-1V9z"
        />
      </G>
    </Svg>
  );
}

const MemoSvgMtl = React.memo(SvgMtl);
export default MemoSvgMtl;
