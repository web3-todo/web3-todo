import { DeleteOutlined } from '@ant-design/icons';
import { useList } from '../context/list'

const DeleteButton = ({index,style}) => {
    const { deleteTask } = useList();
  
    const toggle = () => {
        deleteTask(index);
    }
    
    return (
        <button style={{border:'none',background:'transparent',cursor:'pointer',...style}} onClick={toggle}>
            <DeleteOutlined style={{ fontSize: '18px', color:'rgba(0,0,0,.55)' }} />
        </button>
    )
}

export default DeleteButton