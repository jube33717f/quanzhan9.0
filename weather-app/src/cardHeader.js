import React,{Component} from 'react'
import './weather.css';
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[{location:"FRANCE",degree:12,description:'cloudy',humidity:'67%',UVindex:'0(Low)'}]
        }
    }
    render(){
        return (
            <div className="header">
                <div className="header_img"></div>
                <div className="line1"></div>
                <h1>{this.state.data[0].location}</h1>
                <div className="line2"></div>
                <div className="header_img2"></div>
                
                <div className="header_degree">
                    <h1>{this.state.data[0].degree}</h1>
                    <div className="header_degree_round"></div>
                    <h3>{this.state.data[0].description}</h3>
                    <div className="header_degree_detail h_l">
                        <p>Humidity</p>
                        <p>{this.state.data[0].humidity}</p>
                    </div>
                    <div className="line3"></div>
                    <div className="header_degree_detail h_r">
                        <p>UV Index</p>
                        <p>{this.state.data[0].UVindex}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Header;