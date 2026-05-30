import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';


function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="darkblue"
      />
      
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon', 
          tabBarStyle: { 
            height: 60, 
            paddingVertical: 5,
          },
          
          tabBarLabelStyle: { 
            fontSize: 14, 
            fontWeight: '600',
            marginLeft: 5,
          },
        }}
      >
        <Tab.Screen 
          name='Home'
          component={Home} 
          options={{
            tabBarLabel: 'Início',
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen 
          name='Portfolio'
          component={Portfolio} 
          options={{
            tabBarLabel: 'Projetos',
            tabBarActiveTintColor: 'purple',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="business-center" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen 
          name='Contato'
          component={Contato} 
          options={{
            tabBarLabel: 'Contato',
            tabBarActiveTintColor: 'blue',
            tabBarBadge: 3,
            tabBarBadgeStyle: { backgroundColor: 'orange' },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="mail" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>       
    </NavigationContainer>
  );
}

export default App;