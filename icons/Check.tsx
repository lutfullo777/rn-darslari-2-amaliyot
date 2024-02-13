import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: {}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5 13l3.526 2.821a2 2 0 002.736-.224L19 7"
        stroke="#1F8B24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
