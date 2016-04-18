import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgInternet from 'theme/components/Info/Images/internet.svg';
import SvgAndroid from 'theme/components/Info/Images/android.svg';
import SvgApple from 'theme/components/Info/Images/apple.svg';
import SvgPlay from 'theme/components/Info/Images/play.svg';
import SvgArrow from 'theme/components/Info/Images/pointerArrow.svg';
import SvgSatellite from 'theme/components/Info/Images/satellite.svg';
import SvgTv from 'theme/components/Info/Images/tv.svg';
import Search from 'theme/components/Info/Images/search.svg';

export default class Info extends Component {
    render() {
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
                            <a className={ Styles.androidLink }>
                                <InlineSvg content={ SvgAndroid }/>
                            </a>
                            <div>
                                <InlineSvg className={ Styles.appleArrow } content={ SvgArrow }/>
                                <span>скачать приложение</span>
                                <InlineSvg className={ Styles.androidArrow } content={ SvgArrow }/>
                            </div>
                            <a className={ Styles.appleLink }>
                                <InlineSvg content={ SvgApple }/>
                            </a>
                        </div>
                        <p className={ Styles.watchOnline }>Смотрите вещание в сети Интернет</p>
                        <a className={ Styles.btn }>
                            <InlineSvg content={ SvgPlay }/>
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
                            <a className={ cx(Styles.btn, Styles.btnTuner) }>
                                <InlineSvg content={ SvgPlay }/>
                                Как настроить тюнер
                            </a>
                            <div className={ Styles.tunerInfo }>
                                <InlineSvg content={ SvgArrow }/>
                                <p>Подробная видео иструкция о том, как настроить ваш тюнер на нужный спутник</p>
                            </div>
                        </div>
                    </section>
                    <section className={ Styles.television }>
                        <header>
                            <InlineSvg content={ SvgTv }/>
                            <h1>Кабельные сети</h1>
                        </header>
                        <p>Телеканал «Надія» вещает через операторов кабельных сетей. Узнайте, можно ли смотреть нас
                        через кабельних операторов вашего населенного пункта – используйте карту ниже</p>
                        <a className={ cx(Styles.btn, Styles.btnSearch) }>
                            <InlineSvg content={ Search }/>
                            Поиск операторов
                        </a>
                    </section>
                </section>
            </PixelPerfect>
        );
    }
}
