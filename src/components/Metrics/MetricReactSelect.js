import React, { Component } from 'react';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { district_metrics, blocks_metrics } from "constants/metrics";

function NoOptionsMessage(props) {
	// console.log(props)
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}


function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
			fullWidth
			onKeyPress={()=>console.log("keypress")}
			onInput={()=>console.log("jets (onInput)")}
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}


function Placeholder(props) {
	const { selectProps, innerProps = {}, children } = props;
	
  return (
    <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
      {children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}


function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}


function Menu(props) {
  return (
		<Paper square className={props.selectProps.classes.paper} 
		{...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};


class MetricReactSelect extends Component {
	constructor(props){
		super(props)
		this.state = {
			single: null
		}
	}


	_makeMetricSelection = (layer, e) => {
		console.log(e)
		let { type } = layer;
		let metricObj = {};
		if (type === 'districts'){
			//if we have the district shape, we use that data
			metricObj = district_metrics.filter( elem => {
				return elem.label === e.value
			});
		} else {
			//else we use the block data
			metricObj = blocks_metrics.filter( elem => {
				return elem.label === e.value
			});
		}
		this.props.updateLayerStyle(metricObj[0]);
}


	render(){
		
		let { classes, mapLayers } = this.props;
		// let _metrics = district_metrics.map( elem => ({
		// 	value: elem.label,
		// 	label: elem.alias_name,
		// 	other: elem.legend
		// }));
		
		let metricSelection = (mapLayers.metric === "" ? "" : mapLayers.metric.label);
    console.log(metricSelection)
		
		return (
			<div className={classes.root}>
					<Select
						classes={classes}
						placeholder="Select a Metric"
						options={district_metrics}
						components={components}
						value={metricSelection}
						onChange={(e) => this._makeMetricSelection(mapLayers, e)}
						/>
			</div>
  	);
	}
}

export default MetricReactSelect;