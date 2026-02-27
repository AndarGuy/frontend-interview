"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


function LiveTrackerWidget() {
    const [coords, setCoords] = useState({ x: 0, y: 64, z: 0 });
    const [playersOnline, setPlayersOnline] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCoords((prev) => ({
                x: prev.x + Math.floor(Math.random() * 3) - 1,
                y: 64, // ground level
                z: prev.z + Math.floor(Math.random() * 3) - 1,
            }));
        }, 100);


        const handleMouse = (e: MouseEvent) => {
            setPlayersOnline(e.clientX % 100);
        };
        window.addEventListener("mousemove", handleMouse);


    }, []);

    return (
        <Card className="bg-muted/50">
            <CardHeader>
                <CardTitle>Радар включен</CardTitle>
                <CardDescription>Имитация частых обновлений...</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="font-mono text-lg">
                    X: {coords.x} | Y: {coords.y} | Z: {coords.z}
                </p>
                <p className="text-sm text-muted-foreground">Фейковых игроков онлайн (двигай мышкой): {playersOnline}</p>
            </CardContent>
        </Card>
    );
}

export default function Task4ResourceLeaks() {
    const [showTracker, setShowTracker] = useState(false);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Задача 4: Утечки памяти</h1>
                <p className="text-muted-foreground mt-2">
                    Используй инструменты Profiler/Memory, чтобы выяснить, почему переключение виджета замедляет приложение, а затем исправь код.
                </p>
            </div>

            <div className="p-6 border rounded-lg bg-card">
                <div className="mb-6">
                    <Button onClick={() => setShowTracker(!showTracker)} variant={showTracker ? "destructive" : "default"}>
                        {showTracker ? "Выключить радар" : "Включить радар"}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2 inline-block ml-4">
                        Попробуй нажать кнопку несколько раз подряд и смотри в консоль и вкладку memory.
                    </p>
                </div>

                {showTracker && <LiveTrackerWidget />}
            </div>
        </div>
    );
}
