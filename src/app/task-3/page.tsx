"use client";

import { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";


const generateBlocks = () => {
    const types = ["Камень", "Земля", "Алмазная руда", "Дерево", "Листва", "Вода", "Лава", "Золотая руда"];
    return Array.from({ length: 50000 }).map((_, i) => ({
        id: i,
        type: types[i % types.length],
        durability: Math.floor(Math.random() * 1000),
        breakable: Math.random() > 0.5,
    }));
};

export default function Task3Virtualization() {
    const blocks = useMemo(() => generateBlocks(), []);
    const [search, setSearch] = useState("");

    const filteredBlocks = blocks.filter((b) => b.type.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Задача 3: Виртуализация</h1>
                <p className="text-muted-foreground mt-2">
                    Сделай так, чтобы эта гигантская таблица из 50 000 блоков рендерилась плавно с помощью виртуализации.
                </p>
            </div>

            <div className="max-w-md">
                <Input
                    placeholder="Поиск блоков (Внимание: без виртуализации очень медленно)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            <div className="flex-1 overflow-auto border rounded-md max-h-[600px]">
                <Table>
                    <TableHeader className="sticky top-0 bg-background z-10">
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Тип блока</TableHead>
                            <TableHead>Прочность</TableHead>
                            <TableHead>Ломается рукой</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredBlocks.map((block) => (
                            <TableRow key={block.id}>
                                <TableCell>{block.id}</TableCell>
                                <TableCell>{block.type}</TableCell>
                                <TableCell>{block.durability}</TableCell>
                                <TableCell>{block.breakable ? "Да" : "Нет"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
