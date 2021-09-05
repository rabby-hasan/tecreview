import React, { Component,Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/Homepage'
import PrivacyPage from '../pages/PrivacyPage'
import TermsPage from '../pages/TermsPage'
import MobilePage from '../pages/MobilePage'
import LaptopPage from '../pages/LaptopPage'
import AccessoriesPage from '../pages/AccessoriesPage'
import MobileDetailsPage from '../pages/MobileDetailsPage'
import LaptopDetailsPage from '../pages/LaptopDetailsPage'
import AccessoriesDetailsPage from '../pages/AccessoriesDetailsPage'


export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/mobile" component={MobilePage}/>
                    <Route exact path="/laptop" component={LaptopPage}/>
                    <Route exact path="/accessories" component={AccessoriesPage}/>
                    <Route exact path="/privacy policy" component={PrivacyPage}/>
                    <Route exact path="/terms & condition" component={TermsPage}/>
                    <Route exact path="/mobileDetails" component={MobileDetailsPage}/>
                    <Route exact path="/laptopDetails" component={LaptopDetailsPage}/>
                    <Route exact path="/accessoriesDetails" component={AccessoriesDetailsPage}/>


                    


                </Switch>
            </Fragment>
        )
    }
}
