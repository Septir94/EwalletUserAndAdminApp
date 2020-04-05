import React from 'react';
import { Component } from 'react';
import {Image} from 'react-native';
import { View ,Text, Card, CardItem, Body, Row,Col} from 'native-base';
import Axios from 'axios';
import Header from './CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';

export default class HistoryScreen extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get('http://10.0.2.2:8070/transaction')
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
        const {account}=this.props.route.params;
        const ListTransaction=this.state.data.filter((item)=>{
            return item.from===account;
        })
        const ListBody=ListTransaction.map((item)=>{
            return(
              <Card style={{width:400,height:120}}>
                <CardItem>
                    <Body>
                        <Row>
                            <Col >
                            <Image source={require('../../assets/images/transaction.png')} style={{width:50,height:50}}/>
                            </Col>
                            <Col>
                            <Text style={{fontSize:15,marginBottom:10}}>{item.type}</Text>
                            <NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} suffix={'.00'} renderText={value => <Text style={{fontSize:15,marginBottom:10}}>{value}</Text>} />
                            <Text style={{fontSize:15,marginBottom:10}}>{item.transactionDate.slice(0,10)}</Text>
                            </Col>
                        </Row>
                    </Body>
                </CardItem>
            </Card>
            )
        })
        return(
            <>
            <Header name="History Transaction" icon="arrow-back" navigate={()=>this.props.navigation.goBack()}/>
            <ScrollView>
            <View style={{flex:1,alignItems:'center'}}>
            
                {ListBody}
            </View>
            </ScrollView>
            </>
        )
    }
}