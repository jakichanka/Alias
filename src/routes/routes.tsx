import { Rules, Welcome } from "~/pages";
import { WelcomeLayout } from "~/layouts";
import type { RouteObject } from "react-router-dom";
import { FormAntd } from "~/pages/Forms";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <WelcomeLayout />,
		children: [
			{ index: true, element: <Welcome /> },
			{ path: "formAntd", element: <FormAntd /> },
			{ path: "rules", element: <Rules /> },
		],
	},
];
