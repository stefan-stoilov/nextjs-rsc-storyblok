"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string>();

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return (
    <div className="bg-surface-primary dark:border-dark-border dark:bg-dark-surface-primary flex gap-1 rounded-full border border-border p-1 text-center">
      <SwitchButton
        selectedTheme={selectedTheme}
        setTheme={setTheme}
        theme="light"
      >
        <Sun color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton
        selectedTheme={selectedTheme}
        setTheme={setTheme}
        theme="system"
      >
        <Laptop color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton
        selectedTheme={selectedTheme}
        setTheme={setTheme}
        theme="dark"
      >
        <Moon color="currentColor" height={16} width={16} />
      </SwitchButton>
    </div>
  );
}

function SwitchButton({
  selectedTheme,
  theme,
  setTheme,
  children,
  className,
}: {
  selectedTheme?: string;
  theme: string;
  setTheme: (theme: string) => void;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      aria-label={`${theme} theme`}
      className={cn(
        "flex size-6 items-center justify-center rounded-full bg-background p-[3px] text-foreground",
        "data-[selected='true']:bg-foreground data-[selected='true']:text-background",
        "hover:bg-muted",
        className,
      )}
      data-selected={selectedTheme === theme}
      onClick={() => setTheme(theme)}
    >
      {children}
    </Button>
  );
}
