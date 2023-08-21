import { useEffect } from "react"
import { useThemeContext } from "../theme/Theme"
import { ROUTES } from "../NavigationRouter/Routes"
import { CommonActions, useNavigation } from "@react-navigation/native"

export const useSplash=()=>{
const navigation=useNavigation()
    const theme=useThemeContext()
    useEffect(()=>{
    init()},[])
    const init=()=>{
        setTimeout(() => {
          navigation.dispatch(CommonActions.navigate({name:ROUTES.LOGIN}))
        }, 2000);
    }
return{theme,navigation}
}

