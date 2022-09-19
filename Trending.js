import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.trendingMovies}>
            <Text style={styles.text}>Trending movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    trendingMovies: {
        flex: 1, 
        alignItems: 'center',
        fontSize: '30px',
        backgroundColor: '#212121',
        color:'white'

    },

    text:{
        fontSize: '18px',
        color:'white'
    }
});
