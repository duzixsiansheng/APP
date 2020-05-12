import React, { useState, useEffect, useRef, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default class Home extends Component{
constructor()
{
  super()
  this.state={
    showMe:true
  }
}

  render() {
    return (
      <View style ={styles.container}>
        <Modal visible = {this.state.showMe} 
          onRequestClose={()=>console.warn('this is a close request')}>
            <View style={styles.modalView}>
              <Text>floating</Text>
              <TouchableOpacity onPress={()=>{
                this.setState({
                  showMe:false
                })}
                }>
          <Text style={styles.closeText} >close windows</Text>   
        </TouchableOpacity>
          </View>
        </Modal>
      
        <TouchableOpacity onPress={()=>{
                this.setState({
                  showMe:true
                })}
                }>
          <Text style={styles.openText}>open windows</Text>   
        </TouchableOpacity>
      </View> 
    );
  }
}

var styles = StyleSheet.create({
 modalView:{
   backgroundColor:'#bbb',
   height:450,
   justifyContent:'center',
   alignItems:'center'
 },
 closeText:{
   backgroundColor:'#333',
   color:'#bbb',
   padding:5,
   margin:20,
 },
 openText:{
   backgroundColor:'#333',
   color:'#bbb',
   padding:5,
   margin:20
 }





})