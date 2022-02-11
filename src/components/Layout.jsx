import React from "react";
import Head from "next/head";
import Header from "./Header";
export default function Layout({ title, children, keywords, description }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
			</Head>
			<Header />
			<main className="container mx-auto my-7">{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: "Welcome to DevSpace",
	keywords: "development,coding,programming",
	descriptions: "The best info and news in development",
};
