import React ,{useState,useEffect} from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import SearchMovies from './SearchMovies';
import MoviePoster from './MoviePoster';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieSearchService from './service/MovieSearchService';


const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [language, setLanguage] = useState('pt-BR');
  const [moviesx, setMoviesx] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const results = await MovieSearchService.searchMoviesApi("a", language);
        setMoviesx(results);

        setMoviesx(randomMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity style={styles.movie} onPress={() => navigateToDetails(item)}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navigateToDetails = (moviesx) => {
    navigation.navigate('MovieDetails', { moviesx});
  };

  console.log("xxxxx", moviesx);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchMovies navigation={navigation} />
      </View>

      <ScrollView vertical>
        {moviesx.map((movie) => (
          <MoviePoster key={movie.tmdbId} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
    width: '100%',
  },

  searchContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#222',
  },
});

export default HomeScreen;

