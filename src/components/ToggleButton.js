import { CheckCircleOutlined, CheckCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { useList } from '../context/list'

const ToggleButton = ({index,completed,updating}) => {
    const { toggleTaskStatus } = useList();
  
    const toggle = () => {
        toggleTaskStatus(index);
    }

    if (updating) {
        return <LoadingOutlined style={{ fontSize: '28px', }}  />
    }
    
    return (
        <button style={{border:'none',background:'transparent',cursor:'pointer'}} onClick={toggle}>
            {completed ? <CheckCircleFilled style={{ fontSize: '28px', }} /> : <CheckCircleOutlined style={{ fontSize: '28px', }} />}
        </button>
    )
}

export default ToggleButton