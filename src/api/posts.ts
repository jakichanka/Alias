import axios from "axios";
import { useQuery } from "react-query";

export const usePosts = () => {
	return useQuery(
		"posts",
		async () => {
			const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
			return data;
		},
		{ enabled: false },
	);
};
