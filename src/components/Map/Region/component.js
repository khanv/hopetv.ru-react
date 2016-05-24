import React, { PropTypes } from 'react';
import { Map } from 'components';
import cx from 'classnames';
import findParent from 'utils/findParent';
import { translate } from 'react-i18next';
import Styles from './main.scss';

function Region(props) {
    const { City, Bubble } = Map;
    const { path, title, t, cities, id, state, selectRegion } = props;

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

    /* eslint-disable no-constant-condition */
    const cityComponents = false ? cities.map((city) => {
        return (
            <City { ...city.pos } key={ `city-${city.id}` }/>
        );
    }) : null;
    /* eslint-enable no-constant-condition */

    const regionClass = cx({
        [Styles.region]: true,
        [Styles.disabled]: !cities.length
    });

    const providersCount = cities.reduce((total, city) => {
        return total + city.providers.length;
    }, 0);

    const onClickRegion = (event) => {
        const target = findParent(event.target, 'active');
        const id = Number(target.id);
        const isActive = Number(target.getAttribute('data-active')) !== 0;

        if (!isActive) {
            return;
        }

        selectRegion(id, state);
    };

    return (
        <g
            className={ regionClass }
            id={ id }
            data-active={ cities.length ? 1 : 0 }
            onClick={ onClickRegion }
        >
            <path d={ path }/>
            { titleComponent }
            <Bubble x={ title.pos.x } y={ title.pos.y + 20 } total={ providersCount }/>
            <g>{ cityComponents }</g>
        </g>
    );
}

Region.propTypes = {
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    cities: PropTypes.array,
    t: PropTypes.func,
    state: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired
};
Region.defaultProps = {
    cities: []
};

export default translate(['region'])(Region);
