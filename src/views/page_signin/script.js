import lang from './../../assets/lang';
import Datepicker from 'vuejs-datepicker';
import { mapGetters } from 'vuex';
import { GET_LOGIN, GET_FIRST_NAME, GET_LAST_NAME, GET_EMAIL, SET_LOGIN, SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_CITY, SET_COUNTRY } from '../../store/actions/user';
export default {
    name: "page_signup",

    components: {
        Datepicker
    },

    data: function () {
        return {
            lang: lang,
            country_option: [
                'Russia',
                'United Kingdom',
                'United States'
            ],
            city_option: {
                "Russia": [
                    "Tomsk",
                    "Moscow",
                ],
                "United States": [
                    "Detroit"
                ],
                "United Kingdom": [
                    "London"
                ],
            },
        }
    },

    mounted: function () {
    
    },

    computed: {
        ...mapGetters({
            getLogin: GET_LOGIN,
            getEmail: GET_EMAIL,
            getFirstName: GET_FIRST_NAME,
            getLastName: GET_LAST_NAME,
        }),

        getFilteredCity: function () {
            let a = this.city_option;
            let select = this.country;
            return a[select];
        },

        CheckEmpty: function () {
            if((!this.first_name && !this.last_name) || !this.login) {
                return false
            }

            return true;
        },

        login: {
            set(value) {
                this.$store.commit(SET_LOGIN, value);
            },
            get() {
                return this.getLogin;
            }
        },

        first_name: {
            set(value) {
                this.$store.commit(SET_FIRST_NAME, value);
            },
            get() {
                return this.getFirstName;
            }
        },

        last_name: {
            set(value) {
                this.$store.commit(SET_LAST_NAME, value);
            },
            get() {
                return this.getLastName;
            }
        },

        email: {
            set(value) {
                this.$store.commit(SET_EMAIL, value);
            },
            get() {
                return this.getEmail;
            }
        },

        password: {
            set(value) {
                this.$store.commit(SET_PASSWORD, value);
            },
            get() {
                return this.$store.state.user_module.password;
            }
        },

        city: {
            set(value) {
                this.$store.commit(SET_CITY, value);
            },
            get() {
                return this.$store.state.user_module.city;
            }
        },

        country: {
            set(value) {
                this.$store.commit(SET_COUNTRY, value);
            },
            get() {
                return this.$store.state.user_module.country;
            }
        }
    }
}