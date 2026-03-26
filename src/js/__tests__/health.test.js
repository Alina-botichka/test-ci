import getHealthStatus from '../health.js';
import { jest, describe, test, expect } from '@jest/globals';

describe('getHealthStatus', () => {
  describe('healthy status (health > 50)', () => {
    test('should return "healthy" for health = 90', () => {
      const character = { name: 'Маг', health: 90 };
      expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "healthy" for health = 51', () => {
      const character = { name: 'Воин', health: 51 };
      expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "healthy" for health = 100', () => {
      const character = { name: 'Лучник', health: 100 };
      expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "healthy" for health = 50.1', () => {
      const character = { name: 'Тест', health: 50.1 };
      expect(getHealthStatus(character)).toBe('healthy');
    });
  });

  describe('wounded status (15 <= health <= 50)', () => {
    test('should return "wounded" for health = 50', () => {
      const character = { name: 'Маг', health: 50 };
      expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" for health = 30', () => {
      const character = { name: 'Воин', health: 30 };
      expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" for health = 15', () => {
      const character = { name: 'Лучник', health: 15 };
      expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "wounded" for health = 49.9', () => {
      const character = { name: 'Тест', health: 49.9 };
      expect(getHealthStatus(character)).toBe('wounded');
    });
  });

  describe('critical status (health < 15)', () => {
    test('should return "critical" for health = 14', () => {
      const character = { name: 'Маг', health: 14 };
      expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" for health = 10', () => {
      const character = { name: 'Воин', health: 10 };
      expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" for health = 0', () => {
      const character = { name: 'Лучник', health: 0 };
      expect(getHealthStatus(character)).toBe('critical');
    });

    test('should return "critical" for health = -1', () => {
      const character = { name: 'Мертвец', health: -1 };
      expect(getHealthStatus(character)).toBe('critical');
    });
  });
});