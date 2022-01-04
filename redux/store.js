import { createStore } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import comments from '@/redux/commentsSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// create your reducer
const reducer2 = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case 'TICK':
      return { ...state, tick: action.payload }
    default:
      return state
  }
}

const reducer = combineReducers({
  comments,
})
// create a makeStore function
const makeStore = (context) => createStore(reducer)
// const makeStore = () =>
//     configureStore({
//         reducer: {
//             [subjectSlice.name]: subjectSlice.reducer,
//         },
//         devTools: true,
//     });
// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true })

export const store = configureStore({ reducer })
