import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isTerminalMode, uiType } from '../store';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const terminal = useStore(isTerminalMode);
  const ui = useStore(uiType);
  
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) {
      main.style.display = terminal ? 'none' : 'block';
    }
  }, [terminal]);

  return (
    <Navbar 
      terminalMode={terminal} 
      setTerminalMode={(v) => isTerminalMode.set(v)} 
      uiType={ui} 
      setUiType={(v) => uiType.set(v)} 
    />
  );
}
