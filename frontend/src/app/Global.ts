"use client";

export class Vector2D
{
    public X: number;
    public Y: number;
    
    public constructor(x: number, y: number)
    {
        this.X = x;
        this.Y = y;
    }
}

export class Global
{
    public static WindowDimensions: Vector2D = new Vector2D(0, 0);
    public static ThresholdDimensions: Vector2D = new Vector2D(850, 800);
    
    public static IsShrunkX: boolean = false;
    public static IsShrunkY: boolean = false;
    
    
    public static CurrentPageIndex: number = 0;
}    
