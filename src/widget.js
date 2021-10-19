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

        //Mensaje de Entrada (sample) -------- 1
        var messagein = document.createElement('div');
        messagein.classList.add('message');

        //Contenedor del Avatar
        var msgavatar = document.createElement('div');
        msgavatar.classList.add('avatar');

        //Avatar
        var msgavatar_logo = document.createElement('img');
        msgavatar_logo.src = 'http://placeimg.com/64/64/any';

        msgavatar.appendChild(msgavatar_logo);

        //Contenedor principal del Mensaje (Burbuja)
        var msgbubble = document.createElement('div');
        msgbubble.classList.add('bubble-container');
        
        //Burbuja
        var msgbubble_text = document.createElement('div');
        msgbubble_text.classList.add('bubble');
        msgbubble_text.textContent = '¿Hola que tal buenas tardes, hay algo en lo que te pueda ayudar?';

        msgbubble.appendChild(msgbubble_text);

        messagein.appendChild(msgavatar);
        messagein.appendChild(msgbubble);

        //EL mensaje se agrega al contenedor de los mensajes
        container_msgs.appendChild(messagein);
        // ---------------

         //Mensaje de Entrada (sample) -------- 2
         messagein = document.createElement('div');
         messagein.classList.add('message');
 
         //Contenedor del Avatar
         msgavatar = document.createElement('div');
         msgavatar.classList.add('avatar', 'out');
 
         //Avatar
         msgavatar_logo = document.createElement('img');
         msgavatar_logo.src = 'http://placeimg.com/64/64/any';
 
         msgavatar.appendChild(msgavatar_logo);
 
         //Contenedor principal del Mensaje (Burbuja)
         msgbubble = document.createElement('div');
         msgbubble.classList.add('bubble-container', 'out');
         
         //Burbuja
         msgbubble_text = document.createElement('div');
         msgbubble_text.classList.add('bubble', 'out');
         msgbubble_text.textContent = 'Hola, buenas tardes, si porfavor, tengo duda si el deposito hecho por el atrasado a mi mensualidad ya lo resivieron, ya que tengo el servicio aun suspendido.';
 
         msgbubble.appendChild(msgbubble_text);
 
         messagein.appendChild(msgavatar);
         messagein.appendChild(msgbubble);
 
         //EL mensaje se agrega al contenedor de los mensajes
         container_msgs.appendChild(messagein);
         // ---------------

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

        //Control de escritura del mensaje
        const msg_input = document.createElement('textarea');
        msg_input.id = 'txtmsg';
        msg_input.placeholder = 'Escriba aqui su mensaje ...';
        msg_input.rows = 3;
        msg_input.maxLength = 200;
        msg_input.cols = 35;

        control_input.appendChild(msg_input);

        //Botones de Attach y Envio
        const control_buttons = document.createElement('div');
        control_buttons.classList.add('control-buttons');

        //Control de adjuntos
        const attach_button = document.createElement('button');
        attach_button.id = 'btnattach';
        attach_button.type = 'button';
        attach_button.classList.add('btn', 'attach');

        //Control de envio
        const send_button = document.createElement('button');
        send_button.id = 'btnsend';
        send_button.type = 'button';
        send_button.classList.add('btn', 'send');

        control_buttons.appendChild(attach_button);
        control_buttons.appendChild(send_button);

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
            .message-container .container .msgs .message {
                display: flex;
                background-color: white;
                margin-top: 5px;
                margin-bottom: 5px;
            }
            .message-container .container .msgs .avatar {
                display: flex;
                background-color: white;
                justify-content: center;
                padding: 0 3px 0;
            }
            .message-container .container .msgs .avatar.out {
                display: none;
            }
            .message-container .container .msgs .avatar img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
            }
            .message-container .container .msgs .bubble-container {
                display: flex;
                flex: auto;
                background-color: white;
            }
            .message-container .container .msgs .bubble-container.out {
                justify-content: flex-end;
            }
            .message-container .container .msgs .bubble-container .bubble {
                padding: 10px 15px;
                max-width: 80%;
                word-wrap: break-word;
                overflow-wrap: break-word;
                border-radius: 8px;
                background-color: #ECEDEF;
                color: black;
                font-size: 13px;
            }
            .message-container .container .msgs .bubble-container .bubble.out {
                background-color: #C8E6C9;
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
                background-color: white;
                height: 65%;
                padding: 0px 5px 5px;
            }
            .message-container .container .controls .control-input {
                display: flex;
                background-color: white;
                width: 78%;
            }
            .message-container .container .controls .control-input textarea {
                padding:15px;
                border: none;
                outline: none;
                resize: none;
            }
            .message-container .container .controls .control-input textarea::placeholder {
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container .container .controls .control-buttons {
                display: flex;
                background-color: white;
                flex: auto;
                align-items: center;
                justify-content: center;
            }
            .message-container .container .controls .control-buttons .btn {
                background-color: transparent;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: none;
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin: 0 4px 0;
            }
            .message-container .container .controls .control-buttons .btn.attach {
                background-image: url(assets/attach.png);
            }
            .message-container .container .controls .control-buttons .btn.send {
                background-image: url(assets/send.png);
            }
            .message-container .container .sponsor {
                display: flex;
                background-color: white;
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