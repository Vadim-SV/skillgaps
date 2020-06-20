import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle `

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
    padding: 10px;

}



.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.main-title {
  font-family: 'Roboto-Bold';
  text-align: center;
  font-size: 20px;

}



@font-face {
  font-family: 'Roboto-Regular';
  src: local('Roboto-Regular'), url(./fonts/Roboto-Regular.ttf) format('truetype');
  font-family: 'Roboto-Bold';
  src: local('Roboto-Bold'), url(./fonts/Roboto-Bold.ttf) format('truetype');
  font-family: 'Roboto-Thin';
  src: local('Roboto-Thin'), url(./fonts/Roboto-Thin.ttf) format('truetype');
  font-family: 'Roboto-Light';
  src: local('Roboto-Light'), url(./fonts/Roboto-Light.ttf) format('truetype');
  
  
}
`