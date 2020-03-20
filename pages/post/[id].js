import Layout from '../../components/Layout';
import Title from '../../components/Title';
import fetch from 'isomorphic-unfetch';

const Post = (props) => {

    const { show } = props;
    const { name, summary, image } = show;

    const formattedSummary = summary;

    return (
        <Layout>
            {Title(name)}
            <p>{formattedSummary}</p>
            {image && <img src={image.medium} />}
        </Layout>
    );
};

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show}`);

    return { show };
};


export default Post;
