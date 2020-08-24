import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
// import { v4 as uuidv4 } from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
    const [items, setItems] = useState([
        { id: Math.random() * 10, text: 'Milk' },
        { id: Math.random() * 10, text: 'Tits' },
        { id: Math.random() * 10, text: 'Cow' },
        { id: Math.random() * 10, text: 'Juice' },
    ]);

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id != id);
        });
    };
    const addItem = (text) => {
      if(!text) {
        Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
      } else{
        setItems(prevItems => {
          return [{ id: Math.random() * 10, text: text }, ...prevItems];
        });
      }
    };
    return (
        <View style={styles.container}>
            <Header title="Shopping List" />
            <AddItem addItem={addItem}></AddItem>
            <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}></ListItem>}></FlatList>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
