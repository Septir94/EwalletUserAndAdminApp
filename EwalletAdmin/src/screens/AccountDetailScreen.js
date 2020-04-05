import React, { Component, Fragment } from 'react';
import { Container, Content ,Card,Row, View, Button } from 'native-base';
import { Image,Text,TouchableOpacity, Alert } from 'react-native';
import Header from './SearchHeader';
import axios from 'axios';

 export default class AccountDetailScreen extends Component{

    statusHandler=(account,stat)=>{
        let newstatus=0;
        if(stat===0){
            newstatus=1
        }else if(stat==1){
            newstatus=0
        }
        const post={
            account:account,
            status:newstatus
        }
        axios.put('http://10.0.2.2:8060/accounts/status',post).then(res=>{
            console.log(res.data);
            Alert.alert("Status Update Success")
            this.props.navigation.navigate('Home')
        }).then(respose=>{
            console.log(response);
            
        }).catch(e=>{
            Alert.alert(e.response.data.message)
        })
        
    }
    render(){
        const {account}=this.props.route.params
        return(
            <Fragment>
              <Header name='Account Details' icon="arrow-back" navigate={()=>{this.props.navigation.goBack()}}/>
                <Container style={{justifyContent:'center',alignItems:'center' ,backgroundColor:'#FFE3B3'}}>
                    <Content >
                    <View style={{backgroundColor:'#26798E',width:414,height:200}}>
                    </View>
                    <View style={{alignItems:'center',marginTop:-130,position:'relative',elevation:1}}>
                    <Image source={{uri: 'https://picsum.photos/id/'+(account.id)+'/200/200'}} style={{width:200,height:200,borderRadius:180,borderWidth:2,borderColor:'#26798e'}}></Image>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Card style={{borderRadius:20,position:'relative',elevation:0, width:390,marginTop:-50,justifyContent:'center',alignItems:'center'}}>
                        
                        <Row style={{marginTop:60}}>
                            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>{account.account}</Text>
                        </Row>
                        <Row>
                            <Text style={{fontSize:20,marginBottom:10}}>
                                {account.name}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{fontSize:20,marginBottom:10}}>
                                {account.balance}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{fontSize:20,marginBottom:10}}>
                                {account.point}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{fontSize:20,marginBottom:10}}>
                                {account.status===0?'Not Active':'Active'}
                            </Text>
                        </Row>
                        </Card>
                        <TouchableOpacity  style={{width:300}}>
                        <Button block  rounded style={{marginTop:15,backgroundColor:'#26798e'}}  onPress={()=>{this.statusHandler(account.account,account.status)}}>
                            <Text style={{color:'#ffe3b3',fontWeight:'bold'}}>Update Status</Text>
                        </Button>
                        </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            </Fragment>
        )
    }
 }