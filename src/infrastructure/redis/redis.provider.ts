import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'redis',
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
    });
  }

  set(key: string, value: string, seconds: number = 120): Promise<string> {
    return this.client.set(key, value, 'EX', seconds);
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  incr(key: string): Promise<number> {
    return this.client.incr(key);
  }

  keys(pattern: string): Promise<string[]> {
    return this.client.keys(pattern);
  }

  eval(script: string, keys: string[], args: string[]): Promise<any> {
    return this.client.eval(script, keys.length, ...keys, ...args);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }
}
