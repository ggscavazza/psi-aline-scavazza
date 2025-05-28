// src/components/Header/index.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {/* LOGO + TÍTULO */}
        <View style={styles.logoArea}>
          <Icon name="brain" size={24} style={styles.icon} />
          <Text style={styles.title}>Psi. Aline Scavazza</Text>
        </View>

        {/* BOTÃO MENU HAMBÚRGUER */}
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={24} color="#E5E5E5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#111111CC', // preto com opacidade
    zIndex: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    background: 'linear-gradient(90deg, #d4af37, #f9d423)', // não funciona nativamente — alternativa abaixo
    color: '#d4af37', // usamos um tom ouro como fallback
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay-Bold', // se estiver registrada
    color: '#d4af37',
  },
  menuButton: {
    padding: 8,
  },
});

export default Header;
