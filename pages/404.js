import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/Layout";
export default function NotFound() {
	return (
		<Layout title="Page not found">
			<div className="flex flex-col items-center mt-20">
				<Image
					src="/images/logo.png"
					width={70}
					height={70}
					className="bg-gray-800 rounded-2xl"
				/>
				<h1 className="text-6xl my-5">Whoop !</h1>
				<h1 className="text-4xl text-gray-400 mb-5">
					This page does not exist
				</h1>
			</div>
		</Layout>
	);
}
