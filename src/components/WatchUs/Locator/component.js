import React, { Component, PropTypes } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import { Country } from 'components/Map';
import cx from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';
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
@connect(({ watchUs, routing, browser }) => {
    return {
        state: watchUs,
        location: routing.locationBeforeTransitions.pathname,
        browser
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
        close: PropTypes.func.isRequired,
        browser: PropTypes.object.isRequired
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
        const { state, regions, browser } = this.props;
        const isMobile = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(browser.mediaType) !== -1;

        if (isMobile) {
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

            console.log(currentProvider);

            // Page id
            let pageId = '';
            if (state.region !== null && state.city === null) {
                pageId = 'regions';
            } else if (state.city !== null) {
                pageId = 'cities';
            } else if (state.provider !== null) {
                pageId = 'providers';
            }

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
                [Styles.listItems]: true,
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
                        <li
                            key={ provider.id }
                            className={ itemClass }
                            onClick={ () => this.selectProvider(provider.id) }
                        >
                            <span className={ Styles.title }>
                                { provider.title }
                            </span>
                            { providerInfo }
                        </li>
                    );
                });
            }

            // forward back
            const transitionForward = {
                enter: Styles.sliderEnter,
                enterActive: Styles.sliderEnterActive,
                leave: Styles.sliderLeave,
                leaveActive: Styles.sliderLeaveActive
            };
            // const transitionBack = {
            //     enter: Styles.sliderBackEnter,
            //     enterActive: Styles.sliderBackEnterActive,
            //     leave: Styles.sliderBackLeave,
            //     leaveActive: Styles.sliderBackLeaveActive
            // };

            return (
                <section className={ Styles.locator }>
                    <header>
                        { backButton }
                        <h1>{ title }</h1>
                        <a href="#" onClick={ this.close }><InlineSvg content={ SvgCloseIcon }/></a>
                    </header>
                    <CSSTransitionGroup
                        transitionEnterTimeout={ 200 }
                        transitionLeaveTimeout={ 200 }
                        transitionName={ transitionForward }
                        component="div"
                    >
                        <ul key={ pageId } className={ listClass }>
                            { list }
                        </ul>
                    </CSSTransitionGroup>
                    <footer/>
                </section>
            );
        }

        // Region popup
        const region = state.region !== null ? (
            <section className={ Styles.region }>
                <header>
                    <h1>Кировоградская область</h1>
                    <a href="#" className={ Styles.close }></a>
                </header>
                <div className={ Styles.head }>
                    <p className={ Styles.cities }><span>Города</span></p>
                    <p className={ Styles.operators }><span>Кабельные операторы</span></p>
                </div>
                <div className={ Styles.content }>
                    <ul className={ Styles.cities }>
                        <li>Кировоград</li>
                        <li className={ Styles.selected }>Переяслав-Хмельницкий</li>
                        <li>Димитрово</li>
                        <li>Знамянка</li>
                        <li>Новоукраинка</li>
                        <li>Пантаивка</li>
                        <li>Димитрово</li>
                        <li>Знамянка</li>
                        <li>Новоукраинка</li>
                    </ul>
                    <ul className={ Styles.operators }>
                        <li>Компания Сервис РПП</li>
                        <li>ТРК «Контакт-ЛТД»</li>
                        <li className={ Styles.selected }>
                            <div className={ Styles.title }>
                                <span>Телерадиокомпания «Интелкон»</span>
                                <a href="#" className={ Styles.close }></a>
                            </div>
                            <div className={ Styles.contacts }>
                                <ul>
                                    <li>+380 (93) 756-88-26</li>
                                    <li>+380 (63) 364-24-76</li>
                                </ul>
                                <a href="#">intelcom.com.ua</a>
                            </div>
                        </li>
                        <li>Компания Сервис РПП</li>
                        <li>ТРК «Контакт-ЛТД»</li>
                    </ul>
                </div>
            </section>
        ) : null;

        const templates = [
            {
                name: BreakPoints.tabletPortrait.name,
                states: ['choose-1', 'choose-2', 'choose-3']
            },
            BreakPoints.tabletPortrait.name
        ];

        return (
            <PixelPerfect templates={ templates } component="Locator">
                <section className={ Styles.locator }>
                    <section className={ Styles.map }>
                        <Country regions={ regions }/>
                        <div className={ Styles.hint }>
                            <p>Выберите область</p>
                            <span>чтобы увидеть список операторов в доступных городах этой области</span>
                        </div>
                    </section>
                    { region }
                </section>
            </PixelPerfect>
        );
    }
}
