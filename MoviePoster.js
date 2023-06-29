import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoviePoster = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: movie.image }} style={styles.poster} />
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.title}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'wrap',
    color: 'white',
  },
});

export default MoviePoster;
