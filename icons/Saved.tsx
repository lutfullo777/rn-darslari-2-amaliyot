import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: {active?: boolean}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.765 4.702L12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 003.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0z"
        stroke={props.active ? '#1F8B24' : 'rgba(0,0,0,0.3)'}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  active: false,
};

export default SvgComponent;
