import React, { PropTypes } from 'react';
import { Map } from 'components';
import { translate } from 'react-i18next';
import Styles from './main.scss';

function Region(props) {
    const { City, Bubble } = Map;
    const { path, title, t, cities } = props;

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

    const cityComponents = cities.map((city) => {
        return (
            <City { ...city.pos } key={ `city-${city.id}` }>{ city.title }</City>
        );
    });

    return (
        <g className={ Styles.region }>
            <path d={ path } fill="#DFE1E2"/>
            { titleComponent }
            <Bubble x={ title.pos.x } y={ title.pos.y + 20 }>5</Bubble>
            <g>{ cityComponents }</g>
        </g>
    );
}

Region.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    cities: PropTypes.array,
    t: PropTypes.func
};
Region.defaultProps = {
    cities: []
};

export default translate(['region'])(Region);
