import React from 'react';
import Styles from './main.scss';

export default function Banner() {
    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.container }>
                <h1>
                    Наша мета – створення <span>якісного</span>,
                    <span> морально-чистого</span>,
                    <span> актуального</span> медіапродукту
                </h1>
                <div className={ Styles.poster }></div>
            </div>
        </section>
    );
}
