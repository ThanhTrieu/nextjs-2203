import Link from 'next/link'
import { Button } from 'antd'
import LayoutComponent from '../../components/layout'

const HomePage = () => {
    return (
        <>
            <h1> Hello word </h1>
            <Button type="primary"> Button </Button>
            <Link href='/posts/hoc-nextjs/123'> go to posts</Link>
        </>
    )
}
HomePage.getLayout = function getLayout(page) {
    return (
        <LayoutComponent>
            {page}
        </LayoutComponent>
    )
}
export default HomePage

