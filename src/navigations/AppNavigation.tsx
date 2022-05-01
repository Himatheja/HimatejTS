import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "./LoginStack";
import HomeStack from "./HomeStack";
import RouteNames from "../constants/RouteNames";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
    return(
        <Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Screen name={RouteNames.LoginStack} component={LoginStack}/>
            <Screen name={RouteNames.HomeStack} component={HomeStack}/>
        </Navigator>
    )
}

export default AppNavigation;
