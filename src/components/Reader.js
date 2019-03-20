import React, { Component } from 'react';
import Wall from './Wall';

//Component with the form to catch and reader the data file .txt

class Reader extends Component {

    constructor(){
        super();
        this.state = {
           data : null
        }
    }

    render() {
        let fileReader;

        const saveData = (box) => {

            this.setState({
                data : box
            }, () => {
                //console.log(this.state);               
              });
            
        }

        const handleFileRead = (e) => {
            const content = fileReader.result;
            //console.log(content);

            //Blackmagic here

            if (content != null) {
                var vault = [];
            var lines = content.split('\n');
            var regc = new RegExp('"');
            lines.map(function(line) {                
                if (regc.test(line)) {
                    //console.log(line);
                    line = line.replace('"','');
                    var r1, r2, r3 = '';
                    var typ = 0;
                    var slash = line.split("/");
                    slash.map(function(inner,i) {
                       inner = inner.replace('"','').trim();
                       //console.log(i);
                       //console.log(inner);
                       switch (i) {
                        case 0:
                            if (inner.lenght !== 0) {
                              r1 = inner;
                            }
                          break;
                        case 1:
                            if (inner.lenght !== 0) {
                              r2 = inner;
                            }
                          break;                        
                        case 2:
                            if (inner.lenght !== 0) {
                              r3 = inner;
                            }
                          break;
                        default:
                          
                          break;
                      }

                    });
                    if (r1 !== "" && r2 !== "" && r3 !== "") {
                        typ = 3;
                    } else if (r1 !== "" && r2 !== "" && r3 === "") {
                        typ = 2;
                    } else if (r1 !== "" && r2 === "" && r3 === "") {
                        typ = 1;
                    } else {

                    }
                    
                    vault.push([r1.replace(/\D/g,''),r1.replace(/\d+/g, ''),r2.replace(/\D/g,''),r2.replace(/\d+/g, ''),r3.replace(/\D/g,''),r3.replace(/\d+/g, ''),typ]);
                                    

                    
                }
            });
            //console.log(vault);
            saveData(vault);
            }
            
            
            
        };

        const handleFileChosen = (file) => {
            fileReader = new FileReader();
            if (file != null) {
                fileReader.onloadend = handleFileRead;
                fileReader.readAsText(file);
            }            
        };

        return(
            <div className="container">
                <div className="">
                <div className="card">
                <form className="card-body">
                    <div className="formGroup">
                        <input
                            type="file"
                            id="file"
                            className="input-file"
                            accept=".txt"
                            onChange={e => handleFileChosen(e.target.files[0])}
                         />
                    </div>                   
                </form>
                </div>
                </div>
                <div className="">
                    <Wall propData={this.state}/>
                </div>
                
                
            </div>
            
            
        );

    }

}

export default Reader;