import { type } from 'os';
import React from 'react';
import { useState } from 'react'
import Task from '../components/task'
type listData = {
    id: number,
    text: string
}
function ToDoList() {
    const [curTask, setCurTask] = useState<string>('')
    const [list, setList] = useState<listData[]>([])
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {

    }
    const onChangeCallBack = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }
    const addList = () => {
        setList([
            
            {
                id: list.length + 1,
                text: curTask

            },
            ...list
        ])
        setCurTask('')
    }
    console.log(curTask)
    return (
        <div>

            {/* header section */}
            <div className='flex justify-center items-end space-x-2'>
                <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
                <span className='text-gray-400 italic my-2 text-xl'>by Rom Saejao 630610755</span>
            </div>

            {/* todo section */}
            <div className='mx-auto max-w-4xl'>

                {/* task input and add button */}
                <div className='flex space-x-1'>
                    <input className='border border-gray-400 w-full text-2xl'
                        onKeyDown={onKeyDownCallback} onChange={onChangeCallBack}></input>
                    <button className='border border-gray-400 w-8 font-bold' onClick={addList}>+</button>

                </div>

                {/* tasks section */}
                <div>

                    {/* task example */}
                    {/* Please convert this into a task component */}
                    <div>{list.map((text) => (
                            <Task key={text.id} text={text.text}></Task>
                        ))}</div>
                    

                    {/* another task example */}

                </div>
            </div>

            {/* footer section */}
            <p className='text-center text-gray-400'> Copyright © 2021 </p>
        </div>
    )

}
export default ToDoList