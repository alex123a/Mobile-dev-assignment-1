import { useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet, Image, button } from "react-native";
import { API_key } from './API_key';
import { generalStyles } from "./GeneralStyles";
import { ScrollView } from 'react-native-web';

export default function DetailedPage({ route, navigation }) {
    const [data, setData] = useState({});
    
    const { movieId } = route.params;

    // When this component is mounted then fire the getDetails function
    useEffect(() => {
        getDetails();
    }, []);

    // Function to fetch details about the movie
    function getDetails() {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_key}&language=en-US`
        )
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    const rating = "" + Math.round(data.vote_average * 10) / 10;

    return (
        <View style={styles.container}>
            <Image
            style={generalStyles.image}
            source={{
                uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
            }}
            />
            <View style={{ flexGrow: 0.2 }}>
                <ScrollView>
                    <Text style={generalStyles.textUnderline}>Title</Text>
                    <Text style={generalStyles.textCenter}>{data.title}</Text>
                    <Text style={generalStyles.textUnderline}>Rating</Text>
                    <Text style={generalStyles.textCenter}>{rating}/10</Text>
                    <Text style={generalStyles.textUnderline}>Description</Text>
                    <Text style={generalStyles.textCenter}>{data.overview}</Text>
                </ScrollView>
            </View>
            <Pressable style={generalStyles.button} onPress={() => navigation.goBack()}><Text style={generalStyles.text}>Go back</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#212121',
        textAlign: 'center',
        color:'white'
    },
});
