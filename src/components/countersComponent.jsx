import React, { Component } from 'react';
import Counter from './counterComponent';

class Counters extends Component {
    state = {  
        counters:[
            {id:1, value:1},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    handleRemove=(counterId)=>{
            
       let counters=this.state.counters.filter((c)=>c.id !=counterId);
       this.setState({counters});
    }
    
    // handleReset=()=>{
    //     let counters=this.state.counters.map((v)=>{
    //         v.value=0;
    //         return v;
    //     })
    //     this.setState.counters({counters});
    // }
    
    render() { 
        return (
					<div className="row">
                        <div className="col-md-4"></div>    
                        <div className="col-md-6">
						<button 
                        onClick={()=>this.handleReset}
                        className='btn btn-primary m-2'>Reset</button>
						{this.state.counters.map((counter) => (
							<Counter 
                            onDelete={this.handleRemove}
                            key={counter.id} id={counter.id} value={counter.value} />
						))}
					</div>
                    </div>    
				);
    }
    
}
 
export default Counters; 