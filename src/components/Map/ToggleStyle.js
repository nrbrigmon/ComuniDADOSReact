export default theme => ({
	container: {
		position: "absolute"
		,padding: "6px 10px"
		,top: "125px"
		,right: "20px"
		,zIndex: "500"
		,boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 5px 1px'
		,cursor: "pointer"
	},  
	popover: {
		pointerEvents: 'none',
		top: '130px'
	},
	interior:{
		marginTop: '5px'
	},
  paper: {
		marginRight: '75px'
		,marginLeft: '-65px'
	},
	text: {
		// display: "block"
		// ,position: "absolute"
		padding: "9px 13px"
		,color: "#aaa"
		,background: "black"
		,fontSize: "12px"
	}
})