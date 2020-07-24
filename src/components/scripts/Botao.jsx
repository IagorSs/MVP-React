import React from 'react'
import '../css/Botao.css'

class Botao extends React.Component {

    render(){
        return (
            <input
                type="image"
                id="botao"
                alt= {this.props.name}
                src= {this.props.imageURL}
                onClick= { () => this.props.handleClick() }
                style= { { "backgroundColor": this.props.cor } }
            />
        )
    }
}

export default Botao
