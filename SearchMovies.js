import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MovieDetails from './MovieDetails'
import  MovieSearchService    from './service/MovieSearchService'; 


const SearchMovies = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState('pt-BR');


    const handleSearch = async (text) =>
    {
      setSearchText(text);
      const results = await MovieSearchService.searchMoviesApi(text, language);
      setMovies(results);
    }


 const renderMovie = ({ item }) => (
    <TouchableOpacity style={styles.movie}
        onPress={() => navigateToDetails(item)}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Procurar filmes ou séries..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        style={styles.movieList}
        data={movies.slice(0, 5)}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </View>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchBox: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    textAlignVertical: 'center',
    flexWrap: 'wrap',
  },
  movieList: {
    width: '100%',
  },
  movie: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    transition: 'all 0.3s ease-in-out',
  },
  movieImage: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    marginRight: 20,
    borderRadius: 5,
  },
  movieTitle: {
    flexShrink: 1,
    flexGrow: 1,
    width: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  }
});

export default SearchMovies;