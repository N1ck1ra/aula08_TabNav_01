import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../StyleSheet/Styles';

import fotoLinus from './img/linus.jpg'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Pagina Home
            </Text>

            <Text style={styles.subtitulo}>
                Bem-vindo(a)
            </Text>

            <Image 
                source={fotoLinus} 
                style={styles.fotoLinus}
            />

            <Text style={styles.corpo}>
                Conheça a trajetória de Linus Torvalds, criador do Linux e do Git, tecnologias utilizadas por milhões de pessoas ao redor do mundo.
            </Text>

            <Text style={styles.rodape}>
                Linus Torvalds | 28/12/1969
            </Text>
        </View>
    );
}