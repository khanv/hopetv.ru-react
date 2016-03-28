import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

function Region(props) {
    const { path, title, t } = props;
    const textStyle = {
        fill: '#6D7A7C',
        fontFamily: 'PTSans-Narrow',
        fontSize: '32px',
        textAnchor: 'middle'
    };

    let titleComponent;
    const titleParts = t(title.text).split('-');
    if (titleParts.length > 1) {
        titleComponent = (
            <text y={ title.pos.y } style={ textStyle }>
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
                style={ textStyle }
            >
                { titleParts[0] }
            </text>
        );
    }

    return (
        <g>
            <path d={ path } fill="#DFE1E2"/>
            { titleComponent }
            <g>
                <rect
                    x={ title.pos.x - 22 }
                    y={ title.pos.y + 23 }
                    rx={ 6 }
                    ry={ 6 }
                    width={ 44 }
                    height={ 44 }
                    fill="#ccc"
                />
                <rect
                    x={ title.pos.x - 22 }
                    y={ title.pos.y + 20 }
                    rx={ 6 }
                    ry={ 6 }
                    width={ 44 }
                    height={ 44 }
                    fill="#fff"
                />
                <rect
                    x={ title.pos.x - 11 }
                    y={ title.pos.y + 20 - 11 + 7 }
                    rx={ 3 }
                    ry={ 3 }
                    width={ 22 }
                    height={ 22 }
                    transform={ `rotate(45, ${title.pos.x}, ${title.pos.y + 20 + 7})` }
                    fill="#fff"
                />
                <text
                    x={ title.pos.x }
                    y={ title.pos.y + 20 + 32 }
                    style={ { textAnchor: 'middle', fontSize: '28px', fontFamily: 'PTSans-bold', fill: '#f9c90f' } }
                >
                    44
                </text>
            </g>
        </g>
    );
}

Region.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    t: PropTypes.func
};

export default translate(['region'])(Region);
