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
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCurrencies = CURRENCIES.filter((item) => {
    const matchSearch =
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase());
    const matchTab = filter === 'ALL' || favorites.includes(item.id);
    return matchSearch && matchTab;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>TukarAja</Text>
        <Text style={styles.subtitle}>Kurs Valuta Asing Hari Ini • Update Real-Time</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari mata uang (USD, JPY, EUR)..."
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabBtn, filter === 'ALL' && styles.tabBtnActive]}
            onPress={() => setFilter('ALL')}
          >
            <Text style={[styles.tabText, filter === 'ALL' && styles.tabTextActive]}>
              Semua Kurs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, filter === 'FAV' && styles.tabBtnActive]}
            onPress={() => setFilter('FAV')}
          >
            <Text style={[styles.tabText, filter === 'FAV' && styles.tabTextActive]}>
              Favorit ({favorites.length})
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredCurrencies}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CurrencyCard
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
              onPress={() => navigation.navigate('Detail', { item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { backgroundColor: '#0F172A', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  brand: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 13, color: '#94A3B8', marginTop: 4 },
  content: { flex: 1, padding: 16 },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#1E293B',
    marginBottom: 12,
  },
  tabRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  tabBtn: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#E2E8F0' },
  tabBtnActive: { backgroundColor: '#059669' },
  tabText: { fontSize: 13, fontWeight: '600', color: '#475569' },
  tabTextActive: { color: '#FFFFFF' },
});