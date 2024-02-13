import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: {active?: boolean}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.046 3.75h1.909v-1.5h-1.91v1.5zm1.909 16.5h-1.91v1.5h1.91v-1.5zm-1.91 0c-.682 0-1.159-.511-1.159-1.05h-1.5c0 1.45 1.233 2.55 2.66 2.55v-1.5zm3.069-1.05c0 .539-.477 1.05-1.16 1.05v1.5c1.427 0 2.66-1.1 2.66-2.55h-1.5zm-1.16-15.45c.683 0 1.16.511 1.16 1.05h1.5c0-1.45-1.233-2.55-2.66-2.55v1.5zm-1.909-1.5c-1.426 0-2.659 1.1-2.659 2.55h1.5c0-.539.477-1.05 1.16-1.05v-1.5zm9.06 13.079l-.955 1.559 1.279.783.955-1.559-1.28-.783zM3.894 8.67l.955-1.559-1.279-.783-.955 1.559 1.28.783zm.955-1.559c.309-.504 1.03-.707 1.61-.392l.717-1.317c-1.247-.679-2.86-.292-3.606.926l1.28.783zm-.537 2.967c-.556-.302-.709-.932-.417-1.408l-1.28-.783c-.762 1.246-.29 2.818.98 3.509l.717-1.318zm14.837 6.809c-.309.504-1.03.707-1.61.391l-.717 1.318c1.247.679 2.86.292 3.606-.926l-1.28-.783zm2.234-.776c.762-1.246.29-2.817-.98-3.509l-.717 1.317c.555.303.709.933.417 1.409l1.28.783zm-16.534.776l-.954-1.56-1.28.784.955 1.56 1.28-.784zm14.3-9.776l.954 1.56 1.28-.784-.955-1.56-1.28.784zm.954 1.56c.292.475.139 1.105-.417 1.407l.717 1.318c1.27-.691 1.742-2.263.98-3.51l-1.28.784zM17.54 6.72c.58-.315 1.301-.112 1.61.392l1.279-.783c-.746-1.218-2.36-1.605-3.606-.926l.717 1.317zM3.896 15.33c-.292-.476-.139-1.106.417-1.409l-.717-1.317c-1.27.691-1.742 2.263-.98 3.51l1.28-.784zM3.57 17.67c.746 1.218 2.36 1.605 3.606.926l-.717-1.318c-.58.316-1.301.113-1.61-.391l-1.279.783zM17.439 6.776l.101-.056-.717-1.317-.102.055.718 1.318zM6.459 6.72l.102.056.718-1.318-.102-.055L6.46 6.72zM17.54 17.28l-.101-.056-.718 1.318.102.055.717-1.318zm-10.979-.056l-.101.055.717 1.318.102-.055-.718-1.318zm-2.965-5.827a.687.687 0 010 1.206l.717 1.318c1.522-.829 1.522-3.013 0-3.841l-.717 1.317zm3.683 7.145a.75.75 0 011.107.658h1.5c0-1.707-1.826-2.792-3.325-1.976l.718 1.318zm8.335.658a.75.75 0 011.107-.658l.718-1.318c-1.5-.816-3.325.27-3.325 1.976h1.5zm4.79-6.597a.687.687 0 010-1.206l-.717-1.318c-1.522.829-1.522 3.013 0 3.841l.717-1.317zM6.56 6.776c1.5.816 3.325-.27 3.325-1.976h-1.5a.75.75 0 01-1.107.658L6.56 6.776zm10.16-1.318a.75.75 0 01-1.107-.658h-1.5c0 1.707 1.826 2.792 3.325 1.976l-.718-1.318zM14.25 12A2.25 2.25 0 0112 14.25v1.5A3.75 3.75 0 0015.75 12h-1.5zM12 14.25A2.25 2.25 0 019.75 12h-1.5A3.75 3.75 0 0012 15.75v-1.5zM9.75 12A2.25 2.25 0 0112 9.75v-1.5A3.75 3.75 0 008.25 12h1.5zM12 9.75A2.25 2.25 0 0114.25 12h1.5A3.75 3.75 0 0012 8.25v1.5z"
        stroke={props.active ? '#1F8B24' : 'rgba(0,0,0,0.3)'}
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  active: false,
};

export default SvgComponent;
