import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#DDE7EF',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },

  corpo: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 28,
  },

  rodape: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    fontSize: 14,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#233D91',
    marginTop: 20,
    marginBottom: 10,
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  cardContato: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  mensagem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 12,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#3366E8',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
  },

  textoBotao: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  fotoLinus: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: 'center',
    marginVertical: 15, 
  },

});