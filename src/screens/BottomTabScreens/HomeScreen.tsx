import React = require("react");
import { SafeAreaView, Text, View } from "react-native";
import { useThemeContext } from "../theme/Theme";
import { useState } from "react";
const HomeScreen=()=>{
  const theme=useThemeContext()

    return(
      <SafeAreaView style={{flex:1, backgroundColor:theme.backgroundColor,}}>
        <View>
            <Text style={{color:theme.textColor}}>hey! i am Home Screen</Text>
        </View>

      </SafeAreaView>
    )

}

export default HomeScreen