import React, { Component, PropTypes } from 'react';
import Styles from './styles.scss';
import BreakPoints from './breakpoints';
import cx from 'classnames';

/**
 *
 * @param {int} currentWidth  ширина
 * @param {object} breakPoints
 * @returns {string} имя брейкпоинта
 */
function getCurrentBreakpoint(currentWidth, breakPoints) {
    if (currentWidth >= breakPoints.phonePortrait.min && currentWidth <= breakPoints.phonePortrait.max) {
        return breakPoints.phonePortrait.name
    } else if (currentWidth >= breakPoints.phoneLandscape.min && currentWidth <= breakPoints.phoneLandscape.max) {
        return breakPoints.phoneLandscape.name
    } else if (currentWidth >= breakPoints.tabletPortrait.min && currentWidth <= breakPoints.tabletPortrait.max) {
        return breakPoints.tabletPortrait.name
    } else if (currentWidth >= breakPoints.tabletLandscape.min && currentWidth <= breakPoints.tabletLandscape.max) {
        return breakPoints.tabletLandscape.name
    } else if (currentWidth >= breakPoints.desktop.min && currentWidth <= breakPoints.desktop.max) {
        return breakPoints.desktop.name
    } else if (currentWidth >= breakPoints.desktopWide.min && currentWidth <= breakPoints.desktopWide.max) {
        return breakPoints.desktopWide.name
    } else if (currentWidth >= breakPoints.desktopHD.min && currentWidth <= breakPoints.desktopHD.max) {
        return breakPoints.desktopHD.name
    } else if (currentWidth >= breakPoints.desktopMega.min && currentWidth <= breakPoints.desktopMega.max) {
        return breakPoints.desktopMega.name
    }
}

function getCurrentTemplate(currentWidth, breakPoints) {
    if (currentWidth === breakPoints.phonePortrait.template) {
        return true;
    } else if (currentWidth === breakPoints.phoneLandscape.template) {
        return true;
    } else if (currentWidth === breakPoints.tabletPortrait.template) {
        return true;
    } else if (currentWidth === breakPoints.tabletLandscape.template) {
        return true;
    } else if (currentWidth === breakPoints.desktop.template) {
        return true;
    } else if (currentWidth === breakPoints.desktopWide.template) {
        return true;
    } else if (currentWidth === breakPoints.desktopHD.template) {
        return true;
    } else if (currentWidth === breakPoints.desktopMega.template) {
        return true;
    } else {
        return false;
    }
}

export default class PixelPerfect extends Component {
    static propTypes = {
        component: PropTypes.string.isRequired,
        opacity: PropTypes.number,
        breakPoints: PropTypes.object,
        templates: PropTypes.object
    };

    static defaultProps = {
        opacity: 80,
        breakPoints: BreakPoints,
        templates: []
    };

    componentDidMount = () => {
        this.setState({
            width: global.window.innerWidth
        });

        this.setState({
            currentBreakpoint: getCurrentBreakpoint(global.window.innerWidth, this.props.breakPoints),
            template: getCurrentTemplate(global.window.innerWidth, this.props.breakPoints),
            opacity: this.props.opacity
        })

        global.window.onresize = this.onResize;
    };

    constructor() {
        super();
        this.state = {
            currentBreakpoint: '',
            width: '',
            opacity: '',
            visible: true,
            template: false
        };
    }

    /**
     * Изменение opacity
     *
     * @param event
     */
    onArrowClick = (event) => {
        var opacity;
        if (event.target.dataset.opacity == 'up') {
            if (this.state.opacity >= 100) {
                return
            }
            opacity = this.state.opacity + 20;
        } else if (event.target.dataset.opacity == 'down') {
            if (this.state.opacity <= 0) {
                return
            }
            opacity = this.state.opacity - 20;
        }
        this.setState({opacity: opacity});

        if (opacity == 0) {
            this.setState({visible: false});
        } else {
            this.setState({visible: true});
        }
    };

    onCloseClick = () => {
      if (this.state.visible === true) {
          this.setState({visible: false});
      } else {
          this.setState({visible: true});
      }
    };

    /**
     * Ресайз окна
     */
    onResize = () => {
        const width = global.window.innerWidth;

        this.setState({
            width,
            currentBreakpoint: getCurrentBreakpoint(width, this.props.breakPoints),
            template: getCurrentTemplate(width, this.props.breakPoints)
        });
    };

    render() {
        const { templates, component, opacity, breakPoints } = this.props;
        const { width, currentBreakpoint, visible } = this.state;
        const currentOpacity = this.state.opacity;
        const templateStatus = this.state.template;

        const wrapClasses = cx({
            [Styles.hidden]: visible === false,
            [Styles.disabled]: templateStatus === false,
            [Styles.pixelPerfectWrap]: true
        });

        const closeClasses = cx({
            [Styles.hide]: visible === false,
            [Styles.show]: visible === true,
            [Styles.close]: true
        });

        const images = templates.map((breakPoint) => {
            const src = `/PixelPerfect/${component}/${breakPoint}.png`;
            const classes = cx({
                [Styles.visible]: breakPoint === this.state.currentBreakpoint
            });
            return (
                <img key={ breakPoint } src={ src } className={ classes }/>
            );
        });
        
        return (
            <div className={ Styles.pixelPerfect }>
                <div className={ Styles.pixelPerfectMenu }>
                    <div className={ Styles.items }>
                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Component name:</p>
                            <p className={ Styles.value }>{ component }</p>
                        </div>

                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Current media breakpoint:</p>
                            <p className={ Styles.value }>{ currentBreakpoint }</p>
                        </div>

                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Width:</p>
                            <p className={ Styles.value }>{ `${width}px` } </p>
                        </div>

                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Opacity:</p>
                            <span onClick={ this.onArrowClick } className={ Styles.buttonDown } data-opacity="down">-</span>
                            <p className={ Styles.opacity }>{ currentOpacity }</p>
                            <span onClick={ this.onArrowClick } className={ Styles.buttonUp } data-opacity="up">+</span>
                        </div>

                        <div className={ Styles.item }>
                            <p onClick={ this.onCloseClick } className={ closeClasses }>
                                <span>Hide</span>
                                <span>Show</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={ wrapClasses } style={{opacity: currentOpacity / 100}}>
                    { images }
                </div>
            </div>
        );
    }
}
