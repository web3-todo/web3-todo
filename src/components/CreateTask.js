import { Button, Input } from 'antd';
import { useState } from 'react';
import { useList } from '../context/list'
import { useUser } from '../context/user'

const CreateTask = () => {
    const [value, setValue] = useState('');
    const { createTask } = useList();
    const { address } = useUser();
   
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleCreate = () => {
        setValue('')
        createTask(value);
    };

    return (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'30px'}}>
            <Input style={{marginRight:'20px'}} value={value} onChange={handleChange} />
            <Button disabled={!value||!address} onClick={handleCreate}>Create a Task</Button>
        </div>
    );
};

export default CreateTask;

