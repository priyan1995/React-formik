
import './App.css';
import { YoutubeForm } from './components/YoutubeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FormikContainer } from './components/FormikContainer';
import { Context } from './components/Context';
import { FormikAntd } from './components/FormikAntd/FormikAnt';

function App() {
  return (

    <Router>

      <div className="App">


        <Switch>

          <Route exact path="/">
            <YoutubeForm />
          </Route>

          <Route path="/formik-form">
            <FormikContainer />
          </Route>

          <Route path="/context">
            <Context />
          </Route>

          <Route path="/antd">
            <FormikAntd />
          </Route>
          

         

     </Switch>




      </div>
    </Router>


  );
}

export default App;
