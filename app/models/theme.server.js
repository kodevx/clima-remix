
import { prisma } from '~/utils/db.server';

export const getTheme = async () => {
    return await prisma.theme.findMany();
}

export const setTheme = async (id, theme) => {
    return await prisma.theme.update({
        where: { id },
        data: theme
    });
}
