import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputBasic, DateBasic } from '../common/FormControls/FormControls';
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

const PaymentFormPasport = ({handleSubmit, error}) => {
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
                                <Field component={InputBasic} validate={[required]} name='pasportNumber' label='Сер. и ном. паспорта'/>
                                <Field component={InputBasic} validate={[required]} name='pasportCode' label='Код подразделения'/>
                                <Field component={InputBasic} validate={[required]} name='departmentName' label='Кем выдан паспорт'/>
                                <Field component={InputBasic} validate={[required]} name='birthPlace' label='Место рождения'/>
                                <Field component={DateBasic} validate={[required]} name='pasportDate' label='Дата выдачи паспорта'/>
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

const PaymentPasportReduxForm = reduxForm({ form: 'pasport' })(PaymentFormPasport);

export default PaymentPasportReduxForm;