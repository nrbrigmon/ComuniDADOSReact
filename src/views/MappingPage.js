import React, { Component } from "react";
import MetricAppBar from "components/Metrics/MetricAppBar";
import LeafletMap from "components/Map/LeafletMap";
import LeafletMapLegend from "components/Map/Legend/LeafletMapLegend";
import BaseMapToggle from "components/Map/BaseMapToggle/BaseMapToggle";
import Grid from "@material-ui/core/Grid";
import SliderContainer from "components/Map/Slider/SliderContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import MapStyle from "components/Map/MapStyle";

import { HELIO_MAP, SAO_MAP} from "constants/mapping";
import { connect } from "react-redux";
import * as actions from "actions";

import MetricAppBarGeography from 'components/Metrics/MetricAppBarGeography';
import MetricReactSelect from 'components/Metrics/MetricReactSelect';
import FindMeButton from "components/FindMeButton/FindMeButton";


class MappingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
		
	}
  render() {
		let { classes, ...rest } = this.props;
		let { mapLayers, userLocation } = this.props;
		let { metric } = mapLayers;
		// console.log(userLocation) 
		if (userLocation.show){
			HELIO_MAP.coordinates = [userLocation.lat, userLocation.long]
			HELIO_MAP.mapZoom = 17

			SAO_MAP.coordinates = [userLocation.lat, userLocation.long]	
			SAO_MAP.mapZoom = 17
		}
		
    return (
			<div>
        <MetricAppBar >
						<Grid container justify="center">
							{/* First item is for choosing geography */}
							<MetricAppBarGeography {...rest} />

							{/* Second item is for choosing a metric */}
							<MetricReactSelect {...rest} />
							{/* <MetricAppBarSelection {...this.props} /> */} 

						</Grid>
				</MetricAppBar>

				<FindMeButton />

				<BaseMapToggle  />

				<SliderContainer />

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
		mapLayers: state.mapLayers
		,userLocation: state.userLocation
		,preferredLanguage: state.preferredLanguage
  };
}

export default withStyles(MapStyle)(connect(mapStateToProps, actions)(MappingPage));
