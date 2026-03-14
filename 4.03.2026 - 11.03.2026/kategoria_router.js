import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const krouter = express.Router();

krouter.get('/', async (req, res) => {
    const kategorie = await prisma.kategoria.findMany({
        include: { wpisy: true, komentarze: true }
    });
    res.json(kategorie);
});

krouter.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "Nieprawidłowe id" });
    }

    const kategoria = await prisma.kategoria.findUnique({
        where: { id },
        include: { wpisy: true, komentarze: true }
    });

    if (!kategoria) {
        return res.status(404).json({ message: "Kategoria nie znaleziona" });
    }

    res.json(kategoria);
});




krouter.post('/', async (req, res) => {
    const { Kategoria, Autor } = req.body;
    const nKategoria = await prisma.kategoria.create({
        data: { Kategoria, Autor }
    });
    res.json(nKategoria);
});

krouter.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { Kategoria, Autor } = req.body;
    const updated = await prisma.kategoria.update({
        where: { id },
        data: { Kategoria, Autor }
    });
    res.json(updated);
});

krouter.delete('/:id', async (req, res) => {
    await prisma.kategoria.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: "Usunięto kategorię" });
});

export { krouter as kategoria_router };