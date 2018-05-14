import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
    </BrowserRouter>
)
export default AppRouter