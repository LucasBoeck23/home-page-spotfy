import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Albuns, Estacoes } from "../../data/Listas";

export function EstacaoItem({ name, image }: Estacoes) {
    return (
      <View style={styles.container}>
        <View style={styles.containerAlbum}>
        <Image style={styles.capa} source={image} />
        <Text style={styles.titleEstacao}>{name}</Text>
        </View>
      </View>
    );
  }
export function AlbunItem({ name, image, tipo, artista }: Albuns) {
    return (
      <View style={styles.container}>
        <View style={styles.containerAlbum}>
        <Image style={styles.capa} source={image} />
        <Text style={styles.title} numberOfLines={2}>{name}</Text>
        <Text style={styles.descricao} numberOfLines={2}>{tipo} • {artista}</Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center",
    },
    capa:{
      height:150,
      width:150
    },
    title: {
      fontSize: 13,
      fontWeight: "bold",
      color: "white",
      paddingTop:10,
    },
    descricao:{
      fontSize: 13,
      flexWrap:"wrap",
      opacity:0.5,
      fontWeight: "bold",
      color: "white",
      width:150,
      height:15
    },
    containerAlbum:{
      marginLeft:10,
      marginRight:6
    },
    titleEstacao:{
      fontSize: 13,
      flexWrap:"wrap",
      opacity:0.5,
      fontWeight: "bold",
      color: "white",
      paddingTop:10,
      width:150,
      height:45,
    }
});