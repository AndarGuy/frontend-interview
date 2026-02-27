"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function Task2StateManager() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Задача 2: Стейт-менеджер</h1>
                <p className="text-muted-foreground mt-2">
                    Реализуй стор на Zustand для управления инвентарем игрока и состоянием верстака.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Инвентарь</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                        {['Дерево', 'Камень', 'Железо', 'Алмаз'].map((item, idx) => (
                            <Button key={idx} variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                                <span className="font-semibold">{item}</span>
                                <Badge variant="secondary">x{Math.floor(Math.random() * 64) + 1}</Badge>
                            </Button>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Верстак</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="border-2 border-dashed rounded-lg h-32 flex items-center justify-center text-muted-foreground">
                                Пустой слот 1
                            </div>
                            <div className="border-2 border-dashed rounded-lg h-32 flex items-center justify-center text-muted-foreground">
                                Пустой слот 2
                            </div>
                        </div>
                        <Button className="w-full" size="lg">Скрафтить</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
