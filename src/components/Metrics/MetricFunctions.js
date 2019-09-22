
import React from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

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
      InputProps={{
				disableUnderline: true,
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
	let currentlySelected = props.selectProps.placeholder;
	let currentItem = props.children;
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
				fontWeight: currentItem ===  currentlySelected ? 700 : 100,
				minHeight: '38px',
				padding: '0px 18px'
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

export const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};
