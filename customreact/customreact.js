function customRender(container, element){
    const ele = document.createElement(element.type);
    ele.innerHTML = element.children;
    /*
    ele.setAttribute('href', element.props.href);
    ele.setAttribute('target', element.props.target);
    */
    for (const prop in element.props) {
        if(prop=='children') continue;
        ele.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(ele);
}
const root = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com", 
        target: "_blank",
    },
    children: "Click me"
}

customRender(root, reactElement);
