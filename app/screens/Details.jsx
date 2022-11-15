/* <-- dependencies --> */
import { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Entypo'

/* <-- theme --> */
import ThemeContext from 'context/ThemeContext'


/* <-- styles --> */
import styles from 'styles/details'

const Details = ({ navigation, route }) => {
  const item = route.params

  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- data --> */
  const CardDetails = [
    {
        id: 1,
        title: 'User: ',
        value: item.user
    },
    {
        id: 2,
        title: 'Likes: ',
        value: item.likes 
    },
    {
        id: 3,
        title: 'Tags: ',
        value: item.tags
    },
    {
        id: 4,
        title: 'Views: ',
        value: item.views
    },
    {
        id: 5,
        title: 'Downloads: ',
        value: item.downloads
    },
    {
        id: 6,
        title: 'Collections: ',
        value: item.collections
    },
    {
        id: 7,
        title: 'Comments: ',
        value: item.comments
    },
    {
        id: 8,
        title: 'Type: ',
        value: item.type
    },
    
  ]

  return (
    <>
    <SafeAreaView style={{backgroundColor: `${THEME.background}`}}>
      <View
        style={[styles.header, {backgroundColor: `${THEME.background}`}]}> 
        <Icon
          name='chevron-thin-left'
          size={20}
          onPress={navigation.goBack}
          color={`${THEME.logo}`}
        />
        <Text style={[styles.detailText, {color: `${THEME.logo}`}]}>Details</Text>
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.largeImageURL }} style={{ width: '100%', height: 300 }} />
      </View>

      {/* <-- card details --> */}
      {CardDetails.map((item) => (
        <View key={item.id} style={styles.cardDetails}>
          <Text style={[styles.detailsTitle, {color: `${THEME.logo}`}]}>
            {item.title}
          </Text>
          <Text style={[styles.detailsValue, {color: `${THEME.logo}`}]}>
            {item.value}
          </Text>
        </View>
      ))}

    
    </SafeAreaView>
    </>
  )
}


export default Details

