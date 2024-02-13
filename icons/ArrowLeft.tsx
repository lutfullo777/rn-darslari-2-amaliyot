import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.488 4.229c.588.36.684 1.016.213 1.466L10.11 12l6.591 6.305c.47.45.375 1.106-.213 1.466-.588.36-1.446.287-1.916-.163l-7.273-6.956c-.399-.381-.399-.923 0-1.304l7.272-6.956c.471-.45 1.33-.523 1.917-.163z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
