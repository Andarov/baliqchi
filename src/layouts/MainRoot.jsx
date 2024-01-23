import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainRoot = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainRoot;