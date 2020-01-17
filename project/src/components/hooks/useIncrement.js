import { useState } from 'react';

export const  useIncrement = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // increment any value
    const handleIncrement = (value, limit) => {
        // Hook candidate
        // On Click function increasing any button by 1
        // console.log("This will be an increment")
        if (value < limit){
        setValue(value + 1)
        } else {
            setValue(0)
        }
    }



    return [value, setValue, handleIncrement]
}