/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/screens/theme/ThemeProvider';
 import { View } from 'react-native';
import { useThemeContext } from './src/screens/theme/Theme';
import Router from './src/screens/NavigationRouter/Router';


const App=()=>{


const theme=useThemeContext()
return(


<ThemeProvider>
  <View style={{backgroundColor:theme.backgroundColor,flex:1}}>
  <Router/>
  </View>
</ThemeProvider>

)
}



export default App;
