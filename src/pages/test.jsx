import { useState } from "react"
export default function  Test(){

    const[count , setCount] = useState(0)
    const[status, setStatus] = useState("🌞")

    return(
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-[400px] h-[300px] shadow-2xl flex items-center justify-center ">
                <button className="w-[100px] h-[50px] bg-red-600"
                onClick ={()=>{
                    setCount(count-1)
                }}>
                    decrement
                </button>
                <h1 className="w-[100px] h-[50px] text-[30px] text-center">{count}</h1>
                <button className="w-[100px] h-[50px] bg-blue-600" 
                onClick={()=>{
                    setCount(count+1)
                }}>
                    Increment
                </button>
            </div>
            <div className="w-[400px] h-[300px] shadow-2xl flex items-center justify-center flex-col">
                <span className="h-[30px] text-2xl font-bold">
                    {status}
                </span>
                <div className="w-full h-[50px] ">
                    <button className="w-[100px] text-white h-full bg-red-600" 
                    onClick={
                        ()=>{
                            setStatus("🌑")
                        }
                    }>Off</button>
                    <button className="w-[100px] text-white h-full bg-green-600"
                    onClick={
                        ()=>{
                            setStatus("🌞")
                        }
                    }>On</button>
                </div>
            </div>
        </div>
    )

}