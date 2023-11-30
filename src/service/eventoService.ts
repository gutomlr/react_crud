import Evento from '../core/Evento';
let eventosList: Evento[] = [
    new Evento(1, "UPF em Dança",
        "2023-11-27",
        "Evento de dança",
        "PREVISTO",
    ),
    new Evento(2, "UPF na feitech",
        "2023-11-27",
        "Evento de tecnologia",
        "PREVISTO",
    )
]
let proximoId = eventosList.length + 1;

export const fetchEventos = async (): Promise<Evento[]> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return eventosList;
    } catch (error) {
        throw new Error('Erro ao buscar eventos');
    }
};

export const cadastrarEvento = async (novoEvento: Evento): Promise<Evento> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        novoEvento.id = proximoId++;
        eventosList.push(novoEvento);
        return novoEvento;
    } catch (error) {
        console.error("Erro ao cadastrar evento:", error);
        throw error;
    }
};

export const atualizarEvento = async (eventoAtualizado: Evento): Promise<Evento> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = eventosList.findIndex((evento) => evento.id === eventoAtualizado.id);
        if (index !== -1) {
            eventosList[index] = eventoAtualizado;
            return eventoAtualizado;
        } else {
            throw new Error('Evento não encontrado');
        }
    } catch (error) {
        console.error("Erro ao atualizar evento:", error);
        throw error;
    }
};

export const excluirEvento = async (id: number): Promise<void> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        eventosList = eventosList.filter((evento) => evento.id !== id);
    } catch (error) {
        console.error("Erro ao excluir evento:", error);
        throw error;
    }
};