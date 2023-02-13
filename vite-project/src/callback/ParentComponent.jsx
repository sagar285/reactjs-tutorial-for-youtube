import React,{useState,useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

const ParentComponent = () => {
    const [age, setage] = useState(20)
    const [salary, setsalary] = useState(20000)

    const incrementage =useCallback(()=>{
        setage(age+1);
    },[age])
    const incrementsalary =useCallback(()=>{
        setsalary(salary+1);
    },[salary])

  return (
    <>
    
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleclick ={incrementage}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleclick ={incrementsalary}>Increment salary</Button>
    </div>
    </>
  )
}

export default ParentComponent