import React, { Component } from 'react';
import { View ,Text, Alert, ScrollView} from 'react-native';
import Header from './SearchHeader';
import { Container, Thumbnail, Body, Button, Content, List, ListItem, Left, Right } from 'native-base';
import axios from 'axios';
export default class ListAccountScreen extends Component{
    state={
        data:[],

    }
    componentDidMount(){
        axios.get('http://10.0.2.2:8060/accounts').then(res=>{
            console.log(res.data);
            this.setState({data:res.data})

        }).catch(e=>{
            Alert.alert(e.message)
        })
    }

    render(){
        const list= this.state.data.map(item=>{
            
            return(
                <Content key={item.id}>
                <List style={{height:80}}>
                  <ListItem thumbnail>
                    <Left>
                    <Thumbnail square source={{uri:'https://picsum.photos/id/'+(item.id)+'/200/200'}}/>
                    </Left>
                    <Body>
                        <Text>{item.account}</Text>
                        <Text note numberOfLines={1}>{item.name}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>{this.props.navigation.navigate('AccountDetail',{account:item})}}>
                            <Text style={{color:'blue'}}>view</Text>
                        </Button>
                    </Right>
                  </ListItem>
                    </List>
                    </Content>
            )
        })
        if(this.state.data.length!==0){
        return(
            <ScrollView>
            <Header name="List Account" icon="arrow-back" navigate={()=>{this.props.navigation.goBack()}}/>
             {list}
            </ScrollView>
        )
        }else{
            return(
                <View>
                    <Text>Loading....</Text>
                </View>
            )
        }
    }
}