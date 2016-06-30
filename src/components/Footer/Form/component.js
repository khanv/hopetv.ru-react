import React, { PropTypes } from 'react';
import Styles from './main.scss';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import SvgLetter from 'components/Footer/Form/Assets/letter.svg';

export default function Form(props) {
    const { mediaType } = props;

    if ([
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1) {
        return null;
    }

    return (
        <section className={ Styles.formComponent }>
            <header>
                <h1>Контакт Центр «Надія»</h1>
            </header>
            <input type="text" className={ Styles.name } placeholder="Ваше имя"/>
            <input type="email" className={ Styles.email } placeholder="Ваш E-MAIL:"/>
            <textarea placeholder="Текст сообщения..."></textarea>
            <a href="#"><InlineSvg content={ SvgLetter }/>Отправить письмо</a>
        </section>
    );
}
Form.propTypes = {
    mediaType: PropTypes.string.isRequired
};
