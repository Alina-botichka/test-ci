import sortHeroesByHealth from '../sort.js';
import { describe, test, expect } from '@jest/globals';

describe('sortHeroesByHealth', () => {
  describe('basic sorting functionality', () => {
    test('should sort heroes by health in descending order', () => {
      const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ];
      
      const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should not modify the original array', () => {
      const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
      ];
      
      const original = [...heroes];
      sortHeroesByHealth(heroes);
      
      expect(heroes).toEqual(original);
    });
    
    test('should return a new array', () => {
      const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
      ];
      
      const result = sortHeroesByHealth(heroes);
      
      expect(result).not.toBe(heroes);
      expect(Array.isArray(result)).toBe(true);
    });
  });
  
  describe('edge cases', () => {
    test('should handle array with one hero', () => {
      const heroes = [{ name: 'мечник', health: 50 }];
      const expected = [{ name: 'мечник', health: 50 }];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should handle empty array', () => {
      const heroes = [];
      const expected = [];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should handle heroes with same health', () => {
      const heroes = [
        { name: 'мечник', health: 50 },
        { name: 'маг', health: 50 },
        { name: 'лучник', health: 50 },
      ];
      
      const expected = [
        { name: 'мечник', health: 50 },
        { name: 'маг', health: 50 },
        { name: 'лучник', health: 50 },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should handle negative health values', () => {
      const heroes = [
        { name: 'мечник', health: -10 },
        { name: 'маг', health: 50 },
        { name: 'лучник', health: -5 },
      ];
      
      const expected = [
        { name: 'маг', health: 50 },
        { name: 'лучник', health: -5 },
        { name: 'мечник', health: -10 },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should handle zero health values', () => {
      const heroes = [
        { name: 'мечник', health: 0 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 0 },
      ];
      
      const expected = [
        { name: 'маг', health: 100 },
        { name: 'мечник', health: 0 },
        { name: 'лучник', health: 0 },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
  });
  
  describe('data types and validation', () => {
    test('should handle decimal health values', () => {
      const heroes = [
        { name: 'мечник', health: 10.5 },
        { name: 'маг', health: 100.7 },
        { name: 'лучник', health: 80.3 },
      ];
      
      const expected = [
        { name: 'маг', health: 100.7 },
        { name: 'лучник', health: 80.3 },
        { name: 'мечник', health: 10.5 },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
    
    test('should throw error if argument is not an array', () => {
      expect(() => sortHeroesByHealth(null)).toThrow('Argument must be an array');
      expect(() => sortHeroesByHealth(undefined)).toThrow('Argument must be an array');
      expect(() => sortHeroesByHealth('string')).toThrow('Argument must be an array');
      expect(() => sortHeroesByHealth(123)).toThrow('Argument must be an array');
      expect(() => sortHeroesByHealth({})).toThrow('Argument must be an array');
    });
    
    test('should preserve hero objects with additional properties', () => {
      const heroes = [
        { name: 'мечник', health: 10, level: 5, class: 'warrior' },
        { name: 'маг', health: 100, level: 10, class: 'mage' },
      ];
      
      const expected = [
        { name: 'маг', health: 100, level: 10, class: 'mage' },
        { name: 'мечник', health: 10, level: 5, class: 'warrior' },
      ];
      
      expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
  });
  
  describe('stability and performance', () => {
    test('should handle large arrays', () => {
      const heroes = Array.from({ length: 1000 }, (_, i) => ({
        name: `hero${i}`,
        health: Math.random() * 100,
      }));
      
      const sorted = sortHeroesByHealth(heroes);
      
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].health).toBeGreaterThanOrEqual(sorted[i + 1].health);
      }
    });
  });
});