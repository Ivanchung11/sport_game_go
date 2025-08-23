import Constants from 'expo-constants';
import { Platform } from 'react-native';

const getApiUrl = () => {
  if (__DEV__) {
    // Development URLs
    if (Platform.OS === 'ios') {
      return 'http://localhost:3000/api';
    } else if (Platform.OS === 'android') {
      return 'http://10.0.2.2:3000/api'; // Android emulator
      // For physical device, use your computer's IP: http://192.168.1.XXX:3000/api
    } else {
      return 'http://localhost:3000/api'; // Web
    }
  } else {
    // Production URL
    return Constants.expoConfig?.extra?.apiUrl || 'https://your-api-domain.com/api';
  }
};

export const API_URL = getApiUrl();