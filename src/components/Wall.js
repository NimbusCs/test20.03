import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Wall extends Component {    

    render() {
        const op = this.props.propData
        //console.log(op);        
        var ar1 = [];
        var ar2 = [];
        var ar3 = [];

        if (op["data"] != null) {
            op["data"].map(function(obj) {
                switch (obj[6]) {
                    case 1:
                        ar1.push(obj);
                    break;
                    case 2:
                        ar2.push(obj);
                    break;
                    case 3:
                        ar3.push(obj);
                    break;
                
                    default:
                        break;
                }
            })
        }
        console.log(ar1);
        console.log(ar2);
        console.log(ar3);

        const List1 = (list) => {
            if (!list) {
              return null;
            }
            
            return (
                <tbody>
                {list.map((item,i) => <tr key = {i}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                    </tr> )}
                </tbody>
            );
          }

          const List2 = (list) => {
            if (!list) {
              return null;
            }
            
            return (
                <tbody>
                {list.map((item,i) => <tr key = {i}>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                    </tr> )}
                </tbody>
            );
          }

          const List3 = (list) => {
            if (!list) {
              return null;
            }
            
            return (
                <tbody>
                {list.map((item,i) => <tr key = {i}>
                                        <td>{item[4]}</td>
                                        <td>{item[5]}</td>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                    </tr> )}
                </tbody>
            );
          }
        
        
        return(
            <div className="Wall">
                <Table striped bordered hover variant="dark">
                                
                                <thead>
                                <tr><h3>Departamento</h3></tr>
                                  <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Código Padre</th>
                                    <th>Descripción Padre</th>
                                  </tr>
                                </thead>                                
                                
                                {List1(ar1)}
                                     
                                
                </Table>
                <Table striped bordered hover variant="dark">
                                
                                <thead>
                                <tr><h3>Provincia</h3></tr>
                                  <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Código Padre</th>
                                    <th>Descripción Padre</th>
                                  </tr>
                                </thead>
                                {List2(ar2)}
                </Table>
                <Table striped bordered hover variant="dark">
                                
                                <thead>
                                <tr><h3>Distrito</h3></tr>
                                  <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Código Padre</th>
                                    <th>Descripción Padre</th>
                                  </tr>
                                </thead>
                                {List3(ar3)}
                </Table>                
            </div>
        );
    }

}

export default Wall;