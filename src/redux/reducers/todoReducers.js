import produce from 'immer';
// Types
import Types from '../types/todoTypes';

const initialState = {
  data: {
    list: [],
  },
  loading: {
    add: false,
    list: false,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_TODO_RECEIVE: {
      state.data.list = payload;
      return;
    }

    case Types.LOADING_TODO: {
      state.loading[payload.name] = payload.status;
      return;
    }

    case Types.RESET_TODO: {
      if (payload.name === '*') return initialState;
      state.data[payload.name] = initialState.data[payload.name];
      return;
    }

    default:
      return state;
  }
};

export default produce(reducer);

// case Types.ADD_TODO: {
//   state.data.list.push({
//     id: payload.id,
//     name: payload.name,
//   });
//   return;
// }

// case Types.UPDATE_TODO: {
//   state.data.list = state.data.list.map((x) =>
//     x.id === payload.id ? { ...x, title: payload.title } : x
//   );
//   return;
// }

// case Types.DELETE_TODO: {
//   state.data.list = state.data.list.filter((x) => x.id !== payload.id);
//   return;
// }
