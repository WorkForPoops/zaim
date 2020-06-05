import React from "react";
import '../../App.css'
import Navbar from "../Navbar/Navbar";
import SliderRage from "../Slider/Slider";
import { MDBContainer } from "mdbreact";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBAnimation, MDBCol, MDBRow, MDBFooter } from 'mdbreact';
import fImg from '../../assets/images/fisrtImg.png'
import sImg from '../../assets/images/secondImg.png'
import tImg from '../../assets/images/thirdImg.png'
import frImg from '../../assets/images/fourImg.png'
import { NavLink } from "react-router-dom";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Forward5Icon from '@material-ui/icons/Forward5';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ssl from '../../assets/images/ssl.jpg'
import img2 from '../../assets/images/6.jpg'
import FooterPage from "../Footer/Footer";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 150 + 'px'
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
        <div className="homeBg">
            {/* {window.innerWidth > 600 ? */}

            <Navbar />
            <MDBContainer>
                <MDBAnimation type="fadeInUp" className="delay-1s">    
                    <h1 className="purple-text mt-5 pt-5 hClass">Быстрые займы <span className="font-weight-bolder">для всех</span></h1>
                </MDBAnimation>
                <MDBAnimation type="fadeInUp" className="delay-1s">
                    <h5 className="orange-text font-weight-bolder">Первый займ на карту под 0%</h5>
                </MDBAnimation>
                <MDBAnimation type="fadeInUp" className="delay-1s">
                    <h5 className="orange-text font-weight-bolder">За 5 минут по паспорту</h5>
                </MDBAnimation>
                <MDBAnimation type="fadeIn" className="delay-2s">
                    <SliderRage />
                </MDBAnimation>
                <MDBAnimation type="fadeIn" className="delay-2s">
                    <NavLink to="/payment">
                        <MDBBtn outline color="secondary" className="z-depth-3" style={{ borderRadius: '50px' }}>Получить деньги</MDBBtn>
                    </NavLink>
                </MDBAnimation>

                <div className={classes.root}>
                    <MDBAnimation type="fadeIn" wow>
                        <h2 className="text-center font-weight-bolder indigo-text pt-5">4 шага до получения денег</h2>
                    </MDBAnimation>    
                    <Grid className='mt-4' container spacing={3}>
                        <Grid item xs={12} sm={6} className={classes.paper}>  
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" style={{height: 130}} src={fImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Выбрать сумму и срок</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.paper}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" style={{height: 130}} src={sImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Заполнить анкету</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.paper}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" style={{height: 135}} src={tImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Дождаться одобрения</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.paper}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" style={{height: 130}} src={frImg} waves />
                                <MDBCardBody>
                                    <MDBCardTitle className="indigo-text">Получить деньги</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                    </Grid>
                </div>
            </MDBContainer>
            <div className="bg_2">
                <MDBContainer>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>

                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: "22rem", textAlign: 'center' }}>
                                <h2  className="mt-5 pt-5 indigo-text font-weight-bolder">Преимущества</h2>
                                <p className="mt-5 indigo-text"><QueryBuilderIcon /> Сайт доступен 24/7</p> 
                                <p className="mt-5 indigo-text"><AccessibilityNewIcon /> Высокий процент одобрений</p> 
                                <p className="mt-5 indigo-text"><Forward5Icon /> Оформление за 5 минут</p> 
                                <p className="mt-5 indigo-text"><VerifiedUserIcon /> Полная безопасность</p> 
                                <NavLink to="/payment">
                                    <MDBBtn outline color="secondary" className="z-depth-3 mt-5" style={{ borderRadius: '50px' }}>Получить деньги</MDBBtn>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </MDBContainer>
            </div>
            <div>
                <MDBContainer>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} style={{ width: "22rem", textAlign: 'center' }}>
                                <h2 className="indigo-text font-weight-bolder">О сервисе</h2>
                                <p className="indigo-text">
                                    Мастер Займ представляет собой набор услуг, при помощи которых Вы можете получить разнообразные по размеру и сроку займы. Все услуги дистанционные, через сеть Интернет, круглосуточно, без выходных и праздничных дней. Эта возможность предоставляется Вам благодаря тому, что мы следим за работой нашего сервиса и стараемся наполнять его обновленными опциями, как можно чаще.
                                </p>
                                <p className="indigo-text">
                                    Внимание! Услуга обработки заявки является платной и может составлять — от 50 до 300 рублей.
                                </p>
                                <p className="indigo-text"> 
                                    Услуга далее по сайту — «Активация сервиса».
                                </p>
                                <p className="indigo-text">
                                    Активация сервиса не гарантирует Вам получение займа.
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="mt-5 mb-5">
                            <Grid item xs={12} sm={6} style={{ width: "22rem", textAlign: 'center' }}>
                                <img src={ssl} className="img-fluid"/>
                                <h3 className="text-center mt-4 indigo-text">Ваши данные защищены</h3>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: "22rem", textAlign: 'center' }}>
                                <img height="55" src={img2} className="img-fluid"/>
                                <h3 className="text-center mt-4 indigo-text mb-5 pb-5">Защищённое соединение</h3>
                            </Grid>
                        </Grid>
                        <h2 className="text-center indigo-text font-weight-bolder mt-5">Важная информация</h2>
                        <Grid container spacing={3} className="mt-5">
                            <Grid className="indigo-text" item xs={12} sm={6} style={{ width: "22rem" }}>
                                <p className="font-weight-bolder">Условия выдачи займа</p>
                                <p>Займы предоставляются на сумму от 1 000 до 50 000 рублей включительно на срок от 5 дней до 365 дней. Максимальная процентная ставка по займу составляет 0.98% в день, а минимальная 0.08%. Проценты за пользование займом составляют от 173,418 до 287,425 процентов годовых. Расчетная сумма (основной долг и проценты) к возврату от 20 000 до 202 400 рублей. Условия актуальны на 25.09.2018. Пример расчета общей стоимости займа: заем на 15 000 рублей и сроком 10 недель: процент за весь период составят 5 000 рублей. Итого: ПСК 264,392% Наш партнёр: Микрофинансовая компания ООО МФК "Займ Онлайн", Рег. номер в Государственном реестре микрофинансовых организаций: 2120177001838 от 31.05.2012</p>
                            </Grid>
                            <Grid className="indigo-text" item xs={12} sm={6} style={{ width: "22rem" }}>
                                <p className="font-weight-bolder">Невыплата займа или просрочки</p>
                                <p>В случае невозврата в условленный срок суммы кредита или суммы процентов за пользование заемными средствами кредитор вынуждено начислит штраф (пеня) за просрочку платежа. Большинство кредиторов идут на уступки и дают три дополнительных рабочих дня для оплаты. Они предусмотрены на случай, если банковский перевод, по каким-то причинам занял больше времени чем обычно. Однако, в случае неполучения от Вас какой-либо реакции в течении продолжительного времени, будет начислен штраф за просрочку срока погашения размером в среднем 0,10% от первоначальной суммы для займов, 0,03% от суммы задолженности в среднем для потребительских кредитов и кредитных карт. При несоблюдении Вами условий по погашению кредитов и займов, данные о Вас могут быть переданы в реестр должников или БКИ, что негативно может сказаться на Вашей кредитной истории и рейтинге кредитоспособности. Сервис Мастер Займ настоятельно рекомендует Вам вносить платеж в день получения напоминаний. Погашая задолженность в срок, Вы формируете хорошую кредитную историю, что повышает Ваш рейтинг кредитоспособности и шансы в дальнейшем получить кредит на более выгодных условиях.</p>
                            </Grid>
                        </Grid>
                    </div>
                </MDBContainer>
            </div>
        
            <MDBFooter color="indigo" className="font-small pt-4 mt-5">
                <MDBContainer  className="text-center">
                    <MDBRow>
                    Режим работы службы поддержки с 9:00 до 20:00 (МСК)
                    Услуги на проекте «Мастер Займ» оказываются ИП Видякин И.А. ОГРНИП 318222500070662, ИНН 220806481756 Проект осуществляет подбор микрозаймов между лицом желающим взять займ, и кредитными учреждениями которые на основании ФЗ «О потребительском кредите (займе)» от 21.12.2013 № 353-ФЗ имеет право осуществлять профессиональную деятельность по предоставлению потребительских займов. Проект не является финансовым учреждением, банком или кредитором, и не несёт ответственности за любые заключенные договоры кредитования или условия. Подписка на услугу обработки заявки является платной и составляет от 300р. помесячно, на срок 6 месяцев. Чтобы оформить заявку на получение займа, Вам необходимо пройти регистрацию и аутентификацию на проекте. Мы являемся операторами персональных данных (Номер 22-18-002297, 03.09.2018 Приказ № 283-нд) Сервис «Мастер Займ» использует куки для предоставления услуг. Условия хранения или доступа к куки Вы можете настроить в своём браузере. Сервис предназначен для лиц старше 18 лет. Расчет в калькуляторах на сайте основан на среднем показателе процентной ставки кредитов РФ. Расчет может значительно отличаться от реальной процентной ставки, которая будет предложена Вам финансовыми организациями.
                    Внимание! Услуга обработки заявки является платной и составляет — от 49 до 300 руб. в зависимости от стадии обработки заявки.
                    Услуга далее по сайту — «Активация сервиса».
                    Активация сервиса не гарантирует Вам получение займа.
                    © 2020 Все права защищены
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3 mt-4">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()}
                    </MDBContainer>
                </div>
            </MDBFooter>
        
        </div>
    </div>  
    )
}
