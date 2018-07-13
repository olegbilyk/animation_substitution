import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'react-emotion'
import {
  Wrapper,
  Arrow,
  arrowRevert,
  arrowRed,
  arrowGreen,
  Content,
  contentOverlay,
  ContentLeft,
  ContentLine,
  contentLineTop,
  contentLineBottom,
  ContentRight,
  Text,
  animOpacity,
  defaultAnimStyle,
  startAnimStyle,
} from './style'

function AnimationSubstitution({ startAnim }) {
  return (
    <Wrapper className={startAnim ? startAnimStyle : defaultAnimStyle}>
      <Content>
        <ContentLeft>
          <ContentLine className={cx(contentLineTop, contentOverlay)}>
            <Arrow className={arrowRed} />
            <Text className={animOpacity}>
              <strong>23. Pione Sisto</strong>
            </Text>
          </ContentLine>
          <ContentLine className={cx(contentLineBottom, contentOverlay)}>
            <Arrow className={cx(arrowGreen, arrowRevert)} />
            <Text className={animOpacity}>
              <strong>21. Martin Braithwaite</strong>
            </Text>
          </ContentLine>
        </ContentLeft>
        <ContentRight>
          <img
            className={animOpacity}
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
            alt="Flag_of_Denmark"
            width="100"
          />
        </ContentRight>
      </Content>
    </Wrapper>
  )
}

AnimationSubstitution.propTypes = {
  startAnim: PropTypes.bool,
}

export default AnimationSubstitution
