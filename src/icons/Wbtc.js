import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgWbtc = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#F90" cx={16} cy={16} r={16} />
      <Path
        d="M18.445 13.47c0 1.737-2.715 1.526-3.578 1.526v-3.06c.863 0 3.578-.272 3.578 1.534m.71 4.751c0 1.9-3.255 1.682-4.291 1.682v-3.37c1.036.003 4.29-.295 4.29 1.688m2.143-5.437c-.174-1.812-1.737-2.42-3.715-2.606V7.68h-1.528v2.45c-.403 0-.814 0-1.222.014V7.68h-1.52v2.513h-3.098v1.636s1.13-.02 1.112 0a.79.79 0 0 1 .869.671v6.882a.542.542 0 0 1-.574.507h-.005c.02.017-1.112 0-1.112 0l-.304 1.826h3.086v2.554h1.529v-2.516h1.221v2.504h1.532v-2.524c2.582-.157 4.383-.794 4.609-3.21.182-1.946-.733-2.815-2.195-3.165.89-.452 1.448-1.248 1.315-2.574M16 29.6a13.545 13.545 0 0 1-8.713-3.157.39.39 0 0 1-.022-.577l.285-.285a.41.41 0 0 1 .551-.022A12.35 12.35 0 0 0 16 28.4a12.35 12.35 0 0 0 7.899-2.841.41.41 0 0 1 .55.022l.286.285a.39.39 0 0 1-.022.577A13.545 13.545 0 0 1 16 29.6zm9.58-5.15a.41.41 0 0 1-.021-.551A12.35 12.35 0 0 0 28.4 16a12.35 12.35 0 0 0-2.841-7.899.41.41 0 0 1 .022-.55l.285-.286a.39.39 0 0 1 .577.022A13.545 13.545 0 0 1 29.6 16c0 3.315-1.186 6.353-3.157 8.713a.39.39 0 0 1-.577.022l-.285-.285zM6.42 7.55a.41.41 0 0 1 .02.551A12.35 12.35 0 0 0 3.6 16a12.35 12.35 0 0 0 2.84 7.899.41.41 0 0 1-.02.55l-.286.286a.39.39 0 0 1-.577-.022A13.545 13.545 0 0 1 2.4 16c0-3.315 1.186-6.353 3.157-8.713a.39.39 0 0 1 .577-.022l.285.285zM16 2.4c3.315 0 6.353 1.186 8.713 3.157a.39.39 0 0 1 .022.577l-.285.285a.41.41 0 0 1-.551.022A12.35 12.35 0 0 0 16 3.6a12.35 12.35 0 0 0-7.899 2.84.41.41 0 0 1-.55-.02l-.286-.286a.39.39 0 0 1 .022-.577A13.545 13.545 0 0 1 16 2.4z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgWbtc;