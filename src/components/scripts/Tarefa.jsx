import React from 'react'
import Botao from './Botao'
import '../css/Tarefa.css'

class Tarefa extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked: false,
            isDeleted:false,
            exclude: false
        }
    }

    checkClick(){
        if(this.state.isChecked)
            this.setState({
                isChecked:false
            })
        else
            this.setState({
                isChecked:true,
                isDeleted:false
            })
    }

    deleteClick(){
        if(this.state.isDeleted)
            this.setState({
                isDeleted:false
            })
        else
            this.setState({
                isDeleted:true,
                isChecked:false
            })
        setTimeout(() => this.setState({exclude: true}), 500)
    }

    render(){
        if(this.state.exclude) return null
        return (
            <div id="tarefa">
                <h3>{this.props.text}</h3>
                <Botao
                    name="Tarefa realizada"
                    imageURL="https://upload.wikimedia.org/wikipedia/commons/c/c2/Black_check.svg"
                    handleClick= {() => this.checkClick()}
                    cor = {this.state.isChecked ? "#02e619":null}
                />
                <Botao
                    name="Deletar tarefa"
                    imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Black_x.svg/896px-Black_x.svg.png"
                    handleClick= {() => this.deleteClick()}
                    cor = {this.state.isDeleted ? "#e6024a":null}
                />
            </div>
        )
    }
}

export default Tarefa
