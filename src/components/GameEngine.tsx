"use client";

import React, { useState } from 'react';
import { Choice, GameState } from '@/data/types';
import { scenarioData, openingLocation } from '@/data/scenario';
import { TextDisplay } from './TextDisplay';
import { getAssetPath } from '@/utils/paths';


const BackgroundLayer = ({ bgId, children }: { bgId: string, children: React.ReactNode }) => (
    <div className="relative w-full h-[100dvh] bg-gray-900 overflow-hidden touch-manipulation">
        <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url('${getAssetPath(bgId)}')` }}
        >
            <div className="absolute inset-0 bg-black/40" />
        </div>
        {children}
    </div>
);

const ChoiceMenu = ({ choices, onSelect }: { choices: Choice[], onSelect: (choice: Choice) => void }) => (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black/60 backdrop-blur-sm p-4">
        <div className="space-y-4 w-full max-w-md">
            {choices.map((c) => (
                <button
                    key={c.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(c);
                    }}
                    className="
                        block w-full py-4 px-6 
                        text-lg md:text-xl tracking-widest text-red-50 
                        bg-black/90 border border-red-900/50 
                        active:bg-red-900/50 hover:bg-red-900/20 hover:border-red-500 hover:scale-105
                        transition-all duration-200 font-serif rounded shadow-lg
                    "
                >
                    {c.text}
                </button>
            ))}
        </div>
    </div>
);

export default function GameEngine() {
    const [gameState, setGameState] = useState<GameState>({
        currentNodeId: openingLocation,
        history: [openingLocation],
        flags: {},
        stats: { sanity: 100, survival: 100 }
    });

    const [isTyping, setIsTyping] = useState(false);

    const currentNode = scenarioData[gameState.currentNodeId];

    if (!currentNode) {
        return (
            <div className="w-full h-[100dvh] bg-black text-red-500 flex items-center justify-center p-10">
                <p>Error: Node &quot;{gameState.currentNodeId}&quot; not found.</p>
            </div>
        );
    }

    const visibleChoices = currentNode.choices?.filter(choice => choice.condition ? choice.condition(gameState) : true);

    const handleTextComplete = () => {
        setIsTyping(false);
    };

    const handleNext = () => {
        // 選択肢がある時はクリックで進まないようにする
        if (visibleChoices && visibleChoices.length > 0) return;

        if (currentNode.next) {
            setGameState(prev => ({
                ...prev,
                currentNodeId: currentNode.next!,
                history: [...prev.history, currentNode.next!]
            }));
            setIsTyping(true);
        }
    };

    const handleChoiceSelect = (choice: Choice) => {
        setGameState(prev => {
            let newState = { ...prev };
            if (choice.onSelect) {
                const updates = choice.onSelect(prev);
                newState = { ...newState, ...updates, flags: { ...newState.flags, ...(updates.flags || {}) } };
            }
            newState.currentNodeId = choice.nextNodeId;
            newState.history = [...newState.history, choice.nextNodeId];
            return newState;
        });
        setIsTyping(true);
    };

    const handleRestart = () => {
        setGameState({
            currentNodeId: openingLocation,
            history: [openingLocation],
            flags: {},
            stats: { sanity: 100, survival: 100 }
        });
        setIsTyping(true);
    };

    const isEnding = !currentNode.next && (!currentNode.choices || currentNode.choices.length === 0);

    return (
        <BackgroundLayer bgId={currentNode.backgroundId}>
            {/* 背景クリック用（念のため残しておく） */}
            <div
                className="absolute inset-0 z-0 cursor-pointer pt-safe-top pb-safe-bottom"
                onClick={() => !isEnding && !isTyping && handleNext()}
            />

            <TextDisplay
                key={gameState.currentNodeId}
                text={currentNode.text}
                onComplete={handleTextComplete}
                onNext={!isEnding ? handleNext : undefined}
            />

            {visibleChoices && visibleChoices.length > 0 && !isTyping && (
                <ChoiceMenu
                    choices={visibleChoices}
                    onSelect={handleChoiceSelect}
                />
            )}

            {isEnding && !isTyping && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
                    <button
                        onClick={handleRestart}
                        className="
                            pointer-events-auto
                            mt-32
                            py-3 px-8
                            text-xl tracking-widest text-white
                            bg-red-900/80 border border-red-500
                            hover:bg-red-700 hover:scale-105
                            transition-all duration-300 font-serif rounded shadow-[0_0_15px_rgba(255,0,0,0.5)]
                        "
                    >
                        最初からやり直す
                    </button>
                </div>
            )}
        </BackgroundLayer>
    );
}