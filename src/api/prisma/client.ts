import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: dev ? ['error', 'warn'] : ['error'],
	});

if (!dev) globalForPrisma.prisma = prisma;
