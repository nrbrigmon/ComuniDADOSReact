export default theme => ({
  root: {
		flexGrow: 1,
    // height: "35px",
    // background: "black"
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
	},
	legendContainer: {
		border:'1px solid #999', 
		padding: '10px 20px', 
		margin: '10px 10px', 
		position: 'absolute',
		bottom: '20px',
		width: '33%'
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
	tableCellDesc: {
		borderBottom: 'none',
		padding: '20px 20px',
		verticalAlign: 'top',
		fontWeight: '700'
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
	mapContainer: {
		width: '100%', 
		height:'100%'
	},
	formSection:{
		minHeight: '250px'
	},
	postEvent: {
		margin: '10px 0px 10px 0px'
	},
	coords: {
		zIndex: 2000,
		position: 'absolute',
		bottom: '0px',
		background: 'whitesmoke'
	},
	inputField:{
		width: '100%'
	},
	popover: {
		pointerEvents: 'none',
		top: '130px'
	},
	paper: {
		marginTop: '-6px',
		marginLeft: '64px'
	},
	text: {
		// display: "block"
		// ,position: "absolute"
		padding: "9px 13px"
		,color: "#aaa"
		,background: "black"
		,fontSize: "12px"
	}
});
