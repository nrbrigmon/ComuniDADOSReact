export default theme => ({
  // root: {
  //   flexGrow: 1,
	// 	minWidth: 290
  // },
  formControl: {
		minWidth: '120px',
		width: '300px',
		background: "white",
		padding: '2px 15px',
		margin: '0px 25px',
		borderRadius: '4px',
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