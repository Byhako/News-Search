import styled from 'styled-components'
// font-size: ${props => props.task ? '30px' : '50px'};

export const Container = styled.div `
  display: flex;
  padding: 0 20px;
  margin: 10px 0;
`

export const Photo = styled.img `
  @media (max-width: 800px) {
    display: none;
  };
  object-fit: contain;
  width: 200px;
  height: 182px;
`


export const Content = styled.div `
  @media (max-width: 800px) {
    height: 135px;
  };
  display: inline-flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  height: 182px;
  justify-content: center;
`


export const Title = styled.a `
  color: blue;
  text-decoration: underline;
  font-weight: bold;
  font-size: 16px;
`


export const Snippet = styled.p `
  @media (max-width: 800px) {
    display: none;
  };
  font-size: 14px;
  margin: 0;
`


export const Source = styled.p `
  margin: 0;
  font-size: 14px;
`


export const Published = styled.p `
  font-size: 14px;
  margin: 0;
`


export const KeyWords = styled.p `
  display: contents;
  cursor: pointer;
  color: blue;
  font-size: 14px;
  text-decoration: underline;
`