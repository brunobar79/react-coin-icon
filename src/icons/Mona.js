import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgMona = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#DEC799" />
      <Path
        fill="#FFF"
        d="M23.53 13.414L22.105 7l-2.797 4.414a14.096 14.096 0 00-6.617 0L9.902 7l-1.43 6.414C6.937 14.642 6 16.247 6 18.009c0 3.86 4.476 6.989 9.997 6.989s9.997-3.13 9.997-6.989c-.001-1.762-.93-3.367-2.465-4.595zM10.442 16.35h-.666l1.627-1.876h1.184l-2.145 1.876zm5.504 4.584l-2.766-4.872.683-.39.617 1.085h3.021l.644-1.09.676.402-2.875 4.865zm5.613-4.584l-2.146-1.876h1.192l1.625 1.876h-.671zm-5.6 3.015l-1.033-1.82h2.108l-1.075 1.82z"
      />
    </G>
  </Svg>
);

export default SvgMona;
