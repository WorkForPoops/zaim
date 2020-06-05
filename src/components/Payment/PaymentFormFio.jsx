import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputBasic, Accept } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MDBContainer } from 'mdbreact';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const PaymentFormFio = ({handleSubmit, error}) => {
    const classes = useStyles();
    const errorStyle = {
        color: 'red'
    }
    return (
        <MDBContainer>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            {/* <h1>Укажите адрес Вашего места жительства</h1> */}
                            <form onSubmit={handleSubmit}>
                                <Field component={InputBasic} validate={[required]} name='firstName' label='Имя'/>
                                <Field component={InputBasic} validate={[required]} name='lastName' label='Фамилия'/>
                                <Field component={InputBasic} validate={[required]} name='patronymic' label='Отчество'/>
                                <Field component={InputBasic} validate={[required]} name='phone' label='Номер телефона'/>
                                <Field component={InputBasic} validate={[required]} name='email' label='email'/>
                                <p className="mt-4">Даю согласие на обработку персональных данных и получение материалов рекламного характера (Email и SMS рассылка), а также я согласен с договором публичной оферты, с пунктом 8.2 настоящего договора оферты и политикой обработки персональных данных. Для Активации сервиса будет списан 1 рубль, дальнейшее использование сервиса будет проходит по рекуррентными оплатам в соответсвии с тарифами сервиса от 49 до 300 рублей, с подпиской сроком 6 месяцев согласен.</p>
                                <Field component={Accept} validate={[required]} name='accept' label='Принять'/>
                                
                                
                                <div>
                                    <button style={{backgroundColor: 'white', border: 1+'px solid black',borderRadius: 50+'px', padding: 5+'px', marginTop: 15+'px'}}>Подтвердить</button>
                                </div>
                                {error && <p style={errorStyle}>{error}</p>}
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </MDBContainer>
  );
}

const PaymentFioReduxForm = reduxForm({ form: 'fio' })(PaymentFormFio);

export default PaymentFioReduxForm;