import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { notification } from 'antd';
import Contract from '../service/contract';
import { useUser } from './user'

const ListContext = createContext({});

export function ListProvider({children}) {
    const isLoading = useRef(false);
    const queue = useRef([]);
    const [list, setList] = useState([]);
    const { address } = useUser();
    const [api, contextHolder] = notification.useNotification();

    useEffect(()=>{
        if(!isLoading.current && queue.current.length) {
            console.log(isLoading.current,queue.current.length)
            const {type,name,id} = queue.current.shift();
            if(type === 'createTask') {
                createTask(name);
            } else if(type === 'toggleTaskStatus') {
                toggleTaskStatus(id);
            } else if(type === 'deleteTask') {
                deleteTask(id);
            }
        }
        console.log(queue.current)
    }, [list]);

    useEffect(() => {
        if(!address) return;
        Contract.methods.getList(address).call().then((result) => {
            const formattedList = result.map(({name,completed},index) => ({id:index,name,completed,updating:false,creating:false,deleting:false}))
            console.log(formattedList)
            setList(formattedList)
        });
    },[address]);
   
    const createTask = async(name) => { 
        if(!address) return;
        setList(prev => ([...prev,{id:prev.length,name,completed:false,updating:false,creating:true,deleting:false}]))
        if(isLoading.current) {
            return queue.current.push({type:'createTask',name});
        }

        isLoading.current = true;
        try {
            await Contract.methods.createTask(name).send({from: address})
            setList(prev => {
                prev[prev.length-1] = {...prev[prev.length-1],creating:false}
                return [...prev]
            })
            
        } catch (error) {
            setList(prev=>{
                const clone = [...prev]
                clone.pop();
                return clone;
            })
            if(error.message !== 'User declined to send the transaction') {
                api.error({
                    message: `Failed to create the task`,
                    description:
                      "We've encountered some issues while creating your task. Please try again later.",
                    placement: 'bottom',
                  });
            }
        }
        isLoading.current = false;
    }

    const toggleTaskStatus = async(id) => { 
        if(!address) return;
        if(isLoading.current) {
            return queue.current.push({type:'toggleTaskStatus',id});
        }

        isLoading.current = true;
        
        const updatedList = [...list]
        const index = updatedList.findIndex((item) => item.id === id);
        updatedList[index] = {...list[index],updating:true}
        setList(updatedList)
        try {
            await Contract.methods.updateTask(index).send({from: address})
            const updatedList = [...list]
            updatedList[index] = {...list[index],completed:!list[index].completed,updating:false}
            setList(updatedList)
        } catch (error) {
            updatedList[index] = {...list[index],updating:false}
            setList([...updatedList])
            if(error.message !== 'User declined to send the transaction') {
                api.error({
                    message: `Failed to update the task`,
                    description:
                      "We've encountered some issues while updating your task. Please try again later.",
                    placement: 'bottom',
                  });
            }
        }
        isLoading.current = false;
    }

    const deleteTask = async(id) => { 
        if(!address) return;
        if(isLoading.current) {
            return queue.current.push({type:'deleteTask',id});
        }

        isLoading.current = true;
        
        const updatedList = [...list]
        const index = updatedList.findIndex((item) => item.id === id);
        updatedList[index] = {...list[index],deleting:true}
        setList(updatedList)
        try {
            await Contract.methods.deleteTask(index).send({from: address})
            const updatedList = [...list]
            updatedList.splice(index, 1);
            setList(updatedList)
        } catch (error) {
            updatedList[index] = {...list[index],deleting:false}
            setList([...updatedList])
            if(error.message !== 'User declined to send the transaction') {
                api.error({
                    message: `Failed to delete the task`,
                    description:
                      "We've encountered some issues while deleting your task. Please try again later.",
                    placement: 'bottom',
                  });
            }
        }
        isLoading.current = false;
    }

    return (
      <ListContext.Provider value={{list,createTask,toggleTaskStatus,deleteTask}}>
        {children}
        {contextHolder}
      </ListContext.Provider>
    )
  }


export const useList = () => useContext(ListContext);