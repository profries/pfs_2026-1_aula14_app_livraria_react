import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListCardLivros from './components/ListCardLivros.tsx'
import FormLivros from './components/FormLivros.tsx'
import App from './App.tsx'
import Home from './components/Home.tsx'
import FormEditLivros from './components/FormEditLivros.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home></Home>} />
        <Route path="/livros" element={<ListCardLivros />} />
        <Route path="/novo" element={ <FormLivros /> } />
        <Route path='/edit/:id' element={<FormEditLivros />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

)
