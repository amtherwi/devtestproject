import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from "react-router";
import { FaHeart, FaBars } from 'react-icons/fa';
import Dashboard from '../views/Dashboard';
import Countries from '../views/Countries';
import Home from '../views/Home';
import Header from '../components/Header';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  // const intl = useIntl();
  return (
    <main style={{backgroundColor:'#dbd7d7'}}>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div>
        <Header />
      </div>
    
      <div>
      {/* <BrowserRouter> */}
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/countries" component={Countries} />         
        </Switch>
        {/* </BrowserRouter> */}

      </div>
      <div style={{ paddingTop : 10, margin:20}}>
      <footer>
        <small>
          © 2021 made with <FaHeart style={{ color: 'red' }} /> by - {' '}
          
            Abdurrahman AlTherwi
          
        </small>
        <br />
      </footer>
      </div>
    </main>
  );
};

export default Main;
