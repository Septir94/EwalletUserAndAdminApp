import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { StyleSheet,View, Platform } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeContainer from './src/screens/HomeContainer';
import AddAccountScreen from './src/screens/AddAccountScreen';
import ListAccount from './src/screens/ListAccountScreen';
import AccountDetail from './src/screens/AccountDetailScreen';


export default function App(props) {
  const Stack = createStackNavigator();
 return(
 
 <>
 <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}  />
          <Stack.Screen name="Home" component={HomeContainer}  />
          <Stack.Screen name="AddAccount" component={AddAccountScreen}/>
          <Stack.Screen name="ListAccount" component={ListAccount}/>
          <Stack.Screen name="AccountDetail" component={AccountDetail}/>
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

