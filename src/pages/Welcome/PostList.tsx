import type { FC } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IProps {
	delay: number;
	content: string;
	idx: number;
}

export const PostItem: FC<IProps> = ({ delay, content, idx }) => {
	const ref = useRef<HTMLDivElement>(null);

	const animate = () => {
		gsap.fromTo(
			ref.current,
			{ xPercent: idx % 2 === 0 ? -100 : 100, opacity: 0 },
			{ xPercent: 0, opacity: 1, delay: delay },
		);
	};

	useEffect(() => {
		animate();
	});

	return (
		<div
			ref={ref}
			style={{
				textAlign: "center",
				backgroundColor: "red",
				filter: `brightness(${0.5 + (idx % 2) === 0 ? idx / 100 : idx / 5})`,
			}}
		>
			{content}
		</div>
	);
};
