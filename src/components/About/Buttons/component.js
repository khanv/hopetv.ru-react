import React from 'react';
import Styles from './main.scss';

export default function Buttons() {
    return (
        <section className={ Styles.buttonsComponent }>
            <a href="#">Контакти ТК «Надія»</a>
            <a href="#">Де нас дивитись?</a>
            <a href="#">Дивитися прямий ефір</a>
        </section>
    );
}
