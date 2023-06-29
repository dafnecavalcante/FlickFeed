import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function  MovieDetails({ route })
{
  console.log('route ' + route.params);

  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.movieDescription}>{movie.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  movieImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MovieDetails;
