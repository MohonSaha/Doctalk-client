import React from 'react';
import AdminNavbar from '../pages/Shared/AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminDashboardLayout;