'use client';

import { useContext, useState } from 'react';
import { Button } from '@/components/atoms';
import { ThemeContext } from '@/contexts/themeProvider';

import { Menu, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'fixed right-0 bottom-3/4 flex items-stretch rounded-md transition-all duration-300 ease-in-out md:right-4 md:bottom-8 bg-orange-300',
        !open && 'translate-x-12 md:translate-none',
      )}
    >
      <button
        type="button"
        aria-label={open ? 'Close Theme Toggler' : 'Open Theme Toggler'}
        aria-expanded={open}
        className="flex items-center justify-center md:hidden transition-all duration-300 ease-in-out text-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu size={20} className="rotate-90" />
      </button>

      <Button
        variant="iconOnly"
        className='bg-slate-900 text-white dark:bg-orange-300 dark:text-slate-900'
        onClick={() => {
          toggleTheme();
          setOpen(false);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label="Toggle theme"
        iconStart={
          theme === 'dark' ? (
            <Sun size={24} />
          ) : (
            <Moon size={24} />
          )
        }
      />
    </div>
  );
}
