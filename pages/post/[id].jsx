import fetch from 'isomorphic-unfetch';
import React from 'react';
import PropType from 'prop-types';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

const Post = (props) => {
    const { show } = props;
    const { name, summary, image } = show;
    const formattedSummary = summary.split(/<\/?p>/gm).join('\n');
    return (
        <Layout>
            {Title(name)}
            {formattedSummary}
            {image && <img alt={name} src={image.medium} />}
        </Layout>
    );
};

Post.getInitialProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    return { show };
};

Post.propTypes = {
    show: PropType.shape({
        name: PropType.string.isRequired,
        summary: PropType.string.isRequired,
        image: PropType.shape({
            medium: PropType.string.isRequired,
        }),
    }).isRequired,
};

export default Post;
