import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontFamily: 'Helvetica',
        color: 'white',
        marginTop: 10,
    },

    textCenter:{
        fontSize: 20,
        fontFamily: 'Helvetica',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    textUnderline:{
        fontSize: 20,
        fontFamily: 'Helvetica',
        color: 'white',
        marginTop: 10,
        textDecorationLine: 'underline',
    },

    header1: {
        fontSize: 40,
        fontFamily: 'Helvetica',
        color: 'white'
    },

    image: {
        width: "100%",
        height: 300
    },

    movieContainer: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#212121'
    },

    movieHeader: {
        fontSize: 20,
        fontFamily:'Helvetica',
        color:'white',
        textAlign: 'center',
        marginTop: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 34,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        color: "white",
        position: 'absolute',
        bottom:0,
        alignSelf: 'center',
    },
});