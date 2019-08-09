import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
// import { Field, Form } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
// import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

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

class SignIn extends React.Component {
  state = {
    sent: false,
  };

  validate = values => {
    console.log(values)
    const errors = required(['email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  handleSubmit = () => {
    console.log('Handling submit');
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign In
            </Typography>
            <Typography variant="body2" align="center">
              {'Not a member yet? '}
              <Link href="/sign-up/" align="center" underline="always">
                Sign Up here
              </Link>
            </Typography>
          </React.Fragment>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <AccountCircle />
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <TextField fullWidth id="input-with-icon-grid" label="Username" margin="normal" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <Lock />
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <TextField fullWidth id="input-with-icon-grid" label="Password" margin="normal" />
                </Grid>
              </Grid>
            </Grid>
            <FormButton
              className={classes.button}
              size="large"
              color="secondary"
              fullWidth>
              {'Sign In'}
            </FormButton>
          </Grid>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);
}

export default compose(
  withRoot,
  withStyles(styles),
)(SignIn);
