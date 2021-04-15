import React, { useState } from 'react';
import { useRouter } from 'next/router';
import EditarNegocio from '../../../components/backend/EditarNegocio';
import Layout from '../../../components/backend/Layout';

const EditNegocio = () => {
    const router = useRouter();
    const { query: { id } } = router;

    return (
        <Layout>
            <div className="page-body">
                <EditarNegocio></EditarNegocio>
            </div>
        </Layout>
    );
}
export default EditNegocio;