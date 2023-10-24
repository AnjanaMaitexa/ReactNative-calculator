
import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ThemeContext } from './context/ThemeContext';
import { useState} from "react";
import { myColors } from './styles/Colors';
import Button from './components/Button';
import MyKeyboard from './components/MyKeyboard';
function App(): JSX.Element {
const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
      <Switch
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MyKeyboard/>
    </SafeAreaView>
  </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
