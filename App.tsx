// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/components/mobile/Faq/index.tsx';
import AboutScreen from './src/components/mobile/Contact/index.tsx';
import Header from './src/components/mobile/Header/index.tsx';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safe}>
        <Header />
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#111111',
            },
            drawerLabelStyle: {
              color: '#ffffff',
            },
          }}
        >
          <Drawer.Screen name="Início" component={HomeScreen} />
          <Drawer.Screen name="Sobre" component={AboutScreen} />
          {/* Adicione os demais screens conforme desejar */}
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
