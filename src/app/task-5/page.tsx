"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function Task5SwaggerCodegen() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const fakeMockApi = async () => {
            const mockItems = [
                { id: "minecraft:apple", name: "Яблоко", rarity: "Обычный", isEdible: true },
                { id: "minecraft:elytra", name: "Элитры", rarity: "Эпический", isEdible: false },
                { id: "minecraft:nether_star", name: "Звезда Незера", rarity: "Эпический", isEdible: false },
            ];
            setItems(mockItems);
        };

        fakeMockApi();
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Задача 5: Swagger Codegen</h1>
                <p className="text-muted-foreground mt-2">
                    Воспользуйся кодогенератором на <code>src/swagger/api.json</code>, чтобы типизировать API-запросы на этой странице.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                        <CardHeader className="bg-muted/40 pb-4">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <CardDescription className="font-mono text-xs">{item.id}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4 flex justify-between items-center">
                            <Badge variant={item.rarity === 'Эпический' ? 'default' : 'secondary'}>{item.rarity}</Badge>
                            {item.isEdible && <Badge variant="outline" className="border-green-500 text-green-500">Съедобно</Badge>}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
