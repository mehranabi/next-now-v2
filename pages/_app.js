import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { LinearProgress } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../utils/getPageContext'

// To fix another error !!
import '../static/styles/another-style.css'

export default class MyApp extends App {
	
	constructor() {
    super()
    this.pageContext = getPageContext()
	}
	
	componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
	}

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  state = {
    isLoading: false,
  }

  handleRouteChangeStarted = () => {
		try{
    this.setState({
      isLoading: true,
    })
		}catch(e){console.log('error')}
  }

  handleRouteChangeFinished = () => {
		try{
    this.setState({
      isLoading: false,
    })
		}catch(e){console.log('error')}
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChangeStarted)
    Router.events.on('routeChangeComplete', this.handleRouteChangeFinished)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
						<div>
							{
								this.state.isLoading &&
								<LinearProgress style={{ zIndex: 2000 }} />
							}
							<Component pageContext={this.pageContext} {...pageProps} />
						</div>
					</MuiThemeProvider>
				</JssProvider>
      </Container>
    )
  }
}
