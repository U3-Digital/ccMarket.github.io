import React, { useState } from 'react';
import { useRouter } from 'next/router';
import EditAdmin from '../../../components/backend/EditarAdmin';
import Layout from '../../../components/backend/Layout';

const editAdmin = () => {
    const router = useRouter();
    const { query: { id }} = router;

    return (
        <Layout>
            <div className="page-body">
                <EditAdmin/>
            </div>
        </Layout>
    )
};

export default editAdmin;