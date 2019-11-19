import React, {Component} from "react";
import Select from 'react-select';
import {components} from "./MetricFunctions";
import {EVENT_CATEGORIES_EN, EVENT_CATEGORIES_PR} from "constants/events";
import MetricStyle from "components/Metrics/MetricStyle";
import withStyles from "@material-ui/core/styles/withStyles";

class MetricSurveySelect extends Component {

		_makeMetricSelection = (e) => {
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
