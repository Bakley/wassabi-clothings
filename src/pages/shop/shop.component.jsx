import React, { Component } from 'react';
import CollectionPreview from '../../components/component-preview/component-preview.component'

import SHOP_DATA from './shop.data'

class ShopPage extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id , ...CollectionProps }) => (
                    <CollectionPreview key={id} {...CollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;