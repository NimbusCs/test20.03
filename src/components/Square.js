import React, { Component } from 'react';

import Table from 'react-bootstrap/Table'

class Square extends Component {
    render (){
        const title = this.props.title;
        return (<Table striped bordered hover variant="dark">
                    
                                <thead>
                                <tr><h3>{title}</h3></tr>
                                  <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Código Padre</th>
                                    <th>Descripción Padre</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>    
                                </tbody>
                              </Table>)
    }
}

export default Square;