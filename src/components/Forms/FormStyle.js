export default theme => ({
  root: {
    flexGrow: 1
    // height: "35px",
    // background: "black"
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
	},
	buttonGroup: {
		margin: '10px 0px',
		padding: '30px 20px',
		textAlign: 'center'
	},
	tableContainer: {
		maxWidth: '500px'
		,margin: '0 auto'
	},
	tableCell: {
		borderBottom: 'none',
		padding: '5px 20px'
	},
	tableText: {
		width: '100%'
	},
	errorText: {
		color: 'red',
		fontWeight: '700'
	},
	iconExit: {
		right: '10px',
		position: 'absolute',
		top: '10px'
	},
	actionButton: {
		marginLeft: '10px',
		marginRight: '10px'
	},
	postEvent: {
		margin: '10px 0px 10px 0px'
	}
});
