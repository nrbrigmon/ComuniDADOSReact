import React, { Component } from "react";
import MetricAppBar from "components/Metrics/MetricAppBar";
import LeafletMap from "components/Map/LeafletMap";
import LeafletMapLegend from "components/Map/Legend/LeafletMapLegend";
import BaseMapToggle from "components/Map/BaseMapToggle/BaseMapToggle";
import Grid from "@material-ui/core/Grid";
import SliderContainer from "components/Map/Slider/SliderContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import mapStyle from "components/Map/MapStyle";

import { HELIO_MAP, SAO_MAP} from "constants/mapping";
import { connect } from "react-redux";
import * as actions from "actions";

class MappingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
		
	}
  render() {
		let { classes, preferredLanguage, mapLayers } = this.props;
		let { baseMapSelection, baseMapOpacity, metric } = mapLayers;
		// console.log(baseMapOpacity)
    return (
			<div>
        <MetricAppBar />

				<BaseMapToggle preferredLanguage={preferredLanguage} action={this.props.updateBaseLayer} baseMapSelection={baseMapSelection}/>

				<SliderContainer preferredLanguage={preferredLanguage} action={this.props.updateLayerOpacity} baseMapOpacity={baseMapOpacity}/>

      	<Grid container spacing={0}>
					{/* helio map */}
        	<Grid item xs={6} className={classes.mapContainer} >
						<LeafletMap 
							{...this.props} 
							map_constants={HELIO_MAP}  />
					</Grid>
					{/* sao francisco map */}
					<Grid item xs={6} className={classes.mapContainer}>
						<LeafletMap 
							{...this.props} 
							map_constants={SAO_MAP} />
					</Grid>
				</Grid>
				{ metric.value !== "" ?  <LeafletMapLegend {...this.props} /> : <div/> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
		mapLayers: state.mapLayers,
		preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(mapStyle)(connect(mapStateToProps, actions)(MappingPage));
