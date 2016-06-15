import React, { PropTypes } from 'react';
import { Map } from 'components';
import cx from 'classnames';
import findParent from 'utils/findParent';
import { translate } from 'react-i18next';
import Styles from './main.scss';

function Region(props) {
    const { City, Bubble } = Map;
    const { path, title, t, cities, id, state, selectRegion, selectCity, single } = props;
    const regionPath = single ? path.region.path : path.country;

    const regionClass = cx({
        [Styles.region]: true,
        [Styles.part]: !single,
        [Styles.single]: single,
        [Styles.disabled]: !cities.length
    });

    const onClickRegion = (event) => {
        const target = findParent(event.target, 'active');
        const id = Number(target.id);
        const isActive = Number(target.getAttribute('data-active')) !== 0;

        if (!isActive) {
            return;
        }

        selectRegion(id, state);
    };

    let regionComponent;
    if (single) {
        const viewBox = `0 0 ${path.region.width} ${path.region.height}`;

        const cityComponents = cities.map((city) => {
            return (
                <City
                    { ...city.pos }
                    offset={ path.region.offset }
                    key={ `city-${city.id}` }
                    id={ city.id }
                    state={ state }
                    selectCity={ selectCity }
                />
            );
        });

        regionComponent = (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={ viewBox }
            >
                <g id={ id } className={ regionClass }>
                    <path d={ regionPath }/>
                    <g>{ cityComponents }</g>
                </g>
            </svg>
        );
    } else {
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
                <text x={ title.pos.x } y={ title.pos.y }>
                    { titleParts[0] }
                </text>
            );
        }

        const providersCount = cities.reduce((total, city) => {
            return total + city.providers.length;
        }, 0);

        regionComponent = (
            <g
                className={ regionClass }
                id={ id }
                data-active={ cities.length ? 1 : 0 }
                onClick={ onClickRegion }
            >
                <path d={ regionPath }/>
                { titleComponent }
                <Bubble x={ title.pos.x } y={ title.pos.y + (20 * titleParts.length) } total={ providersCount }/>
            </g>
        );
    }

    return regionComponent;
}

Region.propTypes = {
    id: PropTypes.number.isRequired,
    path: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    cities: PropTypes.array,
    t: PropTypes.func,
    state: PropTypes.object.isRequired,
    selectRegion: PropTypes.func,
    selectCity: PropTypes.func,
    single: PropTypes.bool
};
Region.defaultProps = {
    cities: [],
    single: false
};

export default translate(['region'])(Region);
