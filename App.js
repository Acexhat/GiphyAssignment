/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import ThemeContext from './src/contexts/ThemeContext.js';
import HomeScreen from './src/screens/Home.js';

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <HomeScreen setTheme={setTheme} />
    </ThemeContext.Provider>
  );
};

export default App;
