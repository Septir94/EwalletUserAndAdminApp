import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { StyleSheet,View, Platform } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeContainer from './src/screens/HomeContainer';
import TopUpScreen from './src/screens/TopUpScreen';
import TransferScreen from './src/screens/TransferScreen';
import PointScreen from './src/screens/PointScreen';
import PulsaScreen from './src/screens/PulsaScreen';
import AccountDetails from './src/screens/AccountDetails';
import HistoryTransaction from './src/screens/HistoryScreen';

export default function App(props) {
  const Stack = createStackNavigator();
 return(
 
 <>
 <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}  />
          <Stack.Screen name="Home" component={HomeContainer}  />
          <Stack.Screen name="Top Up" component={TopUpScreen}/>
          <Stack.Screen name="Transfer" component={TransferScreen}/>
          <Stack.Screen name="Point" component={PointScreen}/>
          <Stack.Screen name="Pulsa" component={PulsaScreen}/>
          <Stack.Screen name="AccountDetails" component={AccountDetails}/>
          <Stack.Screen name="HistoryTransaction" component={HistoryTransaction}/>
        </Stack.Navigator>
        </NavigationContainer>

        </>
    )
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

