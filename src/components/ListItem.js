import { Spin, Typography } from 'antd';
import ToggleButton from './ToggleButton'
import DeleteButton from './DeleteButton'

const { Title } = Typography;

const Container = ({loading,children}) => loading?<Spin spinning={true} style={{width: '100%',}} wrapperClassName="spin-container">{children}</Spin>:<>{children}</>
const StatusContainer = ({completed,children}) => completed? <del>{children}</del>:<>{children}</>

const ListItem = ({index,item:{name,completed,updating,creating,deleting}={}}) => {
    return (
        <Container loading={creating||deleting}>
            <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{width:'100%',minWidth:'0',display:'flex',alignItems:'center'}}>
                    <ToggleButton index={index} completed={completed} updating={updating} />
                    <Title level={5} ellipsis style={{margin:'0 0 0 8px',textalign:'left'}}><StatusContainer completed={completed}>{name}</StatusContainer></Title>
                </div>
                <DeleteButton index={index} style={{flex:'1'}} />
            </div>
        </Container>
        )
}

export default ListItem