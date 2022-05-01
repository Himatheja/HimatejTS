import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Props = {
    title: string;
    onClick: () => void;
};

const CustomButton: React.FC<Props> = ({
    title = '',
    onClick = () => { }
}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonView}
                activeOpacity={0.8}
                onPress={onClick}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },
    buttonView: {
        width: '100%',
        height: 54,
        backgroundColor: 'black',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
})

export default CustomButton;
