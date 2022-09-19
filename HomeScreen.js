import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.home}>
            <h1>Welcome to Top movies!</h1>
            <Text style={styles.text}>This app provide information about new and trending movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
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
