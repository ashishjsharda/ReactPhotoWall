import React,{Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts=[{
    id:"0",
    description:"Beautiful Landscape",
    imageLink:"https://www.marinareservation.com/articles/wp-content/uploads/2017/02/Tuscany-Italy-1024x576.jpg"
},
{
    id:"1",
    description:"Aliens",
    imageLink:"https://the1a.org/wp-content/uploads/sites/4/2017/05/9153767970_c287effc20_h-1500x844.jpg"
},
{
    id:"2",
    description:"On a vacation",
    imageLink:"https://www.timesheets.com/blog/wp-content/uploads/2017/02/42441407_m.jpg"
}
]
class Main extends Component{
    render(){
        return <div>
            <Title title={"PhotoWall"} />
            <PhotoWall posts={posts}/>
            </div>
    }
}
export default Main;