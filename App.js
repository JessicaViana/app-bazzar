import React from 'react'
import { StatusBar } from 'react-native';

import Routes from './src/navigation/router';

export default function App() {
  return (
    <>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <Routes />
    </>
  );
}