import * as React from 'react'
import 'react-app-polyfill/ie11'
import * as ReactDOM from 'react-dom'

import { Button, Flex, LiquidProvider } from '../.'

const App = () => {
  return (
    <LiquidProvider>
      <Flex spacing={4}>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
      </Flex>
    </LiquidProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
