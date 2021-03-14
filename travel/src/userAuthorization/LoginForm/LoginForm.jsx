import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, Button, Box, InputAdornment,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Form } from 'react-final-form';
import { TextFieldInput } from '../TextFieldInput';
import { TextFieldPassword } from '../TextFieldPassword';

export const LoginForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({
      handleSubmit, invalid, submitting, form,
    }) => (
      <form onSubmit={(e) => handleSubmit(e).then(form.reset)}>

        <Box>
          <FormControl margin="normal">
            <TextFieldInput
              name="login"
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
          <Button color="primary" variant="contained" type="submit" disabled={invalid || submitting}>Submit</Button>
        </Box>

      </form>
    )}
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
