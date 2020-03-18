import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Title from '../components/Title'

const Page = () => {
    const router = useRouter();
    return (
        <div>
            {Title(`Request ${router.query.id}`)}
            <p>This is the blog post content.</p>
        </div>

    );
};

export default Layout(Page);
