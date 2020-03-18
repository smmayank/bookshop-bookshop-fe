import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import List from '../components/List';
import Title from '../components/Title';

const posts = ['Hello Next.js', 'Learn Next.js is awesome', 'Hello Next.js'];

const Page = () => (
    <div>
        {Title('My Blog')}
        {List(posts.map((value, index) => <PostLink title={value} id={index} />))}
    </div>
);

export default Layout(Page);