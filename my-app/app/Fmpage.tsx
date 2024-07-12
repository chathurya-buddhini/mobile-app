import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React, { useState } from 'react'
const BGImage = require('../assets/images/Frame 8.png');
const IconImage = require('../assets/images/Media-Icon-18-512.webp');
const arrow1 = require('../assets/images/arrow-prev-small-svgrepo-com.png');

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function home() {

    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const toggleMute = () => {
        setIsMute(!isMute);
    };
    return (
        <View style={styles.container}>
            <Image source={BGImage} style={styles.image} />
            <View style={styles.overlayContainer}>
                <Image source={IconImage} style={styles.buttonImage} />
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => router.push('/home')}>
                    <Text style={styles.buttonText}>Go back</Text>
                    
                </TouchableOpacity>
            </View>
           
            <View style={styles.playbuttonContainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.playButton3}>
                    <Icon name="arrow-left" style={styles.playButtonImage3} size={40} color="#2F69B3" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.playButton2}>
                    <Icon name={isPlaying ? "pause" : "play-arrow"} style={styles.playButtonImage2} size={60} color="#2F69B3" onPress={togglePlayPause} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.playButton3}>
                    <Icon name="arrow-right" style={styles.playButtonImage3} size={40} color="#2F69B3" />
                </TouchableOpacity>
            </View>
           
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2F69B3',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },

    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    }, 

    overlayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '4%',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 45
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        borderWidth: 1,
        width: '30%',
        height: '100%',
        position:'relative',
        bottom:40,
    },

    buttonImage: {
        height: '90%',
        width: '11%',

    },

    buttonText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Roboto',
        
        
    },

    playbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '15%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },

    playButton1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 300,
        height: '50%',
        width: '18%',
        borderColor: 'lightgray',
        borderWidth: 5,

    },

     playButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '65%',
        width: '23%',
        borderColor: 'lightgray',
        borderWidth: 5,

    },

     playButton3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '50%',
        width: '18%',
        borderColor: 'lightgray',
        borderWidth: 5,
    },

    playButtonImage1: {
        width: 40,
        height: 40,
    },

     playButtonImage2: {
        width: 60,
        height: 60,
    },
    
     playButtonImage3: {
        width: 40,
        height: 40,
    }
});


