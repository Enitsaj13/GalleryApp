/* <-- dependencies --> */
import React, { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { EventRegister } from 'react-native-event-listeners'

/* <-- theme --> */
import ThemeContext from 'context/ThemeContext'
import { THEME } from 'theme'

/* <-- components --> */
import FocusedStatusBar from 'components/FocusedStatusBar'

/* <-- screens --> */
import HomeScreen from 'screens/Home'
import DetailScreen from 'screens/Details'

/* <-- navigator --> */
const Stack = createStackNavigator()

const App = () => {

  /* <-- theme --> */
  const [themeMode, setThemeMode] = useState(false)

  useEffect(() => {
    let listener = EventRegister.addEventListener('themeChanged', (data) => {
      setThemeMode(data)
    })
    return () => {
      EventRegister.removeEventListener(listener)
    }
  }, [])

  /* <-- fonts --> */
  const [loaded] = useFonts({
    PoppinsBold: require('assets/fonts/Poppins-Bold.ttf'),
    PoppinsRegular: require('assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) return null



  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: `${themeMode ? THEME.dark : THEME.light}`
    }
  }


  return (
    <>
      <ThemeContext.Provider value={themeMode ? THEME.dark : THEME.light}>
        <NavigationContainer theme={MyTheme}>
          <FocusedStatusBar
            barStyle={themeMode ? 'light-content' : 'dark-content'}
          />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </>
    )
  }

export default App



