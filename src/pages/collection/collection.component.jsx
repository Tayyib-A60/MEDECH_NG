import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
            {
                collection.items.map( item =>
                    (<CollectionItem className='collection-item' item={item} key={item.id} />)
                )
            }
            </div>
        </div>
    );

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);