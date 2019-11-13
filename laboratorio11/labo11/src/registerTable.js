import React, {Component} from "react";

class RegisterTable extends Component{
    render(){
        let rows = this.props.list,map(elemet =>{
            return (
                <RegisterRow
                    key = {element._id}
                    student = {element}
                    onDelete = {()=>{
                        this.props.onDelete(element)
                    }}
                />
            )
        })
        return(
            <div>
                <table className= "table table-hover" >
                    <thead>
                    <tr className = "table table-hover">
                    <th scope="col">carnet</th>
                    <th scope="col">Horario de laboratorio</th>
                    <th scope="col">hora de ingreso</th>
                    <th scope="col">tarde?</th>
                    <th scope="col">eliminar</th>
                    </tr>
                    </thead>
                  <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default RegisterTable;