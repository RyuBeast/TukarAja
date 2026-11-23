import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [name, setName] = useState('I Kadek Agus Wirawan');
  const [nim, setNim] = useState('240010XXX');

  const handleSave = () => {
    Alert.alert('Profil Disimpan', `Data atas nama ${name} (${nim}) berhasil diperbarui.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name.charAt(0).toUpperCase()}</Text>
          </View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileNim}>NIM: {nim}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Edit Data Nasabah</Text>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>NIM / ID Anggota</Text>
          <TextInput style={styles.input} value={nim} onChangeText={setNim} keyboardType="numeric" />

          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Simpan Perubahan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lokasi Gerai TukarAja</Text>
          <View style={styles.branchItem}>
            <Text style={styles.branchName}>Cabang Denpasar Utama</Text>
            <Text style={styles.branchAddr}>Jl. Raya Puputan Renon, Denpasar • 08.00 - 21.00 WITA</Text>
          </View>
          <View style={styles.branchItem}>
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
  profileCard: { backgroundColor: '#0F172A', padding: 22, borderRadius: 16, alignItems: 'center', marginBottom: 16 },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#059669', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  profileName: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  profileNim: { fontSize: 13, color: '#94A3B8', marginTop: 2 },
  section: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, marginBottom: 16, elevation: 1 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 12 },
  label: { fontSize: 13, color: '#64748B', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, padding: 12, marginBottom: 12, color: '#1E293B' },
  saveBtn: { backgroundColor: '#059669', padding: 14, borderRadius: 10, alignItems: 'center' },
  saveText: { color: '#FFFFFF', fontWeight: 'bold' },
  branchItem: { borderLeftWidth: 3, borderLeftColor: '#059669', paddingLeft: 12, marginBottom: 12 },
  branchName: { fontWeight: 'bold', color: '#1E293B', fontSize: 14 },
  branchAddr: { color: '#64748B', fontSize: 12, marginTop: 2 },
});