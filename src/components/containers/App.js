import React from 'react';
import VPlayer from './VPlayer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

const App = () => {
  return(
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path='/' component={VPlayer}/>
          <Route exact path='/:activeVideo' component={VPlayer}/>
        </Switch>
        <GlobalStyle/>
      </>
    </BrowserRouter>
    
  )
}

export default App;