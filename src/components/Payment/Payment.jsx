import React from "react";
import { MDBContainer } from "mdbreact";

export default function Payment() {

    return (
        <div>
            <MDBContainer>
                <p>test</p>
                {/* <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script> */}
                {/* <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
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
                </form> */}
            </MDBContainer>
        </div>
    )
}


{/* <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
<form name="TinkoffPayForm" onsubmit="pay(this); return false;">
  <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="TinkoffBankTest">
  <input class="tinkoffPayRow" type="hidden" name="frame" value="true">
  <input class="tinkoffPayRow" type="hidden" name="language" value="ru">
    <input class="tinkoffPayRow" type="text" placeholder="Сумма заказа" name="amount" required>
    <input class="tinkoffPayRow" type="text" placeholder="Номер заказа" name="order">
    <input class="tinkoffPayRow" type="text" placeholder="Описание заказа" name="description">
    <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика" name="name">
    <input class="tinkoffPayRow" type="text" placeholder="E-mail" name="email">
    <input class="tinkoffPayRow" type="text" placeholder="Контактный телефон" name="phone">
    <input class="tinkoffPayRow" type="submit" value="Оплатить">
</form>  */}