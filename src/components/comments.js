import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';

export default function Comments() {
    return (
        <View style={styles.messageWrapper}>
            <Image
                style={styles.avtar}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View>
                <Text style={styles.username}>Sample User</Text>
                <Text style={styles.message}>Sample message Sample message Sample message  Sample message Sample message Sample message</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avtar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    messageWrapper: {
        display: 'flex',
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15
    },
    username: {
        fontSize: 14,
        color: "#FFF",
    },
    message: {
        fontSize: 12,
        color: "#FFF"
    },

});

