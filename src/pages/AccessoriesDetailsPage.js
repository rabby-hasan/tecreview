import React, { Component, Fragment } from 'react'
import AccessoriesDetails from '../components/AccessoriesDetails/AccessoriesDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class AccessoriesDetailsPage extends Component {
       componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Accessories Details"/>
                <PageTop pagetitle="Accessories Name"/>
                <AccessoriesDetails/>
                <Footer/>
                
            </Fragment>
        )
    }
}
