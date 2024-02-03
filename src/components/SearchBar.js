import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import useDebounce from '../hooks/useDebounce';

// const debounce = (fn,wait) => {
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         setTimeout(()=>fn(...args),wait)
//     }
// }

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("");
    const { debounce } = useDebounce();

    const handler = debounce((text)=>props?.handleOnSearch(text), 300)

    const handleUserInput = (text) => {
        setSearchValue(text);
        handler(text);
    }

    return (
        <View>
            <TextInput
                placeholder="Search Giphy"
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                value={searchValue}
                onChangeText={(value) => handleUserInput(value)}
            />
        </View>
    )
};

export default SearchBar;
