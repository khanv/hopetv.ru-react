import React, { PropTypes } from 'react';
import Styles from './main.scss';

export default function Bubble(props) {
    const { x, y, width, height, total } = props;

    if (!total) {
        return null;
    }

    return (
        <g className={ Styles.bubble }>
            <rect
                x={ x - (width / 2) }
                y={ y + 3 }
                rx={ 6 }
                ry={ 6 }
                width={ width }
                height={ height }
                className={ Styles.shadow }
            />
            <rect
                x={ x - (width / 2) }
                y={ y }
                rx={ 6 }
                ry={ 6 }
                width={ width }
                height={ height }
                className={ Styles.background }
            />
            <rect
                x={ x - (width / 4) }
                y={ y - (height / 4) + 7 }
                rx={ 3 }
                ry={ 3 }
                width={ width / 2 }
                height={ height / 2 }
                transform={ `rotate(45, ${x}, ${y + 7})` }
                className={ Styles.arrow }
            />
            <text x={ x } y={ y + (height / 2) + (height / 4) }>
                { total }
            </text>
        </g>
    );
}

Bubble.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

Bubble.defaultProps = {
    width: 44,
    height: 44
};
