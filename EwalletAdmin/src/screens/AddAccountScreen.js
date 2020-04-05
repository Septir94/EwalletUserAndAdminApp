import React, { Component } from 'react';
import { View ,Text, Alert} from 'react-native';
import Header from './SearchHeader';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import axios from 'axios';
export default class AddAccountScreen extends Component{
    state={
            account:'',
            balance:0,
            name:'',
            data:[],
            status:''
        
    }
    OnChangeHandler=(text,name)=>{
        this.setState({[name]:text});
        
    }
    
    postHandler=()=>{
        const post={
            account:this.state.account,
            balance:this.state.balance,
            name:this.state.name
        }
        Alert.alert(
            'Reminder',
            'Add this Account?',
            [
                {text:'Yes',onPress:()=>{
                    axios.post('http://10.0.2.2:8060/accounts',post).then(res=>{
                                    console.log(res);
                                    this.setState({data:res.data,status:res.status})
                                    Alert.alert('Add Account Success')
                                }).then(response=>{
                                    console.log(response);
                                    
                                }).catch(e=>{
                                    Alert.alert(e.response.data.message)
                                })
                                        }},
                {text:'No',onPress:()=>{Alert.alert('Add Account Canceled')}}
            ],
            {cancelable:true}
        )
        
    }
    
    render(){
        

        return(
            <>
            <Header name="Add Account" icon="arrow-back" navigate={()=>this.props.navigation.goBack()}/>
            <Container>
        <Content >
          <Form style={{justifyContent:'center',marginTop:30}}>
            <Item floatingLabel>
              <Label>Account Number</Label>
              <Input keyboardType='number-pad' onChangeText={(text)=>{this.OnChangeHandler(text,'account')}} />
            </Item>
            <Item floatingLabel last>
              <Label>Balance</Label>
              <Input keyboardType='number-pad' onChangeText={(text)=>{this.OnChangeHandler(text,'balance')}} />
            </Item>
            <Item floatingLabel last>
              <Label>Name</Label>
              <Input  onChangeText={(text)=>{this.OnChangeHandler(text,'name')}}/>
            </Item>
            <Button block info style={{marginTop:30}} onPress={this.postHandler}>
            <Text style={{color:'white'}}>Add Account</Text>
          </Button>
             </Form>
             </Content>
         </Container>
            </>
        )
    }
}