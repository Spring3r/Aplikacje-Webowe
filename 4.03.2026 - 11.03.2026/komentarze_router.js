import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
    const { wpisId } = req.query;
    const komentarze = await prisma.komentarz.findMany({
        where: wpisId ? { wpisId: Number(wpisId) } : {},
        include: { kategoria: true }
    });
    res.json(komentarze);
});

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const komentarz = await prisma.komentarz.findUnique({
        where: { id },
        include: { kategoria: true }
    });
    res.json(komentarz);
});

router.post('/', async (req, res) => {
    const { Komentarz, Autor, kategoriaId, wpisId } = req.body;
    const nowyKom = await prisma.komentarz.create({
        data: { Komentarz, Autor, kategoriaId, wpisId }
    });
    res.json(nowyKom);
});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { Komentarz, Autor, kategoriaId, wpisId } = req.body;
    const updated = await prisma.komentarz.update({
        where: { id },
        data: { Komentarz, Autor, kategoriaId, wpisId }
    });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await prisma.komentarz.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: "Usunieto komentarz" });
});

export { router as komentarz_router };