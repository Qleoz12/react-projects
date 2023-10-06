import { Messages } from 'primereact/messages';
import { useRef } from 'react';
//import { useMountEffect } from 'primereact/hooks';

const MensajesInformativos = () => {

    const mensajes = useRef(null);

/*
    useMountEffect(() => {
        mensajes.current?.show([
            mensajes.current.show([ 
            { sticky: true, severity: 'info', summary: 'Mensaje 1 ', detail: 'Message Content'},
            { sticky: true, severity: 'info', summary: 'Mensaje 2', detail: 'Message Content'},
            { sticky: true, severity: 'info', summary: 'Mensaje 3', detail: 'Message Content' },
            { sticky: true, severity: 'info', summary: 'Mensaje 4', detail: 'Message Content'},
             { sticky: true, severity: 'info', summary: 'Mensaje 5', detail: 'Message Content' }
            ]) ])
    });
*/

    return (
        <div >
        <Messages ref={mensajes} className='sedeTextoImportante ' />
        </div>
        
    )
}

export default MensajesInformativos;