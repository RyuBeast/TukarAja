import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ReceiptScreen({ route, navigation }) {
  const { bookingCode, mode, currency, amount, rate, totalIdr } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.receipt}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Kurs Terkunci • Berlaku 2 Jam</Text>
        </View>

        <Text style={styles.codeLabel}>KODE BOOKING</Text>
        <Text style={styles.bookingCode}>{bookingCode}</Text>

        <View style={styles.dashedLine} />

        <View style={styles.row}>
          <Text style={styles.label}>Jenis Transaksi</Text>
          <Text style={styles.value}>{mode}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mata Uang</Text>
          <Text style={styles.value}>{currency.flag} {currency.code} ({currency.name})</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nominal Valas</Text>
          <Text style={styles.value}>{amount.toLocaleString('id-ID')} {currency.code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kurs Terkunci</Text>
          <Text style={styles.value}>Rp {rate.toLocaleString('id-ID')}</Text>
        </View>

        <View style={styles.dashedLine} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total Tunai (IDR)</Text>
          <Text style={styles.totalValue}>Rp {totalIdr.toLocaleString('id-ID')}</Text>
        </View>

        <Text style={styles.note}>
          Tunjukkan kode booking ini kepada kasir di gerai TukarAja terdekat beserta uang tunai sesuai nominal di atas.
        </Text>
      </View>

      <TouchableOpacity style={styles.doneBtn} onPress={() => navigation.popToTop()}>
        <Text style={styles.doneText}>Selesai & Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16, justifyContent: 'center' },
  receipt: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 22, elevation: 3 },
  badge: { alignSelf: 'center', backgroundColor: '#FEF3C7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: 14 },
  badgeText: { color: '#D97706', fontWeight: 'bold', fontSize: 12 },
  codeLabel: { textAlign: 'center', fontSize: 12, color: '#64748B', letterSpacing: 1 },
  bookingCode: { textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: '#0F172A', marginTop: 4 },
  dashedLine: { borderBottomWidth: 1, borderBottomColor: '#CBD5E1', borderStyle: 'dashed', marginVertical: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  label: { fontSize: 14, color: '#64748B' },
  value: { fontSize: 14, fontWeight: '600', color: '#1E293B' },
  totalLabel: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: '#059669' },
  note: { fontSize: 12, color: '#64748B', textAlign: 'center', marginTop: 14, lineHeight: 18 },
  doneBtn: { backgroundColor: '#0F172A', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  doneText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});