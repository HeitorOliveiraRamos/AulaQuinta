import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { carregaTopo } from "../../../services/carregaDados";
// import { mock } from "../../../mocks/topo"; Esse forma chama direto sem o carregaDados.js

import logo from "../../../assets/logo.png";

//Parte dinâmica
class Topo extends React.Component {
  //Estado para inicializar valor vazio
  state = {
    topo: {
      boasVindas: "",
      legenda: "",
    },
  };

  //Carrega lá do carregaDados com retorno
  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

// export default function Topo() {   Esse daqui seria sem a Class
//   return (
//     <View style={estilos.topo}>
//       <Image source={logo} style={estilos.imagem} />
//       <Text style={estilos.boasVindas}>{topo.boasVindas}</Text>
//       <Text style={estilos.legenda}>{topo.legenda}</Text>
//     </View>
//   );
// }

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    width: "100vh",
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 16,
  },
});

export default Topo;
