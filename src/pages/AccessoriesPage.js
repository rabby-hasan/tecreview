import React, { Component, Fragment } from 'react'
import AllAccessories from '../components/AllAccessories/AllAccessories'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
export default class AccessoriesPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                   <TopNavigation title="Accessories"/>
                <PageTop pagetitle="Accessories"/>
                <AllAccessories/>
                <Footer/>
            </Fragment>
        )
    }
}
