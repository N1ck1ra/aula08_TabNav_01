import React from 'react';
import { View, Text, SectionList } from 'react-native';
import styles from '../StyleSheet/Styles';

const dados = [
  {
    title: 'Acadêmicos',
    data: [
      'Ciência da Computação - Universidade de Helsinque',
    ],
  },
  {
    title: 'Projetos Web',
    data: [
      'Git - Sistema de Controle de Versão',
    ],
  },
  {
    title: 'Projetos Mobile',
    data: [
      'Linux utilizado como base do Android',
    ],
  },
  {
    title: 'Projetos Sociais',
    data: [
      'Linux Kernel - Projeto Open Source',
    ],
  },
  {
    title: 'Idiomas',
    data: [
      'Finlandês (Nativo)',
      'Inglês (Fluente)',
    ],
  },
];

export default function Portfolio() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Portfólio
      </Text>

      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />

    </View>
  );
}