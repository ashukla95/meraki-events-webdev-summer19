import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import UserService from './APIServices/UserService';

const userService = UserService.getInstance();

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

  constructor() {
    super();
    this.state = {
      profile: {
        username: "",
        password: ""
      },
      redirect: false,
      loading: false
    }
  }

  handleSubmit = () => {
    this.setState({ ...this.state, loading: true })
    userService
      .login(this.state.profile.username, this.state.profile.password)
      .then(user => {
        console.log(user, 'login response')
        if (user !== undefined) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setState({ ...this.state, redirect: true })
        }
        else {
          alert('Username or password incorrect.');
        }
      });
  };

  handleUsernameChange = (username) => {
    let profile = this.state.profile;
    profile.username = username;
    this.setState({ ...this.state, profile })
  }

  handlePasswordChange = (password) => {
    let profile = this.state.profile;
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
              Login
            </Typography>
            <Typography variant="body2" align="center">
              {'Not a member yet? '}
              <Link href="/sign-up/" align="center" underline="always">
                Register here
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
                  <TextField
                    value={this.state.profile.username}
                    onChange={(evt) => this.handleUsernameChange(evt.target.value)}
                    fullWidth
                    label="Username"
                    margin="normal" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <Lock />
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <TextField
                    value={this.state.profile.password}
                    onChange={(evt) => this.handlePasswordChange(evt.target.value)}
                    fullWidth
                    type="password"
                    label="Password"
                    margin="normal" />
                </Grid>
              </Grid>
            </Grid>
            <FormButton
              className={classes.button}
              onClick={this.handleSubmit}
              size="large"
              color="secondary"
              fullWidth>
              {this.state.loading ? 'Submiting' : 'Sign In'}
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
