import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgPirl = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#96b73d" r={16} />
      <Path
        d="M11.594 16.105c.086.258.213.5.377.718l-2.493-2.518a1.399 1.399 0 010-1.97l3.145-3.147c.065-.048.127-.1.187-.154l.091-.08 2.547-2.549a1.376 1.376 0 011.953.003l8.343 8.403a1.408 1.408 0 01-.151 1.801 1.423 1.423 0 01-1.78.195l-7.37-7.44-.008-.01-.024-.026-3.943 3.944-.06.05a.286.286 0 01-.007.008l3.896 3.927a1.399 1.399 0 01-.62 2.332 1.377 1.377 0 01-1.337-.361l-1.996-2.01c-.029-.026-.058-.06-.094-.096l-.092-.092a2.586 2.586 0 01-.187-.237l.045.053-.03-.039a2.531 2.531 0 01-.392-.705zm8.146 2.573l-3.901-3.929a1.399 1.399 0 010-1.97 1.378 1.378 0 011.956.004l1.997 2.01c.028.025.057.06.094.095l.091.092c.052.058.1.12.144.183l.022.027a4.957 4.957 0 00-.086-.119l2.61 2.627a1.4 1.4 0 010 1.972l-3.147 3.148a2.362 2.362 0 00-.19.151l-2.624 2.624a1.376 1.376 0 01-1.954 0l-8.477-8.547a1.408 1.408 0 01.185-1.876 1.383 1.383 0 011.872.01l7.384 7.455.025.03 3.935-3.934.058-.047a.352.352 0 01.006-.006z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgPirl;
