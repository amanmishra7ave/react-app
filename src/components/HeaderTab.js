import { StyleSheet, Text, View,style,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StrictMode } from "react";
import { hydrate } from 'react-dom';

import { createRoot } from "react-dom/client";

export default function Headertab() {

const [activeTab,setActiveTab]=useState("Delivery");

  return (
    <View  style={{flexDirection:"row", alignSelf:"center"}}>
      <Headerbutton 
      text="Delivery" 
      btnColor="black" 
      textColor="white" 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} />
      <Headerbutton 
      text="Pickup" 
      btnColor="black" 
      textColor="black"/>
      activeTab={activeTab}
      setActiveTab={setActiveTab}

    </View>
  );
}

const Headerbutton = (props) => {
  <view>
    <TouchableOpacity
    style={{
        backgroundColor:props.btnColor,
        paddingvertical:6,
        paddingHorizontal:16,
        borderRadius:30,
    }}
    >
      <Text style={{color:props.textColor,fontSize:15,fontWeight:"900"}}>{props.Text}</Text>
    </TouchableOpacity>
  </view>;
};
