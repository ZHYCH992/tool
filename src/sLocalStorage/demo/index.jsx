import { Button, Input, Space, notification } from 'antd';
import { useRef, useState } from 'react';
import { sLocalStorage } from 'stoolchain';
export default () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (title, description) => {
    api.info({
      message: title,
      description: description,
      placement: 'top',
    });
  };
  const keyInput = useRef(null);
  const valueInput = useRef(null);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  return (
    <Space direction="column">
      {contextHolder}
      <Space>
        key:
        <Input
          type="text"
          ref={keyInput}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        value:
        <Input
          type="text"
          ref={valueInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={() => {
            if (key === '' || value === '') {
              openNotification('添加失败', '请输入key、value');
              return;
            }
            sLocalStorage.set(key, value);
            openNotification('添加成功', `key:${key},value为： ${value}`);
            setKey('');
            setValue('');
          }}
        >
          添加
        </Button>
      </Space>
      <Button
        onClick={() => {
          if (key === '') {
            openNotification('请输入key！');
            return;
          }
          openNotification(
            '获取成功',
            `key:${key},value:  ${sLocalStorage.get(key)}`,
          );
          setKey('');
          setValue('');
        }}
      >
        获取
      </Button>
      <Button
        onClick={() => {
          if (key === '') {
            openNotification('请输入key！');
            return;
          }
          sLocalStorage.remove(key);
          openNotification('删除成功');
          setKey('');
          setValue('');
        }}
      >
        删除
      </Button>
    </Space>
  );
};
