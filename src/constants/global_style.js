export default theme => ({
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
	},
	centralAlign: {
		textAlign: 'center'
	},
	paperContainer: {
		[theme.breakpoints.down('xs')]: {
			margin:'10px',
			padding:'20px'
    },
		[theme.breakpoints.up('sm')]: {
			margin:'30px',
			padding:'30px'
    },
		[theme.breakpoints.up('md')]: {
			margin:'40px',
			padding:'40px'
    }
	}
})