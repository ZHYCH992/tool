import { Button, List, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'stoolchain';
import './index.less';

let delay = 3000;
let buttonDebounce = null;
let buttonDelay = delay;

export default () => {
  const [data, setData] = useState([]);
  const log = useRef(null);
  useEffect(() => {
    console.log(log, log.current);
    // log.current.scrollTo(0, log.current.innerHeight);
  }, []);
  return (
    <Space direction="vertical" block>
      <Space className="buttonBar">
        <Button
          type="primary"
          onClick={() =>
            debounce({
              fn: () => setData([...data, '防抖函数已执行']),
              wait: delay,
            })
          }
        >
          防抖函数
        </Button>
        <Button onClick={() => setData([...data, '普通按钮已执行'])}>
          普通按钮
        </Button>
      </Space>
      <List ref={log} style={{ height: '300px', overflow: 'auto' }}>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Space>
  );
};
