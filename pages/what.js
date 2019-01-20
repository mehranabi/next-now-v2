import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import FaceIcon from '@material-ui/icons/FaceRounded'
import Link from 'next/link'

// Just for test | There is nothing important in this stylesheet
import '../static/styles/style.css'

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
  },
  authorContainer: {
    margintTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
  },
  authorName: {
    fontStyle: 'italic',
  },
  authorIcon: {
    margin: theme.spacing.unit,
  },
})

class WhatPage extends React.Component {

  render() {
    const { classes, theme } = this.props

    return (
			<div style={{ padding: 35 }}>
				<Link href='/'><a>Back</a></Link>
				<Paper square className={classes.container}>
					<Grid container spacing={8} justify='center'>
						<Grid item xs={1}>
							<img
								src='/static/images/quote-left.png'
							/>
						</Grid>
						<Grid item xs={8}>
							<Typography
								align='center'
								variant='h6'
								color='inherit'
							>
								Nothing Important ... !!
							</Typography>
							<Grid
								container
								justify='center'
								alignItems='center'
								className={classes.authorContainer}
							>
								<FaceIcon color='disabled' className={classes.authorIcon} />
								<Typography
									className={classes.authorName}
									align='center'
									variant='body2'
									color='textSecondary'
								>
									Mehran Abi
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={1}>
							<img
								src='/static/images/quote-right.png'
							/>
						</Grid>
					</Grid>
				</Paper>
			</div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(WhatPage)
