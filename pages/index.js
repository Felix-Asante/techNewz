import Layout from "../src/components/Layout";
import fs from "fs";
import path from "path";
export default function HomePage() {
	return (
		<Layout>
			<p>Tailwind</p>
		</Layout>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("pages/posts"));
	const post = files.map((filename) => {
		const slug = filename.replace(".md", " ");

		return {
			slug,
		};
	});
	console.log(post);
	return {
		props: {},
	};
}
