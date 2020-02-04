import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgUtk(props) {
  return (
    <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} fill="#30367a" r={16} />
        <Path
          d="M14.353 22.298V9.028H10.5V6h11v3.028h-3.853v13.27zM13.466 26c-1.989 0-2.93-.956-2.93-2.978V9.896h2.894v12.992c0 .32.105.426.419.426h4.339c.314 0 .42-.107.42-.426V9.896H21.5v13.126c0 2.022-.942 2.978-2.93 2.978z"
          fill="#fff"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

const MemoSvgUtk = React.memo(SvgUtk);
export default MemoSvgUtk;
