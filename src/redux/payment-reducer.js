import { tinkoffAPI } from "../api/api"

const SET_USER_INFO = 'SET_USER_INFO'
const SET_USER_LOCATION = 'SET_USER_LOCATION'
const SET_USER_PASPORT = 'SET_USER_PASPORT'
const BTN_DISABLE = 'BTN_DISABLE'
const BTN_ON = 'BTN_ON'

let paymentId = 0; 

let initialState = {
    fio: {
        // firstName: null,
        // lastName: null,
        // patronymic: null,
        // phone: null,
        // email: null,
        // accept: null,
        // firstStep: false
    },
    location: {
        // regRegion: null,
        // regCity: null,
        // regStreet: null,
        // regHouse: null,
        // regApartment: null,
        // secondStep: false
    },
    pasport: {

    },
    step: false,
}

const paymentReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_INFO:
            state.step = true
            return {
                ...state,
                fio: {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    patronymic: action.patronymic,
                    phone: action.phone,
                    email: action.email,
                    accept: action.accept,
                }
            }
        case SET_USER_LOCATION:
            state.step = true
            return {
                ...state,
                location: {
                    regRegion: action.regRegion,
                    regCity: action.regCity,
                    regStreet: action.regStreet,
                    regHouse: action.regHouse,
                    regApartment: action.regApartment
                }
            }
        case SET_USER_PASPORT:
            state.step = true
            return {
                ...state,
                pasport: {
                    pasportNumbe: action.pasportNumbe,
                    pasportCode: action.pasportCode,
                    departmentName: action.departmentName,
                    birthPlace: action.birthPlace,
                    pasportDate: action.pasportDate
                }
            }
        case BTN_DISABLE:
            state.step = false
            return {
                ...state
            }
        case BTN_ON:
            state.step = true
            return {
                ...state
            }
        default:
            return state;
    }
}

export const setUserInfo = (firstName, lastName, street, patronymic, phone, email, accept) => ({type: SET_USER_INFO, firstName, lastName, street, patronymic, phone, email, accept})

export const setUserLocation = (regRegion, regCity, regStreet, regHouse, regApartment) => ({type: SET_USER_LOCATION, regRegion, regCity, regStreet, regHouse, regApartment})

export const setUserPasport = (pasportNumber, pasportCode, departmentName, birthPlace, pasportDate) => ({type: SET_USER_PASPORT, pasportNumber, pasportCode, departmentName, birthPlace, pasportDate})

export const btnDisableAC = () => ({type: BTN_DISABLE})

export const btnOn = () => ({type: BTN_ON})



export const setInfo = (formData) => async (dispatch) => {
    if(formData.email){
        dispatch(setUserInfo(formData.firstName, formData.lastName, formData.street, formData.patronymic, formData.phone, formData.email, formData.accept))
        let response = await tinkoffAPI.initTinkoff();
        paymentId = response.data.PaymentId;

    }else if(formData.flat){
        dispatch(setUserLocation(formData.region, formData.city, formData.street, formData.house, formData.flat))
        let response = await tinkoffAPI.finishAuthorize(paymentId);
        console.log(response)

    }else if(formData.birthPlace){

        let response = await tinkoffAPI.confirm(paymentId);
        console.log(response)

        // let data = {
        //     f_name: 'some',
		// 	l_name: 'some',
        //     m_name: 'some',
        //     birthday: 'some',
        //     phone: 'some',
        //     email: 'some',
        //     sex: 'some',
        //     reg_region: 'some',
        //     reg_city: 'some',
        //     reg_street: 'some',
        //     reg_building: 'some',
        //     reg_apartment: 'some',
        //     pasport_number: 'some',
        //     pasport_date_issue: 'some',
        //     pasport_code: 'some',
        //     pasport_issuer: 'some',
        //     pasport_bitrh_place: 'some'
        // }

        dispatch(btnOn())

         // dispatch(setUserPasport(formData.pasportNumber, formData.pasportCode, formData.departmentName, formData.birthPlace, formData.pasportDate))

        // let response = await userAPI.submit();
        // console.log(response)
    }
}

export const btnDisable = () => async (dispatch) => {
    dispatch(btnDisableAC())
}

export default paymentReducer;