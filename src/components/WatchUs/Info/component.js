import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgInternet from 'theme/components/Info/Images/internet.svg';
import SvgAndroid from 'theme/components/Info/Images/android.svg';
import SvgApple from 'theme/components/Info/Images/apple.svg';
import SvgArrow from 'theme/components/Info/Images/pointerArrow.svg';
import SvgSatellite from 'theme/components/Info/Images/satellite.svg';
import SvgTv from 'theme/components/Info/Images/tv.svg';

import { toggle } from 'redux/modules/watchUs';

/* eslint-disable react/prefer-stateless-function */
@connect(({ browser, watchUs }) => {
    return { browser, watchUs };
}, (dispatch) => {
    return bindActionCreators({ toggle }, dispatch);
})
export default class Info extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired,
        watchUs: PropTypes.object.isRequired,
        toggle: PropTypes.func.isRequired
    };

    showLocator = (event) => {
        event.preventDefault();
        this.props.toggle(true);
    };

    render() {
        const { browser, watchUs } = this.props;

        if (watchUs.locatorActive) {
            return null;
        }

        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ];

        return (
            <PixelPerfect templates={ templates } component="Info">
                <section className={ Styles.infoComponent }>
                    <section className={ Styles.internet }>
                        <header>
                            <InlineSvg content={ SvgInternet }/>
                            <h1>Интернет и приложения</h1>
                        </header>
                        <p className={ Styles.searchUs }>Ищите нас на мобильных устройствах</p>
                        <div className={ Styles.apps }>
                            <a className={ Styles.androidLink } href="#">
                                <InlineSvg content={ SvgAndroid }/>
                            </a>
                            <div>
                                <InlineSvg className={ Styles.appleArrow } content={ SvgArrow }/>
                                <span>скачать приложение</span>
                                <InlineSvg className={ Styles.androidArrow } content={ SvgArrow }/>
                            </div>
                            <a className={ Styles.appleLink } href="#">
                                <InlineSvg content={ SvgApple }/>
                            </a>
                        </div>
                        <p className={ Styles.watchOnline }>Смотрите вещание в сети Интернет</p>
                        <a className={ Styles.btn } href="#">
                            ТВ «Надія» Онлайн
                        </a>
                    </section>
                    <section className={ Styles.satellite }>
                        <header>
                            <InlineSvg content={ SvgSatellite }/>
                            <h1>Спутниковое вещание</h1>
                        </header>
                        <ul>
                            <li className={ Styles.itemChannel }>
                                <span>Канал:</span>
                                <span>Nadiya TV</span>
                            </li>
                            <li className={ Styles.itemSatellite }>
                                <span>Спутник:</span>
                                <span>Astra-4A (Sirius)</span>
                            </li>
                            <li className={ Styles.itemReceivingFrequency }>
                                <span>Частота приема:</span>
                                <span>12,284 МГц</span>
                            </li>
                            <li className={ Styles.itemPolarization }>
                                <span>Поляризация:</span>
                                <span>V, FEC ¾</span>
                            </li>
                            <li className={ Styles.itemFlowRate }>
                                <span>Скорость потока:</span>
                                <span>27.500 Мбит/с</span>
                            </li>
                        </ul>
                        <div className={ Styles.tunerContainer }>
                            <a className={ cx(Styles.btn, Styles.btnTuner) } href="#">
                                Как настроить тюнер
                            </a>
                            { browser.mediaType === BreakPoints.phoneLandscape.name ? (
                                <div className={ Styles.tunerInfo }>
                                    <InlineSvg content={ SvgArrow }/>
                                    <p>Подробная видео иструкция о том, как настроить ваш тюнер на нужный спутник</p>
                                </div>
                            ) : null }
                        </div>
                    </section>
                    <section className={ Styles.television }>
                        <header>
                            <InlineSvg content={ SvgTv }/>
                            <h1>Кабельные сети</h1>
                        </header>
                        <p>Телеканал «Надія» вещает через операторов кабельных сетей. Узнайте, можно ли смотреть нас
                        через кабельних операторов вашего населенного пункта – используйте карту ниже</p>
                        <a className={ cx(Styles.btn, Styles.btnSearch) } href="#" onClick={ this.showLocator }>
                            Поиск операторов
                        </a>
                    </section>
                </section>
            </PixelPerfect>
        );
    }
}
