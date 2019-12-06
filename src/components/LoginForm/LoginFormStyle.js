export default theme => ({
  root: {
    flexGrow: 1
    // height: "35px",
    // background: "black"
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
	},
	centralAlign: {
		textAlign: 'center'
	},
	buttonGroup: {
		[theme.breakpoints.down('xs')]: {
			padding: '10px 0px',
    },
		[theme.breakpoints.up('sm')]: {
			padding: '20px 10px',
    },
		[theme.breakpoints.up('md')]: {
			padding: '30px 20px',
    },
		margin: '10px 0px',
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
	section: {
		marginTop: '30px',
		marginBottom: '20px'
	},
	postEvent: {
		margin: '10px 0px 10px 0px'
	},
	resetText: {
		// margin: '50px 0px 0px 0px',
		color: 'grey'
		// padding: '30px 20px',
	}
});
