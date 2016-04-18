import React, { Component } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgCloseIcon from 'theme/components/Locator/Images/closeListIcon.svg';

/* eslint-disable react/prefer-stateless-function */
export default class Locator extends Component {
    render() {
        const templates = [
            {
                name: BreakPoints.phonePortrait.name,
                states: ['choose-1', 'choose-2', 'choose-3']
            },
            BreakPoints.desktopMega.name
        ];

        return (
            <PixelPerfect templates={ templates } component="Locator">
                <section className={ Styles.locator }>
                    <header>
                        <h1>Выберите область</h1>
                        <a href="#"><InlineSvg content={ SvgCloseIcon }/></a>
                    </header>
                    <ul>
                        <li><a href="#">Киевская<span>36</span></a></li>
                        <li><a href="#">Черкасская<span>10</span></a></li>
                        <li><a href="#">Днепропетровская<span>26</span></a></li>
                        <li className={ Styles.select }><a href="#">Волынская<span>12</span></a></li>
                        <li><a href="#">Харьковская<span>5</span></a></li>
                        <li><a href="#">Сумская<span>3</span></a></li>
                        <li><a href="#">Львовская<span>6</span></a></li>
                    </ul>
                    <footer></footer>
                </section>
            </PixelPerfect>
        );
    }
}
