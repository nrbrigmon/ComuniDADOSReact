export default theme => ({
  root: {
    background: "black"
  },
  formControl: {
		minWidth: '175px',
		[theme.breakpoints.down('sm')]: {
			width: '175px',
			margin: '0px 10px',
    },
		[theme.breakpoints.up('md')]: {
			width: '250px',
			margin: '0px 15px',
    },
    [theme.breakpoints.up('lg')]: {
			width: '300px',
			margin: '0px 25px',
    },
		borderRadius: '4px',
		background: "white",
		padding: '2px 15px',
		whiteSpace: "normal"
	},
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
		cursor: 'pointer',
		textDecoration: 'none',
    disableUnderline: "true",
    
	}, 
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  noOptionsMessage: {
    padding: '2px'
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
		fontSize: 16,
		maxWidth: '80%',
		textOverflow: "ellipsis",
		display: "initial",
		whiteSpace: "nowrap",
		overflow: "hidden",
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: '2px',
    left: 0,
    right: 0,
  }
});