import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Insights</Text>
      <Text style={styles.info}>Most crowded hours: 12:00 AM - 2:00 AM</Text>
      <View style={styles.chart}>
        <Text style={styles.chartText}>Graph Placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e1e2e', padding: 10 },
  header: { color: '#fff', fontSize: 20, marginBottom: 20 },
  info: { color: '#a1a1c1', fontSize: 16, marginBottom: 10 },
  chart: { backgroundColor: '#29293d', height: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  chartText: { color: '#fff', fontSize: 18 },
});
 