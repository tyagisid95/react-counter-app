import React, { Component } from "react";
class Counter extends Component {
	state = { count: this.props.value, };
	render() {
		console.log("child component", this.props);
        //parent Component Counters to Counter 
		return (
			<div>
                
				<span className={this.setBadgeColor()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className='btn btn-secondary btn-sm m-2'>
					Increment
				</button>
				<button
					onClick={this.handleDecrement}
					className='btn btn-warning btn-sm m-2'>
					Decrement
				</button>

                <button
				    	onClick={()=>this.props.onDelete(this.props.id)}
					className='btn btn-danger btn-sm m-2'>
					Remove
				</button>
			</div>
		);
	}
     handleReset=()=>{
        let counters=this.state.counters.map((v)=>{
            v.value=0;
            return v;
        })
        this.setState.counters({counters});
    }
	handleDecrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	setBadgeColor() {
		let { count } = this.state;
		let color = "badge m-2 badge-";
		color += count === 0 ? "warning" : "primary";
		return (this.setState.badgeColor = color);
	}
	formatCount() {
		let { count } = this.state;

		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
