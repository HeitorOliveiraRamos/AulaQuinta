import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./src/telas/Home";

function App(){
  return(
  <View style={estilos.tela}> 
    <Home />
  </View>
  );
}

const estilos = StyleSheet.create({
  tela:{
    flex: 1,
  }
})
export default App;