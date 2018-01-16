import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import Footer from './Footer'
import ProfilePage from '../../../../pages/ProfilePage'
import AdsStatPage from '../../../../pages/AdsStatPage'
import DashboardPage from '../../../../pages/DashboardPage'
import AdsPage from '../../../../pages/AdsPage'
import AdsDetailPage from '../../../../pages/AdsDetailPage'
import AffiliateEarning from '../../../ads/components/ads/AffiliateEarning'
import PublishADsPage from '../../../../pages/PublishADsPage'
import FacebookPagesPage from '../../../../pages/FacebookPages'

const AppLayout = () => {

  return (
    <div>
      <HeaderLayout />

      <Route path="/ads" exact component={AffiliateEarning} />

      <div className="container">
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Switch>
          <Route path="/ads/:id" component={AdsDetailPage} />
          <Route path="/ads" component={AdsPage} />
        </Switch>
        <Route path="/ads-stat" exact component={AdsStatPage} />
        <Route path="/publish-ads" exact component={PublishADsPage} />
        <Route path="/facebook-pages" component={FacebookPagesPage} />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
