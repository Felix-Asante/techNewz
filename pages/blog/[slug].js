import fs from "fs";
import path from "path";

import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../src/components/Layout";
import CategoryLabel from "../../src/components/CategoryLabel";
export default function Slug({
	frontmatter: { title, category, date, cover_image, author, author_image },
	content,
	slug,
}) {
	return (
		<Layout title={title}>
			<Link href="/blog">Go Back</Link>
			<div className="w-full px-10 py-6 bg-white rounded-lg shadow md mt-6">
				<div className="flex justify-between items center mt-4">
					<h1 className="text-5xl mb-4">{title}</h1>
					<CategoryLabel>{category}</CategoryLabel>
				</div>
				<img src={cover_image} alt={author} className="w-full rounded" />

				<div className="flex justify-between items-center bg-gray-100 p-2 my-8">
					<div className="flex items-center">
						<img
							src={author_image}
							alt={author}
							className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
						/>
						<h4>{author}</h4>
					</div>
					<div className="mr-4">{date}</div>
				</div>

				<div className="blog-text mt-2">
					<ReactMarkdown>{content}</ReactMarkdown>
				</div>
			</div>
		</Layout>
	);
}
export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("pages/posts"));
	const paths = files.map((filename) => {
		const slug = filename.replace(".md", " ");

		return {
			params: {
				slug,
			},
		};
	});
	return {
		paths,
		// !@TODO : CHANGE TO FALSE
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("pages/posts", slug + ".md"),
		"utf-8"
	);
	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: { frontmatter, content, slug },
	};
}
