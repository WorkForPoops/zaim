import React from "react";
import '../../App.css'
import Navbar from "../Navbar/Navbar";
import SliderRage from "../Slider/Slider";
import { MDBContainer } from "mdbreact";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import fImg from '../../assets/images/fisrtImg.png'
import sImg from '../../assets/images/secondImg.png'
import tImg from '../../assets/images/thirdImg.png'
import frImg from '../../assets/images/fourImg.png'
import Demo from "../Test/Test";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 150 + 'px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className="homeBg">
            <MDBContainer>
                <Navbar />
                <h1 className="purple-text mt-5 pt-3">Быстрые займы <span className="font-weight-bolder">для всех</span></h1>
                <h5 className="orange-text font-weight-bolder">Первый займ на карту под 0%</h5>
                <h5 className="orange-text font-weight-bolder">За 5 минут по паспорту</h5>
                <SliderRage />
                <MDBBtn outline color="secondary" className="z-depth-3" style={{ borderRadius: '50px' }}>Получить деньги</MDBBtn>

                {/* <Demo /> */}

                {/* <div className={classes.root}>
                    <h2 className="text-center font-weight-bolder indigo-text">4 шага до получения денег</h2>
                    <Grid className="mt-5" container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" src={fImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Выбрать сумму и срок</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" src={sImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Заполнить анкету</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" src={tImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Дождаться одобрения</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MDBCard style={{ width: "22rem", alignItems: 'center' }} className="z-depth-0">
                                <MDBCardImage className="img-fluid text-center" src={frImg} waves />
                                <MDBCardBody>
                                <MDBCardTitle className="indigo-text">Получить деньги</MDBCardTitle>
                                <MDBCardText>
                                    Some text
                                </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                    </Grid>
                </div> */}

            </MDBContainer>
        </div>
    )
}