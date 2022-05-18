import React,{ Component } from 'react';
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



