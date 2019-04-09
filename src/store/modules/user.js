
import {
    GET_LOGIN,
    GET_EMAIL,
    GET_FIRST_NAME,
    GET_LAST_NAME,
} from './../actions/user';

import {
    SET_LOGIN,
    SET_EMAIL,
    SET_FIRST_NAME,
    SET_CITY,
    SET_COUNTRY,
    SET_DATE,
    SET_PASSWORD,
    SET_ZIP_CODE,
    SET_LAST_NAME
} from './../actions/user';

import {
    REG_REQUEST,
    REG_SUCCESS,
    REG_ERROR,
    REG_REJECT
} from './../actions/user';

const state = {
    login: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    date: '',
    zip_code: '',


    popup: {
        show: false,
        msg: '',
    }
};

const getters = {
    [GET_LOGIN]: state => state.login,
    [GET_EMAIL]: state => state.email,
    [GET_FIRST_NAME]: state => state.first_name,
    [GET_LAST_NAME]: state => state.last_name,
};

const actions = {
    [REG_REQUEST]: async ({commit, dispatch}) => {
        commit(REG_REQUEST);
        //check empty input
        if(!state.login && !state.email && !state.password) {
            commit(REG_ERROR);
            dispatch(REG_ERROR);
        } else {
            try {
                // запрос на сервер
                commit(REG_SUCCESS);
            } catch (e) {
                commit(REG_REJECT, e);
            }
        }
    }
};

const mutations = {

    [REG_REQUEST]: (state) => {
        state.status = 'proccesing';
    },

    [REG_SUCCESS]: (state) => {
        state.status = true;
        state.popup.show = true;
        state.popup.msg = "YOUR WELCOME";
    
        setTimeout(() => {
            state.popup.show = false;
        }, 5000)
    },

    [REG_ERROR]: (state) => {
        state.status = false;
        state.popup.show = true;
        state.popup.msg = "ERROR INPUT EMPTY";
    
        setTimeout(() => {
            state.popup.show = false;
        }, 5000)
    },

    [REG_REJECT]: (state, error) => {
        state.status = false;
        state.popup.show = true;
        state.popup.msg = "ERROR SERVER PROBLEM";

        setTimeout(() => {
            state.popup.show = false;
        }, 5000)
    },

    [SET_LOGIN]: (state, value) => {
        state.login = value;
    },
    [SET_EMAIL]: (state, value) => {
        state.email = value;
    },
    [SET_PASSWORD]: (state, value) => {
        state.password = value;
    },
    [SET_FIRST_NAME]: (state, value) => {
        state.first_name = value;
    },
    [SET_LAST_NAME]: (state, value) => {
        state.last_name = value;
    },
    [SET_COUNTRY]: (state, value) => {
        state.country = value;
    },
    [SET_CITY]: (state, value) => {
        state.city = value;
    },
    [SET_DATE]: (state, value) => {
        state.date = value;
    },
    [SET_ZIP_CODE]: (state, value) => {
        state.zip_code = value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}