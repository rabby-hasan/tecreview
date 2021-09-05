import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Privacy from '../components/Privacy/Privacy'
export default class PrivacyPage extends Component {
     componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                  <TopNavigation title="Privacy Policy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <Privacy/>
                <Footer/>
            </Fragment>
        )
    }
}
