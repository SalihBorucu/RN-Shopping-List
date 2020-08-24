import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddItem = ({ title, addItem }) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    const initAddItem = text => {
        addItem(text)
        setText('')
    }
    return (
        <View>
            <TextInput value={text} onChangeText={onChange} placeholder="Add Item.." style={styles.input}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={()=> initAddItem(text)}>
                <Text style={styles.btnText}>
                    {' '}
                    <FontAwesome name="plus" size={20} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;
