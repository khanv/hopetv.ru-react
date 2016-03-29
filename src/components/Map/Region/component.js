import React, { Component, PropTypes } from 'react';
import { Map } from 'components';
import { translate } from 'react-i18next';
import Styles from './main.scss';

function Region(props) {
    const { Bubble } = Map;
    const { path, title, t } = props;

    let titleComponent;
    const titleParts = t(title.text).split('-');
    if (titleParts.length > 1) {
        titleComponent = (
            <text y={ title.pos.y }>
                { titleParts.map((part, n) => {
                    if (n < titleParts.length - 1) {
                        part += '-';
                    }

                    const style = {
                        baselineShift: `${-(n * 20)}px`
                    };

                    return (
                        <tspan key={ `part-${n}` } x={ title.pos.x } style={ style }>
                            { part }
                        </tspan>
                    );
                }) }
            </text>
        );
    } else {
        titleComponent = (
            <text
                x={ title.pos.x }
                y={ title.pos.y }
            >
                { titleParts[0] }
            </text>
        );
    }

    return (
        <g className={ Styles.region }>
            <path d={ path } fill="#DFE1E2"/>
            { titleComponent }
            <Bubble x={ title.pos.x } y={ title.pos.y + 20 }>5</Bubble>
        </g>
    );
}

Region.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    t: PropTypes.func
};

export default translate(['region'])(Region);
