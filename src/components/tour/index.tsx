import React, {cloneElement, CSSProperties, FC, PropsWithChildren, useEffect, useState} from 'react';
import { View } from '@tarojs/components';
import { createSelectorQuery } from '@tarojs/taro';
import cs from "classnames"
import './index.scss';

interface TourProps extends PropsWithChildren {
  selector: string;
  show: boolean;
  className?: string;
  onClose?: () => void;
  style?: CSSProperties;
}
export const Tour: FC<TourProps> = props => {
  const { children, selector, show, onClose, style, className } = props;
  const [opacity, setOpacity] = useState(0)
  const [offset, setOffset] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  });
  const cloneChild = cloneElement(children);
  useEffect(() => {
    if (show) {
      createSelectorQuery()
        .select(selector)
        .boundingClientRect(rect => {
          setOffset(rect);
          requestAnimationFrame(() => {
            setOpacity(1)
          })
        })
        .exec();
    }
  }, [show]);
  return (
    <>
      {children}
      {show && <View style={{opacity}} className={cs('tour')} onClick={onClose}>
        <View className={cs('tourItemBox', className)} style={{ ...style, ...offset }}>
          {cloneChild}
        </View>
      </View>}
    </>
  );
};
