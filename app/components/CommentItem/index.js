import React from 'react';
import {View} from 'react-native';
import {Images, BaseColor, useTheme} from '@config';
import {Text, Image, StarRating} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';

export default function CommentItem(props) {
  const {colors} = useTheme();
  const cardColor = colors.card;
  const {style, image, name, rate, date, title, comment} = props;
  return (
    <View style={[styles.contain, {backgroundColor: cardColor}, style]}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={styles.contentLeft}>
          {/* <Image source={image} style={[styles.thumb, {marginRight: 15}]} /> */}
          <View>
            <Text headline semibold numberOfLines={2}>
              {name}
            </Text>
          </View>
        </View>
        <View style={styles.contentRight}>
          <Text caption2 grayColor numberOfLines={1}>
            Rating {date}
          </Text>
        </View>
      </View>
      <View>
        <Text subhead semibold>
          {title}
        </Text>
        <Text
          body2
          grayColor
          style={{
            marginTop: 10,
          }}>
          {comment}
        </Text>
      </View>
    </View>
  );
}

CommentItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node,
  name: PropTypes.string,
  rate: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
};

CommentItem.defaultProps = {
  style: {},
  // image: Images.profile2,
  name: '',
  rate: 0,
  date: '',
  title: '',
  comment: '',
};
