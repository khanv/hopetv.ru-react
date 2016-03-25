import React, { Component } from 'react';
import { Map } from 'components';
import MapData from 'data/ukraine.json';

export default class WatchUs extends Component {
    render() {
        const { Country } = Map;

        return (
            <section>
                <Country { ...MapData }/>
            </section>
        );
    }
}
