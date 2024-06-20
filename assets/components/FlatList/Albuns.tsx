import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, ListRenderItemInfo, FlatList} from "react-native";
import { AlbunItem } from "../SeparadorItem/ItemFlat";
import { Albuns, Estacoes, RecomendadoDeHoje } from "../../data/Listas"


interface Props {
    titulo:string,
    data: Albuns[];
  }

export const Album:React.FC<Props> = ({titulo, data}) =>{
    function renderItem({ item }: ListRenderItemInfo<Albuns>) {
        return <AlbunItem {...item} />;
      }
    return(
        <View>
            <Text style={styles.titulo}> {titulo} </Text>
        <FlatList
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    titulo:{
        color:"white",
        fontSize:25,
        marginTop:30,
        marginLeft:8,
        marginBottom:10
    },
})
