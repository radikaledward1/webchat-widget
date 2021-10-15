export class Widget {

    constructor({ position = 'bottom-right'} = {}) {
        this.position = this.getPosition(position);
        this.open = false;
        this.initialise();
        this.createStyles();
    }

    getPosition(position) {
        const [vertical, horizontal] = position.split('-');
        return {
            [vertical]: '30px',
            [horizontal]: '30px',
        };
    }

    initialise() {

        //Establece la posicion del div o contenedor principal que contiene el widget
        const container = document.createElement('div');
        container.style.position = 'fixed';
        Object.keys(this.position)
            .forEach(key => container.style[key] = this.position[key]);
        document.body.appendChild(container);

        //Establece la posicion del div o contenedor que contiene el boton
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container')

        const chatIcon = document.createElement('img');
        chatIcon.src = 'assets/messenger.png';
        chatIcon.classList.add('icon');
        this.chatIcon = chatIcon;

        const closeIcon = document.createElement('img');
        closeIcon.src = 'assets/cross.png';
        closeIcon.classList.add('icon', 'hidden');
        this.closeIcon = closeIcon;

        buttonContainer.appendChild(this.chatIcon);
        buttonContainer.appendChild(this.closeIcon);
        buttonContainer.addEventListener('click', this.toggleOpen.bind(this));

        //Establece la posicion del div o contenedor que contiene a el Mensajero o Chat
        this.messageContainer = document.createElement('div');
        this.messageContainer.classList.add('hidden', 'message-container');
        
        //Crea el Mensajero o Chat
        this.createMessageContainerContent();

        container.appendChild(this.messageContainer);
        container.appendChild(buttonContainer);
    }

    createMessageContainerContent() {
        this.messageContainer.innerHTML = '';

        // const title = document.createElement('h2');
        // title.textContent = `We're not here, drop us an email...`;

        //Establece el header del Widget
        const header = document.createElement('div');
        header.classList.add('header');

        //Logo
        const header_logo = document.createElement('div');
        header_logo.classList.add('logo');

        const header_logo_img = document.createElement('img');
        header_logo_img.src = 'http://placeimg.com/64/64/any';

        header_logo.appendChild(header_logo_img);

        //Titulo
        const header_title = document.createElement('div');
        header_title.classList.add('title');

        const header_title_line = document.createElement('h4');
        header_title_line.textContent = 'Titulo del Wedget'

        header_title.appendChild(header_title_line);

        header.appendChild(header_logo);
        header.appendChild(header_title);
        // *** ***

        // const form = document.createElement('form');
        // form.classList.add('content');
        // const email = document.createElement('input');
        // email.required = true;
        // email.id = 'email';
        // email.type = 'email';
        // email.placeholder = 'Enter your email address';

        // const message = document.createElement('textarea');
        // message.required = true;
        // message.id = 'message';
        // message.placeholder = 'Your message';
 
        // const btn = document.createElement('button');
        // btn.textContent = 'Submit';
        // form.appendChild(email);
        // form.appendChild(message);
        // form.appendChild(btn);
        //form.addEventListener('submit', this.submit.bind(this));

        //Establece el contenedor prinicipal del mensajero
        const container = document.createElement('div');
        container.classList.add('container');

        /*Establecera el contenedor de los mensajes que servira de limite 
        hasta donde podran visualizarse los mensajes antes de poner un scroll*/
        const container_msgs = document.createElement('div');
        container_msgs.classList.add('msgs');

        container.appendChild(container_msgs);

        //Establece el contenedor de herramientas del chat, caja de escritura, adjuntos y boton de envio
        const container_tools = document.createElement('div');
        container_tools.classList.add('tools');

        //Contenedor de Controles
        const tools_controls = document.createElement('div');
        tools_controls.classList.add('controls');

        //Input para escribir mensaje
        const control_input = document.createElement('div');
        control_input.classList.add('control-input');
        control_input.textContent = 'Hola';

        //Botones de Attach y Envio
        const control_buttons = document.createElement('div');
        control_buttons.classList.add('control-buttons');
        control_buttons.textContent = 'Guapito';

        tools_controls.appendChild(control_input);
        tools_controls.appendChild(control_buttons);

        //Contenedor de Sponsor
        const tools_sponsor = document.createElement('div');
        tools_sponsor.classList.add('sponsor');

        container_tools.appendChild(tools_controls);
        container_tools.appendChild(tools_sponsor);

        container.appendChild(container_tools);

        //this.messageContainer.appendChild(title);
        this.messageContainer.appendChild(header);
        // this.messageContainer.appendChild(form);
        this.messageContainer.appendChild(container);

    }

    toggleOpen() {
        this.open = !this.open;
        if (this.open) {
            this.chatIcon.classList.add('hidden');
            this.closeIcon.classList.remove('hidden');
            this.messageContainer.classList.remove('hidden');
        } else {
            this.createMessageContainerContent();
            this.chatIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
            this.messageContainer.classList.add('hidden');
        }
    }

    createStyles() {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 9px;
                left: 9px;
                transition: transform .3s ease;
            }
            .hidden {
                /*transform: scale(0);*/
                display: none;
            }
            .button-container {
                background-color: #04b73f;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            .message-container {
                /*box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);*/
                width: 400px;
                right: -25px;
                bottom: 75px;
                max-height: 500px;
                position: absolute;
                transition: max-height .2s ease;
                font-family: Helvetica, Arial ,sans-serif;
                border: 1px solid #A9A9A9;
            }
            .message-container.hidden {
                max-height: 0px;
            }
            /*.message-container h2 {
                margin: 0;
                padding: 20px 20px;
                color: #fff;
                background-color: #04b73f;
            }*/
            .message-container .header {
                display: flex;
                width: 100%;
                height: 60px;
                background-color: #04b73f; 
            }
            .message-container .header .logo {
                display: flex;
                width: 20%;
                height: 60px;
                justify-content: center;
                align-items: center;
                background-color: #04b73f; 
            }
            .message-container .header .logo img {
                border-radius: 50%;
                width: 45px;
            }
            .message-container .header .title {
                display: flex;
                width: 80%;
                height: 60px;
                background-color: #04b73f;
            }
            .message-container .header .title h4 {
                color: white;
            }
            /*.message-container .content {
                margin: 20px 10px ;
                border: 1px solid #dbdbdb;
                padding: 10px;
                display: flex;
                background-color: #fff;
                flex-direction: column;
            }*/
            .message-container .container {
                display: flex;
                flex-direction: column;
                height: 400px;
                background-color: orange;
            }
            .message-container .container .msgs {
                display: flex;
                background-color: white;
                height: 79%;
                overflow-y: auto;
                flex-direction: column;
                padding: 3px 5px 0px;
            }
            .message-container .container .tools {
                display: flex;
                background-color: white;
                flex: auto;
                border-top: 1px solid #dbdbdb;
                flex-direction: column;
            }
            .message-container .container .controls {
                display: flex;
                background-color: green;
                height: 65%;
                padding: 0px 5px 5px;
            }
            .message-container .container .controls .control-input {
                display: flex;
                background-color: purple;
                width: 78%;
            }
            .message-container .container .controls .control-buttons {
                display: flex;
                background-color: magenta;
                flex: auto;
            }
            .message-container .container .sponsor {
                display: flex;
                background-color: blue;
                flex: auto;
            }
            .message-container form * {
                margin: 5px 0;
            }
            .message-container form input {
                padding: 10px;
            }
            .message-container form textarea {
                height: 100px;
                padding: 10px;
            }
            .message-container form textarea::placeholder {
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container form button {
                cursor: pointer;
                background-color: #04b73f;
                color: #fff;
                border: 0;
                border-radius: 4px;
                padding: 10px;
            }
            .message-container form button:hover {
                background-color: #16632f;
            }
        `.replace(/^\s+|\n/gm, '');
        document.head.appendChild(styleTag);
    }

}