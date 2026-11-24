import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ReceiptScreen({ route, navigation }) {
  const { bookingCode, mode, currency, amount, rate, totalIdr } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View style={styles.top}>
          <Text style={styles.pair}>IDR ⇄ {currency.flag} {currency.code}</Text>
          <Text style={styles.status}>Kurs Terkunci • Berlaku 2 Jam</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Booking Reference</Text>
          <Text style={styles.code}>{bookingCode}</Text>

          <View style={styles.grid}>
            <View>
              <Text style={styles.label}>Jenis</Text>
              <Text style={styles.val}>{mode}</Text>
            </View>
            <View>
              <Text style={styles.label}>Nominal</Text>
              <Text style={styles.val}>{amount} {currency.code}</Text>
            </View>
            <View>
              <Text style={styles.label}>Kurs</Text>
              <Text style={styles.val}>Rp {rate.toLocaleString('id-ID')}</Text>
            </View>
          </View>

          <View style={styles.dashed} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Tunai</Text>
            <Text style={styles.totalVal}>Rp {totalIdr.toLocaleString('id-ID')}</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.popToTop()}>
            <Text style={styles.btnText}>Selesai</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 18, justifyContent: 'center' },
  ticket: { backgroundColor: '#FFF', borderRadius: 18, overflow: 'hidden', elevation: 3 },
  top: { backgroundColor: '#0F172A', padding: 20, alignItems: 'center' },
  pair: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  status: { color: '#F59E0B', fontSize: 12, marginTop: 4 },
  body: { padding: 20 },
  label: { fontSize: 12, color: '#64748B' },
  code: { fontSize: 24, fontWeight: 'bold', color: '#0F172A', marginBottom: 16 },
  grid: { flexDirection: 'row', justifyContent: 'space-between' },
  val: { fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginTop: 2 },
  dashed: { borderBottomWidth: 1, borderColor: '#CBD5E1', borderStyle: 'dashed', marginVertical: 18 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  totalLabel: { fontSize: 15, fontWeight: 'bold', color: '#0F172A' },
  totalVal: { fontSize: 17, fontWeight: 'bold', color: '#059669' },
  btn: { backgroundColor: '#059669', padding: 14, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
});