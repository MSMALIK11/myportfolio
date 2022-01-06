import React, { useEffect, useState } from 'react'
import '../style/recentwork/recentwork.scss'
import img1 from './workimages/img01.svg'
import img2 from './workimages/img02.svg'
import img3 from './workimages/img03.svg'
import img4 from './workimages/img04.svg'
import img5 from './workimages/img05.svg'
import img6 from './workimages/img06.svg'



const images= [
    {id:'1',imageName:img1, tag:'creative'  },
    {id:'2',imageName:img2, tag:'design'  },
    {id:'4',imageName:img3, tag:'trending'  },
    {id:'5',imageName:img6, tag:'business'  },
    {id:'6',imageName:img4, tag:'creative'  },
    {id:'7',imageName:img5, tag:'design'  },
 
   
  
   
  
];

const RecentWork = () => {

const [tag,setTag]= useState('all');
const [filterImage,setFilterImages]=useState([]);

useEffect(()=>{
    tag==='all'? setFilterImages(images): setFilterImages(images.filter(image=> image.tag===tag))

},[tag])


// custom button 
    const TagButton= ({name,handleSetTag,tagActive})=>{
        return <button className={`tag ${tagActive ? 'active':null}`} onClick={()=>handleSetTag(name)} >{name}</button>
    }

 

    return (
        <>
         
        <div className="work-wraper">
            <h1 className="work-title">recent <span className="text-info">works</span></h1>
  
        <div className="container">
            <div className="buttontag " handleSetTag={setTag} >
                <TagButton name="all" handleSetTag={setTag} tagActive={tag === 'all'? true:false} />
                <TagButton name="creative"  handleSetTag={setTag} tagActive={tag === 'creative'? true:false} />
                <TagButton name="business"  handleSetTag={setTag}  tagActive={tag === 'business'? true:false}/>
                <TagButton name="trending"  handleSetTag={setTag} tagActive={tag === 'trending'? true:false} />
                <TagButton name="design" handleSetTag={setTag}  tagActive={tag === 'design'? true:false}/>

            </div>
          
            {/* images render */}
            <div className=" row">
                {filterImage.map(image=>(
                    <div className="img-wraper col-sm-12 col-md-6 col-lg-4  mt-5" key={image.id}>
                  <div className="imgbox fadeIn">
                  <img src={image.imageName} alt="work-image"  className="img-thumbnail" /> 
               
                  </div>
                  
                    
                    </div>
                ))}
            </div>
                

        </div>

        </div>
         


         
        </>
        
          
    )
}

export default RecentWork
