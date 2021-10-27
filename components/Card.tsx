import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DATA } from "../utils";

export type CardProps = typeof DATA[0];

export const Card = ({ title, author, id }: CardProps) => (
    <View key={id} style={styles.container}>
        <View key={id} style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    item: {
        backgroundColor: "black",
        padding: 25,
        marginVertical: 8,
        marginHorizontal: 16,
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 64,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: '90deg' }],
    },
    author: {
        flex: 1,
    },
});