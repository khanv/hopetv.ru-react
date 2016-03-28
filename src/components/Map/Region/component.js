import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

function Region(props) {
    const { path, title, t } = props;
    const textStyle = {
        fill: '#6D7A7C',
        fontFamily: 'PTSans-Narrow',
        fontSize: '28px'
    };

    //let titleText = t(title.text).;

    return (
        <g>
            <path d={ path } fill="#DFE1E2"/>
            <text
                x={ title.pos.x }
                y={ title.pos.y }
                style={ textStyle }
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
