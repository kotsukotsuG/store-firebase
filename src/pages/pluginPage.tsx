import React, { FC } from 'react';
import TopHeader from '../components/topHeader';
import PluginContents from '../components/pluginContents';

const PluginPage: FC = () => {
  return (
    <div>
      <TopHeader />
      <PluginContents />
    </div>
  );
};

export default PluginPage;
