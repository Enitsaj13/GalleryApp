/* <-- dependencies --> */
import { useContext } from 'react'
import {  View, TouchableOpacity, TextInput } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

/* <-- theme --> */
import ThemeContext from 'context/ThemeContext'

/* <-- styles --> */
import styles from 'styles/home'

const Search = ({ search, setSearch }) => {

    /* <-- theme context --> */
    const THEME = useContext(ThemeContext)

  return (
    <View style={styles.inputContainer}>
       
        <TouchableOpacity style={styles.searchIcon}>
            <Icons name='search' size={24} color={`${THEME.placeholder}`} />
        </TouchableOpacity>

        <TextInput
        value={setSearch}
        style={[styles.input, {backgroundColor: `${THEME.border}`,
        color: `${THEME.inputText}`}]}
        placeholder="Search for images..."
        placeholderTextColor={`${THEME.placeholder}`} />

    </View>
  )
}

export default Search

