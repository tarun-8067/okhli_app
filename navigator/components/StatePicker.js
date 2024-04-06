import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StatePicker = ({ onSelectState }) => {
    const [selectedState, setSelectedState] = useState('');

    const states = [
        'State', 'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
        'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
        'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
        'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const handleStateChange = (state) => {
        setSelectedState(state);
        onSelectState(state); // Pass selected state to parent component
    };

    return (
        // <View style={styles.picker}>
        <View style={styles.pickerStyle}>
            <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => handleStateChange(itemValue)}
            >
                {states.map((state, index) => (
                    <Picker.Item key={index} label={state} value={state} />
                ))}
            </Picker>
        </View>
        // </View>
    );
};
export default StatePicker;
const styles = StyleSheet.create({
    picker: {
        // flex: 1,
        backgroundColor: 'red',
        width: '85%',
        height: '55%',
        justifyContent: 'center',
        borderRadius: 20,
    },
    pickerStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '85%',
        height: '55%',
        justifyContent: 'center',
    },
});