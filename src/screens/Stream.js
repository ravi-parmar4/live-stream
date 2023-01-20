import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Feathericons from 'react-native-vector-icons/Feather';
import FontAwesomeicons from 'react-native-vector-icons/FontAwesome';
import { SwipeablePanel } from 'rn-swipeable-panel';
import Comments from '../components/comments';

export default function StreamScreen() {
    const [type, setType] = useState(CameraType.back);
    const navigation = useNavigation();

    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: false,
        noBackgroundOpacity: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
    });
    const [isPanelActive, setIsPanelActive] = useState(true);

    const togglePanel = () => {
        setIsPanelActive(!isPanelActive);
    };
    const closePanel = () => {
        setIsPanelActive(false);
    };

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    const onClose = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => ref}
                    style={styles.fixedRatio}
                    type={type}
                ></Camera>
                <View style={styles.mainContainer}>
                    {/* <View>
                        <Text style={styles.livecount}>43 live</Text>
                    </View> */}
                    <View style={styles.navbar}>
                        <TouchableOpacity onPress={onClose}>
                            <IconAnt name="close" size={24} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCameraType}>
                            <IconIonicons name="camera-reverse-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.countWrapper}>
                        <Text style={styles.livecount}>43 live</Text>
                    </View>
                    <View style={styles.content}>

                        <SwipeablePanel {...panelProps}
                            style={{ backgroundColor: 'transparent', height: isPanelActive ? 410 : 300, shadowColor: 'transparent', position: 'absolute', bottom: -70 }}
                            isActive={isPanelActive}
                        >
                            <ScrollView>
                                <View style={styles.scrollviewContainer}>
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                </View>
                            </ScrollView>
                        </SwipeablePanel>

                        <View style={styles.sidepanel}>
                            <View style={styles.sidepanelIconWrapper}>
                                <Feathericons name="message-square" size={20} color="#fff" />
                            </View>
                            <View style={styles.sidepanelIconWrapper}>
                                <IconIonicons name="md-send" size={20} color="#fff" />
                            </View>
                            <View style={styles.sidepanelIconWrapper}>
                                <IconIonicons name="videocam" size={20} color="#fff" />
                            </View>
                            <View style={styles.sidepanelIconWrapper}>
                                <FontAwesomeicons name="microphone" size={20} color="#fff" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer} >
                        <View style={styles.commentWrapper} >
                            <Feathericons name="message-square" size={24} color="#FFF" onPress={togglePanel} />
                            <Text style={{ marginLeft: 5, color: 'white' }} onPress={togglePanel}>32 comments</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onClose}
                        >
                            <Text style={{ color: '#fff' }}>  End Livestream </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    cameraContainer: {
        flex: 1,
    },
    fixedRatio: {
        flex: 1,
    },
    mainContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 9,
        right: 0,
        left: 0
    },
    navbar: {
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        zIndex: 99
    },
    content: {
        width: '100%',
        flex: 1,
        paddingLeft: 15,
        paddingTop: 15,
        paddingRight: 15,
    },
    footer: {
        height: 50,
        backgroundColor: '#13005A',
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999
    },
    scrollviewContainer: {
        height: '100%',
    },
    commentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
    },
    countWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    livecount: {
        backgroundColor: 'blue',
        color: '#fff',
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        paddingTop: 5,
        display: 'flex',
        marginLeft: 15,
        marginTop: 15
    },
    sidepanel: {
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    sidepanelIconWrapper: {
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
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
    button: {
        alignItems: 'center',
        backgroundColor: '#F48484',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    }
});
