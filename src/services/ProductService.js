import apiClient from '../globals';

export default{
    getProductos(){
        return apiClient.get('/productos')
    },
    getProducto(id){
        return apiClient.get('/productos/' + id)
    },
    postProducto(producto){
        return apiClient.post('/productos', producto)
    },
    putProducto(producto){
        return apiClient.put('/productos/:id', producto)
    },
    deleteProducto(id){
        return apiClient.delete('/productos/:id')
    }
}