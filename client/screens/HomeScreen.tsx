import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 
import { itemAPI } from '../services/itemApi';
type DrawerParamList = {
  Home: undefined;
};

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
  {
    id: '2',
    location: '天水圍',
    type: '不限',
    date: '2025年9月3日, 星期三',
    time: '3:00 PM - 5:00 PM',
    court: '天水圍網球場',
    ntrp: '2.5',
    createdBy: 'KenYuen',
    createdAt: '04 Sep 2025, 2:18 pm',
  },
  // Add more bookings here...
];

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const getData = async () => {
    try {
      const data = await itemAPI.getItems();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="搜尋地區"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.filterButton} onPress={() => console.log('Open filter')}>
            <Ionicons name="filter" size={18} color="#fff" />
            <Text style={styles.filterText}>篩選</Text>
          </TouchableOpacity>
        </View>
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
  filterText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
});
