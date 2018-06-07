import React, { Component } from 'react';
import '../burgerStyles/burgerTable.css';

let INGREDIENTS = [
	{item: "salad", price: "10"},
	{item: "bacon", price: "50"},
	{item: "cheese", price: "30"},
	{item: "meat", price: "60"}
	];

class BurgerIngredients extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
			saladCount:0,
			baconCount:0,
			cheeseCount:0,
			meatCount:0,
			saladCost:0,
			baconCost:0,
			cheeseCost:0,
			meatCost:0,
			total:0
		}

	 }
  updateCounter = (count, item, incdec, cost, price, total) => {
  	if(incdec === "increase") {
  		this.setState({ [item]: count + 1},
  						()=>{
  						this.setState({ [price]: this.state[item]*cost});
  						this.setState({ [total]: this.state[total]+});
  						});
  		
  	} else {
  		if([count]<=0) { 			
  			this.setState({ [price]:[count] });
  		} else {
  			this.setState({ [item]: count - 1,
  						 	[price]: (count-1)*cost},
  						 	()=> {
							this.setState({ [total]: total-price});
  						 	});
  		}
  	}
  }

  getItems = (items) =>  {
  	let itemsList = [];
		items.map((menu) => {
			itemsList.push(
				<tr>
					<td>{menu.item}</td>
					<td>{menu.price}</td>
					<td><button 
									className='btnCounter'
									onClick={() => this.updateCounter(this.state[menu.item+"Count"],menu.item+"Count", "increase",menu.price,menu.item+"Cost","total")}>+</button></td>
					<td><button
									className='btnCounter'
									disabled={!this.state[menu.item+"Count"]}
									onClick={() => this.updateCounter(this.state[menu.item+"Count"],menu.item+"Count", "decrease",menu.price,menu.item+"Cost","total")}>-</button></td>
					<td>{this.state[menu.item+"Count"]}</td>
					<td>{this.state[menu.item+"Cost"]}</td>
				</tr>
				)
		})
		return itemsList;
  }

inc = () => {
	this.setState({ saladCount: this.saladCount + 1 });
	alert(this.saladCount);
}

	render() {
		const items = this.getItems(INGREDIENTS);
	return(
		<div>
		<div className="burgerDiv">
        <img src={require('../images/burger.png')} className="burgerImg" alt="logo" />
      </div>
		<table className="BurgerTable">
			<thead>
			<tr>
				<th>Items</th>
				<th>price</th
>				<th>Add</th>
				<th>Remove</th>
				<th>Count</th>
				<th>Total</th>
			</tr>
			</thead>
			<tbody>
					{items}
						{/*<td><button onClick={() => this.updateCounter(this.state.saladCount, "saladCount", "increase")}>+</button></td>
				<td><button onClick={() => this.updateCounter(this.state.saladCount, "saladCount", "decrease")}>-</button></td>
				<td>{this.state.saladCount}</td>*/
			/*<tr>
				<td>Bacon</td>
				<td><button onClick={() => this.updateCounter(this.state.baconCount, "baconCount", "increase")}>+</button></td>
				<td><button onClick={() => this.updateCounter(this.state.baconCount, "baconCount", "decrease")}>-</button></td>
				<td>{this.state.baconCount}</td>
			</tr>
			<tr>
				<td>Cheese</td>
				<td><button onClick={() => this.updateCounter(this.state.cheeseCount, "cheeseCount", "increase")}>+</button></td>
				<td><button onClick={() => this.updateCounter(this.state.cheeseCount, "cheeseCount", "decrease")}>-</button></td>
				<td>{this.state.cheeseCount}</td>			
			</tr>
			<tr>
				<td>Meat</td>
				<td><button onClick={() => this.updateCounter(this.state.meatCount, "meatCount", "increase")}>+</button></td>
				<td><button onClick={() => this.updateCounter(this.state.meatCount, "meatCount", "decrease")}>-</button></td>
				<td>{this.state.meatCount}</td>
			</tr>*/}
			<tr>
				<td colspan="5">Total price of your order <button>order</button> </td>
				<td>{this.state.total}</td>
			</tr>
			</tbody>
		</table>	
	</div>
		)
	}
}

export default BurgerIngredients