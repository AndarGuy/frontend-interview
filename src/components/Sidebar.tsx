import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/40 text-foreground">
      <div className="p-6">
        <h2 className="text-xl font-bold tracking-tight">Интервью Frontend</h2>
        <p className="text-sm text-muted-foreground mt-1">Minecraft Задачи</p>
      </div>
      <Separator />
      <ScrollArea className="flex-1 p-4">
        <nav className="flex flex-col gap-2">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start">Главная</Button>
          </Link>
          <div className="mt-4 mb-2">
            <h3 className="text-sm font-semibold tracking-tight px-4 text-muted-foreground">Задачи</h3>
          </div>
          <Link href="/task-1">
            <Button variant="ghost" className="w-full justify-start">Задача 1: Code Review</Button>
          </Link>
          <Link href="/task-2">
            <Button variant="ghost" className="w-full justify-start">Задача 2: Стейт-менеджер</Button>
          </Link>
          <Link href="/task-3">
            <Button variant="ghost" className="w-full justify-start">Задача 3: Виртуализация</Button>
          </Link>
          <Link href="/task-4">
            <Button variant="ghost" className="w-full justify-start">Задача 4: Утечки памяти</Button>
          </Link>
          <Link href="/task-5">
            <Button variant="ghost" className="w-full justify-start">Задача 5: Swagger Codegen</Button>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}
