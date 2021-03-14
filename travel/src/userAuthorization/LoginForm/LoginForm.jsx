import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, Button, Box,
} from '@material-ui/core';
import { Form } from 'react-final-form';
import { TextFieldInput } from '../TextFieldInput';

export const LoginForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({
      handleSubmit, invalid, submitting, form,
    }) => (
      <form onSubmit={(e) => handleSubmit(e).then(form.reset)}>

        <Box>
          <FormControl margin="normal">
            <TextFieldInput name="login" />
          </FormControl>
        </Box>
        <Box>
          <FormControl margin="normal">
            <TextFieldInput name="password" />
          </FormControl>
        </Box>

        <Button color="primary" variant="contained" type="submit" disabled={invalid || submitting}>Submit</Button>

      </form>
    )}
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
