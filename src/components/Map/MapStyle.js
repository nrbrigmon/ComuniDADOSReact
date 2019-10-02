export default theme => ({
  root: {
    // flexGrow: 1
    // height: "35px",
    // background: "black"
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  map: {
		position: "fixed"
    ,height: "100vh"
		,width: "50%"
		,background: "white"
		,borderRight: "inset white"
		,borderLeft: "inset white"
	},
	surveyMap:{
		position: "fixed"
    ,height: "100vh"
		,width: "100%"
		,background: "white"
	},
	mapContainer:{
		margin: 0
		,height: "100%"
		,width: "100%"
		,position:"relative"
	},
	legendContainer: {
		left: '10px',
		bottom: '10px',
		width: '300px',
		borderRadius: '4px',
		zIndex: '8999',
		position: 'absolute',
		backgroundColor: 'white',
		transition: 'display 0.25s ease-in-out',
		boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 5px 1px',
		padding: '12px',
		margin: '4px'
	},
	legendPaletteContainer: {
		minWidth: '210px',
		padding: '0',
		margin: '0',
		listStyle: 'none',
		textTransform: 'uppercase'
	},
	min: {
		float: 'left',
		margin: '0 0 5px'
	},
	max: {
		float: 'right',
		margin: '0 0 5px'
	},
	graph: {
		clear: 'both',
		overflow: 'hidden',
		display: 'table',
		width: '100%',
		height: '15px',
		borderRadius: '3px',
		border: '1px solid #b3b3b3'
	},
	colors: {
		display: 'table-row'
	},
	quartile: {
		height: '13px',
		display: 'table-cell',
		width: '55px'
	},
	titleText: {
		fontSize: '16px',
		fontWeight: '600',
		textAlign: 'center'
	}
});
