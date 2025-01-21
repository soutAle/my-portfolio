import '../styles/home.css'
import { CounterTestRedux } from '../components/CounterTestRedux.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <h1 className="text-3xl font-bold">Welcome to my portfolio</h1>
            <CounterTestRedux />
        </div>
    )
}

export default Home