import Link from 'next/link';

const PostLink = ({ id, title, key }) => (
    <li key={key}>
        <Link href='/post/[id]' as={`/post/${id}`}>
            <a>{title}</a>
        </Link>
    </li>
);

export default PostLink;
