import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const bookings = [
  {
    id: '1',
    location: '鑽石山',
    type: '不限',
    date: '2025年9月3日, 星期三',
    time: '3:00 PM - 5:00 PM',
    court: '鑽石山網球場',
    ntrp: '2.5',
    createdBy: 'KenYuen',
    createdAt: '04 Sep 2025, 2:18 pm',
  },
  // Add more bookings here...
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>TennisGo HK</Text>
        <TextInput style={styles.search} placeholder="搜尋球場或地區" />
        <Button title="發起球賽" onPress={() => {}} />
      </View>

      {/* Booking List */}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.location}>{item.location} - {item.type}</Text>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
            <Text>{item.court}</Text>
            <Text>NTRP: {item.ntrp}</Text>
            <Text>Created: {item.createdAt} by {item.createdBy}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    elevation: 2,
  },
  location: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
