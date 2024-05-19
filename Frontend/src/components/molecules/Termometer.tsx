import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import colors from "properties/styles/colors";

const {height} = Dimensions.get('window');


interface VerticalProgressBarProps {
    progress: number; // liczba określająca progres (od 0 do 100)
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({progress}) => {
    const boundedProgress = Math.min(100, Math.max(0, progress));
    const progressBarHeight = (height * 0.6 * boundedProgress) / 100;

    const positions = [33, 66, 100];

    const imagePaths = [
        {uri: '../../../assets/marek.jpg'},
        {uri: '../../../assets/marek.jpg'},
        {uri: 'file://../../../assets/marek.jpg'}
    ];

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, {height: progressBarHeight}]}/>
                {imagePaths.map((image, index) => {
                    const topPosition = (height * 0.6 * positions[index]) / 100 - 50; // 50 to połowa wysokości obrazka (100/2)
                    return (
                        <View key={index} style={[styles.imageContainer, {top: topPosition - 150}]}>
                            <Image source={image} style={styles.image}/>
                        </View>
                    );
                })}
            </View>
            <Text style={styles.progressText}>{`${boundedProgress}%`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        position: "absolute",
        right: 5,
        bottom: 20
    },
    progressContainer: {
        width: 30,
        height: height * 0.6,
        borderWidth: 0,
        borderColor: '#000',
        backgroundColor: colors.lightGrey,
        position: 'relative',
        alignItems: 'center', // Wycentrowanie elementów w poziomie
        borderRadius: 100
    },
    progressBar: {
        width: '100%',
        backgroundColor: colors.goldYellow,
        position: 'absolute',
        bottom: 0,
        borderRadius: 100
    },
    imageContainer: {
        position: 'absolute',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 20,
        borderRadius: 50,
        borderColor: colors.goldYellow

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: colors.goldYellow,
        borderWidth: 1,
    },
    progressText: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    },
});

export default VerticalProgressBar;
