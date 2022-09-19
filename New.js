import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.newMovies}>
            <Text style={styles.text}>New movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newMovies: {
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
