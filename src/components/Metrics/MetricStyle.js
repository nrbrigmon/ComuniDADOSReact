export default theme => ({
  root: {
    flexGrow: 1,
    minWidth: 290,
  },
  formControl: {
		minWidth: '120px',
		width: '300px',
		background: "white",
		padding: '2px 15px',
		margin: '0px 25px',
		borderRadius: '4px'
	},
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
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
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: '2px',
    left: 0,
    right: 0,
  }
});