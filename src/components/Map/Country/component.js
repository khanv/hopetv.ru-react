import React, { Component, PropTypes } from 'react';
import { Map } from 'components';

export default function Country(props) {
    const { regions } = props;
    const { Region } = Map;

    const regionItems = regions.map((region) => {
        return (
            <Region { ...region } key={ region.id }/>
        );
    });

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 2000 1335"
        >
            { regionItems }
        </svg>
    );
}

Country.propTypes = {
    regions: PropTypes.array.isRequired
};
