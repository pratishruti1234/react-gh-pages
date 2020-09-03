import React,{Component} from 'react';
import axios from 'axios';
export default class Country extends React.Component{
    constructor(){
        super();
        this.state={
            arr : []
        };
    }
    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all")
        .then((posRes)=>{
            this.setState({
                  arr : posRes.data
            })
        },(errRes)=>{
            console.log(errRes);

        });

    };
    render(){
        return(
            <div>
                <table border="1" cellPadding="10px" cellPadding="10px" align="center">
                    <thead style={{backgroundColor:"red"}}>
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>CAPITAL</th>
                            
                            <th>POPULATION</th>
                            <th>FLAG</th>
                        </tr>
                         </thead>
                    <tbody>
                    {this.state.arr.map((element,index)=>(
                            <tr key={index} >
                        <td>{index+1}</td>
                        <td>{element.name}</td>
                        <td>{element.capital}</td>
                        
                        <td>{element.population}</td>
                        <td><img  width="100px" height="100px" src={element.flag}></img></td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
};