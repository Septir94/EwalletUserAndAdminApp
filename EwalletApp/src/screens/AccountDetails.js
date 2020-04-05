import React, { Component } from 'react';
import { View , Text ,Image} from 'react-native';
import axios from 'axios';
import { Card, Body, CardItem,Row,Col } from 'native-base';
import Header from './CustomButton';
import NumberFormat from 'react-number-format';
export default class AccountDetails extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('http://10.0.2.2:8060/accounts')
      .then(res => {
        const newData=res.data;
        console.log(newData)
        this.setState({ data:newData});
        console.log(this.state.data);
        
      }).catch((e)=>{
          console.log(e.message);
          Alert.alert(e.message);     
      })
    }
    
    render(){
        const {account}=this.props.route.params;
        const list=this.state.data.map((item)=>{
            if(item.account===account){
                return (
                    <>
                    <Card key={item.id} style={{height:400,borderRadius:40,marginBottom:10,marginTop:40,alignItems:'center'}}>
                        <Body>
                        <Row>
                            <Col style={{display:'flex',alignItems:'center'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width:100,height:100,marginBottom:20,marginTop:30}}/>
                            <Text style={{fontSize:25,textAlign:'center',marginBottom:20}}>{item.name}</Text>
                            <NumberFormat value={item.balance} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} suffix={'.00'} renderText={value => <Text style={{fontSize:25,textAlign:'center',marginBottom:20}}>{value}</Text>} />
                            <Text style={{fontSize:25,textAlign:'center',marginBottom:20}}>{item.point}</Text>
                            <Text style={{fontSize:25,textAlign:'center',marginBottom:20}}>{item.status===0?"Not Active":"Active"}</Text>
                            </Col>
                        </Row>
                        </Body>
            </Card>
            </>
                )
            }
        })
        return(
            <>
            <Header icon="arrow-back" name="Account Details" navigate={()=>this.props.navigation.goBack()}/>
            {list}
        </>
        )
    }
}