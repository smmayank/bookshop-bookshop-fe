import Link from 'next/link';

const PostLink = ({ id, title }) => (
    <li>
        <Link href={`/post?id=${id}`}>
            <a>{title}</a>
        </Link>
    </li>
);

export default PostLink;