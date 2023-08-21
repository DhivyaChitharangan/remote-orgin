
import React from "react";
import SplashScreen from "../screens/SplashScreen";
import { ROUTES } from "./Routes";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/BottomTabScreens/HomeScreen";
import { useThemeContext } from "../theme/Theme";
import Icon from "react-native-vector-icons/FontAwesome";
import AboutScreen from "../screens/BottomTabScreens/AboutScreen";
import { FontText } from "../screens/values/Fonts";
import LoginScreen from "../screens/common/LoginScreen";
import ActionSheetManager from "../screens/BottomTabScreens/ActionSheet";
import { SheetManager } from "react-native-actions-sheet";
// import { Icon } from "react-native-vector-icons/Icon";

const Router=()=>{
   const Tab=createBottomTabNavigator()
  const Stack =createNativeStackNavigator()
  const theme = useThemeContext()
 
  const HomeNavigation=()=>{
 return(
  <Stack.Navigator initialRouteName={ROUTES.HOME}>
     <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />

</Stack.Navigator>
 )
  }
 
  const BottomeNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{tabBarActiveTintColor:'white',
        tabBarActiveBackgroundColor:theme.primary,tabBarInactiveTintColor:theme.PrimarySandal,
        tabBarInactiveBackgroundColor:theme.primary,tabBarLabelStyle:{fontSize:FontText.Normal}}}>
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={24} color={color} />
            ),
            headerStyle: {
              
              backgroundColor:theme.primary,   // Set header background color
            },
            headerTintColor: theme.white,    // Set header text color
            headerTitleStyle: {
              fontWeight: 'bold',   
                   // Customize header title style
            },
          }}
        />
        <Tab.Screen
          name={ROUTES.ABOUT}
          component={AboutScreen}
          
          options={{
          
            tabBarIcon: ({ color }) => (
              <Icon name="user" size={24} color={color}/>
            
              
            ),
          
          
            headerStyle: {
              backgroundColor:theme.primary,   // Set header background color
            },
            headerTintColor: theme.white,    // Set header text color
            headerTitleStyle: {
              fontWeight: 'bold', 
           
                // Customize header title style
            },
            
          }}
           listeners={{
            tabPress: e => {
              SheetManager.show('more_action');
              e.preventDefault();
            },
          }}

        />
        
      </Tab.Navigator>
  
        

    );
  
  }
 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
        <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ROUTES.HOME} component={BottomeNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
  <ActionSheetManager/>
     </NavigationContainer>
  )
}

export default Router