import { createSlice } from "@reduxjs/toolkit";

// Initial state of the filter
const initialFilterState='';


// Creating a filter slice using createSlice
const filterSlice = createSlice ({
name: 'filter', // Filter slice name
initialState: initialFilterState, // Initial state of the filter
reducers: {
    changeFilter(_,action){
        return action.payload; 
        // Updating the filter value based on the passed action
    }
}
});


// Export the changeFilter action from the filter slice
export const {changeFilter} = filterSlice.actions;


// Export filter editor from filter slice
export const filterReducer = filterSlice.reducer 