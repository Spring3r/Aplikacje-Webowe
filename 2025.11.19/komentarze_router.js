import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const komrouter=express.Router();
komrouter.get('/', async(req, res) => {
    const komentarze=await prisma.komentarz.findMany({
        include: {
            kategoria: true
        }
    });
    res.json(komentarze);
})
komrouter.get('/:id', async(req, res) => {
    const id = Number(req.params.id);
    const komentarz=await prisma.komentarz.findUnique({
        where: {id},
        include: {kategoria: true}
    })
})
komrouter.post('/', async(req, res) => {
    const{Komentarz,Autor,kategoriaId}=req.body;
    const nKomentarz=await prisma.komentarz.create({
        data:{Komentarz,Autor,kategoriaId}
    });
    res.json(nKomentarz);
})
komrouter.put('/:id', async(req, res) => {
    const id = Number(req.params.id);
    const {Komentarz,Autor,kategoriaId}=req.body;
    const updated=await prisma.komentarz.update({
        where: {id},
        data: {Komentarz,Autor,kategoriaId}
    });
    res.json(updated);
})
komrouter.delete('/:id', async(req, res) => {
    await prisma.komentarz.delete({where:{id:Number(req.params.id)}});
    res.json({message:"Usunieto komentarz"});

})
export{komrouter as komentarz_router};