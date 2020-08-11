import React, { Component } from 'react'
import { getBitcoinPrice } from './Bitcoin';

class Coindesk extends Component {
    state ={
        bitcoininfo: {},
        loading: true,
    };

    async componentDidMount(){
        const bitcoininfo = await getBitcoinPrice();
        this.setState({
            bitcoininfo,
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

export default Coindesk
