/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './android/app/src/theme/ThemeProvider';
import Router from './android/app/src/NavigationRouter/Router';
import { View } from 'react-native';
import { useThemeContext } from './android/app/src/theme/Theme';


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
