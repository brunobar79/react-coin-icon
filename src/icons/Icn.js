import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgIcn(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} r={16} fill="#4C6F8C" />
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M20.833 7H23.5v18h-2.667V7zm-4.444 9h2.667v9h-2.667v-9zm-4.445-4.5h2.667V25h-2.667V11.5zm-4.444 9h2.667V25H7.5v-4.5z"
        />
      </G>
    </Svg>
  );
}

const MemoSvgIcn = React.memo(SvgIcn);
export default MemoSvgIcn;
