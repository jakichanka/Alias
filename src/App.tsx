import { useRoutes } from "react-router-dom"
import { routes as routerList } from "./routes"

const App = () => {
	return useRoutes(routerList)
}

export default App
