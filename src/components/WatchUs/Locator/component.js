import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgCloseIcon from 'theme/components/Locator/Images/closeListIcon.svg';

import {
    region as selectRegion,
    city as selectCity,
    provider as selectProvider,
    back as locationBack,
    close
} from 'redux/modules/watchUs';

/* eslint-disable react/prefer-stateless-function */
@connect(({ watchUs, routing }) => {
    return {
        state: watchUs,
        location: routing.locationBeforeTransitions.pathname
    };
}, (dispatch) => {
    return bindActionCreators({
        push: routerActions.push,
        selectRegion,
        selectCity,
        selectProvider,
        locationBack,
        close
    }, dispatch);
})
export default class Locator extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired,
        location: PropTypes.string.isRequired,
        regions: PropTypes.array,
        push: PropTypes.func.isRequired,
        selectRegion: PropTypes.func.isRequired,
        selectCity: PropTypes.func.isRequired,
        selectProvider: PropTypes.func.isRequired,
        locationBack: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    };

    selectRegion = (id) => {
        this.props.selectRegion(id, this.props.state);
    };

    selectCity = (id) => {
        this.props.selectCity(id, this.props.state);
    };

    selectProvider = (id) => {
        this.props.selectProvider(id, this.props.state);
    };

    locationBack = (event) => {
        event.preventDefault();
        this.props.locationBack(this.props.state);
    };

    close = (event) => {
        event.preventDefault();
        this.props.close();
    };

    render() {
        const { state, regions } = this.props;

        if (!state.locatorActive) {
            return null;
        }

        // Init
        const currentRegion = state.region ? regions.find((region) => {
            return region.id === state.region;
        }) : null;
        const currentCity = state.city ? currentRegion.cities.find((city) => {
            return city.id === state.city;
        }) : null;
        const currentProvider = state.provider ? currentCity.providers.find((provider) => {
            return provider.id === state.provider;
        }) : null;

        // Back
        const backButton = state.region ? (<a href="#" onClick={ this.locationBack }></a>) : null;

        // Title
        let title = '';
        if (state.region === null) {
            title = 'Выберите область';
        } else if (state.region !== null && state.city === null) {
            title = currentRegion.title.text;
        } else if (state.city !== null) {
            title = currentCity.title;
        }

        // List
        const listClass = cx({
            [Styles.operators]: state.city !== null
        });
        let list = [];
        if (state.region === null) {
            list = regions.map((region) => {
                const total = region.cities.reduce((total, city) => {
                    return total + city.providers.length;
                }, 0);

                /* eslint-disable react/jsx-no-bind */
                return (
                    <li key={ region.id } onClick={ () => this.selectRegion(region.id) }>
                        <span className={ Styles.title }>
                            { region.title.text }
                            <span>{ total }</span>
                        </span>
                    </li>
                );
            });
        } else if (state.city === null) {
            list = currentRegion.cities.map((city) => {
                const total = city.providers.length;

                /* eslint-disable react/jsx-no-bind */
                return (
                    <li key={ city.id } onClick={ () => this.selectCity(city.id) }>
                        <span className={ Styles.title }>
                            { city.title }
                            <span>{ total }</span>
                        </span>
                    </li>
                );
            });
        } else {
            console.log(currentProvider);
            list = currentCity.providers.map((provider) => {
                const itemClass = cx({
                    [Styles.opened]: state.provider === provider.id
                });

                const webSite = provider.website !== '' ? (
                    <a href={ provider.website } className={ Styles.website }>{ provider.website }</a>
                ) : null;

                const phones = provider.phones.map((phone) => {
                    const phoneNew = `+${phone.slice(0, 3)} 
                    (${phone.slice(3, 5)}) 
                    ${phone.slice(5, 8)} 
                    ${phone.slice(8, 10)} 
                    ${phone.slice(10)}`;

                    return (
                        <li key={ phone }>{ phoneNew }</li>
                    );
                });

                const providerInfo = state.provider === provider.id ? (
                    <div>
                        <ul>
                            { phones }
                        </ul>
                        { webSite }
                    </div>
                ) : null;

                return (
                    <li key={ provider.id } className={ itemClass } onClick={ () => this.selectProvider(provider.id) }>
                        <span className={ Styles.title }>
                            { provider.title }
                        </span>
                        { providerInfo }
                    </li>
                );
            });
        }

        return (
            <section className={ Styles.locator }>
                <header>
                    { backButton }
                    <h1>{ title }</h1>
                    <a href="#" onClick={ this.close }><InlineSvg content={ SvgCloseIcon }/></a>
                </header>
                <ul className={ listClass }>
                    { list }
                </ul>
                <footer/>
            </section>
        );
    }
}
