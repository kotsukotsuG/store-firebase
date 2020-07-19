import React, { FC } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopHeader from '../components/topHeader';
import TopMain from '../components/topMain';

const TopPage: FC = () => {
  return (
    <>
      <TopHeader />
      <TopMain />
    </>
  );
};

export default TopPage;
