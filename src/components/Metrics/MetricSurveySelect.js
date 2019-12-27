import React, {Component} from "react";
import Select from 'react-select';
import { components } from "components/Metrics/MetricFunctions";
import { EVENT_CATEGORIES_EN, EVENT_CATEGORIES_PR } from "constants/events";
import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import { getEventBoundsFromSelection, filterSelectedMarkers } from "utils/mapping_utils";

class MetricSurveySelect extends Component {

	_makeMetricSelection = (e) => {
		// update map coordinates based on selection (value) and total array of events
		let markerSelection = filterSelectedMarkers(e.value)
		console.log(markerSelection)
		if (markerSelection.length === 1){
			// let centroidCoords = getCentroidFromSelection(markerSelection)
			this.props.updateMapCenterCoordinates([markerSelection[0].eventlatitude, markerSelection[0].eventlongitude])
		} else {
			let eventBounds = getEventBoundsFromSelection(markerSelection)
			this.props.updateMapBounds(eventBounds);
		}
		// console.log(centroidCoords)
		// update metricSelection state
		this.props.selectEventCategory(e)
		// console.log(e) and update chapaEvents state
		this.props.filterChapaEvents(e)
	}

	render() {
		let {classes, preferredLanguage, metricSelection} = this.props;
		let placeHolder = (preferredLanguage === 'en' ? 'View Events'	: 'Ver Eventos')
		
		return (
			<div>
				<Select
					className={classes.formControl}
					classes={classes}
					placeholder={placeHolder}
					options={preferredLanguage === 'en'
						? EVENT_CATEGORIES_EN
						: EVENT_CATEGORIES_PR}
					value={preferredLanguage === 'en'
						? EVENT_CATEGORIES_EN[metricSelection.row]
						: EVENT_CATEGORIES_PR[metricSelection.row]}
					components={components}
					onChange={(e) => this._makeMetricSelection(e)}/>
			</div>
		);
	}
}

export default withStyles(MetricStyle)(MetricSurveySelect);
