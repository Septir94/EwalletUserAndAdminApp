import React, { Component } from 'react';
import { View,Text,StyleSheet,Button,TextInput,Image,KeyboardAvoidingView, Platform,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Axios from 'axios';


const Drawer = createDrawerNavigator();
export default class LoginScreen extends Component{
    state={
        username:'',
        password:'',
        data:[]
    }
    changeInputHandler=(text,name)=>{
        this.setState({[name]:text})
    }
    componentDidMount(){
        Axios.get('http://10.0.2.2:8060/accounts')
      .then(res => {
        const newData=res.data;
        console.log(newData)
        this.setState({ data:newData });
        console.log(this.state.data);
        
      }).catch((e)=>{
          console.log(e.message);
          Alert.alert(e.message);     
      })
    }
    ValidationHandler=()=>{
        const index= this.state.data.findIndex(item=>{
            return item.account===this.state.username;
        })
        if(index>=0){
        this.props.navigation.navigate("Home",{username:this.state.username,password:this.state.password})
        }else{
            Alert.alert(this.state.username+"Is Not Found or Wrong");
        }
    }
    render(){
        return(
            <KeyboardAvoidingView
             behavior={Platform.Os == "ios" ? "padding" : "height"}
             style={styles.container}>
                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
               <Image source={require('../../assets/images/wallet.png')} style={{width:150,height:150,marginBottom:20}}/>
                <Text style={{fontSize:20}}>Login</Text>
                <TextInput style={{width:300,height:40,borderBottomWidth:1,borderBottomColor:'gray'}} placeholder='Account Number' onChangeText={(text)=>{this.changeInputHandler(text,"username")}} ></TextInput>
                <TextInput style={{width:300,height:40,borderBottomWidth:1,borderBottomColor:'gray',marginBottom:10}} secureTextEntry={true}   placeholder='Password' onChangeText={(text)=>{this.changeInputHandler(text,"password")}} ></TextInput>
                <Button  title="Login" onPress={this.ValidationHandler}/>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
})
