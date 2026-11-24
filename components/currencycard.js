import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CurrencyCard({ item, isFavorite, onToggleFavorite, onPress }) {
  const isUp = !item.change.startsWith('-');

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.price}>Rp {item.sell.toLocaleString('id-ID')}</Text>
          <Text style={[styles.change, { color: isUp ? '#059669' : '#EF4444' }]}>
            {isUp ? '↗' : '↘'} {item.change}
          </Text>
        </View>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Ionicons name={isFavorite ? 'star' : 'star-outline'} size={20} color={isFavorite ? '#F59E0B' : '#CBD5E1'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: '#FFF', padding: 14, borderRadius: 12, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  flag: { fontSize: 24 },
  code: { fontSize: 15, fontWeight: 'bold', color: '#0F172A' },
  name: { fontSize: 12, color: '#64748B' },
  right: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  price: { fontSize: 15, fontWeight: 'bold', color: '#0F172A' },
  change: { fontSize: 12, fontWeight: '600', marginTop: 2 },
});