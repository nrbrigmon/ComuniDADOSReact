export default theme => ({
	container: {
		position: "absolute"
		,padding: "0px 5px"
		,top: "195px"
		,left: "10px"
		,zIndex: "500"
		,boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 5px 1px'
		,cursor: "pointer"
		,border: '1px solid #999'
		,borderRadius: '3px'
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
		,marginLeft: '45px'
		,top: '195px'
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