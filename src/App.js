import { List, Typography } from 'antd';
import { useList } from './context/list'
import CreateTask from './components/CreateTask';
import ListItem from './components/ListItem';

const { Title } = Typography;

function App() {
  const {list} = useList();
  const createdList = list.filter(item => !item.creating&&!item.completed);

  return (
    <div style={{width:'80%',maxWidth:'600px', margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <Title fontFamilyCode="'DM Sans'" style={{margin:'20px 0'}}>todo:</Title>
        {createdList.length ? <div style={{background:'#ff4d4f',color:'white',display:'inline-block',borderRadius:'6px',fontSize:'20px',fontWeight:'500',padding:'0 8px',height:'26px',lineHeight:'26px',textAlign:'center',marginLeft:'12px'}}>{createdList.length>99?'99+':createdList.length}</div> : ''}
      </div>
      <CreateTask />
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <ListItem index={item.id} item={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
