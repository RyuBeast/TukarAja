import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CURRENCIES } from '../data/currencies';

export default function CalculatorScreen({ route, navigation }) {
  const [mode, setMode] = useState('BUY');
  const [selectedCode, setSelectedCode] = useState('USD');
  const [amount, setAmount] = useState('100');

  useEffect(() => {
    if (route.params?.selectedCurrency) setSelectedCode(route.params.selectedCurrency.code);
  }, [route.params]);

  const active = CURRENCIES.find((c) => c.code === selectedCode) || CURRENCIES[0];
  const rate = mode === 'BUY' ? active.sell : active.buy;
  const numericAmount = parseFloat(amount) || 0;
  const totalIdr = numericAmount * rate;

  const handleBooking = () => {
    navigation.navigate('Receipt', {
      bookingCode: `#TKA-${Math.floor(1000 + Math.random() * 9000)}`,
      mode: mode === 'BUY' ? 'Beli Valas' : 'Jual Valas',
      currency: active,
      amount: numericAmount,
      rate,
      totalIdr,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Tukar Valas</Text>

        <View style={styles.toggle}>
          <TouchableOpacity style={[styles.toggleBtn, mode === 'BUY' && styles.toggleActive]} onPress={() => setMode('BUY')}>
            <Text style={[styles.toggleText, mode === 'BUY' && { color: '#FFF' }]}>Beli</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.toggleBtn, mode === 'SELL' && styles.toggleActive]} onPress={() => setMode('SELL')}>
            <Text style={[styles.toggleText, mode === 'SELL' && { color: '#FFF' }]}>Jual</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rateHeader}>
          <Text style={styles.assetTitle}>{active.flag} {active.code}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.subLabel}>Kurs Berlaku</Text>
            <Text style={styles.rateValue}>Rp {rate.toLocaleString('id-ID')}</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
          {CURRENCIES.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={[styles.chip, selectedCode === c.code && styles.chipActive]}
              onPress={() => setSelectedCode(c.code)}
            >
              <Text style={{ fontWeight: '600', color: selectedCode === c.code ? '#059669' : '#475569' }}>
                {c.flag} {c.code}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.box}>
          <Text style={styles.subLabel}>Nominal ({active.code})</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={amount} onChangeText={setAmount} placeholder="0" />

          <View style={styles.presets}>
            {['50', '100', '500', '1000'].map((v) => (
              <TouchableOpacity key={v} style={styles.presetBtn} onPress={() => setAmount(v)}>
                <Text style={styles.presetText}>{v}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.estRow}>
            <Text style={styles.subLabel}>Est. Total Rupiah:</Text>
            <Text style={styles.totalText}>Rp {totalIdr.toLocaleString('id-ID')}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.ctaBtn} disabled={numericAmount <= 0} onPress={handleBooking}>
          <Text style={styles.ctaText}>Booking Tukar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scroll: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', textAlign: 'center', marginBottom: 14 },
  toggle: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 20, padding: 4, width: 170, marginBottom: 16 },
  toggleBtn: { flex: 1, paddingVertical: 7, borderRadius: 18, alignItems: 'center' },
  toggleActive: { backgroundColor: '#059669' },
  toggleText: { fontWeight: 'bold', color: '#64748B' },
  rateHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  assetTitle: { fontSize: 20, fontWeight: 'bold', color: '#0F172A' },
  subLabel: { fontSize: 12, color: '#64748B' },
  rateValue: { fontSize: 17, fontWeight: 'bold', color: '#0F172A' },
  chip: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1, borderColor: '#E2E8F0', marginRight: 8 },
  chipActive: { borderColor: '#059669', backgroundColor: '#ECFDF5' },
  box: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 16, padding: 16, marginBottom: 20 },
  input: { fontSize: 26, fontWeight: 'bold', color: '#0F172A', marginVertical: 8 },
  presets: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  presetBtn: { flex: 1, backgroundColor: '#F8FAFC', paddingVertical: 6, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  presetText: { fontSize: 12, fontWeight: '600', color: '#475569' },
  estRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: '#F1F5F9', paddingTop: 12 },
  totalText: { fontSize: 16, fontWeight: 'bold', color: '#059669' },
  ctaBtn: { backgroundColor: '#0F172A', padding: 15, borderRadius: 25, alignItems: 'center' },
  ctaText: { color: '#10B981', fontWeight: 'bold', fontSize: 15 },
});