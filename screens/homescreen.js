import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CURRENCIES } from '../data/currencies';
import CurrencyCard from '../components/currencycard';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [favorites, setFavorites] = useState(['1', '2']);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const filteredData = CURRENCIES.filter((item) => {
    const matchText = item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase());
    return matchText && (filter === 'ALL' || favorites.includes(item.id));
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TukarAja</Text>
        <TextInput
          style={styles.search}
          placeholder="Cari mata uang..."
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, filter === 'ALL' && styles.tabActive]} onPress={() => setFilter('ALL')}>
            <Text style={[styles.tabText, filter === 'ALL' && styles.tabTextActive]}>Semua Kurs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, filter === 'FAV' && styles.tabActive]} onPress={() => setFilter('FAV')}>
            <Text style={[styles.tabText, filter === 'FAV' && styles.tabTextActive]}>Favorit ({favorites.length})</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <CurrencyCard
            item={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { backgroundColor: '#FFF', paddingHorizontal: 16, paddingTop: 12, borderBottomWidth: 1, borderColor: '#E2E8F0' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 10 },
  search: { backgroundColor: '#F1F5F9', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 10 },
  tabs: { flexDirection: 'row', gap: 20 },
  tab: { paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#059669' },
  tabText: { fontWeight: '600', color: '#94A3B8' },
  tabTextActive: { color: '#0F172A' },
});