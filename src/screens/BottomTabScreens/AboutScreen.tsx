import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useThemeContext } from "../theme/Theme";
const AboutScreen=()=>{
    const theme=useThemeContext()
        return(
        <SafeAreaView style={{flex:1, backgroundColor:theme.backgroundColor,}}>
            <View>
                <Text style={{color:theme.textColor}}>{"Hello who i am"}</Text>
            </View>
        </SafeAreaView>
    )

}

export default AboutScreen