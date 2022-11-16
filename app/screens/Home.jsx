/* <-- dependencies --> */
import { useState, useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EventRegister } from 'react-native-event-listeners'
import Icons from 'react-native-vector-icons/Ionicons'

/* <-- api --> */
import API from 'api/API'

/* <-- components--> */
import ImageCard from 'components/ImageCard'

/* <-- theme --> */
import ThemeContext from 'context/ThemeContext'

/* <-- styles --> */
import styles from 'styles/home'

const HomeScreen = ({ navigation }) => {

    /* <-- state for theme --> */
    const THEME = useContext(ThemeContext)

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        EventRegister.emit('themeChanged', !isDarkTheme)
    }

    const [pixaBay, setPixaBay] = useState([])

    useEffect(() => {
        getPixaBay()
    }, [])

    const getPixaBay = () => {
        API.get('?key=31329225-ada8712aea9212be1fe2a7ec7&q=nature+animals&image_type=photo&pretty=true&per_page=200')
            .then((response) => {
                setPixaBay(response.data.hits)
            })
            .catch((error) => {
                console.log(error)
            }
        )
    }

   if (pixaBay.length === 0) {
       return (
           <View style={styles.container}>
               <Text>Loading...</Text>
           </View>
       )
   }

    

  return (
    <SafeAreaView style={[styles.section, { backgroundColor: `${THEME.background}` }]}>
    
        <View style={styles.header}>

            <TouchableOpacity style={styles.logoContainer}>
                <Text
                    style={[styles.logo, {color: `${THEME.logo}`}]}>
                    PixaBay
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleTheme} style={styles.darkmodeContainer}>
                <Icons 
                name={`${isDarkTheme ? 'sunny' : 'moon'}`}
                size={24} 
                color={`${THEME.logo}`} />
                
            </TouchableOpacity>

        </View>

        <View style={styles.inputContainer}>
        
            <TouchableOpacity style={styles.searchIcon}>
                <Icons name='search' size={24} color={`${THEME.placeholder}`} />
            </TouchableOpacity>

            <TextInput
            style={[styles.input, {backgroundColor: `${THEME.border}`,
            color: `${THEME.inputText}`}]}
            placeholder="Search for images..."
            placeholderTextColor={`${THEME.placeholder}`} />

        </View>
        <FlatList   
            data={pixaBay}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <ImageCard item={item} navigation={navigation} /> )}}
                />
    </SafeAreaView>
  )
}

export default HomeScreen






