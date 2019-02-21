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
  @media (max-width: 800px) {
    margin-top: 0;
    display: ${props => props.nav ? 'none' : 'block'};
  };
  object-fit: contain;
  height: ${props => props.nav ? '95px' : '35vh'};
  margin-top: ${props => props.nav ? '0' : '10vh'};
  margin-left: ${props => props.nav ? '10px' : '0'};
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

export const Nav = styled(Form) `
  @media (max-width: 800px) {
    height: 182px;
  };
  width: 100%;
  margin: 0;
  height: 100px;
`

export const Content = styled.div `
  @media (max-width: 800px) {
    width: 100%
    padding: ${props => props.nav ? '0 17px' : '17px'};
    justify-content: flex-end;
  };
  display: flex;
  flex-direction: column;
  padding: 17px;
  width: ${props => props.nav ? '36%' : '20%'} ;
`

export const ContentKey = styled(Content) `
  @media (max-width: 800px) {
    width: 100%;
    height: 80px;
    padding-bottom: 0;
  };
  width: ${props => props.nav ? '45%' : '50%'}  
`

export const ContentSelect = styled(Content) `
  @media (max-width: 800px) {
    padding: ${props => props.nav ? '0' : '17px'};
  };
  width: ${props => props.nav ? '60%' : '30%'};
`

export const ContentSearch = styled(Content) `
  @media (max-width: 800px) {
    width: 100%;
    height: 82px;
    padding-top: 0;
    justify-content: flex-end;
    margin-bottom: 17px;
  };
  flex-direction: row;
  width: 50%;
`

export const Label = styled.label `
  margin-bottom: 5px;
`

export const Keywords = styled.input `
  @media (max-width: 800px) {
    width: 100%
  };
  height: 38px;
  border: 1px solid hsl(0,0%,80%);
  border-radius: 4px;
  padding: 0 0 0 8px;
`

export const Button = styled.button `
  @media (max-width: 800px) {
    width: ${props => props.footer ? '150px' : '40%'};
    margin: ${props => props.footer ? '5px 110px 0 0' : '0 auto'};;
  };
  margin: ${props => props.footer ? '5px 200px 0 0' : '29px 0 0 0'};
  border-radius: 4px;
  height: 38px;
  background-color: whitesmoke;
`

export const ContainerLoader = styled.div `
  display: none;
`

export const Footer = styled.div `
  position: fixed;
  bottom: 0;
  padding: 5px 0 0 30px;
  width: 100%;
  background-color: white;
  border-top: 1px solid gray;
  height: 93px;
  display: flex;
  flex-wrap: wrap;
`