import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;

/*
// App.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import useDebounce from './useDebounce';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      const fetchResults = async () => {
        try {
          const response = await axios.get(`https://api.example.com/search?q=${debouncedQuery}`);
          setResults(response.data.results);
        } catch (error) {
          console.error(error);
        }
      };

      fetchResults();
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fcff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
*/

// var employee = {
//     id: 1,
//     greet: function() {
//         setTimeout(()=> {
//             console.log(this.id)
//         }, 1000)
//     }
// }