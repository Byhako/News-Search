import styled from 'styled-components'
// font-size: ${props => props.task ? '30px' : '50px'};


export const Container = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`


export const Logo = styled.img `
  object-fit: contain;
  height: 35vh;
  margin-top: 10vh;
`


export const Form = styled.form `
  @media (max-width: 800px) {
    flex-direction: column;
  };
  border: 2px solid black;
  background-color: lightgray;
  display: flex;
  align-items: center;
  width: 70vw;
  margin: 10px auto;
`


export const Content = styled.div `
  @media (max-width: 800px) {
    width: 100%
  };
  display: flex;
  flex-direction: column;
  padding: 17px;
  width: 20%;
`

export const ContentKey = styled(Content) `
  @media (max-width: 800px) {
    width: 100%
  };
  width: 50%;  
`

export const Keywords = styled.input `
  @media (max-width: 800px) {
    width: 100%
  };
  height: 38px;
  border: 1px solid hsl(0,0%,80%);
  border-radius: 4px;
  padding: 5px;
`

export const ContentSelect = styled(Content) `
  width: 30%;
`

export const Label = styled.label `
  margin-bottom: 5px;
`


export const Button = styled.button `
  @media (max-width: 800px) {
    width: 40%;
    margin: auto;
  };
  margin-top: 29px;
  border-radius: 4px;
  height: 38px;
  background-color: whitesmoke;
`



