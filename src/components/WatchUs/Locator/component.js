import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgCloseIcon from 'theme/components/Locator/Images/closeListIcon.svg';

import { region as selectRegion, city as selectCity, provider as selectProvider } from 'redux/modules/watchUs';

/* eslint-disable react/prefer-stateless-function */
@connect(({ watchUs }) => {
    return { state: watchUs };
}, (dispatch) => {
    return bindActionCreators({ selectRegion, selectCity, selectProvider }, dispatch);
})
export default class Locator extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired,
        regions: PropTypes.array,
        selectRegion: PropTypes.func.isRequired
    };

    selectRegion = (event) => {
        console.log(event);
        this.props.selectRegion(1200000000);
    };

    render() {
        const { state, regions } = this.props;

        if (!state.locatorActive) {
            return null;
        }

        // Back
        const backButton = state.region ? (<a href="#"></a>) : null;

        // Title
        let title = '';
        if (state.region === null) {
            title = 'Выберите область';
        } else if (state.region !== null && state.city === null) {
            const currentRegion = regions.find((region) => {
                return region.id === state.region;
            });
            title = currentRegion.title.text;
        } else if (state.city !== null) {
            title = state.city;
        }

        // List
        let list = [];
        if (state.region === null) {
            list = regions.map((region) => {
                let total = 0;

                region.cities.forEach((city) => {
                    total += city.providers.length;
                });

                return (
                    <li key={ region.id } onClick={ this.selectRegion }>
                        <a href="#" className={ Styles.title }>
                            { region.title.text }
                            <span>{ total }</span>
                        </a>
                    </li>
                );
            });
        }

        return (
            <section className={ Styles.locator }>
                <header>
                    { backButton }
                    <h1>{ title }</h1>
                    <a href="#"><InlineSvg content={ SvgCloseIcon }/></a>
                </header>
                <ul className={ Styles.operators }>
                    { list }
                </ul>
                <footer/>
            </section>
        );
    }
}
