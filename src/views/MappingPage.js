import React, { Component } from "react";
import MetricAppBar from "components/Metrics/MetricAppBar";
import LeafletMap from "components/Map/LeafletMap";
import LeafletMapLegend from "components/Map/LeafletMapLegend";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import mapStyle from "styles/MapStyle";
import { HELIO_MAP, SAO_MAP} from "constants/mapping";
import { connect } from "react-redux";
import * as actions from "actions";

class MappingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
		
	}
  render() {
		let {  classes } = this.props;
    return (
			<div>
        <MetricAppBar {...this.props} />
      	<Grid container spacing={0}>
					{/* helio map */}
        	<Grid item xs={6} className={classes.mapContainer} >
						<LeafletMap {...this.props} map_constants={HELIO_MAP} />
					</Grid>
					{/* sao francisco map */}
					<Grid item xs={6} className={classes.mapContainer}>
						<LeafletMap {...this.props} map_constants={SAO_MAP} />
					</Grid>
				</Grid>
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

export default withStyles(mapStyle)(connect(mapStateToProps, actions)(MappingPage));
