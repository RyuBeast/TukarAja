import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [name, setName] = useState('RyuBeast');
  const [phone, setPhone] = useState('081234567890');
  const [address, setAddress] = useState('Abiansemal, Badung, Bali');

  const handleSave = () => {
    Alert.alert('Tersimpan', `Data nasabah ${name} berhasil diperbarui.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cardTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name ? name.charAt(0).toUpperCase() : 'R'}</Text>
          </View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userSub}>{phone} • {address}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Nasabah</Text>

          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Masukkan nama" />

          <Text style={styles.label}>No. HP</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Masukkan nomor HP"
          />

          <Text style={styles.label}>Alamat</Text>
          <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Masukkan alamat" />

          <TouchableOpacity style={styles.btn} onPress={handleSave}>
            <Text style={styles.btnText}>Simpan Profil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lokasi Gerai TukarAja</Text>
          <View style={styles.branch}>
            <Text style={styles.branchName}>Cabang Denpasar Utama</Text>
            <Text style={styles.branchAddr}>Jl. Raya Puputan Renon, Denpasar • 08.00 - 21.00 WITA</Text>
          </View>
          <View style={styles.branch}>
            <Text style={styles.branchName}>Cabang Kuta & Badung</Text>
            <Text style={styles.branchAddr}>Jl. Sunset Road No. 88, Badung • 09.00 - 22.00 WITA</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scroll: { padding: 16 },
  cardTop: { backgroundColor: '#0F172A', padding: 20, borderRadius: 16, alignItems: 'center', marginBottom: 14 },
  avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#059669', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  userSub: { fontSize: 12, color: '#94A3B8', marginTop: 4, textAlign: 'center' },
  section: { backgroundColor: '#FFF', padding: 16, borderRadius: 14, marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 12 },
  label: { fontSize: 12, color: '#64748B', marginBottom: 4 },
  input: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 12, color: '#0F172A' },
  btn: { backgroundColor: '#059669', padding: 13, borderRadius: 10, alignItems: 'center', marginTop: 4 },
  btnText: { color: '#FFF', fontWeight: 'bold' },
  branch: { borderLeftWidth: 3, borderLeftColor: '#059669', paddingLeft: 10, marginBottom: 10 },
  branchName: { fontWeight: 'bold', color: '#0F172A', fontSize: 13 },
  branchAddr: { color: '#64748B', fontSize: 12, marginTop: 2 },
});