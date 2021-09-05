import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import LaptopDetails from '../components/LaptopDetails/LaptopDetails'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class LaptopDetailsPage extends Component {
       componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Laptop Details"/>
                <PageTop pagetitle="Laptop Name"/>
                <LaptopDetails/>
                <Footer/>
                
            </Fragment>
        )
    }
}
