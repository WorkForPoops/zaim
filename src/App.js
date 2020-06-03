import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css'
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';

class App extends React.Component {

  // componentDidMount() {
  //   this.props.initializeApp();
  // }

  

  render() {
    return (
      <div>
        <Home />
        <Payment />
      </div>
    );
  }
}

const mapStateToProps = (state) =>({

})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, ))(App);

const MainApp = (props) => {
  return(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
