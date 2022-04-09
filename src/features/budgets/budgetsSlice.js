//Import createSlice from @reduxjs/toolkit.
import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }));

// Create budgetSlice
const budgetsSlice = createSlice({
    name: "budgets",
    initialState: initialState,
    reducers: {
      // editBudget: (state, action) => {
      //   return state.find(budget => budget.category === action.payload.category => budget.amount = action.payload.amount);
      editBudget: (state, action) =>{
          const budgetIndex = state.findIndex(budget => budget.category === action.payload.category);
          state[budgetIndex].amount = action.payload.amount;
        }
    }
});

export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;

export const { editBudget } = budgetsSlice.actions;
