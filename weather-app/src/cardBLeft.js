import React,{Component} from 'react'
import './weather.css';
class TwitterFeed extends Component{
    constructor(props){
        super(props)
        this.state={
            location:'France',
            twitter:[{propho:"👩‍🚀",content:"Do not forget your umbrella forever! "},{propho:"👩‍🎨",content:"Amazing weather in France!"}]
        }
    }

    render(){
        return (
            <div className="card_b_left">
                
                <div className="twitterTitle"><div className="twitterlogo"></div><h3>Twitter Feed <span>📍{this.state.location}</span></h3></div>
                {this.state.twitter.map(
                    (item,index)=><div key={index} className="twitterContent">
                        <div className="prophoto">{item.propho}</div>
                        <div className="prophoto_content">{item.content}</div>
                    </div>
                )}
                <div className="next">N E X T <div className="nexticon"></div></div>
                <div className="card_b_line"></div>
            </div>
        )
    }
}
export default TwitterFeed;