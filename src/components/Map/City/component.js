import React, { PropTypes } from 'react';

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
    const { lat, lng, offset } = props;
    const { x, y } = convertGeoToPixel(lat, lng, offset);

    return (
        <g>
            <circle
                cx={ x }
                cy={ y }
                r="10"
                fill="#fff"
            />
            <circle
                cx={ x }
                cy={ y }
                r="5"
                fill="#f9c90f"
            />
        </g>
    );
}

City.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    offset: PropTypes.object.isRequired
};
