/* <-- dependencies --> */
import { useContext, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { FontAwesome } from 'react-native-vector-icons'
import Toast from 'react-native-toast-message'

/* <-- theme --> */
import ThemeContext from 'context/ThemeContext'

/* <-- styles --> */
import styles from 'styles/card'

const ImageCard = ({ item, navigation }) => {

    /* <-- book mark state state --> */
    const [isPressed, setIsPressed] = useState(false)
    const handlerBookmark = () => setIsPressed((prevState) => !prevState)

    /* <-- theme context --> */
    const THEME = useContext(ThemeContext)


    /* <-- toast added to bookmark and remove --> */
    const toastMessage = () => {
        Toast.show({
            type: isPressed ? 'error' : 'success',
            position: 'top',
            text1: isPressed ? 'Removed from bookmark! 🥹' : 'Added to bookmark! 😍',
            visibilityTime: 3000,
        })

        handlerBookmark()
    }


    return (
        <View style={[styles.cardView, { backgroundColor: `${THEME.card}` }]}>
        
        <View style={styles.userContainer}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image style={styles.userImage}
                    source={{ uri: item.userImageURL ? item.userImageURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />   
            </TouchableOpacity>
           
           <Text style={[styles.user, { color: `${THEME.text}` }]}>
                {item.user}
           </Text>

           </View>
           <TouchableOpacity activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', item)}>

                <Image style={styles.image}
                    source={{ uri: item.largeImageURL }} />
            </TouchableOpacity>

           <View style={styles.interactionsContainer}>
           
                <TouchableOpacity style={styles.likesContainer}>
                    <Ionicons name='heart' size={30} color={`${THEME.heart}`} />  
                    <Text style={[styles.likes, { color: `${THEME.text}` }]}>
                        {item.likes}
                    </Text>
                </TouchableOpacity>

           <TouchableOpacity style={styles.commentsContainer}>
                <FontAwesome name='comment' size={26} color={`${THEME.placeholder}`} />
                <Text style={[styles.comments, { color: `${THEME.text}` }]}>
                    {item.comments}
                </Text>
           </TouchableOpacity>
          
           <TouchableOpacity style={styles.shareContainer}>
                <Ionicons name='paper-plane-outline' size={28} color={`${THEME.placeholder}`} />
           </TouchableOpacity>

           <TouchableOpacity style={styles.bookmarkContainer}
                onPress={() => {toastMessage()}}>

                <Ionicons name={isPressed ? 'bookmark' : 'bookmark-outline'} size={28} color={`${THEME.placeholder}`} />
               
            </TouchableOpacity>

           </View>



        </View>
    )
}

export default ImageCard
