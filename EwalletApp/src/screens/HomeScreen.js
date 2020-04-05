import React, { Component } from 'react';
import { View,Text,StyleSheet,Image, Alert, ScrollView,RefreshControl } from 'react-native';
import Header from './CustomButton';
import axios from 'axios';
import { Card, CardItem, Row, Col, Body, Right, Icon,Button } from 'native-base';
export default class HomeScreen extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('http://10.0.2.2:8060/accounts')
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
    render(){
        const {username,password}=this.props.route.params;
         const list=this.state.data.map((item)=>{
            if(item.account===username){
                return (
                    <>
                    <Card style={{borderRadius:40,marginBottom:10,alignItems:'center'}}>
                    <CardItem>
                        <Body>
                        <Row>
                            <Col style={{display:'flex',alignItems:'center'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width:100,height:100,marginBottom:20}}/>
                            <Text style={{fontSize:25,textAlign:'center',marginBottom:20}}>{item.name}</Text>
                            <Button block info onPress={()=>{this.props.navigation.navigate('AccountDetails',{account:username})}}>
                                <Text style={{fontSize:15,fontWeight:"500",color:'#2b2b99'}}>Info Account</Text>
                            </Button>
                            </Col>
                        </Row>
                        </Body>
                    </CardItem>
            </Card>
            </>
                )
            }
        })
        if(this.state.data.length!==0){
        return(
            <>
            <ScrollView >
            <Header name="Home" icon="menu" navigate={()=>this.props.navigation.openDrawer()} {...this.props}/>
            {list}
            <Card style={{marginBottom:10}}>
            <CardItem>
              <Image source={require('../../assets/images/topup.png')}style={{width:30,height:30}} />
              <Text style={{marginLeft:20,fontSize:18}}>Top Up</Text>
              <Right>
                <Icon name="arrow-forward" style={{marginLeft:50}} onPress={()=>{this.props.navigation.navigate('Top Up',{account:username})}} />
              </Right>
             </CardItem>
             <CardItem>
              <Image source={require('../../assets/images/bank.png')}style={{width:30,height:30}} />
              <Text style={{marginLeft:20,fontSize:18}}>Transfer</Text>
              <Right>
                <Icon name="arrow-forward" style={{marginLeft:50}} onPress={()=>{this.props.navigation.navigate('Transfer',{account:username})}} />
              </Right>
             </CardItem>
             <CardItem>
              <Image source={require('../../assets/images/money.png')} style={{width:30,height:30}} />
              <Text style={{marginLeft:20,fontSize:18}}>Point  </Text>
              <Right>
                <Icon name="arrow-forward" onPress={()=>{this.props.navigation.navigate('Point',{account:username})}} />
              </Right>
             </CardItem>
             <CardItem>
              <Image source={require('../../assets/images/smartphone.png')}style={{width:30,height:30}} />
              <Text style={{marginLeft:20,fontSize:18}}>Buy Pulsa</Text>
              <Right>
                <Icon name="arrow-forward" onPress={()=>{this.props.navigation.navigate('Pulsa',{account:username})}} />
              </Right>
             </CardItem>
           </Card>
           <Card >
               <CardItem >
                   <Image source={require('../../assets/images/transaction.png')}style={{width:30,height:30,marginRight:10}} />
                   <Text style={{fontSize:15}}>History Transaction</Text>
                   <Right>
                <Icon name="arrow-forward" onPress={()=>{this.props.navigation.navigate('HistoryTransaction',{account:username})}} />
              </Right>
               </CardItem>
           </Card>
            </ScrollView>
           
            </>
        )
        }else{
            return(
            <View style={styles.container}>
                <Image source={require('../../assets/images/load.gif')} style={{width:300,height:300}}/>
            </View>
            )
        }
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
