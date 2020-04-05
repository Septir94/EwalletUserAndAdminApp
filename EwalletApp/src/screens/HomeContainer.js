import React ,{Component} from 'react';
import SettingScreen from './SettingScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';



const Drawer = createDrawerNavigator();
class HomeContainer extends Component {
    render(){
        const {username,password}=this.props.route.params;
        return (
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} initialParams={{username,password}}  />
            <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
        )
    }
}
export default HomeContainer;
