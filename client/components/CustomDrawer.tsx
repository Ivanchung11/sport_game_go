import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';


export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { navigation } = props;
  const handleLogout = async () => {
    try {
      navigation.navigate('Login'); // redirect to login screen
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.appName}>Sport Game Go</Text>
      </View>

      <View style={styles.navSection}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠 主頁</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Open Messages')}>
          <Text style={styles.navText}>💬 我的訊息</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Open Matches')}>
          <Text style={styles.navText}>🎾 我的球賽</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Open Applications')}>
          <Text style={styles.navText}>📄 我的申請</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Open Profile')}>
          <Text style={styles.navText}>👤 我的資料</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.languageSection}>
        <Text style={styles.label}>語言</Text>
        <View style={styles.langButtons}>
          <Button title="English" onPress={() => console.log('Switch to English')} />
          <Button title="中文" onPress={() => console.log('Switch to 中文')} color="#4CAF50" />
        </View>
      </View>

      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => handleLogout()}>
          <Text style={styles.logoutText}>登出</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcome: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  navSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  navItem: {
    paddingVertical: 12,
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  languageSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  langButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutSection: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  logoutButton: {
    backgroundColor: '#4c60afff',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
