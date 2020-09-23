import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import { addItems } from '../actions/index';

const AdditionalFeatures = props => {

  const addItem = (e, item) => {
    e.preventDefault()
    props.addItems(item)
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItems={e => addItem(e, item)}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, {addItems})(AdditionalFeatures);