import { StyleSheet, Text, View } from 'react-native';
import { generalStyles } from './GeneralStyles';

export default function New() {
    return (
        <View style={styles.newMovies}>
            <br></br>
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
});
