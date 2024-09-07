import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/mekong-river-image.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>พันธุ์ปลาแม่น้ำโขงตอนล่าง</Text>
          <Text style={styles.subtitle}>จาก เชียงคาน ถึง ปากชม</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FishList')}
          >
            <Text style={styles.buttonText}>ดูรายชื่อปลา</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle2}>ชญาพรรธน์ เมธีธนันวัฒน์. (2555)</Text>
          <Text style={styles.subtitle3}>องค์กรแม่น้ำเพื่อชีวิต (Living River Siam)</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle2: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle3: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;