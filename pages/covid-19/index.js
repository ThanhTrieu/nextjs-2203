 import axios from 'axios';
 

 export default function Corona(props){
 	return (
 		<>
 			<h1>Covid</h1>
 			<p> Ca moi nhiem benh: {props.data.Global.NewConfirmed}</p>
 			<p> Tong ca da nhiem benh: {props.data.Global.TotalConfirmed}</p>

 			<table width="100%" border="1" cellSpacing="0" cellPadding="0">
 				<thead>
 					<tr>
 						<th>Quoc gia</th>
 						<th>Moi nhiem</th>
 						<th>Tong ca nhiem</th>
 						<th>Moi Tu vong</th>
 						<th>Tong ca tu vong</th>
 						<th>Moi khoi benh</th>
 						<th>Tong ca khoi benh</th>
 					</tr>
 				</thead>
 				<tbody>
 				{props.data.Countries.map((item, index) => (
 						<tr key={index}>
 							<td>{item['Country']}</td>
 						</tr>
 				))}
 				</tbody>
 			</table>
 		</>
 	)
 }

 // call data:  https://api.covid19api.com/summary
 export async function getStaticProps() {
 	const url = `https://api.covid19api.com/summary`;
 	const res = await axios.get(url);
 	const rest = res.status === 200 ? res.data : {}
 	return {
 		props: { data: rest }
 	}
 }