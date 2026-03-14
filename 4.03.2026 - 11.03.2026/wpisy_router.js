import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const wrouter=express.Router();
wrouter.get('/', async (req, res) => {
    const wpisy=await prisma.wpis.findMany({
        include:{kategoria:true}
    });
    res.json(wpisy);
})
wrouter.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const wpis= await prisma.wpis.findUnique({
        where:{id},
        include:{kategoria:true}
    })
    res.json(wpis);
})
wrouter.post('/', async (req, res) => {
    const {Wpis, Autor, kategoriaId} = req.body;
    const nWpis = await prisma.wpis.create({
        data: {Wpis, Autor, kategoriaId}
    })
    res.json(nWpis);
})
wrouter.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const {Wpis, Autor, kategoriaId} = req.body;
    const updated=await prisma.wpis.update({
        where:{id},
        data: {Wpis, Autor, kategoriaId}
        })
    res.json(updated);
})
wrouter.delete('/:id', async (req, res) => {
    await prisma.wpis.delete({where:{id:Number(req.params.id)}});
    res.json({message:"Usunieto wpis"});
})
export {wrouter as wpis_router};