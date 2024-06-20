import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './assets/components/EscolhasRapidas/Header';
import EscolhasRapidas from './assets/components/EscolhasRapidas';
import { Estacao } from './assets/components/FlatList/Estacao';
import { Album } from './assets/components/FlatList/Albuns';
import { RecomendadoDeHoje, EstacoesRecomendadas, melhorDeCadaArtista, Novidades } from './assets/data/Listas';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header/>
      <EscolhasRapidas/>
      <Estacao titulo='O melhor de cada artista' data={melhorDeCadaArtista} />
      <Album titulo='Recomendado pra hoje' data={RecomendadoDeHoje}/>
      <Estacao titulo='Estações Recomendadas' data={EstacoesRecomendadas}/>
      <Album titulo='Novos lançamentos pra você' data={Novidades}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
});
