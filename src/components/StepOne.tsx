import React, { useState } from 'react'
import styles from "./StepOne.module.css"

const StepOne = (props:{selectedCat:string|undefined,
                        changeCategory:(newCategory : string)=>void
}) => {

const [selectedCat,setCat]=useState<string|undefined>()


  return (
   <> 
    <button onClick={()=>props.changeCategory("A")} className={selectedCat=="A"? styles.selected :""}></button>
    <button onClick={()=>props.changeCategory("B")} className={selectedCat=="B"? styles.selected :""}></button>
    <button onClick={()=>props.changeCategory("C")} className={selectedCat=="C"? styles.selected :""}></button>
   </>
  )

}
export default StepOne
