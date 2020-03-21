import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import PostLink from '../components/PostLink';
import Title from '../components/Title';

const Page = (props) => {
    const { shows } = props;
    const links = shows.map((value) => (
        <PostLink title={value.name} id={value.id} />
    ));
    return (
        <Layout>
            {Title('Batman TV Shows')}
            {List(links)}
        </Layout>
    );
};

Page.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const entries = await res.json();
    return {
        shows: entries.map((entry) => entry.show),
    };
};

Page.propTypes = {
    shows: PropTypes.arrayOf({ value: PropTypes.object.isRequired }).isRequired,
};

export default Page;
