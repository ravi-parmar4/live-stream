import { StatusBar } from 'expo-status-bar';
import { View, Button } from 'react-native';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { useEffect } from 'react';

export default function HomeScreen() {
    const navigation = useNavigation()
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const onStartSteaming = () => {
        if (!permission || permission?.status === "denied") {
            requestPermission().then(({ status }) => {
                if (status === 'granted') {
                    navigation.navigate('Stream')
                }
            })
        }
        if (permission?.granted) {
            navigation.navigate('Stream')
        }
    }

    useEffect(() => {
        if (!permission)
            requestPermission()
    }, [])

    return (
        <View style={styles.container}>
            <Button
                onPress={onStartSteaming}
                title="Start Streaming"
                color="#841584"
            />
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
