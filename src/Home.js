import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import UserService from './APIServices/UserService';
const userService = UserService.getInstance();

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0
    }
    userService
      .getTotalUsers()
      .then(totalUsers => this.setState({ userCount: totalUsers.length }));
  }

  render() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProductHero users={this.state.userCount} />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />
      </React.Fragment>
    );
  }
}


export default withRoot(Index);
