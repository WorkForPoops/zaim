import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function SliderRage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };


  const [valueDay, setValueDay] = React.useState(5);

  const handleSliderChangeDay = (event, newValue) => {
    setValueDay(newValue);
  };

  const handleInputChangeDay = (event) => {
    setValueDay(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlurDay = () => {
    if (valueDay < 5) {
      setValueDay(5);
    } else if (valueDay > 100) {
      setValueDay(100);
    }
  };

  return (
    <div  className="mt-5">
      <Grid container>
      <Grid item xs={12} sm={6}>
      <div className={classes.root}>
      
        <Typography id="input-slider" gutterBottom>
          Сумма займа
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountBalanceWalletIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Сумма займа
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <EventIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof valueDay === 'number' ? valueDay : 5}
            onChange={handleSliderChangeDay}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={valueDay}
            margin="dense"
            onChange={handleInputChangeDay}
            onBlur={handleBlurDay}
            inputProps={{
              step: 10,
              min: 5,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>

    </div>
    <p>{value + valueDay} руб.</p>
    </Grid>
    </Grid>
  </div>
  );
}
