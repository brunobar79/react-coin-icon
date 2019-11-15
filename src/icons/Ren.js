import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRen = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#00224D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.602 11.895l-.284-.467L7.82 13.44v-.305L19.999 6.1l.262.163.553.305.547.325-7.462 4.31-.284-.468-2.013 1.16zm0 4.431l-.284-.467L7.82 17.87v-.326l16.02-9.229.268.163.547.304.549.325-7.484 4.312-.262-.469-5.855 3.375zm-.284 1.73l.284.485 7.767-4.49.262.466 7.484-4.308-.547-.308-.553-.326-.262-.162L7.82 19.763v.323l3.498-2.03zm.284 2.683l-.284-.468-3.498 2.013v-.304l19.844-11.449.262.144.55.324.55.306-7.42 4.291-.266-.47-9.738 5.613zm-.284 1.748l.284.467 11.65-6.728.265.489 7.422-4.291-.553-.325-.525-.308-.286-.159L7.82 24.196v.305l3.498-2.012zm20.45-9.596l.408.244v.794l-8.659 4.98-.266-.468-11.649 6.729-.284-.468-3.498 2.013v-.304L31.488 12.73l.28.162zM9.062 27.896l.263.163 1.952-1.119.287.467L23.19 20.68l.283.486 8.702-5.043V14.56L9.061 27.896zm14.13-5.001l-9.68 5.59-.282-.466-1.993 1.159-.262-.163 21.202-12.241v1.567l-8.702 5.043-.283-.489zm-10.31 7.218l.267.162 2.012-1.159.262.488 7.77-4.494.282.468 8.702-5.022v-1.585L12.881 30.113zm2.197 1.258l-.285-.14 17.383-10.045v1.587l-8.702 5.02-.283-.467-5.856 3.375-.264-.467-1.994 1.137zm17.098-7.968l-15.471 8.925.285.162 1.994-1.159.262.489 3.945-2.279.283.471 8.702-5.024v-1.585zM18.901 33.587l-.266-.14 13.541-7.83v1.587l-8.702 5.023-.283-.488-2.015 1.177-.281-.466-1.994 1.137zm-3.09-21.285l7.482-4.312v-.001l-.55-.304-.548-.327-.285-.163L7.82 15.35v.306l3.498-2.012.284.466 3.943-2.275.266.467z"
      fill="#fff"
    />
  </Svg>
);

export default SvgRen;
