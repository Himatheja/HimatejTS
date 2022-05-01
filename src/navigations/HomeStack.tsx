import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
import RouteNames from "../constants/RouteNames";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return(
        <Navigator initialRouteName={RouteNames.Home} screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Screen name={RouteNames.Home} component={Home}/>
        </Navigator>
    )
}

export default HomeStack;
