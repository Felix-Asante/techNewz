import Layout from "../../src/components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Post from "../../src/components/Post";
import sortByDate from "../../src/utils/index";
export default function HomePage({ posts }) {
	return (
		<Layout>
			<h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("pages/posts"));
	const posts = files.map((filename) => {
		const slug = filename.replace(".md", " ");
		const markdownWithMeta = fs.readFileSync(
			path.join("pages/posts", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: { posts: posts.sort(sortByDate) },
	};
}
