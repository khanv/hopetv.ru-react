import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import Instagram from 'components/Footer/Navigation/Assets/socialInstagram.svg';
import Facebook from 'components/Footer/Navigation/Assets/socialFacebook.svg';
import Twitter from 'components/Footer/Navigation/Assets/socialTwitter.svg';
import YouTube from 'components/Footer/Navigation/Assets/socialYoutube.svg';
import Ok from 'components/Footer/Navigation/Assets/socialOk.svg';
import Vk from 'components/Footer/Navigation/Assets/socialVk.svg';
import Top from 'components/Footer/Navigation/Assets/toTop.svg';

export default function Navigation(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const { mediaType } = props;

    const info = (
        <section className={ Styles.information }>
            <h1>Информация</h1>
            <ul>
                <li><a href="#">Где нас смотреть?</a></li>
                <li><a href="#">О Телеканале</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </section>
    );

    const networks = (
        <section className={ Styles.networks }>
            { [
                BreakPoints.tabletPortrait.name,
                BreakPoints.tabletLandscape.name,
                BreakPoints.desktop.name,
                BreakPoints.desktopHD.name,
                BreakPoints.desktopMega.name,
                BreakPoints.desktopWide.name
            ].indexOf(mediaType) !== -1 ? (
                <h1>Соц. сети</h1>
            ) : null }
            <div>
                <a href="#" className={ Styles.twitterIcon }><InlineSvg content={ Twitter }/></a>
                <a href="#" className={ Styles.facebookIcon }><InlineSvg content={ Facebook }/></a>
                <a href="#" className={ Styles.okIcon }><InlineSvg content={ Ok }/></a>
                <a href="#" className={ Styles.youtubeIcon }><InlineSvg content={ YouTube }/></a>
                <a href="#" className={ Styles.vkIcon }><InlineSvg content={ Vk }/></a>
                <a href="#" className={ Styles.instagramIcon }><InlineSvg content={ Instagram }/></a>
            </div>
        </section>
    );

    const rights = (
        <section className={ Styles.rights }>
            <h1>Права</h1>
            <span><a href="#">Інформація про структуру власності</a></span>
        </section>
    );

    const copyright = (
        <footer>
            <div>
                <p><strong>&copy; &shy; 2009-2016</strong> Телеканал <strong>«Надія»</strong>. Всі
                права захищені.</p>
                <span>Дизайн: Мирослав Джулай</span>
            </div>
            { [
                BreakPoints.tabletPortrait.name,
                BreakPoints.tabletLandscape.name,
                BreakPoints.desktop.name,
                BreakPoints.desktopHD.name,
                BreakPoints.desktopMega.name,
                BreakPoints.desktopWide.name
            ].indexOf(mediaType) !== -1 ? (
                <a href="#"><InlineSvg className={ Styles.arrow } content={ Top }/></a>
            ) : null }
        </footer>
    );

    return (
        <PixelPerfect templates={ templates } component="navigation">
            <section className={ Styles.navigationComponent }>
                <div className={ Grids.container }>
                    <div className={ Styles.mainContent }>
                        <section className={ Styles.menu }>
                            <h1>Меню</h1>
                            <ul>
                                <li><a href="#">Все Программы</a></li>
                                <li><a href="#">ТВ Программа</a></li>
                                <li><a href="#">Пожертвовать</a></li>
                                <li><a href="#">ТВ Онлайн</a></li>
                                <li><a href="#">Изучение Библии</a></li>
                            </ul>
                        </section>

                        { [
                            BreakPoints.phoneLandscape.name,
                            BreakPoints.tabletPortrait.name,
                            BreakPoints.tabletLandscape.name,
                            BreakPoints.desktop.name,
                            BreakPoints.desktopHD.name,
                            BreakPoints.desktopMega.name,
                            BreakPoints.desktopWide.name
                        ].indexOf(mediaType) !== -1 ? (
                            info
                        ) : null }

                        <section className={ Styles.connection }>
                            <h1>Связь</h1>
                            <ul>
                                <li><a href="#">Позвонить нам сейчас</a></li>
                                <li><a href="#">Написать в онлайн чат</a></li>
                            </ul>
                        </section>

                        { [
                            BreakPoints.phonePortrait.name,
                            BreakPoints.tabletPortrait.name,
                            BreakPoints.tabletLandscape.name,
                            BreakPoints.desktop.name,
                            BreakPoints.desktopHD.name,
                            BreakPoints.desktopMega.name,
                            BreakPoints.desktopWide.name
                        ].indexOf(mediaType) !== -1 ? (
                            networks
                        ) : null }

                        <section className={ Styles.phoneNumber }>
                            <h1>0 (800) 50 157 80</h1>
                            <span>Киев, 04071, а/я 36</span>
                        </section>

                        { [
                            BreakPoints.phoneLandscape.name,
                            BreakPoints.tabletPortrait.name,
                            BreakPoints.tabletLandscape.name,
                            BreakPoints.desktop.name,
                            BreakPoints.desktopHD.name,
                            BreakPoints.desktopMega.name,
                            BreakPoints.desktopWide.name
                        ].indexOf(mediaType) !== -1 ? (
                            rights
                        ) : null }

                        { [
                            BreakPoints.tabletPortrait.name,
                            BreakPoints.tabletLandscape.name,
                            BreakPoints.desktop.name,
                            BreakPoints.desktopHD.name,
                            BreakPoints.desktopMega.name,
                            BreakPoints.desktopWide.name
                        ].indexOf(mediaType) !== -1 ? (
                            copyright
                        ) : null }
                    </div>

                    <div className={ Styles.additionalContent }>
                        { [
                            BreakPoints.phonePortrait.name
                        ].indexOf(mediaType) !== -1 ? (
                            info
                        ) : null }
                        { [
                            BreakPoints.phonePortrait.name
                        ].indexOf(mediaType) !== -1 ? (
                            rights
                        ) : null }
                        { [
                            BreakPoints.phonePortrait.name,
                            BreakPoints.phoneLandscape.name
                        ].indexOf(mediaType) !== -1 ? (
                            copyright
                        ) : null }
                        { [
                            BreakPoints.phoneLandscape.name
                        ].indexOf(mediaType) !== -1 ? (
                            networks
                        ) : null }
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}

Navigation.propTypes = {
    mediaType: PropTypes.string.isRequired
};
