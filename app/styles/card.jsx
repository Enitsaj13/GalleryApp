import { StyleSheet, Dimensions } from 'react-native'
import { SIZES, FONTS } from 'theme'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    cardView: {
        top: 10,
        backgroundColor: '#fff',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1,},
        shadowOpacity: 0.1,
        elevation: 2,
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },


    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,

    },

    interactionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        
    },

    commentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: width * 0.03,
        marginVertical: 10,
    },


    image: {
        height: height / 3,
    },

    likes: {
        marginHorizontal: 5,
        marginVertical: width * 0.03,
        fontFamily: FONTS.regular,
        fontSize: SIZES.font,
        letterSpacing: 1,
    },

    comments: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        fontFamily: FONTS.regular,
        letterSpacing: 1,
        fontSize: SIZES.font,
    },

    user: {
        fontFamily: FONTS.regular,
        letterSpacing: 1,
        fontSize: SIZES.name,
    },

    bookmarkContainer: {
        position: 'absolute',
        right: 8,
        zIndex: 1,
    },
    
    shareContainer: {
        top: 2,
    },
})

export default styles