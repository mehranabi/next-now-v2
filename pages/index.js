import React from 'react'
import Link from 'next/link'

class App extends React.Component {

  render() {
    return (
			<div style={{ padding: 35 }}>
				<p>This is a minimal sample with <a href='//nextjs.org'>Next.js</a> + <a href='//material-ui.com'>Material-UI</a> + <a href='//zeit.co/now'>Now</a></p>
				<Link href='/what'><a>What?</a></Link>
			</div>
    )
  }
}

export default App
