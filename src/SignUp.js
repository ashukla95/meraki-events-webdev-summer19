import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import TextField from '@material-ui/core/TextField';
import FormButton from './modules/form/FormButton';

import UserService from './APIServices/UserService';

const userService = UserService.getInstance();

const styles = theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
});

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        followers: [],
        following: [],
        events: []
      },
      redirect: false,
      loading: false
    };
  }

  handleSubmit = () => {
    if (this.state.firstName !== "" && this.state.lastName !== ""
      && this.state.username !== "" && this.state.password !== "") {
      this.setState({ ...this.state, loading: true });
      userService
        .createUser(this.state.profile)
        .then(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setState({ ...this.state, redirect: true })
        });
    }
  };

  handleFirstNameChange = (firstName) => {
    const profile = this.state.profile;
    profile.firstName = firstName;
    this.setState({ ...this.state, profile })
  }

  handleLastNameChange = (lastName) => {
    const profile = this.state.profile;
    profile.lastName = lastName;
    this.setState({ ...this.state, profile })
  }

  handleUsernameChange = (username) => {
    const profile = this.state.profile;
    profile.username = username;
    this.setState({ ...this.state, profile })
  }

  handlePasswordChange = (password) => {
    const profile = this.state.profile;
    profile.password = password;
    this.setState({ ...this.state, profile })
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {this.state.redirect && <Redirect to="/profile" />}
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Register
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/sign-in/" underline="always">
                Already have an account?
              </Link>
            </Typography>
          </React.Fragment>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} sm={6}>
              <TextField
                value={this.state.firstName}
                onChange={(evt) => this.handleFirstNameChange(evt.target.value)}
                fullWidth
                label="First Name"
                margin="normal" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={this.state.lastName}
                onChange={(evt) => this.handleLastNameChange(evt.target.value)}
                fullWidth
                required
                margin="normal"
                label="Last Name"
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            value={this.state.username}
            onChange={(evt) => this.handleUsernameChange(evt.target.value)}
            label="Username"
            margin="normal"
          />
          <TextField
            fullWidth
            value={this.state.password}
            type="password"
            onChange={(evt) => this.handlePasswordChange(evt.target.value)}
            label="Password"
            margin="normal" />

          <FormButton
            className={classes.button}
            color="secondary"
            onClick={this.handleSubmit}
            fullWidth>
            {this.state.loading ? 'Submitting' : 'Sign Up'}
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
