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
		[theme.breakpoints.down('xs')]: {
			width: '95%',
    },
		[theme.breakpoints.up('sm')]: {
			width: '50%',
    },
		[theme.breakpoints.up('md')]: {
			width: '33%'
    }
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
	directionsContainer: {
		zIndex: 999,
		position: 'absolute',
		top: '0px',
		background: 'rgba(52, 152, 219,0.4)',
		textAlign: 'center',
		width:'100%'
	},
	directionsText: {
		margin: '0 auto',
		padding: '0px 20px',
		width: '80%'
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
	},
	headline: {
		fontWeight: '700',
		[theme.breakpoints.down('xs')]: {
			fontSize: '25px',
    },
		[theme.breakpoints.up('sm')]: {
			fontSize: '30px',
    },
		[theme.breakpoints.up('md')]: {
			fontSize: '35px',
    }
  },
  basicText: {
		color: 'rgba(0, 0, 0, 0.54)',
		margin: '5px 0px',
		padding: '2px 0px',
		[theme.breakpoints.down('xs')]: {
			fontSize: '15px',
    },
		[theme.breakpoints.up('sm')]: {
			fontSize: '20px',
    }
	}
});
