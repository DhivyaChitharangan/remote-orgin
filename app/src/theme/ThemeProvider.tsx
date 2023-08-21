import React = require("react");
import  { createContext, useContext } from "react";
import { defaultColorTheme, useThemeContext } from "./Theme";
// export const ThemeProvider=()=>{
//  const colorSchemes=useColorScheme()
//  const getBackgroundColors=(colorSchemes: string)=>{
//    return colorSchemes==='dark'?'black':'white'

//  }
//  const getTextColor=(colorSchemes:string)=>{
//     return colorSchemes==='dark'?'white':'black'
//  }
//  const [colorScheme, setColorScheme] = React.useState(Appearance.getColorScheme());
//  useEffect(()=>{
//     const subscription = Appearance.addChangeListener(({ colorScheme }) => {
//         setColorScheme(colorScheme);
//       });
  
//       return () => {
//         subscription.remove();
//       };
//  },[])
//  return(
//    <View style={{flex:1, backgroundColor:getBackgroundColors(colorScheme)}}>
//     <Text style={{color:getTextColor(colorScheme)}}>{"hii"}</Text>
//    </View>
//  )

// }


// export default ThemeProvider

// ThemeContext.tsx



const ThemeContext = createContext<defaultColorTheme | undefined>(undefined);

export const ThemeProvider = ({ children }) => {
    const theme = useThemeContext();
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
  };

  export const useAppTheme = (): defaultColorTheme => {
    const theme = useContext(ThemeContext);
    if (theme === undefined) {
      throw new Error('useAppTheme must be used within a ThemeProvider');
    }
    return theme;
  };

