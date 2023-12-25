import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const boxes = [
    {header: 'Head & Face', subtitle: '11 diseases', id: 1},
    {header: 'Back & Neck', subtitle: '9 diseases', id: 2},
    {header: 'Elbow & Shoulders', subtitle: '12 diseases', id: 3},
    {header: 'Hand & Arm', subtitle: '2 diseases', id: 4},
  ];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemContainer: {
      padding: 20,
      borderRadius: 15,
      marginTop: 5,
      marginBottom: 5,
    },
    backgroundColors: ['#eb7562', '#8dc4bb', '#f1982e', '#317389'],
    subtitleColors: ['#f4a293', '#b3dbd5', '#fcb868', '#55a1bb'],
  });

  const renderItem = ({item, index}) => {
    const backgroundColor =
      styles.backgroundColors[index % styles.backgroundColors.length];
    const subtitleColor =
      styles.subtitleColors[index % styles.subtitleColors.length];

    return (
      <View style={[styles.itemContainer, {backgroundColor}]}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          {item.header}
        </Text>
        <Text style={{color: subtitleColor}}> {item.subtitle} </Text>
      </View>
    );
  };

  return (
    <View style={{padding: 20}}>
      <View style={styles.container}>
        <Text style={{color: 'gray', marginTop: 20, marginBottom: 40}}>
          Friday, 15 Dec
        </Text>
        <Text style={{color: 'gray', marginTop: 20}}>Search</Text>
      </View>

      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Learn</Text>
        <Text style={{marginTop: 10, marginBottom: 10}}>
          Choose part of the body
        </Text>
      </View>

      <FlatList
        data={boxes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;
