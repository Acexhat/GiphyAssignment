import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = ({ giphy }) => {
    return (
        <View style={{ margin: 4 }}>
            <Image
                source={{
                    uri: giphy?.images['original'] && giphy.images['original'].url,
                }}
                style={{ height: 90, width: 90 }}
            />
        </View>)
};

export default Card;
