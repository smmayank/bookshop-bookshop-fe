import React from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
};

const Header = () => (
    <div>
        <Link href="/">
            <a href="/" style={linkStyle}>
                Home
            </a>
        </Link>
        <Link href="/about">
            <a href="/about" style={linkStyle}>
                About
            </a>
        </Link>
    </div>
);

export default Header;
