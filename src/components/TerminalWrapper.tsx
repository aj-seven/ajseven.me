import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { isTerminalMode, uiType } from '../store';
import TerminalMode from '../terminal/TerminalMode';

export default function TerminalWrapper() {
  const terminal = useStore(isTerminalMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !terminal) return null;

  return (
    <TerminalMode 
      setTerminalMode={(v) => isTerminalMode.set(v)} 
      setUiType={(v) => uiType.set(v)} 
    />
  );
}
