import React from 'react';
import PaymentFioReduxForm from './PaymentFormFio';
import PaymentReduxForm from './PaymentForm';
import PaymentPasportReduxForm from './PaymentFormPasport';
import { connect } from 'react-redux';
import {setInfo, btnDisable} from '../../redux/payment-reducer';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBContainer } from 'mdbreact';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

const Payment = (props) => {

    function getSteps() {
        return ['Заполните ваши личные данные', 'Укажите адрес вашего места жительства', 'Заполните паспортные данные'];
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return <PaymentFioReduxForm onSubmit={onSubmit}/>;
          case 1:
            return <PaymentReduxForm onSubmit={onSubmit}/>;
          case 2:
            return <PaymentPasportReduxForm onSubmit={onSubmit}/>;
          default:
            return 'Unknown stepIndex';
        }
    }

    const onSubmit = (formData) => {
        props.setInfo(formData);
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    let count = 1

    const handleNext = (some) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        count++
        // console.log(some)
        if(count % 2 === 0){
            props.btnDisable()
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

  return (
      <MDBContainer className="mb-4">
          <Navbar />
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
            <div>
            {activeStep === steps.length ? (
                <div>
                <Typography className={classes.instructions}>Осталось заполнить форму банка</Typography>
                </div>
            ) : (
                <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                    <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                    >
                    Назад
                    </Button>
                    {props.infoReady.step ?
                    <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Дальше' : 'Дальше'}
                    </Button>
                    :
                    <Button variant="contained" color="primary" onClick={handleNext} disabled>
                    {activeStep === steps.length - 1 ? 'Дальше' : 'Дальше'}
                    </Button>
                    }
                </div>
                </div>
            )}
            </div>
        </div>

    </MDBContainer>
  );
}

const mapStateToProps = (state) => ({
    infoReady: state.paymentPage,
})

export default connect(mapStateToProps, {setInfo, btnDisable})(Payment)


