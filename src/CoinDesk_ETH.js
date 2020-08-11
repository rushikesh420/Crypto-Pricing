import React, { Component } from 'react'
import { getEthereumPrice } from './Ethereum';

class Coindesk_ETH extends Component {
    state ={
        ethinfo: {},
        loading: true,
    };

    async componentDidMount(){
        const ethinfo = await getEthereumPrice();
        this.setState({
            ethinfo,
            loading:false,
        }, () => console.log(this.state),
        );
    }


    render(){
        return (
            <div>
                
            </div>
        );
    }
    }

export default Coindesk_ETH
