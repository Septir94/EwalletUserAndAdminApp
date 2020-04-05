import React, { Component } from 'react';
import { View, Button ,StyleSheet,TextInput ,Text, Keyboard,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert} from 'react-native';
import Header from './CustomButton';
import axios from 'axios';
import { Card, CardItem, Body, Row } from 'native-base';

export default class PulsaScreen extends Component{
    state={
            account:'',
            balance:'',
            hp:'',
            data:[],
            status:0
    }
    changeInputHandler=(text,name)=>{
        this.setState({[name]:text})
    }
    postHandler=()=>{
        const post={
            account: this.state.account,
            amount:this.state.balance,
            hp:this.state.hp,
        }
        axios.post("http://10.0.2.2:8070/transaction/transfer/pulsa",post,{headers: {'accept':'*/*','content-type': 'application/json'}}).then(result=>{
            console.log(result);
            this.setState({data:result.data,status:result.status})
            console.log(this.state.data);
            
        }).then(response=>{
            console.log(response);
            
        }).catch(e=>{
            console.log(e.response.data);
            let JsonString=e.response.data.message.slice(6)
            console.log(JsonString);
            const data=JSON.parse(JsonString);
            console.log(data);
            Alert.alert(data[0].message);
        })
    }

    render(){
        const {account}=this.props.route.params
        const response=()=>{
            if(this.state.status===200){
                return(
                    <>
                    <Card style={{width:400}}>
                        <CardItem>
                            <Body>
                             <Row style={{width:400,height:20}} >
                            <Text>Success</Text>
                            </Row> 
                            <Row style={{width:400,height:20}}>
                            <Text>{this.state.data.type}</Text>
                            </Row>
                            <Row style={{width:400,height:20}}>
                            <Text>to: {this.state.data.hp}</Text>
                            </Row>
                            <Row style={{width:400,height:20}}>
                            <Text>{this.state.data.transactionDate}</Text>
                            </Row>
                            </Body>
                        </CardItem>
                    </Card>
                    </>
                )
            }else{
                <Card>
                    <CardItem>
                        <Text>Top UP Failed!!</Text>
                    </CardItem>
                </Card>
            }
        }
        return(
            <>
            <Header name="BUY PULSA" icon="arrow-back" navigate={()=>this.props.navigation.goBack()} />
            <KeyboardAvoidingView
             behavior={Platform.Os == "ios" ? "padding" : "height"}
             style={styles.container}>
                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput  style={{width:380,borderBottomColor:'gray',borderBottomWidth:1,height:50}} onChangeText={(text)=>{this.changeInputHandler(text,"account")}} value={account}></TextInput>
                <TextInput style={{width:380,borderBottomColor:'gray',borderBottomWidth:1,height:50}} onChangeText={(text)=>{this.changeInputHandler(text,"balance")}} placeholder='Balance'></TextInput>
                <TextInput  style={{width:380,borderBottomColor:'gray',borderBottomWidth:1,height:50}} onChangeText={(text)=>{this.changeInputHandler(text,"hp")}} placeholder='Description' ></TextInput>
                <Button  title='BUY' onPress={this.postHandler}></Button>
                {response()}
            </View>
            
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
           
            </>
        )
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})