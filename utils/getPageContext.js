import { SheetsRegistry } from 'jss'
import {
	createMuiTheme,
	createGenerateClassName
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#90CAF9',
      main: '#2196F3',
      dark: '#1565C0',
    },
    secondary: {
      light: '#388E3C',
      main: '#1B5E20',
      dark: '#1B5E20',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

let pageContext;

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}
