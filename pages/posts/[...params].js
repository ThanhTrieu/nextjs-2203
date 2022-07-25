import { useRouter } from 'next/router'

const DetailPost = () => {
	const router = useRouter();
	const params = router.query;
	console.log(params);
	return (
		<h1> detail post </h1>
	)
}
export default DetailPost;