import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { useDispatch } from 'react-redux';

import { petSlice } from '../redux/slices/pet';

const propTypes = {
  poopCount: PropTypes.number,
};

const PetHouseSvg = ({ poopCount }: InferProps<typeof propTypes>) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const interval = window.setInterval(
      () => {
        dispatch(petSlice.actions.poop());
      }, 60e3
    );
    return () => {
      window.clearInterval(interval);
    }
  });
  return (
    <svg viewBox="0 0 100 100" style={{
      height: '80vh',
      stroke: 'black',
      fill: 'transparent',
    }}>
      <text y="20" style={{
        fontSize: '10',
        filter: 'grayscale(100%)',
      }}>{[...Array(poopCount)].join('💩')}</text>
      <svg x="50">
        <ellipse cx="20" cy="20" rx="15" ry="15">
          <animate
            attributeName="ry"
            from="15"
            to="15"
            values="15;10;15"
            repeatCount="indefinite"
            dur="2s"
          />
          <animate
            attributeName="rx"
            from="15"
            to="15"
            values="15;16;15"
            repeatCount="indefinite"
            dur="2s"
          />
        </ellipse>
      </svg>
      {/* <g>
        <path d="M10 20
                h2
                m5 0
                h2

                M8 21
                h13

                M8 22
                h13

                M8 23
                h3
                m2 0
                h3
                m2 0
                h3

                M8 24
                h13

                M8 25
                h13

                M8 26
                h3
                m7 0
                h3

                M8 27
                h13" />
      </g> */}
    </svg>
  );
};

export { PetHouseSvg };
