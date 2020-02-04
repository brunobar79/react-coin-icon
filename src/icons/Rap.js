import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgRap(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#000" />
        <Path
          d="M12.478 6.435v19.478H9V6h3.478v.435zM14.957 6h1.956c4.044 0 6.74 2.565 6.74 6.217 0 2.957-1.61 5.218-4.523 5.957l5.087 7.739H20.13L13.174 15.13h3.348c2.217 0 3.608-1 3.608-2.956 0-1.957-1.39-2.957-3.608-2.957H15V6h-.043z"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
}

const MemoSvgRap = React.memo(SvgRap);
export default MemoSvgRap;
