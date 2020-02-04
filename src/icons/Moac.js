import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgMoac(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#000" />
        <Path
          d="M15.792 15.792L9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215z"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
}

const MemoSvgMoac = React.memo(SvgMoac);
export default MemoSvgMoac;
