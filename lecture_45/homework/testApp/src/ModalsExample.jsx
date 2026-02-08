import { useState } from "react";

export default function ModalExample() {
    const [isOpen, setIsOpen ] = useState(false);
    return (

        <div>
            <button onClick={()=> setIsOpen(true)}>Open Modal</button>

            {
                isOpen && (
                    <div role="dialog">
                        <h2>Modal is open </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, illo laudantium! Exercitationem ut adipisci nulla dolores earum modi expedita nihil quos! Atque culpa at, consequuntur, commodi repellendus, quaerat eveniet quae consectetur odit deleniti vel.</p>
                        <button onClick={()=> setIsOpen(false)}>Close</button>
                    </div>
                )
            }
        </div>
    )
}

