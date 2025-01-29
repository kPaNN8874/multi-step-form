import React, { useState } from 'react'
import styles from './MultiStepForm.module.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
const MultiStepForm = () => {
    const [step,setStep]=useState(1)
    const [selectedCat,setCat]=useState<string|undefined>()

    const nextStep =()=>{
        if (step<3) {setStep(step+1)}
    }
    const prevStep =()=>{
        if (step>1) {setStep(step-1)}
    }
    const changeChategory =(newChategory:string)=>{
        setCat(newChategory)
    }

  return (
    <div>
        <div className={styles.markers}>
            <div className={step==1?styles.selected:""}></div>
            <div className={step==2?styles.selected:""}></div>
            <div className={step==3?styles.selected:""}></div>   
        </div>
        <div className={styles.form}>
            {step == 1?<StepOne selectedCat={selectedCat} changeCategory/>:<></>}
            {step == 2?<StepTwo/>:<></>}
            {step == 3?<StepThree/>:<></>}
        </div>
        <div className={styles.buttons}>
            {step!=1 ? <button onClick={prevStep}>Prev</button>:<></>}
            {step!=3 ? <button onClick={nextStep}>Next</button>:<></>}
        </div>
            <button onClick={nextStep}>Next</button>
        </div>
  )
}

export default MultiStepForm

