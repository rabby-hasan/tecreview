import React, { Component, Fragment } from 'react'
import TermsCondition from '../components/TermsCondition/TermsCondition'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class TermsPage extends Component {
     componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsCondition/>
                <Footer/>
            </Fragment>
        )
    }
}
