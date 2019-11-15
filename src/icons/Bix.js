import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBix = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#000" r={16} />
      <Path
        d="M16.941 24.577c.052.122.08.255.08.395 0 .568-.468 1.028-1.045 1.028s-1.045-.46-1.045-1.028c0-.136.027-.266.076-.385l-6.21-3.527a1.05 1.05 0 01-.752.314c-.577 0-1.045-.46-1.045-1.028 0-.48.333-.882.784-.996v-7.027A1.032 1.032 0 017 11.327c0-.568.468-1.028 1.045-1.028.346 0 .653.166.844.422l6.072-3.45a.975.975 0 01-.03-.243C14.931 6.46 15.4 6 15.976 6a1.037 1.037 0 011.017 1.265l6.108 3.47c.19-.264.501-.436.854-.436.577 0 1.045.46 1.045 1.028 0 .48-.335.884-.787.997l-.018 7.02c.461.107.805.515.805 1.002 0 .568-.468 1.028-1.045 1.028a1.05 1.05 0 01-.776-.34zm-.279-.38l6.287-3.572a1.013 1.013 0 01.02-.622l-6.065-3.9a1.24 1.24 0 01-.904.388 1.24 1.24 0 01-.979-.475l-5.977 4.027a1.013 1.013 0 01-.004.616l6.242 3.545a1.05 1.05 0 01.694-.26c.263 0 .503.095.686.252zm.119-16.513a1.05 1.05 0 01-.547.34l-.016 6.056a1.221 1.221 0 011.017 1.196c0 .151-.028.297-.08.43l6.07 3.904c.135-.13.305-.223.495-.266l.018-7.011a1.033 1.033 0 01-.816-1.16zm-1.605.005l-6.101 3.465a1.033 1.033 0 01-.816 1.18v7.005c.212.044.4.15.544.3l6.005-4.045a1.22 1.22 0 01.935-1.506l.016-6.054a1.047 1.047 0 01-.583-.345z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgBix;
