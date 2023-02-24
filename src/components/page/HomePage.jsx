import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../include/Header';
import Bottom from '../include/Bottom';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
     <div>
      HomePage페이지
     </div>
    <Bottom/>
    </React.Fragment>
  )
}

export default HomePage
