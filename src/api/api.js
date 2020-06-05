import * as axios from 'axios';

export const instance = axios.create({
    // withCredentials: true,
    // headers: {
    //     "API-KEY": '',
    // },
    baseURL: 'https://securepay.tinkoff.ru/v2/',
});


// export const userAPI = {
//     submit() {
//         return instance.post('');
//     }
// }

// pay - 3
// pas - 2
// c - 1
// t - 4

export const tinkoffAPI = {
    initTinkoff() {
        return instance.post('Init', JSON.parse(JSON.stringify({
			TerminalKey: "1590143722579DEMO",
			OrderId : "1",
			Recurrent: "Y",
			CustomerKey: "kovalev",
			Amount: 1500,
			DATA: {"Phone": '123', "Email": 'some@mail.ru'},
		})))
    },
    finishAuthorize(paymentId) {
        return instance.post('FinishAuthorize', JSON.parse(JSON.stringify({
            PaymentId: paymentId,
			CardData : "PAN=4300000000000777;ExpDate=1122;CardHolder=IVAN PETROV;CVV=111",
			TerminalKey: "1590143722579DEMO",
			Token: ''
        })))
    },
    confirm(paymentId) {
        return instance.post('Confirm', JSON.parse(JSON.stringify({
            TerminalKey: "1590143722579DEMO",
			PaymentId: paymentId,
			Token: 'de27fedce7af6171f420427fd3bd01ea1edd11018fbb62e707c7369dbb9179e9'
        })))
    }
}