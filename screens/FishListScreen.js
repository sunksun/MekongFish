import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import fishData from './fishData';

// Import รูปภาพทั้งหมดที่ใช้
const fishImages = {
    'fish1.png': require('../assets/fish1.png'),
    'fish2.png': require('../assets/fish2.png'),
    'fish3.png': require('../assets/fish3.png'),
    'fish4.png': require('../assets/fish4.png'),
    'fish5.png': require('../assets/fish5.png'),
    'fish6.png': require('../assets/fish6.png'),
    'fish7.png': require('../assets/fish7.png'),
    'fish8.png': require('../assets/fish8.png'),
    'fish9.png': require('../assets/fish9.png'),
    'fish10.png': require('../assets/fish10.png'),
    'fish11.png': require('../assets/fish11.png'),
    'fish12.png': require('../assets/fish12.png'),
    'fish13.png': require('../assets/fish13.png'),
    'fish14.png': require('../assets/fish14.png'),
    'fish15.png': require('../assets/fish15.png'),
    'fish16.png': require('../assets/fish16.png'),
    'fish17.png': require('../assets/fish17.png'),
    'fish18.png': require('../assets/fish18.png'),
    'fish19.png': require('../assets/fish19.png'),
    'fish20.png': require('../assets/fish20.png'),
    'fish21.png': require('../assets/fish21.png'),
    'fish22.png': require('../assets/fish22.png'),
    'fish23.png': require('../assets/fish23.png'),
    'fish24.png': require('../assets/fish24.png'),
    'fish25.png': require('../assets/fish25.png'),
    'fish26.png': require('../assets/fish26.png'),
    'fish27.png': require('../assets/fish27.png'),
    'fish28.png': require('../assets/fish28.png'),
    'fish29.png': require('../assets/fish29.png'),
    'fish30.png': require('../assets/fish30.png'),
    'fish31.png': require('../assets/fish31.png'),
    'fish32.png': require('../assets/fish32.png'),
    'fish33.png': require('../assets/fish33.png'),
    'fish34.png': require('../assets/fish34.png'),
    'fish35.png': require('../assets/fish35.png'),
    'fish36.png': require('../assets/fish36.png'),
    'fish37.png': require('../assets/fish37.png'),
    'fish38.png': require('../assets/fish38.png'),
    'fish39.png': require('../assets/fish39.png'),
    'fish40.png': require('../assets/fish40.png'),
    'fish41.png': require('../assets/fish41.png'),
    'fish42.png': require('../assets/fish42.png'),
    'fish43.png': require('../assets/fish43.png'),
    'fish44.png': require('../assets/fish44.png'),
    'fish45.png': require('../assets/fish45.png'),
    'fish46.png': require('../assets/fish46.png'),
    'fish47.png': require('../assets/fish47.png'),
    'fish48.png': require('../assets/fish48.png'),
    'fish49.png': require('../assets/fish49.png'),
    'fish50.png': require('../assets/fish50.png'),
    'fish51.png': require('../assets/fish51.png'),
    'fish52.png': require('../assets/fish52.png'),
    'fish53.png': require('../assets/fish53.png'),
    'fish54.png': require('../assets/fish54.png'),
    'fish55.png': require('../assets/fish55.png'),
    'fish56.png': require('../assets/fish56.png'),
    'fish57.png': require('../assets/fish57.png'),
    'fish58.png': require('../assets/fish58.png'),
    'fish59.png': require('../assets/fish59.png'),
    'fish60.png': require('../assets/fish60.png'),
    'fish61.png': require('../assets/fish61.png'),
    'fish62.png': require('../assets/fish62.png'),
    'fish63.png': require('../assets/fish63.png'),
    'fish64.png': require('../assets/fish64.png'),
    'fish65.png': require('../assets/fish65.png'),
    'fish66.png': require('../assets/fish66.png'),
    'fish67.png': require('../assets/fish67.png'),
    'fish68.png': require('../assets/fish68.png'),
    'fish69.png': require('../assets/fish69.png'),
    'fish70.png': require('../assets/fish70.png'),
    'fish71.png': require('../assets/fish71.png'),
    'fish72.png': require('../assets/fish72.png'),
    'fish73.png': require('../assets/fish73.png'),
    'fish74.png': require('../assets/fish74.png'),
    'fish75.png': require('../assets/fish75.png'),
    'fish76.png': require('../assets/fish76.png'),
    'fish77.png': require('../assets/fish77.png'),
    'fish78.png': require('../assets/fish78.png'),
    'fish79.png': require('../assets/fish79.png'),
    'fish80.png': require('../assets/fish80.png'),
    'fish81.png': require('../assets/fish81.png'),
    'fish82.png': require('../assets/fish82.png'),
    'fish83.png': require('../assets/fish83.png'),
    'fish84.png': require('../assets/fish84.png'),
    'fish85.png': require('../assets/fish85.png'),
    'fish86.png': require('../assets/fish86.png'),
    'fish87.png': require('../assets/fish87.png'),
    'fish88.png': require('../assets/fish88.png'),
    'fish89.png': require('../assets/fish89.png'),
    'fish90.png': require('../assets/fish90.png'),
    'fish91.png': require('../assets/fish91.png'),
    'fish92.png': require('../assets/fish92.png'),
    'fish93.png': require('../assets/fish93.png'),
    'fish94.png': require('../assets/fish94.png'),
    'fish95.png': require('../assets/fish95.png'),
    'fish96.png': require('../assets/fish96.png'),
    'fish97.png': require('../assets/fish97.png'),
    'fish98.png': require('../assets/fish98.png'),
    'fish99.png': require('../assets/fish99.png'),
    'fish100.png': require('../assets/fish100.png'),
    // เพิ่มรูปภาพอื่นๆ ตามที่มี
  };

// ข้อมูลปลาพร้อมชื่อไฟล์รูปภาพ

const FishListScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFishData, setFilteredFishData] = useState(fishData);
  
    useEffect(() => {
        const results = fishData.filter(fish =>
            fish.thaiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fish.localName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fish.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFishData(results);
    }, [searchTerm]);

    const renderFishItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.fishItem} 
            onPress={() => navigation.navigate('FishDetail', { fish: item })}
        >
            <Image
                source={fishImages[item.image] || require('../assets/placeholder.png')}
                style={styles.fishImage}
            />
            <View style={styles.fishInfo}>
                <Text style={styles.fishName}>{item.thaiName}</Text>
                <Text style={styles.fishLocalName}>{item.localName}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="ค้นหาปลา..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={filteredFishData}
                renderItem={renderFishItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  fishItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  fishImage: {
    width: 240,
    height: 110,
    borderRadius: 5,
    marginRight: 15,
  },
  fishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  fishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fishLocalName: {
    fontSize: 16,
    color: '#666',
  },
  fishScientificName: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default FishListScreen;