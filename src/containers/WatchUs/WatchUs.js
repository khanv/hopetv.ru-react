import React, { Component, PropTypes } from 'react';
import { Info, Locator } from 'components/WatchUs';
import { PageHead } from 'components/Shared';
import LocatorApi from 'api/Locator';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

/* eslint-disable react/prefer-stateless-function */
@translate(['WatchUs'])
@connect(({ browser }) => {
    return { browser };
})
export default class WatchUs extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        browser: PropTypes.object.isRequired
    };

    render() {
        const { t, browser } = this.props;

        return (
            <section>
                <PageHead
                    title={ t('headTitle') }
                    description={ t('headDescription') }
                    mediaType={ browser.mediaType }
                />
                <Info/>
                <Locator regions={ LocatorApi.getRegions() }/>
            </section>
        );
    }
}
