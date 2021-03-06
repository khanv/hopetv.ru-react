import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import SvgHope from 'components/About/Why/Assets/hope.svg';
import SvgAdvert from 'components/About/Why/Assets/why_advert.svg';
import SvgPolitics from 'components/About/Why/Assets/why_politics.svg';
import SvgViolence from 'components/About/Why/Assets/why_violence.svg';
import SvgCheck from 'components/About/Why/Assets/checkCircle.svg';

export default function Why(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const { mediaType } =  props;

    return (
        <PixelPerfect templates={ templates } component="Why">
            <section className={ Grids.container }>
                <section className={ Styles.whyComponent }>
                    <section className={ Styles.why }>
                        <header>
                            { [
                                BreakPoints.phonePortrait.name,
                                BreakPoints.tabletPortrait.name,
                                BreakPoints.tabletLandscape.name,
                                BreakPoints.desktop.name,
                                BreakPoints.desktopWide.name,
                                BreakPoints.desktopHD.name,
                                BreakPoints.desktopMega.name
                            ].indexOf(mediaType) !== -1 ? (
                                <InlineSvg content={ SvgHope }/>
                            ) : null }
                            <h1>Чому саме ТК «Надія»</h1>
                        </header>
                        <div className={ Styles.arguments }>
                            <div className={ Styles.policy }>
                                <InlineSvg content={ SvgPolitics }/>
                                <span className={ Styles.label }>без</span>
                                <span className={ Styles.text }>політики</span>
                            </div>
                            <div className={ Styles.violence }>
                                <InlineSvg content={ SvgViolence }/>
                                <span className={ Styles.label }>без</span>
                                <span className={ Styles.text }>насилля</span>
                            </div>
                            <div className={ Styles.advert }>
                                <InlineSvg content={ SvgAdvert }/>
                                <span className={ Styles.label }>без</span>
                                <span className={ Styles.text }>реклами</span>
                            </div>
                        </div>
                    </section>
                    <section className={ Styles.aroundTheClock }>
                        <header>
                            <span><b>24</b>/<b>7</b></span>
                            <h1>Позитивне цілодобове</h1>
                            <h2>мовлення для всієї родини</h2>
                        </header>
                        <ul>
                            <li className={ Styles.everydaySpeech }>
                                <InlineSvg content={ SvgCheck }/>
                                <div>
                                    <b>Щоденне мовлення</b>
                                    програм з сурдоперекладом
                                </div>
                            </li>
                            <li className={ Styles.varietyPrograms }>
                                <InlineSvg content={ SvgCheck }/>
                                <div>
                                    <b>Різноманітність програм</b>
                                    для всієї родини
                                </div>
                            </li>
                            <li className={ Styles.interactiveCommunication }>
                                <InlineSvg content={ SvgCheck }/>
                                <div>
                                    <b>Інтерактивний зв'язок</b>
                                    з глядачем
                                </div>
                            </li>
                            <li className={ Styles.holisticChristianity }>
                                <InlineSvg content={ SvgCheck }/>
                                <div>
                                    <b>Цілісне християнство в ТБ:</b>
                                    здоров`я, сім`я, духовність
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </PixelPerfect>
    );
}

Why.propTypes = {
    mediaType: PropTypes.string.isRequired
};
