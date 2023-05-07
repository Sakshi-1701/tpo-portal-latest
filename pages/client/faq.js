import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import RowFAQ from '../components/RowFAQ';
import Header from '../components/Header';

import { withAuth } from '../../apiConfig/withAuth';

export default function FAQTable({faqs}) {
    return (
        <TableContainer component={Paper}>
        <Header tabname={"FAQ"} />
            <Table aria-label="collapsible table">
                <TableBody>
                    {faqs.map((faq) => (
                        <RowFAQ key={faq.id} faq={faq} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export async function getServerSideProps() {
    const response = await fetch('http://localhost:5000/faqs');
    const faqs = await response.json();
    // console.log(faqs)
    return { props: { faqs } };
}