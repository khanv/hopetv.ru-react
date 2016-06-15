import React, { PropTypes } from 'react';
import Styles from './main.scss';

export default function Banner(props) {
    const { text } = props;

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <h1 dangerouslySetInnerHTML={ { __html: text } }/>
                    <div className={ Styles.poster }></div>
                </div>
            </div>
        </section>
    );
}

Banner.propTypes = {
    text: PropTypes.string
};
