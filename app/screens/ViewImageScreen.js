import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/chair.jpg")} />
        </View>
            
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 50,
        left: 40,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecd4c",
        position: "absolute",
        top: 50,
        right: 40,
    },
    imageContainer: {
        backgroundColor: "black",
        flex: 1,
    },
    image : {
        width: "100%",
        height: "100%",
    },
})
export default ViewImageScreen;