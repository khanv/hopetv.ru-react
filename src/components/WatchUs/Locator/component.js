import React, { Component } from 'react';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';

import SvgCloseIcon from 'theme/components/Locator/Images/closeListIcon.svg';

/* eslint-disable react/prefer-stateless-function */
export default class Locator extends Component {
    render() {
        return (
            <section className={ Styles.locator }>
                <header>
                    <a href="#"></a>
                    <h1>Переяслав-Хмельн...</h1>
                    <a href="#"><InlineSvg content={ SvgCloseIcon }/></a>
                </header>
                <ul className={ Styles.operators }>
                    <li><a href="#" className={ Styles.title }>Жмеринка</a></li>
                    <li><a href="#" className={ Styles.title }>Прискакановка</a></li>
                    <li><a href="#" className={ Styles.title }>Переяслав-Хмельницкий</a></li>
                    <li className={ Styles.opened }>
                        <a href="#" className={ Styles.title }>Забитовка</a>
                        <ul>
                            <li>+380 (93) 576 87 32</li>
                            <li>+380 (63) 356 39 11</li>
                        </ul>
                        <a href="#" className={ Styles.website }>primitivecompany.com.ua</a>
                    </li>
                    <li><a href="#" className={ Styles.title }>Лютовичи</a></li>
                    <li><a href="#" className={ Styles.title }>Киевская<span>36</span></a></li>
                    <li><a href="#" className={ Styles.title }>Черкасская<span>10</span></a></li>
                    <li><a href="#" className={ Styles.title }>Днепропетровская<span>26</span></a></li>
                    <li className={ Styles.select }>
                        <a href="#" className={ Styles.title }>Волынская<span>12</span></a>
                    </li>
                    <li><a href="#" className={ Styles.title }>Харьковская<span>5</span></a></li>
                    <li><a href="#" className={ Styles.title }>Сумская<span>3</span></a></li>
                    <li><a href="#" className={ Styles.title }>Львовская<span>6</span></a></li>
                </ul>
                <footer/>
            </section>
        );
    }
}
