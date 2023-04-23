import { List, Typography } from 'antd';
import { useList } from './context/list'
import CreateTask from './components/CreateTask';
import ListItem from './components/ListItem';
import { useMemo } from 'react';

const { Title } = Typography;

function App() {
  const {list} = useList();
  const createdList = list.filter(item => !item.creating&&!item.completed);
  const sortedList = useMemo(()=>[...list].sort((a,b) => a.completed-b.completed),[list])

  return (
    <div style={{width:'80%',maxWidth:'600px', margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <Title style={{margin:'20px 0'}}>todo:</Title>
        {createdList.length ? <div style={{border:'solid 2px #ff4d4f',color:'#ff4d4f',display:'inline-block',borderRadius:'6px',fontSize:'16px',fontWeight:'500',padding:createdList.length>99?'0 8px':'0',width:createdList.length>99?'unset':'26px',height:'26px',lineHeight:'22px',textAlign:'center',marginLeft:'12px'}}>{createdList.length>99?'99+':createdList.length}</div> : ''}
      </div>
      <CreateTask />
      <List
        itemLayout="horizontal"
        dataSource={sortedList}
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
