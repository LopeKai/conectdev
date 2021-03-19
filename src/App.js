import React from 'react'
import './index.css'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //aqui eu uma biblioteca react router que eu instalei,ele serve pra roteador as rotas da minha pagina. como minha é uma pagina SPA,entao quadno eu clicar em um qualquer botao ou link ele vai me mandar para outra pagina.

import theme from './theme'
import Home from './pages/Home'
import SignIn from './pages/SingIn'

function App() {
    return(
        <ThemeProvider theme={theme}>
            <BrowserRouter> {/* esse react router eu to fazendo todo o controle de rotas da minha pagina web */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="*" element={<h1>Not found 404!</h1>} /> {/* caso entra em uma rota que nao existe eu vou imprimi esse h1 */}
                </Routes>
            </BrowserRouter>
            {/* {
                url === 'http://localhost:3000/' 
                ? <Home /> 
                :
                <SignIn />
            } */}

        </ThemeProvider>
    )
}

export default App

