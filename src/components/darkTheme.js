import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';

const DarkTheme = () => {

    const [checked, setChecked] = useState(false);

    const handleToggle = nextChecked => {
        setChecked(nextChecked);
        toggleTheme();
    }

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Switch onChange={handleToggle} 
            checked={checked}
            onColor="#FE9F06"
            offColor="#939393"
            className="react-switch"
        />
    )
}

export default DarkTheme;