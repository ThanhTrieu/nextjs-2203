import Link from 'next/link'
import { Button } from 'antd'

const HomePage = () => {
    return (
        <>
            <h1> Hello word </h1>
            <Button type="primary"> Button </Button>
            <Link href='/posts/hoc-nextjs/123'> go to posts</Link>
        </>
    )
}
export default HomePage
