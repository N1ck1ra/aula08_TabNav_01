import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../StyleSheet/Styles';

export default function Contato() {

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Entre em Contato
      </Text>

      <View style={styles.cardContato}>
        <Text>E-mail: linus@email.com</Text>
        <Text>LinkedIn: linkedin.com/in/linustorvalds</Text>
        <Text>GitHub: github.com/torvalds</Text>
        <Text>Portland - Oregon - EUA</Text>
      </View>

      <Text style={styles.subtitulo}>
        Enviar Mensagem
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.mensagem}
        placeholder="Digite sua mensagem"
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Enviar
        </Text>
      </TouchableOpacity>

    </View>
  );
}