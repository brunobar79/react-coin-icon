import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgKin = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#005FFF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 5.5c.239 0 .432.19.432.423a.428.428 0 01-.432.423.428.428 0 01-.432-.422c0-.234.193-.424.432-.424zm-.088 4.113a.428.428 0 01-.13-.302.43.43 0 01.436-.425.43.43 0 01.432.425.428.428 0 01-.434.422.42.42 0 01-.304-.12zm-2.352 1.994a.736.736 0 00.001-.57.766.766 0 00-.99-.4.736.736 0 00-.408.967.764.764 0 001.397.003zm2.408 2.572a.825.825 0 01-.834-.817v-.484c0-.451.374-.816.834-.816h.496c.461 0 .834.365.834.817v.484a.825.825 0 01-.834.816h-.496zm3.494 1.905v-1.3c0-.45.374-.817.835-.817h.496c.461 0 .834.366.834.817v.484c0 .45-.374.817-.834.817l-1.331-.001zm-6.492 6.562v-6.35h1.483c.32 0 .58.256.58.57v.549c0 .596.516 1.107 1.119 1.107.602 0 1.06-.511 1.06-1.107v-.527c0-.327.267-.593.6-.593h1.65V17.9a.597.597 0 01-.599.593h-.56a1.086 1.086 0 00-1.092 1.077c0 .595.56 1.077 1.162 1.077h.494c.33 0 .596.264.596.588v1.41h1.33c.461 0 .834.367.834.818v.484c0 .45-.374.817-.834.817h-.496a.825.825 0 01-.834-.817v-1.09h-1.657a.59.59 0 01-.595-.587v-.543a1.12 1.12 0 00-1.11-1.1c-.602 0-1.07.528-1.07 1.154v.493a.586.586 0 01-.59.584H16.97v1.089c0 .45-.373.817-.835.817h-.494a.825.825 0 01-.835-.817v-.484c0-.451.373-.817.835-.817h1.329zm-1.33-6.562h1.33v-1.3a.826.826 0 00-.835-.817h-.494a.826.826 0 00-.835.817v.484a.825.825 0 00.835.816zm3.742 10.772a.825.825 0 00.586.236h.496a.825.825 0 00.834-.816v-.485a.826.826 0 00-.834-.817h-.496a.827.827 0 00-.834.817v.483c.002.22.091.429.248.582zm7.08-6.327a.825.825 0 01-.835-.816v-.484c0-.451.373-.817.835-.817h.494c.461 0 .835.366.835.817v.484c0 .45-.374.817-.835.817l-.494-.001zm-13.788-.236a.825.825 0 00.586.236h.495a.827.827 0 00.835-.816v-.484a.827.827 0 00-.835-.817h-.495a.826.826 0 00-.834.817v.484a.825.825 0 00.248.58zm11.812 7.256a.734.734 0 01-.409.968.765.765 0 01-.989-.401.736.736 0 01.41-.969.765.765 0 01.988.402zm3.363-11.646a.764.764 0 011.398.002.735.735 0 01-.409.97.764.764 0 01-.988-.401.73.73 0 010-.57zM11.595 22.28a.735.735 0 00-.41.968.765.765 0 001.399.002.735.735 0 000-.57.763.763 0 00-.989-.4zm-.41-6.373a.765.765 0 011.399-.003.735.735 0 010 .57.764.764 0 01-1.397.004.736.736 0 01-.002-.571zm11.688-4.868a.736.736 0 00.409.967.764.764 0 00.989-.4.736.736 0 00-.409-.968.765.765 0 00-.989.4zm5.965 11.241a.736.736 0 01.411.968.765.765 0 01-1.397.003.735.735 0 01-.002-.57.763.763 0 01.988-.4zM15.73 27.76a.734.734 0 00.409.968.765.765 0 00.989-.401.736.736 0 00-.409-.968.764.764 0 00-.989.401zm12.15-1.181c.17.166.17.435 0 .6a.44.44 0 01-.611 0 .416.416 0 010-.599.439.439 0 01.611-.001zM13.164 12.575a.419.419 0 000-.6.439.439 0 00-.612.001.416.416 0 000 .599.44.44 0 00.612 0zm13.978-.3c0-.112.045-.22.127-.299a.438.438 0 01.611 0 .416.416 0 010 .599.44.44 0 01-.611 0 .416.416 0 01-.127-.3zM12.426 26.88c0 .112.045.22.126.299a.44.44 0 00.612 0 .417.417 0 000-.599.44.44 0 00-.612 0 .416.416 0 00-.127.3zm18.395-7.833c.238 0 .432.19.432.424a.428.428 0 01-.432.422.428.428 0 01-.432-.422.428.428 0 01.432-.424zm-20.56.424a.43.43 0 00-.432-.424c-.24 0-.434.19-.434.424a.428.428 0 00.434.422.428.428 0 00.432-.422zm9.521 10.373a.428.428 0 00.434.422.429.429 0 00.434-.423.43.43 0 00-.432-.423.43.43 0 00-.436.424zm14.286-10.796c.237 0 .432.189.432.422a.428.428 0 01-.432.425.428.428 0 01-.434-.424c0-.234.195-.423.434-.423zm-28.244.847c.18 0 .326-.145.326-.32a.322.322 0 00-.326-.316.321.321 0 00-.324.318.32.32 0 00.324.317zm27.761 4.626a.655.655 0 00-1.198-.005.63.63 0 00.345.832c.329.14.709-.01.852-.338a.633.633 0 00.001-.489zm-7.99 7.069a.412.412 0 01-.002.322.436.436 0 01-.799-.005.412.412 0 010-.323.426.426 0 01.238-.228.444.444 0 01.329.003c.106.041.19.125.233.23zM7.631 14.345a.413.413 0 000-.324.433.433 0 00-.562-.232.425.425 0 00-.236.226.412.412 0 00-.001.325.436.436 0 00.798.005zm-.73 10.038a.524.524 0 01.288.693.546.546 0 01-.999-.005.525.525 0 01.002-.407.546.546 0 01.71-.281zM24.805 6.457a.524.524 0 00.288.693.546.546 0 00.708-.282.524.524 0 00-.287-.693.546.546 0 00-.71.282zm8.632 7.11a.316.316 0 01-.004.587.328.328 0 01-.423-.174.309.309 0 01.002-.244.33.33 0 01.426-.169zm-18.63-6.689a.326.326 0 00-.622-.126.316.316 0 00.171.417.33.33 0 00.248.001.315.315 0 00.202-.292zm-.415 24.896a.315.315 0 01.173.415.327.327 0 01-.598-.002.316.316 0 01.3-.44c.042 0 .084.01.125.027zm14.481-2.567c0 .113.046.221.127.3.171.165.442.165.613.001a.416.416 0 000-.6.435.435 0 00-.306-.124.435.435 0 00-.307.124.416.416 0 00-.127.3zM10.288 9.498a.626.626 0 010 .898.655.655 0 01-.92 0 .626.626 0 010-.898.66.66 0 01.92 0zm20.099.343a.314.314 0 00-.095-.224.327.327 0 00-.458 0 .311.311 0 000 .448.33.33 0 00.458 0 .314.314 0 00.095-.224zM9.949 28.878a.312.312 0 010 .448.33.33 0 01-.459 0 .312.312 0 010-.448.327.327 0 01.459 0zm9.619 5.093a.535.535 0 00.54.529.535.535 0 00.54-.529.535.535 0 00-.54-.53c-.3 0-.54.238-.54.53z"
      fill="#fff"
    />
  </Svg>
);

export default SvgKin;
