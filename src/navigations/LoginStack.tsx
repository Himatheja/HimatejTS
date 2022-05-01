import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens";
import RouteNames from "../constants/RouteNames";

const { Navigator, Screen } = createNativeStackNavigator();

const LoginStack: React.FC = () => {
    return(
        <Navigator initialRouteName={RouteNames.Login} screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Screen name={RouteNames.Login} component={Login}/>
        </Navigator>
    )
}

export default LoginStack;
