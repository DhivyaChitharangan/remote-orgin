import React from "react";
import { View,Text, TextInput, TouchableHighlight } from "react-native";
import useLogin from "../../hooks/useLogin";
import { FontText } from "../values/Fonts";
const LoginScreen=()=>{
    const {theme,email,pwdValidation,password,emailValidation,handleEmailFocus,handlePwdFocus,error,onLogin}=useLogin()
    return(
        <View style={{flex:1,backgroundColor:theme.primary}}>
             <View style={{ flex: 0.3, backgroundColor: theme.primary }}>
        {/* Top section */}
        <Text style={{textAlign:'center',marginTop:20,color:theme.white,fontWeight:'bold',fontSize:FontText.Medium}}>Hello</Text>
      </View>
      <View style={{ flex: 0.7, backgroundColor: theme.white,borderTopRightRadius:50,borderTopLeftRadius:50 }}>
        {/* Bottom section */}
        <Text style={{marginTop:100,fontWeight:'bold',fontSize:FontText.Header,color:theme.black,marginStart:20}}>Welcome!</Text>
          <View style={{ marginTop: 50, width: '100%' }}>
            {error ? (<Text style={{color:'red',textAlign:'right',marginRight:70}}>{error}</Text>):null}
            <TextInput style={{backgroundColor:theme.primaryLight,borderRadius:15,width:'70%',alignSelf:'center'}} 
            onChangeText={(text)=>emailValidation(text)} value={email} onFocus={handleEmailFocus} placeholder="email">
              </TextInput>
            <TextInput style={{ backgroundColor: theme.primaryLight, borderRadius: 15, width: '70%', alignSelf: 'center', marginTop: 20 }} placeholder="password"
            onChangeText={(text)=>pwdValidation(text)}onFocus={handlePwdFocus} value={password} >
                </TextInput>
                <TouchableHighlight style={{backgroundColor:theme.primary,borderRadius:5,width:'80%',alignSelf:'center',marginTop:20,padding:15}}>
              <Text style={{ textAlign: 'center', color: theme.white, fontSize: FontText.Normal }}
              onPress={()=>{onLogin()}}>Login</Text>
                </TouchableHighlight>

        </View>
      </View>
     
        </View>
    )

}

export default LoginScreen