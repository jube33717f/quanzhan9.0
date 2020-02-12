import React,{Component} from 'react'
import './weather.css';
class WeatherFor extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data : [{weekday:'Mon' , icon: '💧', degree: 9, description:'raining'},{weekday:'TUE' , icon: '🌞', degree: 15, description:'sunny'},{weekday:'WED' , icon: '🌥', degree: 11, description:'cloudy'},{weekday:'THU' , icon: '🌩', degree: 7, description:'lightening'},{weekday:'FRI' , icon: '🌞', degree: 18, description:'sunny'}]
        } 
    }
    render(){
        return (
            <div className="weeklyWeather">

                {this.state.data.map((item,index)=><div key={index} className="weeklyWeather_forecast">
                    <h1>{item.weekday}</h1>
                    <div className="weathericon">{item.icon}</div>
                    <h2>{item.degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{item.description}</p>
                </div>
                )}
                 {/* <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[0].weekday}</h1>
                    <div className="weathericon">{this.state.data[0].icon}</div>
                    <h2>{this.state.data[0].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[0].description}</p>
                </div>
                <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[1].weekday}</h1>
                    <div className="weathericon">{this.state.data[1].icon}</div>
                    <h2>{this.state.data[1].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[1].description}</p>
                </div>
                <div className="weeklyWeather_forecast">
                    <h1>{this.state.data[2].weekday}</h1>
                    <div className="weathericon">{this.state.data[2].icon}</div>
                    <h2>{this.state.data[2].degree}</h2>
                    <div className="degreeicon"></div>
                    <p>{this.state.data[2].description}</p>
                </div> */}
                
                
            </div>
        )
    }
}
export default WeatherFor;