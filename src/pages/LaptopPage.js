import React, { Component,Fragment } from 'react'
import AllLaptop from '../components/AllLaptop/AllLaptop'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class LaptopPage extends Component {
     componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Laptop"/>
                <PageTop pagetitle="Laptop"/>
                <AllLaptop/>
                <Footer/>
            </Fragment>
        )
    }
}
