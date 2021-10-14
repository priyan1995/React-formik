
import './App.css';
import { YoutubeForm } from './components/YoutubeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FormikContainer } from './components/FormikContainer';

function App() {
  return (

    <Router>

      <div className="App">


        <Switch>

          <Route exact path="/">
            <YoutubeForm />
          </Route>

          <Route path="formik-form">
            <FormikContainer />
          </Route>

        </Switch>




      </div>
    </Router>


  );
}

export default App;
