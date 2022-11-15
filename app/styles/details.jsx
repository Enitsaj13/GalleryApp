import { StyleSheet } from 'react-native'
import { SIZES, FONTS } from 'theme'

const styles = StyleSheet.create({

    header: {
        height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: 20,
    },
    detailText: {
        fontSize: SIZES.name,
        fontFamily: FONTS.regular,
        letterSpacing: 1,
        margin: 10,
       
    },
    detailsTitle: {
        fontSize: SIZES.name,
        fontFamily: FONTS.bold,
        letterSpacing: 1,
        margin: 10,
        padding: 4,
    },
    detailsValue: {
        fontSize: SIZES.name,
        fontFamily: FONTS.regular,
        letterSpacing: 1,
        margin: 10,
        padding: 4,
    },

    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        marginBottom: 10,
    }

});

export default styles;
        