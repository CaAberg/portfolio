"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [playerBottom, setPlayerBottom] = useState(0);
  const gameInterval = useRef<NodeJS.Timeout | null>(null);
  const obstacleInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && !gameOver) {
        if (!gameStarted) {
          setGameStarted(true);
        }
        jump();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameOver, gameStarted, isJumping]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      // Move obstacle
      obstacleInterval.current = setInterval(() => {
        setObstaclePosition((prev) => {
          if (prev < -10) {
            setScore((s) => s + 1);
            return Math.random() * 50 + 50; // Random position between 50-100
          }
          return prev - 2;
        });
      }, 20);
    }

    return () => {
      if (obstacleInterval.current) clearInterval(obstacleInterval.current);
    };
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      // Check collision
      gameInterval.current = setInterval(() => {
        if (obstaclePosition > 5 && obstaclePosition < 15 && playerBottom < 60) {
          setGameOver(true);
        }
      }, 10);
    }

    return () => {
      if (gameInterval.current) clearInterval(gameInterval.current);
    };
  }, [gameStarted, gameOver, obstaclePosition, playerBottom]);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      let upVelocity = 25;
      const jumpInterval = setInterval(() => {
        setPlayerBottom((prev) => {
          const newBottom = prev + upVelocity;
          upVelocity -= 1.55; // Gravity
          
          if (newBottom <= 0) {
            clearInterval(jumpInterval);
            setIsJumping(false);
            return 0;
          }
          return newBottom;
        });
      }, 20);
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    setObstaclePosition(100);
    setPlayerBottom(0);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center px-8 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Page Not Found
        </h2>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Game Container */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 p-8 mb-8">
          <div className="mb-4">
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              {!gameStarted
                ? "Press SPACE or Click to Start & Jump!"
                : gameOver
                ? "Game Over!"
                : "Keep Jumping!"}
            </p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Score: {score}
            </p>
          </div>

          {/* Game Area */}
          <div
            className="relative w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden border-2 border-zinc-300 dark:border-zinc-700 cursor-pointer"
            onClick={() => {
              if (!gameOver) {
                if (!gameStarted) setGameStarted(true);
                jump();
              }
            }}
          >
            {/* Ground */}
            <div className="absolute bottom-0 w-full h-2 bg-zinc-400 dark:bg-zinc-600"></div>

            {/* Player */}
            <div
              className="absolute left-[10%] w-12 h-12 bg-blue-500 rounded transition-none"
              style={{
                bottom: `${playerBottom}px`,
              }}
            >
              <div className="text-white text-2xl flex items-center justify-center h-full">
                404
              </div>
            </div>

            {/* Obstacle */}
            {gameStarted && (
              <div
                className="absolute bottom-0 w-8 h-16 transition-none"
                style={{
                  left: `${obstaclePosition}%`,
                }}
              >
                <div className="text-white text-3xl flex items-center justify-center h-full">
                  🌐
                </div>
              </div>
            )}

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-3xl font-bold mb-4">
                    Game Over!
                  </p>
                  <p className="text-white text-xl mb-4">Final Score: {score}</p>
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
            Use SPACEBAR or click to jump. Avoid the cacti! 🌵
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
