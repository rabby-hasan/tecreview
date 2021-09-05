import React, { Component } from 'react'
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Mobile from '../components/Mobile/Mobile';
import Accessories from '../components/Accessories/Accessories';
import Laptop from '../components/Laptop/Laptop';
import Footer from '../components/Footer/Footer';
export default class Homepage extends Component {
     componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                 <TopNavigation title="Home"/>
                 <TopBanner/>
                 <Mobile/>
                 <Laptop/>
                  <Accessories/>
                  <Footer/>
            </div>
        )
    }
}
