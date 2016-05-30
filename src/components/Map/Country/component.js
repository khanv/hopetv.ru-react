import React, { PropTypes } from 'react';
import { Map } from 'components';

export default function Country(props) {
    const { regions, selectRegion, state } = props;
    const { Region } = Map;

    const regionItems = regions.map((region) => {
        return (
            <Region
                { ...region }
                key={ region.id }
                selectRegion={ selectRegion }
                state={ state }
            />
        );
    });

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 1335"
        >
            { regionItems }
        </svg>
    );
}

Country.propTypes = {
    regions: PropTypes.array.isRequired,
    selectRegion: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
};
