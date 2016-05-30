import React, { PropTypes } from 'react';
import Styles from './main.scss';
import cx from 'classnames';

const mapWidth = 2000;
const mapHeight = 1335;
const mapLonLeft = 22;
const mapLonRight = 40;
const mapLonDelta = mapLonRight - mapLonLeft;
const mapLatBottom = 44.38722;
const mapLatBottomDegree = mapLatBottom * Math.PI / 180;

function convertGeoToPixel(latitude, longitude, offset) {
    const x = (longitude - mapLonLeft) * (mapWidth / mapLonDelta);

    latitude = latitude * Math.PI / 180;
    const worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI);
    const mapOffsetY = (worldMapWidth / 2 * Math.log((1 + Math.sin(mapLatBottomDegree))
        / (1 - Math.sin(mapLatBottomDegree))));
    const y = mapHeight - ((worldMapWidth / 2 * Math.log((1 + Math.sin(latitude))
        / (1 - Math.sin(latitude)))) - mapOffsetY);

    return {
        x: x - offset.x,
        y: y - offset.y
    };
}

export default function City(props) {
    const { lat, lng, offset, id, state, selectCity } = props;
    const { x, y } = convertGeoToPixel(lat, lng, offset);

    const onClickCity = (event) => {
        const target = event.target.parentElement;
        const id = target.id;

        selectCity(id, state);
    };

    const cityClass = cx({
        [Styles.city]: true,
        [Styles.selected]: state.city === id
    });

    return (
        <g
            className={ cityClass }
            onClick={ onClickCity }
            id={ id }
        >
            <circle
                cx={ x }
                cy={ y }
                r="10"
                className={ Styles.outer }
            />
            <circle
                cx={ x }
                cy={ y }
                r="5"
                className={ Styles.inner }
            />
        </g>
    );
}

City.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    offset: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    state: PropTypes.object.isRequired,
    selectCity: PropTypes.func.isRequired
};
