import React from 'react';
import propTypes from 'prop-types';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{

    handleChange=(e,key)=>{
       const fish=this.props.fishes[key];
       const ufish={
           ...fish,
           [e.target.name]:e.target.value
       }
       this.props.updateFish(key,ufish);
    };

    renderInventory=(key)=>{
        const fish=this.props.fishes[key];
        return(
            <div className="fish-edit" key={key}>
               <input name="name" value={fish.name} onChange={(e)=>{this.handleChange(e,key)}}  type="text" placeholder="Fish Name" required/>
               <input name="price" value={fish.price} onChange={(e)=>{this.handleChange(e,key)}} type="number" placeholder="Fish Price" required/>
               <select name="status" value={fish.status} onChange={(e)=>{this.handleChange(e,key)}} required>
                   <option value="available">Fresh</option>
                   <option value="unavailable">Sold Out</option>
               </select>
               <textarea name="desc" value={fish.desc} onChange={(e)=>{this.handleChange(e,key)}} placeholder="Fish Description" required/>
               <input name="image" value={fish.image} onChange={(e)=>{this.handleChange(e,key)}} type="text" placeholder="Image URL" required/>
               <button onClick={()=>{this.props.deleteFish(key)}}>Remove Fish</button>
            </div>
        )
    };

    render(){
        return (
        <div>
          <p>Inventory</p>
          {Object.keys(this.props.fishes).map(this.renderInventory)}
          <AddFishForm addFish={this.props.addFish}/>
          <button onClick={this.props.loadFish}>Load All Fish</button>
        </div>
        )
    }
    static propTypes={
        fishes:propTypes.object.isRequired,
        loadFish:propTypes.func.isRequired,
        addFish:propTypes.func.isRequired
    }
}

export default Inventory;