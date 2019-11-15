import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgIop = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#0CAFA5" />
      <G fill="#FFF">
        <Path d="M8.413 11.919c-.033-.02-.06-.004-.06.035v2.302a.134.134 0 00.06.105l2.91 1.682a.134.134 0 01.06.105v8.33a.135.135 0 00.062.105l1.993 1.15c.033.02.06.004.06-.035v-10.77a.134.134 0 00-.06-.106l-5.025-2.903zm15.174 0c.033-.02.06-.004.06.035v2.302a.134.134 0 01-.06.105l-2.91 1.68a.134.134 0 00-.06.106v8.33a.135.135 0 01-.061.106l-1.993 1.15c-.034.02-.061.004-.061-.035v-10.77a.135.135 0 01.06-.106l5.025-2.903z" />
        <Path d="M23.98 7.503c0-.038-.027-.054-.06-.035l-7.86 4.546a.134.134 0 01-.12 0L8.08 7.468c-.034-.02-.061-.003-.061.035v2.302a.134.134 0 00.06.105l6.804 3.934a.135.135 0 01.06.105v14.285a.134.134 0 00.061.106l.935.54a.138.138 0 00.122 0l.935-.54a.134.134 0 00.06-.106V13.95a.135.135 0 01.061-.105L23.92 9.91a.134.134 0 00.06-.106v-2.3zm-7.944 5.816c-.008 0-.011-.006-.007-.013.004-.007.01-.007.014 0s0 .013-.007.013z" />
        <Path d="M15.012 7.202a.088.088 0 00-.069.084v2.873a.135.135 0 00.061.105l.935.54c.038.02.083.02.122 0l.935-.54a.135.135 0 00.06-.105V7.285a.087.087 0 00-.068-.084l-.92-.169a.456.456 0 00-.137 0l-.919.17z" />
      </G>
    </G>
  </Svg>
);

export default SvgIop;
