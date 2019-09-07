import React, { Component } from "react";
import MetricAppBar from "components/Metrics/MetricAppBar";
import LeafletMap from "components/Map/LeafletMap";
import LeafletMapLegend from "components/Map/LeafletMapLegend";

import { connect } from "react-redux";
import * as actions from "actions";

class MappingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}
  render() {
		let { mapLayers } = this.props;
    return (
      <div>
        <MetricAppBar {...this.props} />
        <LeafletMap {...mapLayers} />
        <LeafletMapLegend />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
		mapLayers: state.mapLayers,
		metricSelection: state.metricSelection
  };
}

export default connect(
  mapStateToProps,
  actions
)(MappingPage);
