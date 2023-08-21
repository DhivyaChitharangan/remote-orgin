import { useEffect, useState } from "react";
import { useThemeContext } from "../theme/Theme"
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ROUTES } from "../NavigationRouter/Routes";
import React from "react";


const useLogin = () => {
useFocusEffect(
    React.useCallback(() => {
      // This function will be executed when the screen gains focus.
      console.log('Screen gained focus');

      // You can perform any actions you need here, such as fetching data.

      // Return a cleanup function if needed.
      return () => {
        // This function will be executed when the screen loses focus.
        setEmail('')
        setPassword('')
        // Clean up any resources, subscriptions, etc.
      };
    }, [])
  );
  const theme=useThemeContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error,setError]=useState<string>('')
 const defaultUser=[{email:"dhivya@gmail.com",pwd:"dhivya@123"}]
 const navigation =useNavigation()
  const handleEmailFocus = () => {
   
  };
  const handlePwdFocus = () => {
    console.log(">>>>>>>>>>setpwdHandle")
   
  };
  const emailValidation = (mail: any) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
      setEmail(mail)
      setError('')
    } else {
      setError("Email id is incorrect")
    }
    setEmail(mail)
    
  }
  const pwdValidation = (pwd: any) => {
        const cleanedText = pwd.replace(/[^\w\s@]/gi, '');
        setPassword(cleanedText)
    
  }
  const onLogin = () => {
    if (email === defaultUser[0]?.email && password === defaultUser[0]?.pwd) {
      navigation.navigate(ROUTES.HOME)
    } else {
      Alert.alert("Invalid user","Your email/password is inCorrect")
    }
  }


return{theme,handleEmailFocus,handlePwdFocus,setEmail,setPassword,email,password,emailValidation,pwdValidation,error,onLogin}
}

export default useLogin