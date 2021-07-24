import React, { CSSProperties, useState } from 'react';



const style: CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'flex',
    height: '50px',
    padding: '0 10px',
    width: '300px',
    zIndex: 1,
    position: 'absolute',
    margin: '30px',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
}

const ButtonStyle: CSSProperties = {
    borderRadius: '5px',
    display: 'inline-block',
    width: '70px',
    padding: "5px",
    margin: '10px',
    border: '1px solid #fff',
}

const Button: React.FC<{ hover: string, color: string, onClick?: () => void }> = (props) => {
    const [Hover, setHover] = useState(false);

    return <button
        style={{
            ...ButtonStyle,
            backgroundColor: Hover ? props.hover : props.color,
            cursor: Hover ? 'pointer' : 'default',
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={props.onClick}
    >
        {props.children}
    </button>
}

const ColorMenu: React.FC<{ setColor: (color: string) => void }> = (props) => {
    return <div style={style}>
        <Button hover="rgba(150, 0,0)" color="rgba(255, 0,0)" onClick={() => props.setColor("red")}>Red</Button>
        <Button hover="rgba(0,0,150)" color="rgba(0,0,255)" onClick={() => props.setColor("blue")}>Blue</Button>
        <Button hover="rgba(0, 150, 0)" color="rgba(0, 255, 0)" onClick={() => props.setColor("green")}>Green</Button>
    </div>
}
export default ColorMenu;