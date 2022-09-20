import { Text, View, Image } from 'react-native';
import { generalStyles } from './GeneralStyles';
import React from "react";
import { TouchableHighlight } from 'react-native-web';
import HomeScreen from './homeScreen';

// onPress={() => navigation.navigate("DetailedPage", { props.movieId })
export default function MovieElement(props) {
    return (
        <View style={generalStyles.movieContainer}>
            <Text style={generalStyles.movieHeader}>{props.title}</Text>
            <TouchableHighlight onPress={() => navigation.navigate(HomeScreen)}>
                <Image
                    style={generalStyles.image}
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${props.imagePath}`,
                    }}
                />
            </TouchableHighlight>
        </View>
    )
};