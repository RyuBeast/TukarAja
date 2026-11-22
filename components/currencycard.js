import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CurrencyCard({ item, isFavorite, onToggleFavorite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.left}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={styles.rates}>
          <Text style={styles.rateLabel}>Beli: <Text style={styles.rateValue}>Rp {item.buy.toLocaleString('id-ID')}</Text></Text>
          <Text style={styles.rateLabel}>Jual: <Text style={styles.rateValue}>Rp {item.sell.toLocaleString('id-ID')}</Text></Text>
        </View>
        <TouchableOpacity onPress={onToggleFavorite} style={styles.starBtn}>
          <Ionicons
            name={isFavorite ? 'star' : 'star-outline'}
            size={22}
            color={isFavorite ? '#F59E0B' : '#94A3B8'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flag: { fontSize: 28 },
  code: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  name: { fontSize: 12, color: '#64748B' },
  right: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rates: { alignItems: 'flex-end' },
  rateLabel: { fontSize: 12, color: '#64748B' },
  rateValue: { fontWeight: 'bold', color: '#059669' },
  starBtn: { padding: 4 },
});