import { FC, useRef } from "react";
import { gsap } from "gsap";
import { usePosts } from "~/api";
import { PostItem } from "~/pages/Welcome/PostList";

export const Welcome: FC = () => {
	const resultsRef = useRef<any>(null);
	const { isLoading, isError, data, refetch } = usePosts();

	const animateTo = () => {
		gsap.to(resultsRef.current, { opacity: 0.3, x: 300 });
	};

	const animateBack = () => {
		gsap.fromTo(resultsRef.current, { opacity: 0.3, x: 300 }, { opacity: 1, x: 0 });
	};

	const getData = async () => {
		if (!data) {
			animateTo();
			await refetch();
			animateBack();
		} else {
			await refetch();
		}
	};

	return (
		<div>
			<button onClick={getData}>Fetch results</button>
			<div ref={resultsRef}>
				{isLoading ? (
					<div>Loading</div>
				) : isError ? (
					<div>Error: </div>
				) : (
					data &&
					data.map(({ title }: any, idx: number) => (
						<div key={idx}>
							<PostItem delay={idx / 50} content={title} idx={idx} />
						</div>
					))
				)}
			</div>
		</div>
	);
};
