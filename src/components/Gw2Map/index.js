// @flow

import type { Gw2Map as MapType } from 'flowTypes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Map from '../Map';
import actions from '../../actions/gw2';

export const selector = createSelector(
  (state, props) => state.maps[props.id] || {},
  (data) => ({
    data,
  })
);

export default connect(selector, {
  fetch: actions.fetchMaps,
})(
class Gw2Map extends Component<*> {
  props: {
    id: number,
    fetch: ([number]) => void,
    data: MapType,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return <Map {...this.props.data} id={this.props.id} />;
  }
}
);
