import React, { Component, PropTypes } from 'react';

export default function Region(props) {
    const { path, title } = props;
    const textStyle = {
        fill: '#6D7A7C',
        fontFamily: 'PTSans-Narrow',
        fontSize: '28px'
    };

    return (
        <g>
            <path d={ path } fill="#DFE1E2"/>
            <text
                x={ title.pos.x }
                y={ title.pos.y }
                style={ textStyle }
            >
                { title.text }
            </text>
        </g>
    );
}

Region.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired
};
