import style from './style.module.css';

export const pageHeader: HeaderData = {
	title: "Home"
}

export default function Home() {
	return (
		<div class={style.home}>
			<h1>Get Started Building PWAs with Preact-CLI</h1>
			<section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					link="https://preactjs.com/tutorial/"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, check out our docs for where Preact differs"
					link="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Preact-CLI"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="https://github.com/preactjs/preact-cli#preact-cli--"
				/>
			</section>
		</div>
	);
}

interface ResourceProps {
	title: string;
	description: string;
	link: string;
}

function Resource(props: ResourceProps) {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
