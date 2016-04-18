import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import rawHtml from 'utils/rawHtml';
import Styles from './styles.scss';

export default class InlineSvg extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        const svgClasses = cx({
            [Styles.svg]: true,
            [this.props.className]: this.props.className.length > 0
        });

        return (

            <i dangerouslySetInnerHTML={ rawHtml(this.props.content) } className={ svgClasses }/>
        );
    }
}
