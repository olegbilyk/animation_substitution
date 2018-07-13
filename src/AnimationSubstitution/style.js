import styled, { css, keyframes } from 'react-emotion'

export const blur = keyframes`
  from {
    filter: blur(10px);
  }

  70% {
    filter: blur(7px);
  }

  90% {
    filter: blur(3px);
  }

  to {
    filter: blur(0);
  }
`

export const Wrapper = styled.div`
  text-align: left;
`

export const defaultAnimStyle = css`
  --content-transform: translate3d(0, 0, 0);
  --content-arrow-transform: translate3d(100vw, 0, 0);
  ${'' /* --content-arrow-blur: ${blur} 1s ease 1 forwards; --content-line-top-transform: translate3d(0, 0, 0); */}
  --content-line-bottom-transform: translate3d(0, 0, 0);
  --anim-opacity: 0;
`

export const startAnimStyle = css`
    --content-transform: translate3d(110vw, 0, 0);
    --content-arrow-transform: translate3d(0, 0, 0);
    --content-arrow-blur: ${blur} 0.3s ease 1 forwards;
    --content-line-top-transform: translate3d(0, 100%, 0);
    --content-line-bottom-transform: translate3d(0, -100%, 0);
    --anim-opacity: 1;
`

export const Content = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 2em;
`

export const contentOverlay = css`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: -50vw;
    bottom: 0;
    left: 0;
    z-index: 2;
    overflow-y: hidden;
    background-color: #fff;
    transform: var(--content-transform);
    transition: all 0.4s ease;
    transition-delay: 0.4s;
    box-shadow: -10px 0px 40px 25px #fff;
  }
`

export const ContentLeft = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 3;
`

export const ContentLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.6s ease;
  transition-delay: 3s;

  ::after { 
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 70px;
    background-color: #fff;
  }
`

export const contentLineTop = css`
  transform: var(--content-line-top-transform);
  background-color: #b2b2b2;
`

export const contentLineBottom = css`
  transform: var(--content-line-bottom-transform);
  background-color: #938cff;
`

export const ContentRight = styled.div`
  align-self: center;
  padding-right: 10px;
  padding-left: 40px;
  text-align: right;
`

export const Arrow = styled.span`
  position: relative;
  width: 40px;
  height: 100%;
  margin: 0 20px;
  display: inline-block;
  z-index: 3;
  transform: var(--content-arrow-transform);
  transition: all 0.4s ease;

  ::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(45deg) translate(-40%, -40%);
    border-width: 10px;
    border-style: solid;
    border-color: inherit;
    border-top: 0;
    border-left: 0;
    filter: blur(10px);
    animation: var(--content-arrow-blur);
  }
`

export const arrowRevert = css`
  ::before {
    transform: rotate(-135deg) translate(30%, 30%);
  }
`

export const arrowRed = css`
  border-color: red;
`

export const arrowGreen = css`
  border-color: green;
`

export const Text = styled.p``

export const animOpacity = css`
  opacity: var(--anim-opacity);
  transition: opacity 0.2s linear;
  transition-delay: 0.7s;
`
