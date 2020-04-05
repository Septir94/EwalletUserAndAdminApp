import React, { Component } from  'react';
import { View ,StyleSheet,Text} from 'react-native';
import CostumHeader from './CustomButton';

class SettingScreen extends Component {
    render(){
        return(
            <>
            <CostumHeader name="Settings" icon="menu" navigate={()=>this.props.navigation.openDrawer()}/>
            <View style={styles.container}>
                <Text>Setting Screen</Text>
            </View>
            </>
        )
    }
}
export default SettingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
})

