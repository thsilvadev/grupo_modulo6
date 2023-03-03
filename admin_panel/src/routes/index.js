import { Routes, Route} from 'react-router-dom';
import Ingressos from '../pages/Ingressos'
import PostarIngresso from '../pages/PostarIngresso';
import PostarProduto from '../pages/PostarProduto';
import Produtos from '../pages/Produtos'
import EditProduto from '../pages/EditProduto'
import EditIngresso from '../pages/EditIngresso'
import EditPedido from '../pages/EditPedido';


function AppRoutes () {

    return (
        <Routes>
        <Route path="/" exact element={<Ingressos />} />

        <Route path="/produtos" element={<Produtos />}/>
        <Route path='/editProduto/:id' element={<EditProduto/>} />
        <Route path='/editIngresso/:id' element={<EditIngresso/>} />
        <Route path='/editPedido/:id' element={<EditPedido />} />
        <Route path="/postIngresso" element={<PostarIngresso />} />
        <Route path="postProduto" element={<PostarProduto />} />
    </Routes>
    )
}


export default AppRoutes;