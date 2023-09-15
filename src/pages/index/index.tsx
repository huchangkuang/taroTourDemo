import { View } from '@tarojs/components';
import { Tour } from '@/components/tour';
import { useState } from 'react';
import './index.scss';

export default function Index() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <View className='index'>
      <View className='card'>
        <View onClick={() => setShow(true)}>点此展示tour组件1</View>
        <View onClick={() => setShow2(true)}>点此展示tour组件2</View>
      </View>
      <View className='card'>
        <Tour selector='#hello' show={show} onClose={() => setShow(false)} style={{background: "unset"}}>
          <View id='hello'>test11111</View>
        </Tour>
        <View>Hello world!</View>
      </View>
      <View className='card'>
        <Tour selector='#test2' show={show2} onClose={() => setShow2(false)}>
          <View id='test2'>test222222</View>
        </Tour>
        <View>Hello world!</View>
      </View>
    </View>
  );
}
