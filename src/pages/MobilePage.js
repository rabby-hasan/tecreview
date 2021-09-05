import React, { Component, Fragment } from 'react'
import AllMobile from '../components/AllMobile/AllMobile'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class MobilePage extends Component {
     componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Mobile"/>
                <PageTop pagetitle="Mobile Phone"/>
                <AllMobile/>
                <Footer/>
            </Fragment>
        )
    }
}
