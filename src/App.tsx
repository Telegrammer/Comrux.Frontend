import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./home-page"
import { UserPage } from "./user-page"
import type React from "react"

export const App: React.FC = () => {
    return <BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="user/:id" element={<UserPage />} />
		</Routes>
	</BrowserRouter>
}

