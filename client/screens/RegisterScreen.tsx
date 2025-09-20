// screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    Alert, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userAPI } from '../services/userApi';

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
      if (name == '' || gender == '' || email == '' || password == '') {
          return Alert.alert('Please fill in all fields');
      } else {
        try {
            await userAPI.register(name, email, password, gender);
            navigation.navigate('Login');
        } catch (err: any) {
            Alert.alert('register unsuccessful', err.message);
        }finally {
            setLoading(false);
        }
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Account</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Name" value={name} onChangeText={setName} />
      <TextInput 
        style={styles.input} 
        placeholder="Gender (Male/Female)" value={gender} onChangeText={setGender} />
      <TextInput 
        style={styles.input} 
        placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput 
        style={styles.input} 
        placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleRegister}
            disabled={loading}
        >
            <Text style={styles.buttonText}>
                {loading ? 'Loading...' : 'Register'}
            </Text>
        </TouchableOpacity>
      <Button title="Already have an account? Log in" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
