import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FormControl, Button, Box, InputAdornment, Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Form } from 'react-final-form';
import { TextFieldInput } from '../TextFieldInput';
import { TextFieldPassword } from '../TextFieldPassword';
import { minLengthValidation } from '../formValidation';

export const LoginForm = ({ onSubmit }) => {
  const history = useHistory();

  return (
    <Box>
      <Typography variant="h5" component="h2">Log in</Typography>
      <Form onSubmit={onSubmit}>
        {({
          handleSubmit, invalid, submitting, form,
        }) => (

          <form onSubmit={(e) => handleSubmit(e).then(form.reset && history.push('/'))}>
            <Box>
              <FormControl margin="normal">
                <TextFieldInput
                  name="login"
                  validate={minLengthValidation(4)}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box mx={1.5}>
                          <AccountCircle />
                        </Box>

                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl margin="normal">
                <TextFieldPassword />
              </FormControl>
            </Box>

            <Box my={1}>
              <Button color="primary" variant="contained" type="submit" disabled={invalid || submitting}>Log in</Button>
            </Box>

          </form>
        )}
      </Form>

    </Box>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
