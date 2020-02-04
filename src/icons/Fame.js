import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Use
} from "react-native-svg";

function SvgFame(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
      <Defs>
        <LinearGradient
          x1="25.004%"
          y1="93.294%"
          x2="74.996%"
          y2="6.507%"
          id="fame_svg__b"
        >
          <Stop stopColor="#24FF00" offset="0%" />
          <Stop stopColor="#F5CDFF" stopOpacity={0.502} offset="100%" />
        </LinearGradient>
        <Path
          d="M2.814 10.078C8.294.586 20.43-2.666 29.922 2.814c9.492 5.48 12.744 17.617 7.264 27.108-5.48 9.492-17.617 12.744-27.108 7.264C.586 31.706-2.666 19.57 2.814 10.078z"
          id="fame_svg__a"
        />
      </Defs>
      <G fill="none">
        <Use fill="#FFF" xlinkHref="#fame_svg__a" />
        <Use fill="url(#fame_svg__b)" xlinkHref="#fame_svg__a" />
        <Path
          d="M23.988 8.887H16.75c-1.777 0-3.266.53-4.321 1.605-1.047 1.067-1.559 2.56-1.559 4.338v10.765c0 3.24 2.7 5.915 5.963 5.915h.091c2.738-.043 5.091-2.005 5.694-4.61l.017-.074h-.024c3.262 0 5.962-2.675 5.962-5.915v-.1a6.204 6.204 0 00-.318-1.85l-.012-.036.01-.01a5.988 5.988 0 001.668-4.113c0-3.261-2.666-5.915-5.934-5.915z"
          fill="#000"
        />
        <Path
          d="M16.751 10.474h7.237c2.393 0 4.347 1.945 4.347 4.328 0 1.256-.574 2.478-1.543 3.315l-.434.375.299.72c.207.502.33 1.106.33 1.699 0 2.36-1.986 4.327-4.375 4.327h-1.383l-.064.725c-.194 2.203-2.104 3.96-4.331 3.96-2.39 0-4.375-1.968-4.375-4.328V14.83c0-1.39.375-2.482 1.104-3.226.732-.745 1.81-1.13 3.188-1.13z"
          fill="#FF00D6"
        />
      </G>
    </Svg>
  );
}

const MemoSvgFame = React.memo(SvgFame);
export default MemoSvgFame;
