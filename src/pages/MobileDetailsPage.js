import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import MobileDetails from '../components/MobileDetails/MobileDetails'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class MobileDetailsPage extends Component {
       componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Mobile details"/>
                <PageTop pagetitle="Mobile Name"/>
                <MobileDetails/>
                <Footer/>

            </Fragment>
        )
    }
}
