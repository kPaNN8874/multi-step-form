import React, { useState } from 'react'
import styles from "./StepOne.module.css"

const StepOne = (props:{selectedCat:string|undefined,
                        changeCategory:(newCategory : string)=>void
}) => {

const [selectedCat,setCat]=useState<string|undefined>()


  return (
   <> 
    <button onClick={()=>props.changeCategory("A")} className={selectedCat=="A"? styles.selected :""}>A</button>
    <button onClick={()=>props.changeCategory("B")} className={selectedCat=="B"? styles.selected :""}>B</button>
    <button onClick={()=>props.changeCategory("C")} className={selectedCat=="C"? styles.selected :""}>C</button>
   </>
  )

}
export default StepOne
