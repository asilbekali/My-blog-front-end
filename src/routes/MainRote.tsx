import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'

const MainRote = () => {
    return (
        <>
            <Routes>
                <Route path="/NotFound" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default MainRote