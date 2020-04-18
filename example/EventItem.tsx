import React, { FC } from 'react';

import {
  Text,
  View,
} from 'react-native';

import { Event } from './types';

type IProps = {
  styles: any;
  taskId: Event['taskId'];
  timestamp: Event['timestamp'];
  isHeadless: Event['isHeadless'];
};

const EventItem: FC<IProps> = ({ styles, taskId, timestamp, isHeadless }: IProps) => {

  return (<View style={[styles.container, styles.borderBottom, styles.paddingTB10]}>
    <Text
      style={[styles.text, styles.blue]}
    >
      [{[taskId, isHeadless ? '[Headless]': ''].filter(Boolean).join('] [')}]
    </Text>
    <Text
      style={[styles.text]}
    >
      {timestamp}
    </Text>
  </View>);
}



export default EventItem;
