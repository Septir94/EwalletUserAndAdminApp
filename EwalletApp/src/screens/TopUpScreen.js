import React, { Component } from 'react';
import { View, Button ,StyleSheet,TextInput ,Text, Keyboard,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert} from 'react-native';
import Header from './CustomButton';
import axios from 'axios';
import { Card, CardItem, Body, Row } from 'native-base';

export default class TopUpScreen extends Component{
    state={
            account:'',
            balance:'',
            data:[],
            status:0
    }
    changeInputHandler=(text,name)=>{
        this.setState({[name]:text})
    }
    postHandler=()=>{
        const post={
            account: this.state.account,
            amount: this.state.balance
        }
        axios.post("http://10.0.2.2:8070/transaction/balance",post,{headers: {'accept':'*/*','content-type': 'application/json'}}).then(result=>{
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
                    <Card>
                        <CardItem>
                            <Body>
                             <Row  >
                            <Text>Success</Text>
                            </Row> 
                            <Row>
                            <Text>{this.state.data.description}</Text>
                            </Row>
                            <Row>
                            <Text>Rp. {this.state.data.amount}</Text>
                            </Row>
                            <Row>
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
            <Header name="TOP UP" icon="arrow-back" navigate={()=>this.props.navigation.goBack()}/>
            <KeyboardAvoidingView
             behavior={Platform.Os == "ios" ? "padding" : "height"}
             style={styles.container}>
                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput  style={{width:400,borderBottomColor:'gray',borderBottomWidth:1,height:50}} onChangeText={(text)=>{this.changeInputHandler(text,"account")}} value={account}></TextInput>
                <TextInput style={{width:400,borderBottomColor:'gray',borderBottomWidth:1,height:50}} onChangeText={(text)=>{this.changeInputHandler(text,"balance")}} placeholder='Balance'></TextInput>
                <Button  title='Top Up' onPress={this.postHandler}></Button>
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