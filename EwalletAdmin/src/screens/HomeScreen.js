import React, { Component, Fragment } from 'react';
import { View,Text,StyleSheet,Image, Alert, ScrollView,TouchableOpacity } from 'react-native';
import Header from './CustomButton';
import axios from 'axios';
import { Card, CardItem, Row, Col, Body, Right, Icon,Button, Container } from 'native-base';
export default class HomeScreen extends Component{
    state={
        data:[]
    }
    render(){
        const {username,password}=this.props.route.params;
       
        return(
            <>
            <ScrollView >
            <Header name="Home" icon="menu" navigate={()=>this.props.navigation.openDrawer()} {...this.props}/>
            <Fragment>
                <Container>
                    <Row style={{alignItems:'center',justifyContent:'center'}}>
                        <Card style={{width:400,height:300,justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:20}}>
                            <Text style={{fontSize:25,textAlign:'center'}}>Hello {username}</Text>
                            <Image source={require('../../assets/images/team.png')} style={{width:200,height:200}}/>
                         </Card>
                    </Row>
                    <Row>
                        <Col style={{width:210,height:210,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddAccount')}>
                            <Image  source={require('../../assets/images/businessman.png')} style={{width:150,height:150}}/>
                            <Text style={{fontSize:15,fontWeight:'600',color:'#165493',textAlign:'center'}}>Add Account</Text>
                            </TouchableOpacity>
                            </Col>
                        <Col style={{width:210,height:210,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ListAccount')}>
                        <Image source={require('../../assets/images/checklist.png')} style={{width:150,height:150}}/>
                        <Text style={{fontSize:15,fontWeight:'600',color:'#165493',textAlign:'center'}}>List Account</Text>
                        </TouchableOpacity>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            <Text style={{fontSize:20,textAlign:'center'}}>Hello {username}</Text>
            
            </ScrollView>
            </>
        )
    }
}
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1d1d1d'
       
    }
})
