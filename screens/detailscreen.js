import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const spread = item.sell - item.buy;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={styles.code}>{item.code}</Text>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Kurs Beli (Jual Valas)</Text>
          <Text style={styles.value}>Rp {item.buy.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kurs Jual (Beli Valas)</Text>
          <Text style={styles.value}>Rp {item.sell.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Selisih (Spread)</Text>
          <Text style={styles.spread}>Rp {spread.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Perubahan 24 Jam</Text>
          <Text style={styles.change}>{item.change}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('MainTabs', {
            screen: 'Kalkulator',
            params: { selectedCurrency: item },
          })
        }
      >
        <Text style={styles.buttonText}>Hitung & Booking {item.code}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, alignItems: 'center', elevation: 2 },
  flag: { fontSize: 48, marginBottom: 8 },
  code: { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  name: { fontSize: 14, color: '#64748B', marginTop: 2 },
  divider: { width: '100%', height: 1, backgroundColor: '#E2E8F0', marginVertical: 18 },
  row: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 14, color: '#64748B' },
  value: { fontSize: 15, fontWeight: 'bold', color: '#059669' },
  spread: { fontSize: 15, fontWeight: '600', color: '#1E293B' },
  change: { fontSize: 15, fontWeight: 'bold', color: '#F59E0B' },
  button: { backgroundColor: '#059669', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});