"use client";

import { useState, useEffect } from "react";


export default function Task1CodeReview() {
    const [serverStatus, setServerStatus] = useState<any>(null);
    const [players, setPlayers] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://api.mcsrvstat.us/2/mc.hypixel.net")
            .then((res) => res.json())
            .then((data) => {
                setServerStatus(data);
                if (data.players && data.players.list) {
                    setPlayers(data.players.list);
                }
            });
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Задача 1: Code Review</h1>
                <p className="text-muted-foreground mt-2">
                    Посмотри код в <code>src/app/task-1/page.tsx</code>. Найди антипаттерны и проведи рефакторинг компонента.
                </p>
            </div>

            <div className="p-6 border rounded-lg bg-card">
                <h2 className="text-xl font-semibold mb-4">Статус сервера Hypixel</h2>
                {!serverStatus ? (
                    <p>Загрузка...</p>
                ) : (
                    <div className="space-y-2">
                        <p><strong>Статус:</strong> {serverStatus.online ? "Онлайн" : "Оффлайн"}</p>
                        <p><strong>Игроков онлайн:</strong> {serverStatus.players?.online} / {serverStatus.players?.max}</p>
                        <p><strong>Версия:</strong> {serverStatus.version}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
