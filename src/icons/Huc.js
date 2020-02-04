import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgHuc(props) {
  return (
    <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} fill="#ffc018" r={16} />
        <Path d="M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z" fill="#fff" />
      </G>
    </Svg>
  );
}

const MemoSvgHuc = React.memo(SvgHuc);
export default MemoSvgHuc;
