import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputBasic } from '../common/FormControls/FormControls';
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

const PaymentForm = ({handleSubmit, error}) => {
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
                                <Field component={InputBasic} validate={[required]} name='region' label='Регион'/>
                                <Field component={InputBasic} validate={[required]} name='city' label='Город'/>
                                <Field component={InputBasic} validate={[required]} name='street' label='Улица'/>
                                <Field component={InputBasic} validate={[required]} name='house' label='Дом'/>
                                <Field component={InputBasic} validate={[required]} name='flat' label='Квартира'/>
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

const LoginReduxForm = reduxForm({ form: 'login' })(PaymentForm);

export default LoginReduxForm;