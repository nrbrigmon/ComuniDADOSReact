import React, { Component } from "react";
import * as _util from "utils/mapping_utils";
import Paper from '@material-ui/core/Paper';
import ColorPaletteSelector from "./ColorPaletteSelector";

class LeafletMapLegend extends Component {
  render() {
		let { classes, mapLayers, preferredLanguage } = this.props;
		let { label, min, max, value, legend } = this.props.mapLayers["metric"];
		// console.log(this.props.mapLayers["metric"])
		let about_text = _util.getDescription(preferredLanguage, value)
		let _min_max = _util.legendHelper(preferredLanguage, min, max, legend);
		return ( <div>
			{/* if there is nothing to display, we won't show component */}
			<Paper className={classes.legendContainer}>
					<div >
						<div className={classes.titleText}>{ label }</div>
						<ul className={classes.legendPaletteContainer}>
							<li className={classes.min}>{_min_max[0]}</li>
							<li className={classes.max}>{_min_max[1]}</li>
							<li className={classes.graph}>
								<div className={classes.colors}>
								{ mapLayers.colorPalette === null ? <div/> :
								 mapLayers.colorPalette.map( (elem, idx) => {
										return(<div  key={idx}
													 className={classes.quartile} 
													 style={{ backgroundColor:elem }} ></div>)
									})
								}
								</div>
							</li>
						</ul>
						<div className={classes.aboutText}>{about_text}</div>
						<ColorPaletteSelector action={this.props.updateColorPalette} />
					</div>
				</Paper>
		</div>)
  }
}

export default LeafletMapLegend;
