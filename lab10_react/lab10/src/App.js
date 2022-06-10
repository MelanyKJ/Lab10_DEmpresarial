import React , { useEffect, useState } from 'react';
import './App.css';
import {Route,Link,BrowserRouter as Router,Routes } from 'react-router-dom'
import Detalles from './detalles';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [productos,setProductos] = useState([])
  const url = "http://127.0.0.1:8000/productos/"
  const [todos,setTodos ] = useState()
  const fetchApi = async() =>{
    const response = await fetch(url)
    const responseJson = await response.json()
    setTodos(responseJson)
}
useEffect(() =>{
  fetchApi()
},[])
  return (
    <Router>
    <div className="App">
      <h1>Productos Registrados</h1><br/>
      {!todos ? 'Cargando Productos...' :
      todos.map((todo,index) =>{
        return (
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <div class="card h-100"><p><Link to ={`/detallesP/${todo.id}`}>{todo.descripcion}</Link></p>
                <center><img src={todo.imagen} width="200px"></img></center>
              </div>
            </div>
          </div>
        )
      })
    }
    </div>
    <Routes>
    <Route path ="/detalles/:id" element = {<Detalles/>}/>  
    </Routes>
    </Router>
  );
}
export default App;
/*import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    if (this.state.recuperado){
      return this.mostrarTabla()
    }else{
      return (<div>recuperando datos...</div>)
    }
  }
  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(prod => {
            return (
              <tr key={ prod.id}>
                <td>{ prod.id}</td>
                <td>{ prod.descripcion}</td>
                <td>{ prod.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false,
      recuperado: true
    }
  }
  componentWillMount() {
    fetch('http://localhost:8000/productos/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod })
      })    
  } 
}

export default App;
*/


