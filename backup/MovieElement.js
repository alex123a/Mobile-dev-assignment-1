import { Text, View, Image } from 'react-native';
import { generalStyles } from './GeneralStyles';
import React from "react";
import { TouchableHighlight } from 'react-native-web';

export default function MovieElement(props) {
    const movieId = props.movieId;
    return (
        <View style={generalStyles.movieContainer}>
            <Text style={generalStyles.movieHeader}>{props.title}</Text>
            <TouchableHighlight 
                onPress={() => props.navigation.navigate(
                    "DetailedPage", { movieId }
                )}
            >
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