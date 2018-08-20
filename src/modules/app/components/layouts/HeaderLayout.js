import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import LeftHeaderSection from '../../../ads/components/ads-detail/LeftHeaderSection'

const HeaderLayout = () => {

  return (
    <Switch>
      <Route path="/ads/:id" render={props => {
        return <Header title="รายละเอียดโฆษณา" leftSection={LeftHeaderSection} />
      }} />

      <Route path="/ads" render={props => {
        return <Header title="โฆษณา" />
      }} />

      <Route path="/profile" render={props => {
        return <Header title="โปรไฟล์" />
      }} />

      <Route path="/facebook-pages" render={props => {
        return <Header title="เฟซบุคเพจ" />
      }} />

      <Route render={props => {
        return <Header />
      }} />
    </Switch>
  )
}

export default HeaderLayout
