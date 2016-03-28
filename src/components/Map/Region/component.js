import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import Styles from './main.scss';

function Region(props) {
    const { path, title, t } = props;

    // let titleText = t(title.text).;

    return (
        <g className={ Styles.region }>
            <path d={ path } fill="#DFE1E2"/>
            <text
                x={ title.pos.x }
                y={ title.pos.y }
            >
                { t(title.text) }
            </text>
        </g>
    );
}

Region.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    t: PropTypes.func
};

export default translate(['region'])(Region);
