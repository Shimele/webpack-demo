import myName from './myName'
function component() {
    const element = document.createElement('div');
  
    element.innerHTML = myName('Bellah')
  
    return element;
  }
  
  document.body.appendChild(component());