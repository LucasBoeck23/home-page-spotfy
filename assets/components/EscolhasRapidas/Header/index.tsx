import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

export const Header = () => {
  const [buttonSelecionado, setButtonSelecionado] = useState(null);

  const handlebutton = (buttonPressionado: any) => {
    setButtonSelecionado(buttonPressionado);
  };
  const Usuario = require("../../../Lucas.jpg");

  return (
    <View style={styles.header}>
      <Image style={styles.PerfilFoto} source={Usuario} />

      <TouchableOpacity
        style={[
          styles.button,
          buttonSelecionado === "button1" && styles.buttonSelecionado,
        ]}
        onPress={() => handlebutton("button1")}
      >
        <Text
          style={[
            styles.textoBotao,
            buttonSelecionado === "button1" && styles.textoBotaoSelecionado,
          ]}
        > Tudo </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          buttonSelecionado === "button2" && styles.buttonSelecionado,
        ]}
        onPress={() => handlebutton("button2")}
      >
        <Text
          style={[
            styles.textoBotao,
            buttonSelecionado === "button2" && styles.textoBotaoSelecionado,
          ]}
        > Música </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          buttonSelecionado === "button3" && styles.buttonSelecionado,
        ]}
        onPress={() => handlebutton("button3")}
      >
        <Text
          style={[
            styles.textoBotao,
            buttonSelecionado === "button3" && styles.textoBotaoSelecionado,
          ]}
        > Podcasts </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    height: 90,
    marginLeft: 10,
  },
  PerfilFoto: {
    borderRadius: 50,
    height: 35,
    width: 35,
  },
  button: {
    height: 35,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2c",
  },
  buttonSelecionado: {
    backgroundColor: "#1ed760",
  },
  textoBotaoSelecionado: {
    color: "black",
  },
  textoBotao: {
    color: "white",
    margin: 5,
     fontWeight: 'bold'
  },
});
export default Header;
