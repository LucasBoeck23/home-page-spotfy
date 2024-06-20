import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const EscolhasRapidas = () => {
  const Yandhi = require("../../capas/Yandhi.jpeg");
  const Validation = require("../../capas/Validation.jpeg");
  const Blond = require("../../capas/Blond.jpeg");
  const Graduation = require("../../capas/yeGraduation.jpeg");


  return (
    <View style={styles.contaier}>

      <View style={styles.album}>
          <Image source={Yandhi} style={styles.capaAlbum}></Image>
        <View style={styles.nomeAlbum}>
          <Text style={styles.textoAlbum}> Yandhi </Text>
        </View>
      </View>
      <View style={styles.album}>
          <Image source={Validation} style={styles.capaAlbum}></Image>
        <View style={styles.nomeAlbum}>
          <Text style={styles.textoAlbum}> Validation </Text>
        </View>
      </View>
      <View style={styles.album}>
          <Image source={Graduation} style={styles.capaAlbum}></Image>
        <View style={styles.nomeAlbum}>
          <Text style={styles.textoAlbum}> Graduation </Text>
        </View>
      </View>
      <View style={styles.album}>
          <Image source={Blond} style={styles.capaAlbum}></Image>
        <View style={styles.nomeAlbum}>
          <Text style={styles.textoAlbum}> Blond </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {
    height:130,
    width:"100%",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row",
    marginTop:15
  },
  album:{
    height:60,
    width:"45%",
    backgroundColor:"#2c2c2c",
    flexDirection:"row",
    borderRadius:6,
    marginTop:11
  },
  capaAlbum:{
    height:"100%",
    width:"35%",
    alignItems:"center",
    borderRadius:6,
  },
  nomeAlbum:{
    justifyContent:"center",
    alignItems:"flex-start",
    width:"70%",
  },
  textoAlbum:{
    color:"white",
    marginLeft:5,
    fontSize:14
  },
  fila:{
    height:100,
  }
});

export default EscolhasRapidas;
