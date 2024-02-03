import React, { useContext, useLayoutEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { fetchGifhys, searchGifhys } from '../services/giphyServices.js';
import Card from '../components/Card.js';
import SearchBar from '../components/SearchBar.js';
import { FETCH_LIMIT } from '../services/constants.js';
import ThemeContext from '../contexts/ThemeContext.js';

const HomeScreen = (props) => {

  const [giphyData, setGiphyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const theme = useContext(ThemeContext);

  const initialDataFetch = (pageNum) => {
    const response = fetchGifhys(pageNum);
    response.then(res => res.json()).then(data => {
      setGiphyData((gif) => [...gif, ...data.data])
      setCurrPage(FETCH_LIMIT + currPage);
    }).catch((err) => {
      setError(err)
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  useLayoutEffect(() => {
    setLoading(true)
    initialDataFetch(currPage);
  }, [])

  const handleOnSearch = (text) => {
    if (text === "") {
      initialDataFetch(currPage);
      return;
    }
    const response = searchGifhys(text);
    response.then(res => res.json()).then(data => {
      setGiphyData(data.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  if (loading) return <Text>loading....</Text>

  if (error) return <Text>Unfortunately! Some Error Occoured!</Text>

  return (
    <View style={{ backgroundColor: theme === 'light' ? "#FFF" : 'grey' }}>
      <View>
        <SearchBar handleOnSearch={handleOnSearch} />
        <Button onPress={() => props.setTheme(theme == 'light' ? 'dark' : 'light')} title={theme} />
      </View>
      <FlatList
        data={giphyData}
        renderItem={({ item }) => Card({ giphy: item })}
        keyExtractor={(item, idx) => item?.id?.toString() + idx}
        numColumns={4}
        onEndReached={() => initialDataFetch(currPage)}
      />
    </View >
  );
};

export default HomeScreen;
