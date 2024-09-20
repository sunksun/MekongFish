import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>พันธุ์ปลาแม่น้ำโขงตอนล่าง</Text>
        <Text style={styles.subtitle}>จาก เชียงคาน ถึง ปากชม</Text>
        <Text style={styles.subtitle2}>ชญาพรรธน์ เมธีธนันวัฒน์. (2555)</Text>
        <Text style={styles.subtitle3}>องค์กรแม่น้ำเพื่อชีวิต (Living River Siam)</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image 
          source={require('../assets/mekong-river-image.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FishList')}
        >
          <Text style={styles.buttonText}>ดูรายชื่อปลา</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 20,
  },
  middleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 20,
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
    marginBottom: 5,
  },
  subtitle2: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  subtitle3: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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