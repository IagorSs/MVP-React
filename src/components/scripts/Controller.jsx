import Tarefa from './Tarefa'
import React from 'react'
import Botao from './Botao'
import '../css/Controller.css'

class Controller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tarefas: [<Tarefa text= "Arrumar a casa"/>],
            inputCapture: ""
        }

    }

    addTarefa() {
        if(this.state.inputCapture !== ""){
            this.setState({
                tarefas: this.state.tarefas.concat(<Tarefa text= {this.state.inputCapture}/> )
            })
        }
    }

    confereTarefas() {
    }

    render(){
        this.confereTarefas()

        const tarefas = this.state.tarefas.map((value, index) =>{
            return value ? (
                <div key={index}>
                    {this.state.tarefas[index]}
                </div>
            ): ""
            }
        )

        return (
            <div id="content">
                <h2>Tarefas para fazer</h2>
                <div id="tarefas">
                    {tarefas}
                </div>
                <div id="form">
                    <input type="text" onInput={(event) => {
                        this.setState({inputCapture: event.target.value})
                    }}/>
                    <Botao
                        name="Adicionar Tarefa"
                        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1200px-OOjs_UI_icon_add.svg.png"
                        handleClick= {() => this.addTarefa()}
                    />
                </div>
            </div>
        )
    }
}

export default Controller
