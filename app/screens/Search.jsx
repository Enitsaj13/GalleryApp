import * as React from "react";
import axios from "axios";
import {  View, ActivityIndicator, TextInput, FlatList } from "react-native";
export default function LinksScreen({ navigation }) {
  const [searchQuery, setsearchQuery] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const [images, setImages] = React.useState([]);

  function submitQuery(e) {
    setloading(true);

    const api = "https://pixabay.com/api/";
    const key = "31329225-ada8712aea9212be1fe2a7ec7";

    axios({
      method: "GET",
      url: `${api}?key=${key}&image_type=photo&per_page=40&q=${searchQuery}`,
    })
      .then((res) => {
        setImages(res.data.hits);

        setloading(false);
      })
      .catch((e) => {
        setloading(false);
        console.log(e);
      })
      .finally(() => setloading(false));
  }

  return (
    <>
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={setsearchQuery}
        onEndEditing={submitQuery}
        value={searchQuery}
      />
      {loading && <ActivityIndicator />}

      {images != null ? (
        <FlatList
            data={images}
            renderItem={({ item }) => (
                <View>
                    <Image
                        source={{ uri: item.webformatURL }}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
        
      ) : (
        ""
      )}
    </View>
    </>
  );
}


