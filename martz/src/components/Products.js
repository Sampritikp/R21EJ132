import React,{components} from 'react'
import './mystyle.css'

  class Products extends components {
    constructor()
    {
        super()
        this.state = {
            Products : 'Earbuds1'
                   
        }
    }
    details()
    {
        this.setState({
            details:'productName : Earbuds1'
        })
    }
    render(){
        return (
            <div>
              <h1 className = 'heading'>AMZ- Earphone</h1>
              <p>
                    <h3> Products</h3>
                    <button onClick ={()=>"this.details()"}>Earbuds1</button>
                    <button>Earbuds2</button>
                    <button>Earbuds3</button>
                    <h3> {this.state.details}</h3>
              </p>
            </div> 
          )
    }
  
}
export default Products 
