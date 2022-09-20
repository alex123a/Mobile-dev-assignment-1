import { StyleSheet, Text, View, Image } from 'react-native';
import { generalStyles } from './GeneralStyles';
import React, { useEffect, useState } from "react";
import { FlatList, TouchableHighlight } from 'react-native-web';
import HomeScreen from './homeScreen';

const API_key = "c10814e271b904c7c347871cad37e980";
const API_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`

export default function Trending() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {
        // My own note Alex: This print makes it work, don't question it.
        fetch(
            API_url
        )
            .then((response) => response.json())
            .then((data) => setData(data.results));
        console.log(data.results);
    }

    const renderItem = ({ item }) => (
        <MovieElement navigation={navigation} movieId={item.id} title={item.title} imagePath={item.poster_path} />
    );

    return (
        <View style={styles.trendingMovies}>
            <br></br>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

// onPress={() => navigation.navigate("DetailedPage", { movieId })
const MovieElement = ({ navigation, title, movieId, imagePath}) => (
    <View style={generalStyles.movieContainer}>
        <Text style={generalStyles.movieHeader}>{title}</Text>
        <TouchableHighlight onPress={() => navigation.navigate(HomeScreen)}>
            <Image
                style={generalStyles.image}
                source={{
                    uri: `https://image.tmdb.org/t/p/original${imagePath}`,
                }}
            />
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    trendingMovies: {
        flex: 1, 
        alignItems: 'center',
        fontSize: '30px',
        backgroundColor: '#212121',
        color:'white'
    },
});
