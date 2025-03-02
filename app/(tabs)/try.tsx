// MyComponent.js
import React, { useState } from 'react';
import { 
  SafeAreaView,    // Ensures content isn’t hidden by device notches or status bars.
  ScrollView,      // Provides a scrollable container.
  View,            // A general-purpose container (like a <div>).
  Text,            // For displaying text.
  Image,           // For showing images.
  TouchableOpacity,// For creating touchable (clickable) elements.
  TextInput,       // For text entry.
  StyleSheet, 
  Alert 
} from 'react-native';

export default function MyComponent() {
  const [name, setName] = useState('');

  const handleGreet = () => {
    Alert.alert('Greeting', `Hello, ${name || 'Guest'}!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView makes the content scrollable if needed */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Text: Acts like an <h1> or <p> */}
          <Text style={styles.headerText}>kismat to My Expo App</Text>
          
          {/* Image: Display an image */}
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.logo}
          />
          
          {/* Another text element */}
          <Text style={styles.subText}>hi your name below:</Text>
          
          {/* TextInput: Similar to an <input type="text"> */}
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            value={name}
            onChangeText={setName}
          />
          
          {/* TouchableOpacity: Creates a button-like element */}
          <TouchableOpacity style={styles.button} onPress={handleGreet}>
            <Text style={styles.buttonText}>Greet Me!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Android shadow
    elevation: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
