import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Demo extends Component {
 
    render() {
        return (
            <div>
                <ScriptTag isHydrating={true} src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js" />
                <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
                    <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="TinkoffBankTest" />
                    <input class="tinkoffPayRow" type="hidden" name="frame" value="true" />
                    <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
                        <input class="tinkoffPayRow" type="text" placeholder="Сумма заказа" name="amount" required />
                        <input class="tinkoffPayRow" type="text" placeholder="Номер заказа" name="order" />
                        <input class="tinkoffPayRow" type="text" placeholder="Описание заказа" name="description" />
                        <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика" name="name" />
                        <input class="tinkoffPayRow" type="text" placeholder="E-mail" name="email" />
                        <input class="tinkoffPayRow" type="text" placeholder="Контактный телефон" name="phone" />
                        <input class="tinkoffPayRow" type="submit" value="Оплатить" />
                </form>
            </div>
        );
    }
}

export default Demo