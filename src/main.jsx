import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux';
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

