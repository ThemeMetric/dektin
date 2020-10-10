import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import BlogDetails from '../pages/blogdetails/BlogDetails';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Home2 from '../pages/home/Home2';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home2" component={Home2} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/blogdetails" component={BlogDetails} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;
