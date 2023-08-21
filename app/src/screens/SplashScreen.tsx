
import React from "react";
import {SafeAreaView, View,Text } from "react-native";
import { useSplash } from "../hooks/useSplash";
import { NavigationParamList } from "../NavigationRouter/NavigationUtils";
import { RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { FontText } from "./values/Fonts";
export type SplashScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'SplashScreen'>;
  route: RouteProp<NavigationParamList, 'SplashScreen'>;
};
const SplashScreen=()=>{
 const {theme}=useSplash()
  return( 
        <SafeAreaView style={{flex:1,backgroundColor:theme.primary,justifyContent:'center'}} >
      
      
<Text style={{fontSize:FontText.Header,color:theme.white,textAlign:'center',fontWeight:'bold'}}>{"Hello Everyone"}</Text>
        </SafeAreaView>


   )
}

export default SplashScreen