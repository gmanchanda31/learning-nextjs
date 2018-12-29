import React from 'react';
import Link from "next/link";
import Router from 'next/router';

const indexPage = () => (
    <div>
        <h1>The index page</h1>
        <p>Click here to go to <Link href="/auth"><a>Auth</a></Link> page.</p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
    </div>
);

export default indexPage;