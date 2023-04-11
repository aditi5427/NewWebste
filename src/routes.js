import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages/HomePage'));
const AboutPage = lazy(() => import('./Pages/AboutPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const WorkPage = lazy(() => import('./Pages/WorkPage'));

function Routes() {
    return (
        <BrowserRouter>
            <Suspense>
                <Switch>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/works" element={<WorkPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />

                    <Route
                        path="*"
                        element={
                            <center>
                                <h1>Page Not Found</h1>
                            </center>
                        }
                    />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;