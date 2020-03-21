import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const PostLink = ({ id, title }) => (
    <li key={id}>
        <Link href="/post/[id]" as={`/post/${id}`}>
            {title}
        </Link>
    </li>
);

PostLink.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default PostLink;
