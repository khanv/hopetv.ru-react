import React, { Component } from 'react';
import { Info } from 'components/Contacts';
import { PageHead } from 'components/Shared';

/* eslint-disable react/prefer-stateless-function */
export default class Contacts extends Component {
    render() {
        return (
            <section>
                <PageHead/>
                <Info/>
            </section>
        );
    }
}
