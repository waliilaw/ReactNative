import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const NewPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [fontsLoaded] = useFonts({
    'LuckiestGuy': require('@/assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <LinearGradient
      colors={['#E66C32', '#E66C32']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text  style={styles.title}>
          Native
        </Text>

        <Text style={styles.subtitle}>
          Please enter some information below:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Type something..."
          placeholderTextColor="#ccc"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Pressable style={styles.button} onPress={handleSubmit}>
          <ThemedText type="default" style={styles.buttonText}>
            Submit
          </ThemedText>
        </Pressable>

        {submittedValue ? (
          <View style={styles.resultContainer}>
            <ThemedText type="default" style={styles.resultText}>
              You submitted: {submittedValue}
            </ThemedText>
          </View>
        ) : null}

        <Pressable style={styles.secondaryButton}>
          <ThemedText type="default" style={styles.secondaryButtonText}>
            Another Action
          </ThemedText>
        </Pressable>

        <View style={styles.footer}>
          <ThemedText type="default" style={styles.footerText}>
            Thank you for using our app!
          </ThemedText>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'LuckiestGuy',
    color: 'white',
    fontSize: 92,
paddingBottom :120
  },
  subtitle: {
    // fontFamily :'LuckiestGuy',
    fontWeight :700,
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#OE3F18',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#OE3F18',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default NewPage;