import React from 'react'
import Products from './components/Products';
import data from './data.json'
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        products: data.products,
        size: "",
        sort: "",
      };
    }

product-component
  render (){
=======
// feature 1
import React from 'react'

function App() {
 main
  return (
    <div className="grid-container">
      <header>
      <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className='main'>
            <Products products={this.state.products}></Products>
            </div>  
          <div className='sidebar'> Cart Items </div>

        </div>
        
      </main>
      <footer>
        Created by Annie
      </footer>
    </div>
  );
  }
}

export default App;
