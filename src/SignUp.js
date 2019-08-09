import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import TextField from '@material-ui/core/TextField';
import FormButton from './modules/form/FormButton';

const styles = theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
});

class SignUp extends React.Component {
  state = {
    sent: false,
  };

  validate = values => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  handleSubmit = () => {
    console.log('Handle submit');
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/sign-in/" underline="always">
                Already have an account?
              </Link>
            </Typography>
          </React.Fragment>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" margin="normal" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                margin="normal"
                label="Last Name"
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal" />

          <FormButton
            className={classes.button}
            color="secondary"
            onClick={this.handleSubmit}
            fullWidth>
            {'Sign Up'}
          </FormButton>
        </AppForm>
        <AppFooter />
      </React.Fragment >
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);
}

export default compose(
  withRoot,
  withStyles(styles),
)(SignUp);
