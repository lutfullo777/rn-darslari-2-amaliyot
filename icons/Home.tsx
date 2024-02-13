import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: {active?: boolean}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10 18h4m2.18 4H7.82c-2.31 0-4.18-1.786-4.18-3.99v-4.877a2.61 2.61 0 00-.82-1.888c-1.216-1.16-1.058-3.083.333-4.048L9.54 2.763a4.343 4.343 0 014.918 0l6.389 4.434c1.39.965 1.548 2.888.332 4.048a2.61 2.61 0 00-.82 1.888v4.878c0 2.203-1.87 3.989-4.18 3.989z"
        stroke={props.active ? '#1F8B24' : 'rgba(0,0,0,0.3)'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  active: false,
};

export default SvgComponent;
