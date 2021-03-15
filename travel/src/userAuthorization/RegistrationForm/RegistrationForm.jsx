import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, Button, Box, InputAdornment, Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Form } from 'react-final-form';
import { TextFieldInput } from '../TextFieldInput';
import { TextFieldPassword } from '../TextFieldPassword';
import { minLengthValidation } from '../formValidation';

export const RegistrationForm = ({ onSubmit }) => (
  <Box>
    <Typography variant="h5" component="h2">Registration</Typography>
    <Form onSubmit={onSubmit}>
      {({
        handleSubmit, invalid, submitting, form,
      }) => (

        <form onSubmit={(e) => handleSubmit(e).then(form.reset)}>
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

          {/* TO_DO: add field for uploading user photo */}

          <Box my={1}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={invalid || submitting}
            >
              Register
            </Button>
          </Box>

        </form>
      )}

    </Form>
  </Box>

);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
