export default theme => ({
  root: {
		flexGrow: 1,
		background: "white",
		color: "black"
	},
	toolbar:{
		boxShadow: "rgba(0, 0, 0, 0.2) 0 0 4px 2px"
  },
  menuButton: {
    marginRight: theme.spacing(0)
		,color:"black"
  },
  title: {
		flexGrow: 1
		,color:"black"
    ,marginLeft: theme.spacing(0)
	},
	drawer: {
		width: "250px"
	}
});
