import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/homescreen';
import DetailScreen from '../screens/detailscreen';
import CalculatorScreen from '../screens/calculatorscreen';
import ReceiptScreen from '../screens/receiptscreen';
import ProfileScreen from '../screens/profilescreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#059669',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 6 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'cash-outline';
          if (route.name === 'Kurs') iconName = focused ? 'trending-up' : 'trending-up-outline';
          else if (route.name === 'Kalkulator') iconName = focused ? 'calculator' : 'calculator-outline';
          else if (route.name === 'Profil') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Kurs" component={HomeScreen} />
      <Tab.Screen name="Kalkulator" component={CalculatorScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0F172A' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Mata Uang' }} />
      <Stack.Screen name="Receipt" component={ReceiptScreen} options={{ title: 'Struk Booking Tukar' }} />
    </Stack.Navigator>
  );
}