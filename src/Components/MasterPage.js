import React from 'react';

import Form from "./Form";
import ListItems from "./ListItems";
import Navbar from "./Navbar";
import {ListItemDetailWithRouter} from "./ListItemDetail";


import {createBrowserHistory} from "history";
import {Router,Route,Switch} from 'react-router-dom';
import {routes} from '../Routes';


const history = createBrowserHistory()

const handlePageChange = (activePage) => {
    history.push(activePage)
}

function MasterPage() {
    return (
        <div>
            <Router history={history}>
                <Navbar/>
                <Switch>
                    <Route exact path={routes.main.path}>
                        <Form/>
                    </Route>
                    <Route exact path={routes.listItems.path}>
                        <ListItems handlePageChange={handlePageChange}/>
                    </Route>
                    <Route exact path={routes.listItemDetail.path}>
                        <ListItemDetailWithRouter />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MasterPage;