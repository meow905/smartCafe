import React from "react";
import "./SmartCafeCard.css";

function SmartCafeCard() {
  return (
    <div className="card">
      <h1>🍽 Smart Cafe</h1>
      <p className="subtitle">Умное обслуживание без официантов</p>
      <p className="description">
        Smart Cafe — это инновационная система самообслуживания, где гости
        сканируют QR-код на столе и сразу попадают в Telegram-бот для оформления
        заказа. Меню, выбор блюд и заказ — всё происходит без участия официанта.
      </p>
      <ul className="features">
        <li>📱 Telegram-бот вместо меню</li>
        <li>🚫 Без ожидания официанта</li>
        <li>📦 Официанты — только подача</li>
        <li>⚡️ Быстро, удобно, эффективно</li>
      </ul>
      <button className="learn-more">Узнать больше</button>
    </div>
  );
}

export default SmartCafeCard;
