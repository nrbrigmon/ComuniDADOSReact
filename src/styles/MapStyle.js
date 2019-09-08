export default theme => ({
  map: {
		position: "fixed"
    ,height: "100vh"
    ,width: "50%"
	},
	mapContainer:{
		margin: 0
		,height: "100%"
		,width: "100%"
		,position:"relative"
	},
  root: {
    flexGrow: 1
    // height: "35px",
    // background: "black"
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 120
		// color: "white"
	},
});
