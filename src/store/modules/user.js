
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
};

const getters = {
    [GET_LOGIN]: state => state.login,
    [GET_EMAIL]: state => state.email,
    [GET_FIRST_NAME]: state => state.first_name,
    [GET_LAST_NAME]: state => state.last_name,
};

const actions = {

};

const mutations = {
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