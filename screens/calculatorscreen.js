import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CURRENCIES } from '../data/currencies';

export default function CalculatorScreen({ route, navigation }) {
  const [mode, setMode] = useState('BUY'); // 'BUY' = Beli Valas, 'SELL' = Jual Valas
  const [selectedCode, setSelectedCode] = useState('USD');
  const [amount, setAmount] = useState('100');

  useEffect(() => {
    if (route.params?.selectedCurrency) {
      setSelectedCode(route.params.selectedCurrency.code);
    }
  }, [route.params]);

  const activeCurrency = CURRENCIES.find((c) => c.code === selectedCode) || CURRENCIES[0];
  const rate = mode === 'BUY' ? activeCurrency.sell : activeCurrency.buy;
  const numericAmount = parseFloat(amount) || 0;
  const totalIdr = numericAmount * rate;

  const handleBooking = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    navigation.navigate('Receipt', {
      bookingCode: `#TKA-${randomNum}`,
      mode: mode === 'BUY' ? 'Beli Valas' : 'Jual Valas',
      currency: activeCurrency,
      amount: numericAmount,
      rate,
      totalIdr,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Kalkulator & Booking</Text>
        <Text style={styles.subtitle}>Kunci kurs sekarang, tukar tunai di gerai</Text>

        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'BUY' && styles.modeBtnActive]}
            onPress={() => setMode('BUY')}
          >
            <Text style={[styles.modeText, mode === 'BUY' && styles.modeTextActive]}>Beli Valas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'SELL' && styles.modeBtnActive]}
            onPress={() => setMode('SELL')}
          >
            <Text style={[styles.modeText, mode === 'SELL' && styles.modeTextActive]}>Jual Valas</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionLabel}>Pilih Mata Uang</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.currencyRow}>
          {CURRENCIES.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={[styles.chip, selectedCode === c.code && styles.chipActive]}
              onPress={() => setSelectedCode(c.code)}
            >
              <Text style={[styles.chipText, selectedCode === c.code && styles.chipTextActive]}>
                {c.flag} {c.code}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionLabel}>Jumlah ({activeCurrency.code})</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="Masukkan nominal"
        />

        <View style={styles.quickRow}>
          {['50', '100', '500', '1000'].map((val) => (
            <TouchableOpacity key={val} style={styles.quickBtn} onPress={() => setAmount(val)}>
              <Text style={styles.quickText}>{val}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Kurs Berlaku: Rp {rate.toLocaleString('id-ID')}</Text>
          <Text style={styles.resultTitle}>Estimasi Total Rupiah</Text>
          <Text style={styles.resultTotal}>Rp {totalIdr.toLocaleString('id-ID')}</Text>
        </View>

        <TouchableOpacity
          style={[styles.bookBtn, numericAmount <= 0 && styles.bookBtnDisabled]}
          disabled={numericAmount <= 0}
          onPress={handleBooking}
        >
          <Text style={styles.bookBtnText}>Booking Tukar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scroll: { padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  subtitle: { fontSize: 13, color: '#64748B', marginBottom: 16 },
  modeRow: { flexDirection: 'row', backgroundColor: '#E2E8F0', borderRadius: 12, padding: 4, marginBottom: 16 },
  modeBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  modeBtnActive: { backgroundColor: '#0F172A' },
  modeText: { fontWeight: '600', color: '#475569' },
  modeTextActive: { color: '#FFFFFF' },
  sectionLabel: { fontSize: 14, fontWeight: '600', color: '#1E293B', marginBottom: 8 },
  currencyRow: { marginBottom: 16 },
  chip: { backgroundColor: '#FFFFFF', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 12, marginRight: 8, borderWidth: 1, borderColor: '#E2E8F0' },
  chipActive: { backgroundColor: '#059669', borderColor: '#059669' },
  chipText: { fontWeight: '600', color: '#1E293B' },
  chipTextActive: { color: '#FFFFFF' },
  input: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, fontSize: 18, fontWeight: 'bold', borderWidth: 1, borderColor: '#E2E8F0', color: '#1E293B' },
  quickRow: { flexDirection: 'row', gap: 8, marginTop: 10, marginBottom: 20 },
  quickBtn: { flex: 1, backgroundColor: '#E2E8F0', paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  quickText: { fontWeight: '600', color: '#1E293B' },
  resultBox: { backgroundColor: '#0F172A', padding: 20, borderRadius: 16, marginBottom: 20 },
  resultLabel: { color: '#94A3B8', fontSize: 13 },
  resultTitle: { color: '#FFFFFF', fontSize: 14, marginTop: 8 },
  resultTotal: { color: '#10B981', fontSize: 26, fontWeight: 'bold', marginTop: 4 },
  bookBtn: { backgroundColor: '#059669', padding: 16, borderRadius: 12, alignItems: 'center' },
  bookBtnDisabled: { backgroundColor: '#94A3B8' },
  bookBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});