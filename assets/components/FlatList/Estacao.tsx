import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, ListRenderItemInfo, FlatList} from "react-native";
import { EstacaoItem } from "../SeparadorItem/ItemFlat";
import { Estacoes} from "../../data/Listas"

interface Props {
    titulo:string,
    data: Estacoes[];
  }

export const Estacao:React.FC<Props> = ({data, titulo}) =>{
    function renderItem({ item }: {item:Estacoes}) {
        return <EstacaoItem name={item.name} image={item.image} />;
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
