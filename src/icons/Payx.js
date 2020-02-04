import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgPayx(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#630" />
        <G fill="#FFF">
          <Path d="M11.688 10.063L12.938 7l8.562.031c1.25.094 2.75.094 3.594 1.157 1 1.156.781 2.812.281 4.124A8.712 8.712 0 0119.031 18c-2.062.313-4.156.219-6.25.219.417-1.017.834-2.038 1.25-3.063 1.719 0 3.469.094 5.219-.187 1.594-.406 3.063-2 2.813-3.75-.157-.75-1-1.094-1.72-1.094-2.874-.125-5.75 0-8.624-.063h-.031z" />
          <Path d="M8 10.906h10.156l-1.343 3.469H6.624L8 10.937v-.03zm1.625 4.25h3.531L9.47 24.531H6l3.656-9.375h-.031z" />
        </G>
      </G>
    </Svg>
  );
}

const MemoSvgPayx = React.memo(SvgPayx);
export default MemoSvgPayx;
