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
    'fish101.png': require('../assets/fish101.png'),
    'fish102.png': require('../assets/fish102.png'),
    'fish103.png': require('../assets/fish103.png'),
    'fish104.png': require('../assets/fish104.png'),
    'fish105.png': require('../assets/fish105.png'),
    'fish106.png': require('../assets/fish106.png'),
    'fish107.png': require('../assets/fish107.png'),
    'fish108.png': require('../assets/fish108.png'),
    'fish109.png': require('../assets/fish109.png'),
    'fish110.png': require('../assets/fish110.png'),
    'fish111.png': require('../assets/fish111.png'),
    'fish112.png': require('../assets/fish112.png'),
    'fish113.png': require('../assets/fish113.png'),
    'fish114.png': require('../assets/fish114.png'),
    'fish115.png': require('../assets/fish115.png'),
    'fish116.png': require('../assets/fish116.png'),
    'fish117.png': require('../assets/fish117.png'),
    'fish118.png': require('../assets/fish118.png'),
    'fish119.png': require('../assets/fish119.png'),
    'fish120.png': require('../assets/fish120.png'),
    'fish121.png': require('../assets/fish121.png'),
    'fish122.png': require('../assets/fish122.png'),
    'fish123.png': require('../assets/fish123.png'),
    'fish124.png': require('../assets/fish124.png'),
    'fish125.png': require('../assets/fish125.png'),
    'fish126.png': require('../assets/fish126.png'),
    'fish127.png': require('../assets/fish127.png'),
    'fish128.png': require('../assets/fish128.png'),
    'fish129.png': require('../assets/fish129.png'),
    'fish130.png': require('../assets/fish130.png'),
    'fish131.png': require('../assets/fish131.png'),
    'fish132.png': require('../assets/fish132.png'),
    'fish133.png': require('../assets/fish133.png'),
    'fish134.png': require('../assets/fish134.png'),
    'fish135.png': require('../assets/fish135.png'),
    'fish136.png': require('../assets/fish136.png'),
    'fish137.png': require('../assets/fish137.png'),
    'fish138.png': require('../assets/fish138.png'),
    'fish139.png': require('../assets/fish139.png'),
    'fish140.png': require('../assets/fish140.png'),
    'fish141.png': require('../assets/fish141.png'),
    'fish142.png': require('../assets/fish142.png'),
    'fish143.png': require('../assets/fish143.png'),
    'fish144.png': require('../assets/fish144.png'),
    'fish145.png': require('../assets/fish145.png'),
    'fish146.png': require('../assets/fish146.png'),
    'fish147.png': require('../assets/fish147.png'),
    'fish148.png': require('../assets/fish148.png'),
    'fish149.png': require('../assets/fish149.png'),
    'fish150.png': require('../assets/fish150.png'),
    'fish151.png': require('../assets/fish151.png'),
    'fish152.png': require('../assets/fish152.png'),
    'fish153.png': require('../assets/fish153.png'),
    'fish154.png': require('../assets/fish154.png'),
    'fish155.png': require('../assets/fish155.png'),
    'fish156.png': require('../assets/fish156.png'),
    'fish157.png': require('../assets/fish157.png'),
    'fish158.png': require('../assets/fish158.png'),
    'fish159.png': require('../assets/fish159.png'),
    'fish160.png': require('../assets/fish160.png'),
    'fish161.png': require('../assets/fish161.png'),
    'fish162.png': require('../assets/fish162.png'),
    'fish163.png': require('../assets/fish163.png'),
    'fish164.png': require('../assets/fish164.png'),
    'fish165.png': require('../assets/fish165.png'),
    'fish166.png': require('../assets/fish166.png'),
    'fish167.png': require('../assets/fish167.png'),
    'fish168.png': require('../assets/fish168.png'),
    'fish169.png': require('../assets/fish169.png'),
    'fish170.png': require('../assets/fish170.png'),
    'fish171.png': require('../assets/fish171.png'),
    'fish172.png': require('../assets/fish172.png'),
    'fish173.png': require('../assets/fish173.png'),
    'fish174.png': require('../assets/fish174.png'),
    'fish175.png': require('../assets/fish175.png'),
    'fish176.png': require('../assets/fish176.png'),
    'fish177.png': require('../assets/fish177.png'),
    'fish178.png': require('../assets/fish178.png'),
    'fish179.png': require('../assets/fish179.png'),
    'fish180.png': require('../assets/fish180.png'),
    'fish181.png': require('../assets/fish181.png'),
    'fish182.png': require('../assets/fish182.png'),
    'fish183.png': require('../assets/fish183.png'),
    'fish184.png': require('../assets/fish184.png'),
    'fish185.png': require('../assets/fish185.png'),
    'fish186.png': require('../assets/fish186.png'),
    'fish187.png': require('../assets/fish187.png'),
    'fish188.png': require('../assets/fish188.png'),
    'fish189.png': require('../assets/fish189.png'),
    'fish190.png': require('../assets/fish190.png'),
    'fish191.png': require('../assets/fish191.png'),
    'fish192.png': require('../assets/fish192.png'),
    'fish193.png': require('../assets/fish193.png'),
    'fish194.png': require('../assets/fish194.png'),
    'fish195.png': require('../assets/fish195.png'),
    'fish196.png': require('../assets/fish196.png'),
    'fish197.png': require('../assets/fish197.png'),
    'fish198.png': require('../assets/fish198.png'),
    'fish199.png': require('../assets/fish199.png'),
    'fish200.png': require('../assets/fish200.png'),
    'fish201.png': require('../assets/fish201.png'),
    'fish202.png': require('../assets/fish202.png'),
    'fish203.png': require('../assets/fish203.png'),
    'fish204.png': require('../assets/fish204.png'),
    'fish205.png': require('../assets/fish205.png'),
    'fish206.png': require('../assets/fish206.png'),
    'fish207.png': require('../assets/fish207.png'),
    'fish208.png': require('../assets/fish208.png'),
    'fish209.png': require('../assets/fish209.png'),
    'fish210.png': require('../assets/fish210.png'),
    'fish211.png': require('../assets/fish211.png'),
    'fish212.png': require('../assets/fish212.png'),
    'fish213.png': require('../assets/fish213.png'),
    'fish214.png': require('../assets/fish214.png'),
    'fish215.png': require('../assets/fish215.png'),
    'fish216.png': require('../assets/fish216.png'),
    'fish217.png': require('../assets/fish217.png'),
    'fish218.png': require('../assets/fish218.png'),
    'fish219.png': require('../assets/fish219.png'),
    'fish220.png': require('../assets/fish220.png'),
    'fish221.png': require('../assets/fish221.png'),
    'fish222.png': require('../assets/fish222.png'),
    'fish223.png': require('../assets/fish223.png'),
    'fish224.png': require('../assets/fish224.png'),
    'fish225.png': require('../assets/fish225.png'),
    'fish226.png': require('../assets/fish226.png'),
    'fish227.png': require('../assets/fish227.png'),
    'fish228.png': require('../assets/fish228.png'),
    'fish229.png': require('../assets/fish229.png'),
    'fish230.png': require('../assets/fish230.png'),
    'fish231.png': require('../assets/fish231.png'),
    'fish232.png': require('../assets/fish232.png'),
    'fish233.png': require('../assets/fish233.png'),
    'fish234.png': require('../assets/fish234.png'),
    'fish235.png': require('../assets/fish235.png'),
    'fish236.png': require('../assets/fish236.png'),
    'fish237.png': require('../assets/fish237.png'),
    'fish238.png': require('../assets/fish238.png'),
    'fish239.png': require('../assets/fish239.png'),
    'fish240.png': require('../assets/fish240.png'),
    'fish241.png': require('../assets/fish241.png'),
    'fish242.png': require('../assets/fish242.png'),
    'fish243.png': require('../assets/fish243.png'),
    'fish244.png': require('../assets/fish244.png'),
    'fish245.png': require('../assets/fish245.png'),
    'fish246.png': require('../assets/fish246.png'),
    'fish247.png': require('../assets/fish247.png'),
    'fish248.png': require('../assets/fish248.png'),
    'fish249.png': require('../assets/fish249.png'),
    'fish250.png': require('../assets/fish250.png'),
    'fish251.png': require('../assets/fish251.png'),
    'fish252.png': require('../assets/fish252.png'),
    'fish253.png': require('../assets/fish253.png'),
    'fish254.png': require('../assets/fish254.png'),
    'fish255.png': require('../assets/fish255.png'),
    'fish256.png': require('../assets/fish256.png'),
    'fish257.png': require('../assets/fish257.png'),
    'fish258.png': require('../assets/fish258.png'),
    'fish259.png': require('../assets/fish259.png'),
    'fish260.png': require('../assets/fish260.png'),
    'fish261.png': require('../assets/fish261.png'),
    'fish262.png': require('../assets/fish262.png'),
    'fish263.png': require('../assets/fish263.png'),
    'fish264.png': require('../assets/fish264.png'),
    'fish265.png': require('../assets/fish265.png'),
    'fish266.png': require('../assets/fish266.png'),
    'fish267.png': require('../assets/fish267.png'),
    'fish268.png': require('../assets/fish268.png'),
    'fish269.png': require('../assets/fish269.png'),
    'fish270.png': require('../assets/fish270.png'),
    'fish271.png': require('../assets/fish271.png'),
    
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
    width: 220,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  fishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  fishName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  fishLocalName: {
    fontSize: 14,
    color: '#666',
  },
  fishScientificName: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default FishListScreen;