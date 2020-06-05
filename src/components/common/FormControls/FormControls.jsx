import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const InputBasic = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div>
                {hasError ? <TextField {...input} {...props}
                error
                label="Ошибка"
                helperText={meta.error}
                /> : <TextField {...input} {...props}/>}
            </div>
        </div>
    )
}

export const DateBasic = ({input, meta, ...props}) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div>
                {hasError ? <TextField {...input} {...props}
                error
                label="Error"
                helperText={meta.error}
                /> : 
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        {...input}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Дата рождения"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                }
            </div>
        </div>
    )
} 

export const Accept = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
      return(
          <FormControlLabel
              className="mt-2"
              control={
                  <Checkbox
                  {...input}
                  value=""
                  color="primary"
                  />
              }
              label={props.label} 
          />
      )
}