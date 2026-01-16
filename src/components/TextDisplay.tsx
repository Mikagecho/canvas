"use client";
import React, { useState, useEffect } from 'react';

interface TextDisplayProps {
    text: string;
    onComplete?: () => void;
    onNext?: () => void;
    speed?: number;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ text, onComplete, onNext, speed = 30 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // テキストが変わったらリセット（親コンポーネントで key を指定しているので、この useEffect は不要になりました）

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            if (onComplete) onComplete();
        }
    }, [currentIndex, text, speed, onComplete]);

    // クリック時の挙動修正
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 親への伝播を止めて、ここで処理を完結させる

        if (currentIndex < text.length) {
            // まだ文字が出ている途中なら、一気に表示
            setDisplayedText(text);
            setCurrentIndex(text.length);
            if (onComplete) onComplete();
        } else {
            // 文字が全部出ているなら、次のシーンへ！
            if (onNext) onNext();
        }
    };

    return (
        <div
            className={`
                absolute bottom-0 w-full p-6 md:p-10
                bg-gradient-to-t from-black via-black/90 to-transparent
                text-gray-100 font-serif leading-loose tracking-wider text-lg md:text-2xl
                min-h-[30vh] flex flex-col justify-end pb-12 z-10
                cursor-pointer hover:bg-black/10 transition-colors
            `}
            onClick={handleClick}
        >
            <p className="whitespace-pre-wrap drop-shadow-md select-none">
                {displayedText}
                <span className="animate-pulse inline-block ml-1">_</span>
            </p>
        </div>
    );
};