import * as React from "react";
import { Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SettingsDropdownProps {
  currentLocale: string;
}

export function SettingsDropdown({ currentLocale }: SettingsDropdownProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  // Inicializar theme desde DOM
  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  // Toggle theme
  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"](
      "dark"
    );
  };

  // Obtener URL para cambio de idioma
  const getLocaleUrl = (locale: string) => {
    return `/${locale}/`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-6 right-6 z-50 rounded-full shadow-sm"
        >
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => toggleTheme("light")}>
          {theme === "light" && <Check className="mr-2 h-4 w-4" />}
          {theme !== "light" && <div className="mr-2 h-4 w-4" />}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleTheme("dark")}>
          {theme === "dark" && <Check className="mr-2 h-4 w-4" />}
          {theme !== "dark" && <div className="mr-2 h-4 w-4" />}
          Dark
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <a href={getLocaleUrl("en")}>
            {currentLocale === "en" && <Check className="mr-2 h-4 w-4" />}
            {currentLocale !== "en" && <div className="mr-2 h-4 w-4" />}
            English
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={getLocaleUrl("es")}>
            {currentLocale === "es" && <Check className="mr-2 h-4 w-4" />}
            {currentLocale !== "es" && <div className="mr-2 h-4 w-4" />}
            Español
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
