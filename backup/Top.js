import { StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from 'react-native-web';
import MovieElement from './MovieElement';
import { API_key } from './API_key';

const API_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`

export default function Top({ navigation }) {

    const [data, setData] = useState([]);

    function fetchMovies() {
        fetch(
            API_url
        )
            .then((response) => response.json())
            .then((data) => setData(data.results));
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const renderItem = ({ item }) => (
        <MovieElement navigation={navigation} movieId={item.id} title={item.title} imagePath={item.poster_path} />
    );

    return (
        <View style={styles.topMovies}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    topMovies: {
        flex: 1, 
        alignItems: 'center',
        fontSize: 30,
        backgroundColor: '#212121',
        color:'white'
    },
});
