import React from 'react';
import Styles from './main.scss';
import cx from 'classnames';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Special() {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const itemImage = {
        // backgroundImage: 'url(http://static1.businessinsider.com/image/5228c23beab8ea9c4f8b456b/7-ways-companies-deter-women-in-tech-jobs.jpg)'
        backgroundColor: 'red'
    };

    const itemCustom = cx({
        [Styles.item]: true,
        [Styles.custom]: true
    });

    console.log(itemCustom);

    return (
        <PixelPerfect templates={ templates } component="special" opacity="30">
            <section className={ Styles.specialComponent }>
                <div className={ Styles.container }>
                    <div className={ Styles.item }>
                        <div className={ Styles.poster } style={ itemImage }></div>
                        <div className={ Styles.info }>
                            <div className={ Styles.title }>Вопрос директору</div>
                            <p className={ Styles.name }>Вячеслав Демьян</p>
                            <span className={ Styles.email }>director@hope.ua</span>
                        </div>
                        <a href="#">Написать</a>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.poster } style={ itemImage }></div>
                        <div className={ Styles.info }>
                            <div className={ Styles.title }>Хочешь работать у нас?</div>
                            <p className={ Styles.name }>Валентина Гомоляко</p>
                            <span className={ Styles.email }>job@hope.ua</span>
                        </div>
                        <a href="#">Написать</a>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.poster } style={ itemImage }></div>
                        <div className={ Styles.info }>
                            <div className={ Styles.title }>Технические вопросы</div>
                            <p className={ Styles.name }>Игорь Микитенко</p>
                            <span className={ Styles.email }>tech@hope.ua</span>
                        </div>
                        <a href="#">Написать</a>
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}
